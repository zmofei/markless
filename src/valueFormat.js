import styles from './modeStyle.js';

var inlineFormat = {
    'strong': '\\*\\*(.+?.)\\*\\*',
    'code': '\\`(.+?)\\`',
    'dispatch': function (val) {
        for (var i in this) {
            if (i == 'dispatch') continue;
            var reg = new RegExp(this[i], 'g');
            var style = styles(i) ? ' style="' + styles(i) + '"' : '';
            val = val.replace(reg, '<' + i + style + '>$1</' + i + '>');
        }
        return val;
    }
}

var valueFormat = {
    'ul': function (val) {
        return val.replace(/^\*(\s)*/, '<ul><li>').replace(/(\s)*\n(\s)*(\*){0,1}/g, '</li><li>').replace(/$/, '</li></ul>')
    },
    'ol': function (val) {
        return val.replace(/^1\.(\s)*/, '<ol><li>').replace(/(\s)*\n(\s)*(\*){0,1}/g, '</li><li>').replace(/$/, '</li></ol>')
    },
    'default': function (val) {
        var self = this;
        var reg = new RegExp('^' + self.activeDom.dataset.symbol);
        val = val.replace(reg, '');
        val = val.replace(/\n/g, '<br>');
        val = val.replace(/\s/g, '&nbsp;');
        return val;
    },
    'dispatch': function (val, type) {
        // do main format
        var mainFormat = valueFormat[type] || valueFormat['default'];
        var mainResult = mainFormat.call(this, val);
        // do inline format
        var inlimeResult = inlineFormat.dispatch(mainResult);
        return inlimeResult;
    }
}

export default valueFormat.dispatch;
