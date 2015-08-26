import cursor from './cursor.js';
import edit from './editDom.js';
import modelRec from './modeRecognition.js';
import styles from './modeStyle.js';
import keyEvent from './keyEvent.js';
import valueFormat from './valueFormat.js';

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
        // listen to key
        keyEvent.dispatch(e.keyCode, this, self);
        // get  model
        var val = this.value;
        var type = self.activeDom.dataset.type;
        var modelRst = modelRec.judege(val);
        if (modelRst) {
            if (modelRst.ret == 'h') {
                modelRst.ret += modelRst.hit[1].length;
            } else if (modelRst.ret == 'ul') {
                modelRst.hit[1] = '\\' + modelRst.hit[1];
            }
            type = modelRst.ret;
            self.activeDom.dataset.type = type;
            self.activeDom.dataset.line = modelRst.line;
            self.activeDom.dataset.symbol = modelRst.hit[1];
            // add Style
            var style = styles(type) + self.editBoxConf.baseStyle;
            self.activeDom.setAttribute('style', style);
            self.activeDom.setAttribute('class', 'showdom ' + type)
        }
        // format value
        val = valueFormat.call(self, val, type);
        // insert html
        self.activeDom.innerHTML = val;
        return false;
    })
};

Markless.prototype.focus = function () {
    var self = this;
    self.editBox.focus()
};


global.Markless = Markless;
