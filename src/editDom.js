import dataBank from './data.js';
import cursor from './cursor.js';

var edit = {
    domCount: 0,
    createDom: function () {
        var id = (this.domCount++).toString() + '_' + (+new Date()).toString(36);
        var showBox = document.createElement('div');
        showBox.setAttribute('class', 'showdom');
        showBox.setAttribute('id', id);
        showBox.style.minHeight = '18px';
        showBox.style.position = 'relative';
        showBox.dataset.line = 0;
        showBox.dataset.type = 'text';
        var html = document.createElement('div');
        html.setAttribute('class', 'html');
        showBox.appendChild(html);
        if (cursor.getCursor()) {
            showBox.appendChild(cursor.getCursor());
        }
        return showBox;
    },
    insert: function () {
        var newDom = edit.createDom();
        var referenceNode = this.activeDom;
        referenceNode.parentNode.insertBefore(newDom, referenceNode.nextSibling);
        this.activeDom = newDom;
        this.editBox.value = '';
    },
    remove: function () {
        var referenceNode = this.activeDom;
        var prever = referenceNode.previousElementSibling;
        if (prever) {
            // TODO delete data cash
            referenceNode.remove();
            this.activeDom = prever;

            // add the value to textarea
            var data = dataBank.get('markData');
            var id = prever.id;
            this.editBox.value = data[id] || '';
        }
    }
}

export default edit;
