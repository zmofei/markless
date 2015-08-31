var edit = {
    createDom: function () {
        var showBox = document.createElement('div');
        showBox.setAttribute('class', 'showdom');
        showBox.dataset.line = 0;
        showBox.dataset.type = 'text';
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
            referenceNode.remove();
            this.activeDom = prever;
            // todo add the value to textarea
            this.editBox.value = '????';
        }
    }
}

export default edit;
