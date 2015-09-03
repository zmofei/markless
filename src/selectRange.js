var getSel, setSel;

if (window.getSelection && document.createRange) {
    getSel = function (containerEl) {
        var range = window.getSelection().getRangeAt(0);
        var preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(containerEl);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        var start = preSelectionRange.toString().length;

        return {
            start: start,
            end: start + range.toString().length
        }
    };

    setSel = function (containerEl, savedSel) {
        var charIndex = 0;
        var range = document.createRange();
        range.setStart(containerEl, 0);
        range.collapse(true);
        var nodeStack = [containerEl],
            node, foundStart = false,
            stop = false;

        while (!stop && (node = nodeStack.pop())) {
            if (node.nodeType == 3) {
                var nextCharIndex = charIndex + node.length;
                if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
                    range.setStart(node, savedSel.start - charIndex);
                    foundStart = true;
                }
                if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
                    range.setEnd(node, savedSel.end - charIndex);
                    stop = true;
                }
                charIndex = nextCharIndex;
            } else {
                var i = node.childNodes.length;
                while (i--) {
                    nodeStack.push(node.childNodes[i]);
                }
            }
        }

        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
} else if (document.selection && document.body.createTextRange) {
    getSel = function (containerEl) {
        var selectedTextRange = document.selection.createRange();
        var preSelectionTextRange = document.body.createTextRange();
        preSelectionTextRange.moveToElementText(containerEl);
        preSelectionTextRange.setEndPoint("EndToStart", selectedTextRange);
        var start = preSelectionTextRange.text.length;

        return {
            start: start,
            end: start + selectedTextRange.text.length
        }
    };

    setSel = function (containerEl, savedSel) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(containerEl);
        textRange.collapse(true);
        textRange.moveEnd("character", savedSel.end);
        textRange.moveStart("character", savedSel.start);
        textRange.select();
    };
}


function getSelectionTopLeft() {
    var x = 0,
        y = 0;
    // Use standards-based method only if Range has getBoundingClientRect
    if (window.getSelection && document.createRange && typeof document.createRange().getBoundingClientRect != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount > 0) {
            var rect = sel.getRangeAt(0).getBoundingClientRect();
            x = rect.left;
            y = rect.top;
        }
    } else if (document.selection && document.selection.type != "Control") {
        // All versions of IE
        var textRange = document.selection.createRange();
        x = textRange.boundingLeft;
        y = textRange.boundingTop;
    }
    return {
        x: x,
        y: y
    };
}

var range = {
    get: getSel,
    set: setSel,
    getPos: getSelectionTopLeft
}

export default range;
