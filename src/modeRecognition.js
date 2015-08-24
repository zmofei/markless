/**
 * this is the recognition modul fo every kind of mark
 * @type {Object}
 */

var Mode = {
    /**
     * config
     * @param {Number} line   0:multi-line,other:line number
     */
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

export default Mode;
