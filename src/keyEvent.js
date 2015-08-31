import edit from './editDom.js';
import valueFormat from './valueFormat.js';
import dataBank from './data.js';

var keyEvent = {
    'editDom': null,
    'dispatch': function (e, editbox, markless) {
        if (e.type == 'keyup') {
            // keyup events
            if (e.keyCode === 13) {
                keyEvent.enter(editbox, markless);
            }
            // save the value
            var obj = {};
            var id = markless.activeDom.id;
            if (e.keyCode === 8) {
                id = this.editDom.id;
            }
            obj[id] = editbox.value;
            dataBank.set('markData', obj);
        } else if (e.type == 'keydown') {
            // keydown events
            if (e.keyCode === 8) {
                keyEvent.delete(editbox, markless);
            }
            // get the editdom , because when you press the delete button , the activeDom would change before your keyup
            // so we need catch the edit dom
            this.editDom = markless.activeDom;
        }
    },
    'enter': function (editbox, markless) {
        var pre = markless.activeDom.previousSibling;
        var line = markless.activeDom.dataset.line;
        var val = editbox.value;
        var singleLine = line != 0;
        var lineEnd = /\n\n$/.test(val);
        if (singleLine || lineEnd) {
            // format value // insert html
            val = valueFormat.call(markless, val.replace(/\n+$/, ''));
            markless.activeDom.innerHTML = val;
            //
            edit.insert.apply(markless);
            editbox.value = '';
        }
    },
    'delete': function (editbox, markless) {
        var val = editbox.value;
        if (val == '') {
            edit.remove.call(markless);
        }
    }
}

export default keyEvent;
