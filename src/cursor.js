var cursor = {
    cursor: null,
    getActiveDom: function (e) {
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
    },
    addCursor: function () {
        var cursor = this.cursor = document.createElement('span');
        cursor.style.height = '24px';
        cursor.style.position = 'absolute';
        cursor.style.left = 0;
        cursor.style.top = 0;
        cursor.style.borderLeft = '1px solid #333';
        cursor.style.width = '0';
        // document.body.appendChild(cursor);
        var count = 0;
        setInterval(function () {
            count++;
            if (count % 2 === 0) {
                cursor.style.borderLeft = null
            } else {
                cursor.style.borderLeft = '1px solid #333';
            }
        }, 500)
    },
    setCursor: function (x, y) {
        this.cursor.style.left = parseInt(x) + 'px';
        this.cursor.style.top = parseInt(y) + 'px';
    },
    getCursor: function () {
        return this.cursor;
    }
}

export default cursor;
