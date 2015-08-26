var valueFormat = {
    ul: function (val) {
        return val.replace(/^\*(\s)*/, '<ul><li>').replace(/(\s)*\n(\s)*(\*){0,1}/g, '</li><li>').replace(/$/, '</li></ul>')
    },
    ol: function (val) {
        return val.replace(/^1\.(\s)*/, '<ol><li>').replace(/(\s)*\n(\s)*(\*){0,1}/g, '</li><li>').replace(/$/, '</li></ol>')
    },
    default: function (val) {
        var self = this;
        var reg = new RegExp('^' + self.activeDom.dataset.symbol);
        val = val.replace(reg, '');
        val = val.replace(/\n/g, '<br>');
        val = val.replace(/\s/g, '&nbsp;');
        return val;
    },
    dispatch: function (val, type) {
        var fn = valueFormat[type] || valueFormat['default'];
        return fn.call(this, val);
    }
}

export default valueFormat.dispatch;
