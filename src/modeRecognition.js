var Mode = {
    judegeReg: {
        '^(#{1,6})[^#]+': 'h',
    },
    judege: function(val) {
        var reg = this.judegeReg;
        var ret = null;
        for (var i in reg) {
            var testReg = new RegExp(i);
            var hit = val.match(testReg);
            if (hit) {
                ret = {
                    hit: hit,
                    ret: reg[i]
                }
                break;
            }
        }
        return ret;
    }
}
module.exports = Mode;
