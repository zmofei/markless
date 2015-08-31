import cursor from './cursor.js';
import edit from './editDom.js';
import modelRec from './modeRecognition.js';
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
        keyEvent.dispatch(e, this, self);
        // set  mo
        var modelRst = modelRec.judege(this.value, self);
        // format value
        var val = valueFormat.call(self, this.value);
        // insert html
        self.activeDom.innerHTML = val;
        return false;
    });

    // key down for edlete
    self.editBox.addEventListener('keydown', function (e) {
        keyEvent.dispatch(e, this, self);
    })
};

Markless.prototype.focus = function () {
    var self = this;
    self.editBox.focus()
};


global.Markless = Markless;
