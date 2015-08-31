/**
 * this is the recognition modul fo every kind of mark
 * @type {Object}
 */

import styles from './modeStyle.js';

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
        '^(\\*)[^\\*]+': {
            name: 'ul',
            line: 0
        },
        '^(1\\.)[^\\d]+': {
            name: 'ol',
            line: 0
        },
    },
    judege: function (val, markless) {
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

        // deal with dom
        if (ret) {
            if (ret.ret == 'h') {
                ret.ret += ret.hit[1].length;
            } else if (ret.ret == 'ul') {
                ret.hit[1] = '\\' + ret.hit[1];
            }
            var type = ret.ret;
            markless.activeDom.dataset.type = type;
            markless.activeDom.dataset.line = ret.line;
            markless.activeDom.dataset.symbol = ret.hit[1];
            // add Style
            var style = styles(type) + markless.editBoxConf.baseStyle;
            markless.activeDom.setAttribute('style', style);
            markless.activeDom.setAttribute('class', 'showdom ' + type)
        } else {
            markless.activeDom.dataset.type = 'text';
            delete markless.activeDom.dataset.symbol;
            markless.activeDom.setAttribute('class', 'showdom');
            markless.activeDom.setAttribute('style', markless.editBoxConf.baseStyle);
        }
    }
}

export default Mode;
