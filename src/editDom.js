var edit = {
    createDom: function () {
        var showBox = document.createElement('div');
        showBox.setAttribute('class', 'showdom');
        showBox.dataset.type = 'text';
        return showBox;
    },
    insert: function () {
        var newDom = edit.createDom();
        var referenceNode = this.activeDom;
        referenceNode.parentNode.insertBefore(newDom, referenceNode.nextSibling);
        this.activeDom = newDom;
        this.editBox.value = '';
    }
}

module.exports = edit;
