var Mode = {
    judegeReg: {
        '^(#{1,6})[^#]+': {
            name: 'h',
            line: 1
        },
        '^(\>)[^\>]+': {
            name: 'blockquotes',
            line: 0
        },
    },
    judege: function (val) {
        var reg = this.judegeReg;
        var ret = null;
        for (var i in reg) {
            var testReg = new RegExp(i);
            var hit = val.match(testReg);
            if (hit) {
                ret = {
                    hit: hit,
                    ret: reg[i].name,
                    line: reg[i].line
                }
                break;
            }
        }
        return ret;
    }
}
module.exports = Mode;
