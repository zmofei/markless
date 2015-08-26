import edit from './editDom.js';

var keyEvent = {
    'dispatch': function (keyCode, editbox, markless) {
        if (keyCode === 8) {
            keyEvent.delete(editbox, markless);
        }
        if (keyCode === 13) {
            keyEvent.enter(editbox, markless);
        }
    },
    'enter': function (editbox, markless) {
        var pre = markless.activeDom.previousSibling;
        var line = markless.activeDom.dataset.line;
        var val = editbox.value;
        var singleLine = line != 0;
        var lineEnd = /\n\n$/.test(val);
        if (singleLine || lineEnd) {
            edit.insert.apply(markless);
            editbox.value = '';
        }
    },
    'delete': function (editbox, markless) {
        var val = editbox.value;
        var reg = new RegExp('^' + markless.activeDom.dataset.symbol + '$');
        if (reg.test(val)) {
            val = markless.activeDom.dataset.symbol.replace('\\', '');
            editbox.value = val;
            markless.activeDom.dataset.type = 'text';
            delete markless.activeDom.dataset.symbol;
            markless.activeDom.setAttribute('class', 'showdom');
            markless.activeDom.setAttribute('style', markless.editBoxConf.baseStyle);
        }
    }
}

export default keyEvent;
