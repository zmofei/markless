var Data = {
    bank: {},
    set: function (name, val, overwrite) {
        this.bank[name] = this.bank[name] || {}
        var notArray = !(val instanceof Array);
        var isObj = typeof val == 'object'
        if (notArray && isObj) {
            for (var i in val) {
                this.bank[name][i] = val[i];
            }
        } else {
            this.bank[name] = val;
        }
        console.log('@@@', this.bank.markData);
    },
    delete: function (name) {
        delete this.bank[name];
    },
    get: function (name) {
        return this.bank[name];
    }
};

export default Data;
