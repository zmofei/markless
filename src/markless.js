import cursor from './cursor.js';
import edit from './editDom.js';
import modelRec from './modeRecognition.js';
import styles from './modeStyle.js';

function Markless(id, opt) {
    this.editBoxConf = {
        baseStyle: '; outline : none; '
    }
    this.activeDom = null;
    this.dom = document.getElementById(id);
    this.initDome();
    this.initEvent();
}

Markless.prototype.initDome = function () {
    var self = this;

    self.dom.style.overflow = 'auto';
    // show dom
    self.dom.appendChild(edit.createDom());

    // textarea
    var editBox = self.editBox = document.createElement('textarea');
    editBox.setAttribute('style', 'position:absolute; bottom:10px; right:10px;');
    self.dom.appendChild(editBox);
}

Markless.prototype.initEvent = function () {
    var self = this;

    // click
    self.dom.addEventListener('click', function (e) {
        self.activeDom = cursor.getActiveDom.apply(self, arguments);
        self.focus();
    });

    self.editBox.addEventListener('keyup', function (e) {
        // console.log('???1', e.keyCode)
        var selfBox = this;

        var val = selfBox.value;

        console.log('???+', val)

        // parse enter
        if (e.keyCode === 13) {
            var pre = self.activeDom.previousSibling;
            // conside about the mutil-line,singleline,and empit line
            var line = self.activeDom.dataset.line;
            // if (line == 0) return false;
            // console.log('@@@@@@', self.activeDom.dataset.line)
            var selfNull = self.activeDom.innerHTML.replace(/\&nbsp\;/g, '') == '';
            var preNull = self.activeDom.previousSibling ? (self.activeDom.previousSibling.innerHTML.replace(/\&nbsp\;/g, '') == '') : false;


            var singleLine = line != 0;
            var lineEnd = /\n\n$/.test(val);

            console.log('@@@2', lineEnd);
            if (singleLine || lineEnd) { // && !(selfNull && preNull && mutilLine)
                edit.insert.apply(self);
                selfBox.value = '';
                return false;
            }

        }

        val = val.replace(/\n/g, '<br>');
        val = val.replace(/\s/g, '&nbsp;');

        // var modelRec = require('./modeRecognition.js');
        if (!self.activeDom.dataset.type || self.activeDom.dataset.type == 'text') {
            // get  model
            var modelRst = modelRec.judege(val);
            if (modelRst) {
                if (modelRst.ret == 'h') {
                    modelRst.ret += modelRst.hit[1].length;
                }
                val = val.replace(modelRst.hit[1], '');
                self.activeDom.dataset.type = modelRst.ret;
                self.activeDom.dataset.line = modelRst.line;
                self.activeDom.dataset.symbol = modelRst.hit[1];
            }

            var modelRecStr = modelRst ? modelRst.ret : '';
            console.log('modelRst', modelRst);
            // get style by model
            // var styles = require('./modeStyle.js');
            var style = styles(modelRecStr) + self.editBoxConf.baseStyle;

            // add Style
            self.activeDom.setAttribute('style', style);
            self.activeDom.setAttribute('class', 'showdom ' + modelRecStr)
        } else {
            var reg = new RegExp('^' + self.activeDom.dataset.symbol);
            if (reg.test(val)) {
                val = val.replace(reg, '');
            } else {
                val = self.activeDom.dataset.symbol;
                selfBox.value = val;
                self.activeDom.dataset.type = 'text';
                delete self.activeDom.dataset.symbol;
                self.activeDom.setAttribute('class', 'showdom');
                self.activeDom.setAttribute('style', self.editBoxConf.baseStyle);
            }
        }
        self.activeDom.innerHTML = val;
        return false;
    })
};

Markless.prototype.focus = function () {
    var self = this;
    self.editBox.focus()
};


global.Markless = Markless;
