var cursor = require('./cursor.js');
var edit = require('./editDom.js');

function Markless(id, opt) {
    this.editBoxConf = {
        baseStyle: '; outline : none; '
    }
    this.activeDom = null;
    this.dom = document.getElementById(id);
    this.initDome();
    this.initEvent();
}

Markless.prototype.initDome = function() {
    var self = this;

    self.dom.style.overflow = 'auto';
    // show dom
    self.dom.appendChild(edit.createDom());

    // textarea
    var editBox = self.editBox = document.createElement('textarea');
    editBox.setAttribute('style', 'position:absolute; bottom:10px; right:10px;');
    self.dom.appendChild(editBox);
}

Markless.prototype.initEvent = function() {
    var self = this;

    // click
    self.dom.addEventListener('click', function(e) {
        self.activeDom = cursor.getActiveDom.apply(self, arguments);
        self.focus();
    });

    self.editBox.addEventListener('keyup', function(e) {
        console.log('???1', e.keyCode)
        var selfBox = this;

        if (e.keyCode === 13) {
            var pre = self.activeDom.previousSibling;

            var selfNull = self.activeDom.innerHTML.replace(/\&nbsp\;/g, '') == '';
            var preNull = self.activeDom.previousSibling ? (self.activeDom.previousSibling.innerHTML.replace(/\&nbsp\;/g, '') == '') : false;
            if (!(selfNull && preNull)) {
                edit.insert.apply(self);
            } else {
                selfBox.value = '';
            }
            return false;
        }


        var val = selfBox.value;
        val = val.replace(/\n/g, '<br>');
        val = val.replace(/\s/g, '&nbsp;');
        console.log(val)
        self.activeDom.innerHTML = val;

        var modelRec = require('./modeRecognition.js');

        // get  model
        var modelRst = modelRec.judege(val);
        if (modelRst && modelRst.ret == 'h') {
            modelRst.ret += modelRst.hit[1].length;
        }
        modelRec = modelRst ? modelRst.ret : '';

        // get style by model
        var styles = require('./modeStyle.js');
        var style = styles(modelRec) + self.editBoxConf.baseStyle;

        // add Style
        self.activeDom.setAttribute('style', style);
        return false;
    })

};

Markless.prototype.focus = function() {
    var self = this;
    self.editBox.focus()
};

global.Markless = Markless;
