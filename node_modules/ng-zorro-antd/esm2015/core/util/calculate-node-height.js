/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
/** @type {?} */
const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;
/** @type {?} */
const SIZING_STYLE = [
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
const computedStyleCache = {};
/** @type {?} */
let hiddenTextarea;
/**
 * @param {?} node
 * @param {?=} useCache
 * @return {?}
 */
function calculateNodeStyling(node, useCache = false) {
    /** @type {?} */
    const nodeRef = /** @type {?} */ ((node.getAttribute('id') ||
        node.getAttribute('data-reactid') ||
        node.getAttribute('name')));
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    /** @type {?} */
    const style = window.getComputedStyle(node);
    /** @type {?} */
    const boxSizing = (style.getPropertyValue('box-sizing') ||
        style.getPropertyValue('-moz-box-sizing') ||
        style.getPropertyValue('-webkit-box-sizing'));
    /** @type {?} */
    const paddingSize = (parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top')));
    /** @type {?} */
    const borderSize = (parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width')));
    /** @type {?} */
    const sizingStyle = SIZING_STYLE
        .map(name => `${name}:${style.getPropertyValue(name)}`)
        .join(';');
    /** @type {?} */
    const nodeInfo = {
        sizingStyle,
        paddingSize,
        borderSize,
        boxSizing
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
export default function calculateNodeHeight(uiTextNode, useCache = false, minRows = null, maxRows = null) {
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
    const { paddingSize, borderSize, boxSizing, sizingStyle } = calculateNodeStyling(uiTextNode, useCache);
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content
    hiddenTextarea.setAttribute('style', `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    /** @type {?} */
    let minHeight = Number.MIN_SAFE_INTEGER;
    /** @type {?} */
    let maxHeight = Number.MAX_SAFE_INTEGER;
    /** @type {?} */
    let height = hiddenTextarea.scrollHeight;
    /** @type {?} */
    let overflowY;
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
        const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
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
    return { height, minHeight, maxHeight, overflowY };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLW5vZGUtaGVpZ2h0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC9jYWxjdWxhdGUtbm9kZS1oZWlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsTUFBTSxxQkFBcUIsR0FBRzs7Ozs7Ozs7OztDQVU3QixDQUFDOztBQUVGLE1BQU0sWUFBWSxHQUFHO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtDQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCRixNQUFNLGtCQUFrQixHQUFnQyxFQUFFLENBQUM7O0FBQzNELElBQUksY0FBYyxDQUFzQjs7Ozs7O0FBRXhDLDhCQUE4QixJQUFpQixFQUFFLFdBQW9CLEtBQUs7O0lBQ3hFLE1BQU0sT0FBTyxxQkFBRyxDQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQ2hCLEVBQUM7SUFFWixJQUFJLFFBQVEsSUFBSSxrQkFBa0IsQ0FBRSxPQUFPLENBQUUsRUFBRTtRQUM3QyxPQUFPLGtCQUFrQixDQUFFLE9BQU8sQ0FBRSxDQUFDO0tBQ3RDOztJQUVELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFFNUMsTUFBTSxTQUFTLEdBQUcsQ0FDaEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztRQUNwQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7UUFDekMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQzdDLENBQUM7O0lBRUYsTUFBTSxXQUFXLEdBQUcsQ0FDbEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FDbEQsQ0FBQzs7SUFFRixNQUFNLFVBQVUsR0FBRyxDQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDekQsVUFBVSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQ3ZELENBQUM7O0lBRUYsTUFBTSxXQUFXLEdBQUcsWUFBWTtTQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBRVgsTUFBTSxRQUFRLEdBQWE7UUFDekIsV0FBVztRQUNYLFdBQVc7UUFDWCxVQUFVO1FBQ1YsU0FBUztLQUNWLENBQUM7SUFFRixJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7UUFDdkIsa0JBQWtCLENBQUUsT0FBTyxDQUFFLEdBQUcsUUFBUSxDQUFDO0tBQzFDO0lBRUQsT0FBTyxRQUFRLENBQUM7Q0FDakI7Ozs7Ozs7O0FBRUQsTUFBTSxDQUFDLE9BQU8sOEJBQThCLFVBQStCLEVBQy9CLFdBQXlCLEtBQUssRUFDOUIsVUFBeUIsSUFBSSxFQUM3QixVQUF5QixJQUFJO0lBQ3ZFLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDbkIsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDM0M7OztJQUlELElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNuQyxjQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sb0JBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQVcsRUFBQyxDQUFDO0tBQ2hGO1NBQU07UUFDTCxjQUFjLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hDO0lBSUQsTUFBTSxFQUNFLFdBQVcsRUFBRSxVQUFVLEVBQ3ZCLFNBQVMsRUFBRSxXQUFXLEVBQ3ZCLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7O0lBS3JELGNBQWMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsV0FBVyxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUNoRixjQUFjLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7O0lBRXhFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzs7SUFDeEMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDOztJQUN4QyxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDOztJQUN6QyxJQUFJLFNBQVMsQ0FBUztJQUV0QixJQUFJLFNBQVMsS0FBSyxZQUFZLEVBQUU7O1FBRTlCLE1BQU0sR0FBRyxNQUFNLEdBQUcsVUFBVSxDQUFDO0tBQzlCO1NBQU0sSUFBSSxTQUFTLEtBQUssYUFBYSxFQUFFOztRQUV0QyxNQUFNLEdBQUcsTUFBTSxHQUFHLFdBQVcsQ0FBQztLQUMvQjtJQUVELElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFOztRQUV4QyxjQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7UUFDMUIsTUFBTSxlQUFlLEdBQUcsY0FBYyxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDbEUsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3BCLFNBQVMsR0FBRyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQ3RDLElBQUksU0FBUyxLQUFLLFlBQVksRUFBRTtnQkFDOUIsU0FBUyxHQUFHLFNBQVMsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDO2FBQ2xEO1lBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3BCLFNBQVMsR0FBRyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQ3RDLElBQUksU0FBUyxLQUFLLFlBQVksRUFBRTtnQkFDOUIsU0FBUyxHQUFHLFNBQVMsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDO2FBQ2xEO1lBQ0QsU0FBUyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQy9DLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN0QztLQUNGOztJQUVELElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixTQUFTLEdBQUcsUUFBUSxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDO0NBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXlwb3BwL3JlYWN0LXRleHRhcmVhLWF1dG9zaXplL1xuXG4vKipcbiAqIGNhbGN1bGF0ZU5vZGVIZWlnaHQodWlUZXh0Tm9kZSwgdXNlQ2FjaGUgPSBmYWxzZSlcbiAqL1xuXG5jb25zdCBISURERU5fVEVYVEFSRUFfU1RZTEUgPSBgXG4gIG1pbi1oZWlnaHQ6MCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0Om5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OjAgIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6aGlkZGVuICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6LTEwMDAgIWltcG9ydGFudDtcbiAgdG9wOjAgIWltcG9ydGFudDtcbiAgcmlnaHQ6MCAhaW1wb3J0YW50XG5gO1xuXG5jb25zdCBTSVpJTkdfU1RZTEUgPSBbXG4gICdsZXR0ZXItc3BhY2luZycsXG4gICdsaW5lLWhlaWdodCcsXG4gICdwYWRkaW5nLXRvcCcsXG4gICdwYWRkaW5nLWJvdHRvbScsXG4gICdmb250LWZhbWlseScsXG4gICdmb250LXdlaWdodCcsXG4gICdmb250LXNpemUnLFxuICAndGV4dC1yZW5kZXJpbmcnLFxuICAndGV4dC10cmFuc2Zvcm0nLFxuICAnd2lkdGgnLFxuICAndGV4dC1pbmRlbnQnLFxuICAncGFkZGluZy1sZWZ0JyxcbiAgJ3BhZGRpbmctcmlnaHQnLFxuICAnYm9yZGVyLXdpZHRoJyxcbiAgJ2JveC1zaXppbmcnXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVUeXBlIHtcbiAgc2l6aW5nU3R5bGU6IHN0cmluZztcbiAgcGFkZGluZ1NpemU6IG51bWJlcjtcbiAgYm9yZGVyU2l6ZTogbnVtYmVyO1xuICBib3hTaXppbmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb2RlUHJvcGVydHkge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbWluSGVpZ2h0OiBudW1iZXI7XG4gIG1heEhlaWdodDogbnVtYmVyO1xuICBvdmVyZmxvd1k6IHN0cmluZztcbn1cblxuY29uc3QgY29tcHV0ZWRTdHlsZUNhY2hlOiB7IFtrZXk6IHN0cmluZ106IE5vZGVUeXBlIH0gPSB7fTtcbmxldCBoaWRkZW5UZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudDtcblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9kZVN0eWxpbmcobm9kZTogSFRNTEVsZW1lbnQsIHVzZUNhY2hlOiBib29sZWFuID0gZmFsc2UpOiBOb2RlVHlwZSB7XG4gIGNvbnN0IG5vZGVSZWYgPSAoXG4gICAgbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgfHxcbiAgICBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWFjdGlkJykgfHxcbiAgICBub2RlLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICkgYXMgc3RyaW5nO1xuXG4gIGlmICh1c2VDYWNoZSAmJiBjb21wdXRlZFN0eWxlQ2FjaGVbIG5vZGVSZWYgXSkge1xuICAgIHJldHVybiBjb21wdXRlZFN0eWxlQ2FjaGVbIG5vZGVSZWYgXTtcbiAgfVxuXG4gIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgY29uc3QgYm94U2l6aW5nID0gKFxuICAgIHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JveC1zaXppbmcnKSB8fFxuICAgIHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy1tb3otYm94LXNpemluZycpIHx8XG4gICAgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLXdlYmtpdC1ib3gtc2l6aW5nJylcbiAgKTtcblxuICBjb25zdCBwYWRkaW5nU2l6ZSA9IChcbiAgICBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctYm90dG9tJykpICtcbiAgICBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJykpXG4gICk7XG5cbiAgY29uc3QgYm9yZGVyU2l6ZSA9IChcbiAgICBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkgK1xuICAgIHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXRvcC13aWR0aCcpKVxuICApO1xuXG4gIGNvbnN0IHNpemluZ1N0eWxlID0gU0laSU5HX1NUWUxFXG4gIC5tYXAobmFtZSA9PiBgJHtuYW1lfToke3N0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSl9YClcbiAgLmpvaW4oJzsnKTtcblxuICBjb25zdCBub2RlSW5mbzogTm9kZVR5cGUgPSB7XG4gICAgc2l6aW5nU3R5bGUsXG4gICAgcGFkZGluZ1NpemUsXG4gICAgYm9yZGVyU2l6ZSxcbiAgICBib3hTaXppbmdcbiAgfTtcblxuICBpZiAodXNlQ2FjaGUgJiYgbm9kZVJlZikge1xuICAgIGNvbXB1dGVkU3R5bGVDYWNoZVsgbm9kZVJlZiBdID0gbm9kZUluZm87XG4gIH1cblxuICByZXR1cm4gbm9kZUluZm87XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vZGVIZWlnaHQodWlUZXh0Tm9kZTogSFRNTFRleHRBcmVhRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlQ2FjaGU6IGJvb2xlYW4gICAgICA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5Sb3dzOiBudW1iZXIgfCBudWxsID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Um93czogbnVtYmVyIHwgbnVsbCA9IG51bGwpOiBOb2RlUHJvcGVydHkge1xuICBpZiAoIWhpZGRlblRleHRhcmVhKSB7XG4gICAgaGlkZGVuVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlkZGVuVGV4dGFyZWEpO1xuICB9XG5cbiAgLy8gRml4IHdyYXA9XCJvZmZcIiBpc3N1ZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy82NTc3XG4gIGlmICh1aVRleHROb2RlLmdldEF0dHJpYnV0ZSgnd3JhcCcpKSB7XG4gICAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCd3cmFwJywgdWlUZXh0Tm9kZS5nZXRBdHRyaWJ1dGUoJ3dyYXAnKSBhcyBzdHJpbmcpO1xuICB9IGVsc2Uge1xuICAgIGhpZGRlblRleHRhcmVhLnJlbW92ZUF0dHJpYnV0ZSgnd3JhcCcpO1xuICB9XG5cbiAgLy8gQ29weSBhbGwgQ1NTIHByb3BlcnRpZXMgdGhhdCBoYXZlIGFuIGltcGFjdCBvbiB0aGUgaGVpZ2h0IG9mIHRoZSBjb250ZW50IGluXG4gIC8vIHRoZSB0ZXh0Ym94XG4gIGNvbnN0IHtcbiAgICAgICAgICBwYWRkaW5nU2l6ZSwgYm9yZGVyU2l6ZSxcbiAgICAgICAgICBib3hTaXppbmcsIHNpemluZ1N0eWxlXG4gICAgICAgIH0gPSBjYWxjdWxhdGVOb2RlU3R5bGluZyh1aVRleHROb2RlLCB1c2VDYWNoZSk7XG5cbiAgLy8gTmVlZCB0byBoYXZlIHRoZSBvdmVyZmxvdyBhdHRyaWJ1dGUgdG8gaGlkZSB0aGUgc2Nyb2xsYmFyIG90aGVyd2lzZVxuICAvLyB0ZXh0LWxpbmVzIHdpbGwgbm90IGNhbGN1bGF0ZWQgcHJvcGVybHkgYXMgdGhlIHNoYWRvdyB3aWxsIHRlY2huaWNhbGx5IGJlXG4gIC8vIG5hcnJvd2VyIGZvciBjb250ZW50XG4gIGhpZGRlblRleHRhcmVhLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgJHtzaXppbmdTdHlsZX07JHtISURERU5fVEVYVEFSRUFfU1RZTEV9YCk7XG4gIGhpZGRlblRleHRhcmVhLnZhbHVlID0gdWlUZXh0Tm9kZS52YWx1ZSB8fCB1aVRleHROb2RlLnBsYWNlaG9sZGVyIHx8ICcnO1xuXG4gIGxldCBtaW5IZWlnaHQgPSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUjtcbiAgbGV0IG1heEhlaWdodCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICBsZXQgaGVpZ2h0ID0gaGlkZGVuVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0O1xuICBsZXQgb3ZlcmZsb3dZOiBzdHJpbmc7XG5cbiAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgLy8gYm9yZGVyLWJveDogYWRkIGJvcmRlciwgc2luY2UgaGVpZ2h0ID0gY29udGVudCArIHBhZGRpbmcgKyBib3JkZXJcbiAgICBoZWlnaHQgPSBoZWlnaHQgKyBib3JkZXJTaXplO1xuICB9IGVsc2UgaWYgKGJveFNpemluZyA9PT0gJ2NvbnRlbnQtYm94Jykge1xuICAgIC8vIHJlbW92ZSBwYWRkaW5nLCBzaW5jZSBoZWlnaHQgPSBjb250ZW50XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFkZGluZ1NpemU7XG4gIH1cblxuICBpZiAobWluUm93cyAhPT0gbnVsbCB8fCBtYXhSb3dzICE9PSBudWxsKSB7XG4gICAgLy8gbWVhc3VyZSBoZWlnaHQgb2YgYSB0ZXh0YXJlYSB3aXRoIGEgc2luZ2xlIHJvd1xuICAgIGhpZGRlblRleHRhcmVhLnZhbHVlID0gJyc7XG4gICAgY29uc3Qgc2luZ2xlUm93SGVpZ2h0ID0gaGlkZGVuVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0IC0gcGFkZGluZ1NpemU7XG4gICAgaWYgKG1pblJvd3MgIT09IG51bGwpIHtcbiAgICAgIG1pbkhlaWdodCA9IHNpbmdsZVJvd0hlaWdodCAqIG1pblJvd3M7XG4gICAgICBpZiAoYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgbWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgcGFkZGluZ1NpemUgKyBib3JkZXJTaXplO1xuICAgICAgfVxuICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBoZWlnaHQpO1xuICAgIH1cbiAgICBpZiAobWF4Um93cyAhPT0gbnVsbCkge1xuICAgICAgbWF4SGVpZ2h0ID0gc2luZ2xlUm93SGVpZ2h0ICogbWF4Um93cztcbiAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgKyBwYWRkaW5nU2l6ZSArIGJvcmRlclNpemU7XG4gICAgICB9XG4gICAgICBvdmVyZmxvd1kgPSBoZWlnaHQgPiBtYXhIZWlnaHQgPyAnJyA6ICdoaWRkZW4nO1xuICAgICAgaGVpZ2h0ID0gTWF0aC5taW4obWF4SGVpZ2h0LCBoZWlnaHQpO1xuICAgIH1cbiAgfVxuICAvLyBSZW1vdmUgc2Nyb2xsIGJhciBmbGFzaCB3aGVuIGF1dG9zaXplIHdpdGhvdXQgbWF4Um93c1xuICBpZiAoIW1heFJvd3MpIHtcbiAgICBvdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgfVxuICByZXR1cm4geyBoZWlnaHQsIG1pbkhlaWdodCwgbWF4SGVpZ2h0LCBvdmVyZmxvd1kgfTtcbn1cbiJdfQ==