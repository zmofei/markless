var cursor = {
    getActiveDom: function(e) {
        var self = this;
        var left = e.offsetX;
        var top = e.offsetY;

        var shodom = document.querySelectorAll('.showdom');
        var hitDom = null;
        for (var i in shodom) {
            if (shodom[i] instanceof HTMLElement !== true) continue;
            hitDom = shodom[i];
            var bottom = shodom[i].offsetTop + shodom[i].offsetHeight;
            if (top <= bottom && top >= shodom[i].offsetTop) {
                break;
            }
        };
        return hitDom;
    }
}

module.exports = cursor;
