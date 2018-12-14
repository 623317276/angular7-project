/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
/** @type {?} */
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
/** @type {?} */
var SIZING_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
];
/**
 * @record
 */
export function NodeType() { }
function NodeType_tsickle_Closure_declarations() {
    /** @type {?} */
    NodeType.prototype.sizingStyle;
    /** @type {?} */
    NodeType.prototype.paddingSize;
    /** @type {?} */
    NodeType.prototype.borderSize;
    /** @type {?} */
    NodeType.prototype.boxSizing;
}
/**
 * @record
 */
export function NodeProperty() { }
function NodeProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    NodeProperty.prototype.height;
    /** @type {?} */
    NodeProperty.prototype.minHeight;
    /** @type {?} */
    NodeProperty.prototype.maxHeight;
    /** @type {?} */
    NodeProperty.prototype.overflowY;
}
/** @type {?} */
var computedStyleCache = {};
/** @type {?} */
var hiddenTextarea;
/**
 * @param {?} node
 * @param {?=} useCache
 * @return {?}
 */
function calculateNodeStyling(node, useCache) {
    if (useCache === void 0) { useCache = false; }
    /** @type {?} */
    var nodeRef = /** @type {?} */ ((node.getAttribute('id') ||
        node.getAttribute('data-reactid') ||
        node.getAttribute('name')));
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    /** @type {?} */
    var style = window.getComputedStyle(node);
    /** @type {?} */
    var boxSizing = (style.getPropertyValue('box-sizing') ||
        style.getPropertyValue('-moz-box-sizing') ||
        style.getPropertyValue('-webkit-box-sizing'));
    /** @type {?} */
    var paddingSize = (parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top')));
    /** @type {?} */
    var borderSize = (parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width')));
    /** @type {?} */
    var sizingStyle = SIZING_STYLE
        .map(function (name) { return name + ":" + style.getPropertyValue(name); })
        .join(';');
    /** @type {?} */
    var nodeInfo = {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing
    };
    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
}
/**
 * @param {?} uiTextNode
 * @param {?=} useCache
 * @param {?=} minRows
 * @param {?=} maxRows
 * @return {?}
 */
export default function calculateNodeHeight(uiTextNode, useCache, minRows, maxRows) {
    if (useCache === void 0) { useCache = false; }
    if (minRows === void 0) { minRows = null; }
    if (maxRows === void 0) { maxRows = null; }
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }
    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', /** @type {?} */ (uiTextNode.getAttribute('wrap')));
    }
    else {
        hiddenTextarea.removeAttribute('wrap');
    }
    var _a = calculateNodeStyling(uiTextNode, useCache), paddingSize = _a.paddingSize, borderSize = _a.borderSize, boxSizing = _a.boxSizing, sizingStyle = _a.sizingStyle;
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content
    hiddenTextarea.setAttribute('style', sizingStyle + ";" + HIDDEN_TEXTAREA_STYLE);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    /** @type {?} */
    var minHeight = Number.MIN_SAFE_INTEGER;
    /** @type {?} */
    var maxHeight = Number.MAX_SAFE_INTEGER;
    /** @type {?} */
    var height = hiddenTextarea.scrollHeight;
    /** @type {?} */
    var overflowY;
    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height = height + borderSize;
    }
    else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height = height - paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = '';
        /** @type {?} */
        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    // Remove scroll bar flash when autosize without maxRows
    if (!maxRows) {
        overflowY = 'hidden';
    }
    return { height: height, minHeight: minHeight, maxHeight: maxHeight, overflowY: overflowY };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLW5vZGUtaGVpZ2h0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC9jYWxjdWxhdGUtbm9kZS1oZWlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsSUFBTSxxQkFBcUIsR0FBRyxnUUFVN0IsQ0FBQzs7QUFFRixJQUFNLFlBQVksR0FBRztJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7Q0FDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkYsSUFBTSxrQkFBa0IsR0FBZ0MsRUFBRSxDQUFDOztBQUMzRCxJQUFJLGNBQWMsQ0FBc0I7Ozs7OztBQUV4Qyw4QkFBOEIsSUFBaUIsRUFBRSxRQUF5QjtJQUF6Qix5QkFBQSxFQUFBLGdCQUF5Qjs7SUFDeEUsSUFBTSxPQUFPLHFCQUFHLENBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDaEIsRUFBQztJQUVaLElBQUksUUFBUSxJQUFJLGtCQUFrQixDQUFFLE9BQU8sQ0FBRSxFQUFFO1FBQzdDLE9BQU8sa0JBQWtCLENBQUUsT0FBTyxDQUFFLENBQUM7S0FDdEM7O0lBRUQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDOztJQUU1QyxJQUFNLFNBQVMsR0FBRyxDQUNoQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3BDLEtBQUssQ0FB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LENBQUM7UUFDbEUsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3BCLFNBQVMsR0FBRyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQ3RDLElBQUksU0FBUyxLQUFLLFlBQVksRUFBRTtnQkFDOUIsU0FBUyxHQUFHLFNBQVMsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDO2FBQ2xEO1lBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3BCLFNBQVMsR0FBRyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQ3RDLElBQUksU0FBUyxLQUFLLFlBQVksRUFBRTtnQkFDOUIsU0FBUyxHQUFHLFNBQVMsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDO2FBQ2xEO1lBQ0QsU0FBUyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQy9DLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN0QztLQUNGOztJQUVELElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixTQUFTLEdBQUcsUUFBUSxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFLE1BQU0sUUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUM7Q0FDcEQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL2FuZHJleXBvcHAvcmVhY3QtdGV4dGFyZWEtYXV0b3NpemUvXG5cbi8qKlxuICogY2FsY3VsYXRlTm9kZUhlaWdodCh1aVRleHROb2RlLCB1c2VDYWNoZSA9IGZhbHNlKVxuICovXG5cbmNvbnN0IEhJRERFTl9URVhUQVJFQV9TVFlMRSA9IGBcbiAgbWluLWhlaWdodDowICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6bm9uZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6MCAhaW1wb3J0YW50O1xuICB2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudDtcbiAgcG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtcbiAgei1pbmRleDotMTAwMCAhaW1wb3J0YW50O1xuICB0b3A6MCAhaW1wb3J0YW50O1xuICByaWdodDowICFpbXBvcnRhbnRcbmA7XG5cbmNvbnN0IFNJWklOR19TVFlMRSA9IFtcbiAgJ2xldHRlci1zcGFjaW5nJyxcbiAgJ2xpbmUtaGVpZ2h0JyxcbiAgJ3BhZGRpbmctdG9wJyxcbiAgJ3BhZGRpbmctYm90dG9tJyxcbiAgJ2ZvbnQtZmFtaWx5JyxcbiAgJ2ZvbnQtd2VpZ2h0JyxcbiAgJ2ZvbnQtc2l6ZScsXG4gICd0ZXh0LXJlbmRlcmluZycsXG4gICd0ZXh0LXRyYW5zZm9ybScsXG4gICd3aWR0aCcsXG4gICd0ZXh0LWluZGVudCcsXG4gICdwYWRkaW5nLWxlZnQnLFxuICAncGFkZGluZy1yaWdodCcsXG4gICdib3JkZXItd2lkdGgnLFxuICAnYm94LXNpemluZydcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZVR5cGUge1xuICBzaXppbmdTdHlsZTogc3RyaW5nO1xuICBwYWRkaW5nU2l6ZTogbnVtYmVyO1xuICBib3JkZXJTaXplOiBudW1iZXI7XG4gIGJveFNpemluZzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVQcm9wZXJ0eSB7XG4gIGhlaWdodDogbnVtYmVyO1xuICBtaW5IZWlnaHQ6IG51bWJlcjtcbiAgbWF4SGVpZ2h0OiBudW1iZXI7XG4gIG92ZXJmbG93WTogc3RyaW5nO1xufVxuXG5jb25zdCBjb21wdXRlZFN0eWxlQ2FjaGU6IHsgW2tleTogc3RyaW5nXTogTm9kZVR5cGUgfSA9IHt9O1xubGV0IGhpZGRlblRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb2RlU3R5bGluZyhub2RlOiBIVE1MRWxlbWVudCwgdXNlQ2FjaGU6IGJvb2xlYW4gPSBmYWxzZSk6IE5vZGVUeXBlIHtcbiAgY29uc3Qgbm9kZVJlZiA9IChcbiAgICBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSB8fFxuICAgIG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXJlYWN0aWQnKSB8fFxuICAgIG5vZGUuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgKSBhcyBzdHJpbmc7XG5cbiAgaWYgKHVzZUNhY2hlICYmIGNvbXB1dGVkU3R5bGVDYWNoZVsgbm9kZVJlZiBdKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVkU3R5bGVDYWNoZVsgbm9kZVJlZiBdO1xuICB9XG5cbiAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICBjb25zdCBib3hTaXppbmcgPSAoXG4gICAgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpIHx8XG4gICAgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLW1vei1ib3gtc2l6aW5nJykgfHxcbiAgICBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctd2Via2l0LWJveC1zaXppbmcnKVxuICApO1xuXG4gIGNvbnN0IHBhZGRpbmdTaXplID0gKFxuICAgIHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1ib3R0b20nKSkgK1xuICAgIHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSlcbiAgKTtcblxuICBjb25zdCBib3JkZXJTaXplID0gKFxuICAgIHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLWJvdHRvbS13aWR0aCcpKSArXG4gICAgcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItdG9wLXdpZHRoJykpXG4gICk7XG5cbiAgY29uc3Qgc2l6aW5nU3R5bGUgPSBTSVpJTkdfU1RZTEVcbiAgLm1hcChuYW1lID0+IGAke25hbWV9OiR7c3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKX1gKVxuICAuam9pbignOycpO1xuXG4gIGNvbnN0IG5vZGVJbmZvOiBOb2RlVHlwZSA9IHtcbiAgICBzaXppbmdTdHlsZSxcbiAgICBwYWRkaW5nU2l6ZSxcbiAgICBib3JkZXJTaXplLFxuICAgIGJveFNpemluZ1xuICB9O1xuXG4gIGlmICh1c2VDYWNoZSAmJiBub2RlUmVmKSB7XG4gICAgY29tcHV0ZWRTdHlsZUNhY2hlWyBub2RlUmVmIF0gPSBub2RlSW5mbztcbiAgfVxuXG4gIHJldHVybiBub2RlSW5mbztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY3VsYXRlTm9kZUhlaWdodCh1aVRleHROb2RlOiBIVE1MVGV4dEFyZWFFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VDYWNoZTogYm9vbGVhbiAgICAgID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblJvd3M6IG51bWJlciB8IG51bGwgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzOiBudW1iZXIgfCBudWxsID0gbnVsbCk6IE5vZGVQcm9wZXJ0eSB7XG4gIGlmICghaGlkZGVuVGV4dGFyZWEpIHtcbiAgICBoaWRkZW5UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoaWRkZW5UZXh0YXJlYSk7XG4gIH1cblxuICAvLyBGaXggd3JhcD1cIm9mZlwiIGlzc3VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzY1NzdcbiAgaWYgKHVpVGV4dE5vZGUuZ2V0QXR0cmlidXRlKCd3cmFwJykpIHtcbiAgICBoaWRkZW5UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3dyYXAnLCB1aVRleHROb2RlLmdldEF0dHJpYnV0ZSgnd3JhcCcpIGFzIHN0cmluZyk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZGVuVGV4dGFyZWEucmVtb3ZlQXR0cmlidXRlKCd3cmFwJyk7XG4gIH1cblxuICAvLyBDb3B5IGFsbCBDU1MgcHJvcGVydGllcyB0aGF0IGhhdmUgYW4gaW1wYWN0IG9uIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQgaW5cbiAgLy8gdGhlIHRleHRib3hcbiAgY29uc3Qge1xuICAgICAgICAgIHBhZGRpbmdTaXplLCBib3JkZXJTaXplLFxuICAgICAgICAgIGJveFNpemluZywgc2l6aW5nU3R5bGVcbiAgICAgICAgfSA9IGNhbGN1bGF0ZU5vZGVTdHlsaW5nKHVpVGV4dE5vZGUsIHVzZUNhY2hlKTtcblxuICAvLyBOZWVkIHRvIGhhdmUgdGhlIG92ZXJmbG93IGF0dHJpYnV0ZSB0byBoaWRlIHRoZSBzY3JvbGxiYXIgb3RoZXJ3aXNlXG4gIC8vIHRleHQtbGluZXMgd2lsbCBub3QgY2FsY3VsYXRlZCBwcm9wZXJseSBhcyB0aGUgc2hhZG93IHdpbGwgdGVjaG5pY2FsbHkgYmVcbiAgLy8gbmFycm93ZXIgZm9yIGNvbnRlbnRcbiAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAke3NpemluZ1N0eWxlfTske0hJRERFTl9URVhUQVJFQV9TVFlMRX1gKTtcbiAgaGlkZGVuVGV4dGFyZWEudmFsdWUgPSB1aVRleHROb2RlLnZhbHVlIHx8IHVpVGV4dE5vZGUucGxhY2Vob2xkZXIgfHwgJyc7XG5cbiAgbGV0IG1pbkhlaWdodCA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xuICBsZXQgbWF4SGVpZ2h0ID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gIGxldCBoZWlnaHQgPSBoaWRkZW5UZXh0YXJlYS5zY3JvbGxIZWlnaHQ7XG4gIGxldCBvdmVyZmxvd1k6IHN0cmluZztcblxuICBpZiAoYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAvLyBib3JkZXItYm94OiBhZGQgYm9yZGVyLCBzaW5jZSBoZWlnaHQgPSBjb250ZW50ICsgcGFkZGluZyArIGJvcmRlclxuICAgIGhlaWdodCA9IGhlaWdodCArIGJvcmRlclNpemU7XG4gIH0gZWxzZSBpZiAoYm94U2l6aW5nID09PSAnY29udGVudC1ib3gnKSB7XG4gICAgLy8gcmVtb3ZlIHBhZGRpbmcsIHNpbmNlIGhlaWdodCA9IGNvbnRlbnRcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBwYWRkaW5nU2l6ZTtcbiAgfVxuXG4gIGlmIChtaW5Sb3dzICE9PSBudWxsIHx8IG1heFJvd3MgIT09IG51bGwpIHtcbiAgICAvLyBtZWFzdXJlIGhlaWdodCBvZiBhIHRleHRhcmVhIHdpdGggYSBzaW5nbGUgcm93XG4gICAgaGlkZGVuVGV4dGFyZWEudmFsdWUgPSAnJztcbiAgICBjb25zdCBzaW5nbGVSb3dIZWlnaHQgPSBoaWRkZW5UZXh0YXJlYS5zY3JvbGxIZWlnaHQgLSBwYWRkaW5nU2l6ZTtcbiAgICBpZiAobWluUm93cyAhPT0gbnVsbCkge1xuICAgICAgbWluSGVpZ2h0ID0gc2luZ2xlUm93SGVpZ2h0ICogbWluUm93cztcbiAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICBtaW5IZWlnaHQgPSBtaW5IZWlnaHQgKyBwYWRkaW5nU2l6ZSArIGJvcmRlclNpemU7XG4gICAgICB9XG4gICAgICBoZWlnaHQgPSBNYXRoLm1heChtaW5IZWlnaHQsIGhlaWdodCk7XG4gICAgfVxuICAgIGlmIChtYXhSb3dzICE9PSBudWxsKSB7XG4gICAgICBtYXhIZWlnaHQgPSBzaW5nbGVSb3dIZWlnaHQgKiBtYXhSb3dzO1xuICAgICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIHBhZGRpbmdTaXplICsgYm9yZGVyU2l6ZTtcbiAgICAgIH1cbiAgICAgIG92ZXJmbG93WSA9IGhlaWdodCA+IG1heEhlaWdodCA/ICcnIDogJ2hpZGRlbic7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihtYXhIZWlnaHQsIGhlaWdodCk7XG4gICAgfVxuICB9XG4gIC8vIFJlbW92ZSBzY3JvbGwgYmFyIGZsYXNoIHdoZW4gYXV0b3NpemUgd2l0aG91dCBtYXhSb3dzXG4gIGlmICghbWF4Um93cykge1xuICAgIG92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICB9XG4gIHJldHVybiB7IGhlaWdodCwgbWluSGVpZ2h0LCBtYXhIZWlnaHQsIG92ZXJmbG93WSB9O1xufVxuIl19