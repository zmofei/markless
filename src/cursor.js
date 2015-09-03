import range from './selectRange.js';

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
        cursor.style.height = '1em';
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
        if (x || y) {
            this.cursor.style.left = parseInt(x) + 'px';
            this.cursor.style.top = parseInt(y) + 'px';
        }
    },
    getCursor: function () {
        return this.cursor;
    },
    autoCursor: function (textarea, markless) {
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var dom = markless.activeDom.querySelector('.html');
        var oldHTML = dom.innerHTML;
        dom.innerHTML = oldHTML + '&nbsp;';
        // todo Fix the start with out the tag like **x** `x` \n nbsp;
        range.set(dom, {
            start: start,
            end: end + 1
        });

        var pos = range.getPos();
        textarea.setSelectionRange(start, end);

        var element = dom;
        var domTop = 0;
        var domLeft = 0;
        do {
            domTop += element.offsetTop || 0;
            domLeft += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        var left = pos.x ? pos.x - domLeft : 0;
        var top = pos.y ? pos.y - domTop : 0;
        this.cursor.style.left = left + 'px';
        this.cursor.style.top = top + 'px';
        dom.innerHTML = oldHTML;
    }
}

export default cursor;
