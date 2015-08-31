import edit from './editDom.js';
import valueFormat from './valueFormat.js';

var keyEvent = {
    'dispatch': function (e, editbox, markless) {
        if (e.type == 'keyup') {
            // keyup events
            if (e.keyCode === 13) {
                keyEvent.enter(editbox, markless);
            }
        } else if (e.type == 'keydown') {
            // keydown events
            if (e.keyCode === 8) {
                keyEvent.delete(editbox, markless);
            }
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
        console.log('delete', val, val == '');
    }
}

export default keyEvent;
