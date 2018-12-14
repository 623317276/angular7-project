/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// from https://github.com/component/textarea-caret-position
/** @type {?} */
export var properties = [
    'direction',
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',
    'letterSpacing',
    'wordSpacing',
    'tabSize',
    'MozTabSize'
];
/** @type {?} */
var isBrowser = (typeof window !== 'undefined');
/** @type {?} */
var isFirefox = (isBrowser && (/** @type {?} */ (window)).mozInnerScreenX != null);
/** @type {?} */
var _parseInt = function (str) { return parseInt(str, 10); };
var ɵ0 = _parseInt;
/**
 * @record
 */
export function Coordinates() { }
function Coordinates_tsickle_Closure_declarations() {
    /** @type {?} */
    Coordinates.prototype.top;
    /** @type {?} */
    Coordinates.prototype.left;
    /** @type {?} */
    Coordinates.prototype.height;
}
/**
 * @param {?} element
 * @param {?} position
 * @param {?=} options
 * @return {?}
 */
export function getCaretCoordinates(element, position, options) {
    if (!isBrowser) {
        throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
    }
    /** @type {?} */
    var debug = options && options.debug || false;
    if (debug) {
        /** @type {?} */
        var el = document.querySelector('#input-textarea-caret-position-mirror-div');
        if (el) {
            el.parentNode.removeChild(el);
        }
    }
    /** @type {?} */
    var div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    /** @type {?} */
    var style = div.style;
    /** @type {?} */
    var computed = window.getComputedStyle ? window.getComputedStyle(element) : (/** @type {?} */ (element)).currentStyle;
    /** @type {?} */
    var isInput = element.nodeName === 'INPUT';
    // Default textarea styles
    style.whiteSpace = 'pre-wrap';
    if (!isInput) {
        style.wordWrap = 'break-word'; // only for textarea-s
    }
    // Position off-screen
    style.position = 'absolute'; // required to return coordinates properly
    if (!debug) {
        style.visibility = 'hidden';
    } // not 'display: none' because we want rendering
    // Transfer the element's properties to the div
    properties.forEach(function (prop) {
        if (isInput && prop === 'lineHeight') {
            // Special case for <input>s because text is rendered centered and line height may be != height
            style.lineHeight = computed.height;
        }
        else {
            style[prop] = computed[prop];
        }
    });
    if (isFirefox) {
        // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
        if (element.scrollHeight > _parseInt(computed.height)) {
            style.overflowY = 'scroll';
        }
    }
    else {
        style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
    }
    div.textContent = element.value.substring(0, position);
    // The second special handling for input type="text" vs textarea:
    // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
    if (isInput) {
        div.textContent = div.textContent.replace(/\s/g, '\u00a0');
    }
    /** @type {?} */
    var span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    /** @type {?} */
    var coordinates = {
        top: span.offsetTop + _parseInt(computed.borderTopWidth),
        left: span.offsetLeft + _parseInt(computed.borderLeftWidth),
        height: _parseInt(computed.lineHeight)
    };
    if (debug) {
        span.style.backgroundColor = '#eee';
        createDebugEle(element, coordinates);
    }
    else {
        document.body.removeChild(div);
    }
    return coordinates;
}
/**
 * @param {?} element
 * @param {?} coordinates
 * @return {?}
 */
export function createDebugEle(element, coordinates) {
    /** @type {?} */
    var fontSize = getComputedStyle(element).getPropertyValue('font-size');
    /** @type {?} */
    var rect = (/** @type {?} */ (document.querySelector('#DEBUG')))
        || document.createElement('div');
    document.body.appendChild(rect);
    rect.id = 'DEBUG';
    rect.style.position = 'absolute';
    rect.style.backgroundColor = 'red';
    rect.style.height = fontSize;
    rect.style.width = '1px';
    rect.style.top = element.getBoundingClientRect().top - element.scrollTop + window.pageYOffset + coordinates.top + "px";
    rect.style.left = element.getBoundingClientRect().left - element.scrollLeft + window.pageXOffset + coordinates.left + "px";
    console.log(rect.style.top);
    console.log(rect.style.left);
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY2FyZXQtcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BLFdBQWEsVUFBVSxHQUFHO0lBQ3hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUVYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixhQUFhO0lBRWIsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUdiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBRVosV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBRWhCLGVBQWU7SUFDZixhQUFhO0lBRWIsU0FBUztJQUNULFlBQVk7Q0FFYixDQUFDOztBQUVGLElBQU0sU0FBUyxHQUFHLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUM7O0FBR2xELElBQU0sU0FBUyxHQUFHLENBQUMsU0FBUyxJQUFJLG1CQUFDLE1BQWEsRUFBQyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsQ0FBQzs7QUFFekUsSUFBTSxTQUFTLEdBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFqQixDQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyRCxNQUFNLDhCQUE4QixPQUErQyxFQUFFLFFBQWdCLEVBQUUsT0FBNkI7SUFDbEksSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztLQUNuRzs7SUFFRCxJQUFNLEtBQUssR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDaEQsSUFBSSxLQUFLLEVBQUU7O1FBQ1QsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQy9FLElBQUksRUFBRSxFQUFFO1lBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FBRTtLQUMzQzs7SUFHRCxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsMENBQTBDLENBQUM7SUFDcEQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBRS9CLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7O0lBR3hCLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQyxPQUFjLEVBQUMsQ0FBQyxZQUFZLENBQUM7O0lBQzVHLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDOztJQUc3QyxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUM5QixJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1osS0FBSyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7S0FDL0I7O0lBR0QsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDNUIsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0tBQzdCOztJQUdELFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFZO1FBQzlCLElBQUksT0FBTyxJQUFJLElBQUksS0FBSyxZQUFZLEVBQUU7O1lBRXBDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNwQzthQUFNO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtLQUNGLENBQUMsQ0FBQztJQUVILElBQUksU0FBUyxFQUFFOztRQUViLElBQUksT0FBTyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JELEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQzVCO0tBQ0Y7U0FBTTtRQUNMLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzNCO0lBRUQsR0FBRyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7OztJQUd2RCxJQUFJLE9BQU8sRUFBRTtRQUNYLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzVEOztJQUVELElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7OztJQU01QyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUM1RCxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUV0QixJQUFNLFdBQVcsR0FBRztRQUNsQixHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztRQUN4RCxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUMzRCxNQUFNLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7S0FDdkMsQ0FBQztJQUVGLElBQUksS0FBSyxFQUFFO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDdEM7U0FBTTtRQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hDO0lBRUQsT0FBTyxXQUFXLENBQUM7Q0FDcEI7Ozs7OztBQUVELE1BQU0seUJBQXlCLE9BQStDLEVBQUUsV0FBd0I7O0lBQ3RHLElBQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDOztJQUN6RSxJQUFNLElBQUksR0FBb0IsbUJBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQW9CLEVBQUM7V0FDOUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQU0sT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxPQUFJLENBQUM7SUFDdkgsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQU0sT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxPQUFJLENBQUM7SUFDM0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2NvbXBvbmVudC90ZXh0YXJlYS1jYXJldC1wb3NpdGlvblxuXG4vLyBXZSdsbCBjb3B5IHRoZSBwcm9wZXJ0aWVzIGJlbG93IGludG8gdGhlIG1pcnJvciBkaXYuXG4vLyBOb3RlIHRoYXQgc29tZSBicm93c2Vycywgc3VjaCBhcyBGaXJlZm94LCBkbyBub3QgY29uY2F0ZW5hdGUgcHJvcGVydGllc1xuLy8gaW50byB0aGVpciBzaG9ydGhhbmQgKGUuZy4gcGFkZGluZy10b3AsIHBhZGRpbmctYm90dG9tIGV0Yy4gLT4gcGFkZGluZyksXG4vLyBzbyB3ZSBoYXZlIHRvIGxpc3QgZXZlcnkgc2luZ2xlIHByb3BlcnR5IGV4cGxpY2l0bHkuXG5leHBvcnQgY29uc3QgcHJvcGVydGllcyA9IFtcbiAgJ2RpcmVjdGlvbicsICAvLyBSVEwgc3VwcG9ydFxuICAnYm94U2l6aW5nJyxcbiAgJ3dpZHRoJywgIC8vIG9uIENocm9tZSBhbmQgSUUsIGV4Y2x1ZGUgdGhlIHNjcm9sbGJhciwgc28gdGhlIG1pcnJvciBkaXYgd3JhcHMgZXhhY3RseSBhcyB0aGUgdGV4dGFyZWEgZG9lc1xuICAnaGVpZ2h0JyxcbiAgJ292ZXJmbG93WCcsXG4gICdvdmVyZmxvd1knLCAgLy8gY29weSB0aGUgc2Nyb2xsYmFyIGZvciBJRVxuXG4gICdib3JkZXJUb3BXaWR0aCcsXG4gICdib3JkZXJSaWdodFdpZHRoJyxcbiAgJ2JvcmRlckJvdHRvbVdpZHRoJyxcbiAgJ2JvcmRlckxlZnRXaWR0aCcsXG4gICdib3JkZXJTdHlsZScsXG5cbiAgJ3BhZGRpbmdUb3AnLFxuICAncGFkZGluZ1JpZ2h0JyxcbiAgJ3BhZGRpbmdCb3R0b20nLFxuICAncGFkZGluZ0xlZnQnLFxuXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250XG4gICdmb250U3R5bGUnLFxuICAnZm9udFZhcmlhbnQnLFxuICAnZm9udFdlaWdodCcsXG4gICdmb250U3RyZXRjaCcsXG4gICdmb250U2l6ZScsXG4gICdmb250U2l6ZUFkanVzdCcsXG4gICdsaW5lSGVpZ2h0JyxcbiAgJ2ZvbnRGYW1pbHknLFxuXG4gICd0ZXh0QWxpZ24nLFxuICAndGV4dFRyYW5zZm9ybScsXG4gICd0ZXh0SW5kZW50JyxcbiAgJ3RleHREZWNvcmF0aW9uJywgIC8vIG1pZ2h0IG5vdCBtYWtlIGEgZGlmZmVyZW5jZSwgYnV0IGJldHRlciBiZSBzYWZlXG5cbiAgJ2xldHRlclNwYWNpbmcnLFxuICAnd29yZFNwYWNpbmcnLFxuXG4gICd0YWJTaXplJyxcbiAgJ01velRhYlNpemUnXG5cbl07XG5cbmNvbnN0IGlzQnJvd3NlciA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmNvbnN0IGlzRmlyZWZveCA9IChpc0Jyb3dzZXIgJiYgKHdpbmRvdyBhcyBhbnkpLm1veklubmVyU2NyZWVuWCAhPSBudWxsKTtcblxuY29uc3QgX3BhcnNlSW50ID0gKHN0cjogc3RyaW5nKSA9PiBwYXJzZUludChzdHIsIDEwKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlcyB7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZXRDb29yZGluYXRlcyhlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCwgcG9zaXRpb246IG51bWJlciwgb3B0aW9ucz86IHsgZGVidWc/OiBib29sZWFuIH0pOiBDb29yZGluYXRlcyB7XG4gIGlmICghaXNCcm93c2VyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd0ZXh0YXJlYS1jYXJldC1wb3NpdGlvbiNnZXRDYXJldENvb3JkaW5hdGVzIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBpbiBhIGJyb3dzZXInKTtcbiAgfVxuXG4gIGNvbnN0IGRlYnVnID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnIHx8IGZhbHNlO1xuICBpZiAoZGVidWcpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC10ZXh0YXJlYS1jYXJldC1wb3NpdGlvbi1taXJyb3ItZGl2Jyk7XG4gICAgaWYgKGVsKSB7IGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpOyB9XG4gIH1cblxuICAvLyBUaGUgbWlycm9yIGRpdiB3aWxsIHJlcGxpY2F0ZSB0aGUgdGV4dGFyZWEncyBzdHlsZVxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlkID0gJ2lucHV0LXRleHRhcmVhLWNhcmV0LXBvc2l0aW9uLW1pcnJvci1kaXYnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgY29uc3Qgc3R5bGUgPSBkaXYuc3R5bGU7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb25zdCBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkgOiAoZWxlbWVudCBhcyBhbnkpLmN1cnJlbnRTdHlsZTsgIC8vIGN1cnJlbnRTdHlsZSBmb3IgSUUgPCA5XG4gIGNvbnN0IGlzSW5wdXQgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnO1xuXG4gIC8vIERlZmF1bHQgdGV4dGFyZWEgc3R5bGVzXG4gIHN0eWxlLndoaXRlU3BhY2UgPSAncHJlLXdyYXAnO1xuICBpZiAoIWlzSW5wdXQpIHtcbiAgICBzdHlsZS53b3JkV3JhcCA9ICdicmVhay13b3JkJzsgLy8gb25seSBmb3IgdGV4dGFyZWEtc1xuICB9XG5cbiAgLy8gUG9zaXRpb24gb2ZmLXNjcmVlblxuICBzdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7ICAvLyByZXF1aXJlZCB0byByZXR1cm4gY29vcmRpbmF0ZXMgcHJvcGVybHlcbiAgaWYgKCFkZWJ1Zykge1xuICAgIHN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfSAgLy8gbm90ICdkaXNwbGF5OiBub25lJyBiZWNhdXNlIHdlIHdhbnQgcmVuZGVyaW5nXG5cbiAgLy8gVHJhbnNmZXIgdGhlIGVsZW1lbnQncyBwcm9wZXJ0aWVzIHRvIHRoZSBkaXZcbiAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoaXNJbnB1dCAmJiBwcm9wID09PSAnbGluZUhlaWdodCcpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgPGlucHV0PnMgYmVjYXVzZSB0ZXh0IGlzIHJlbmRlcmVkIGNlbnRlcmVkIGFuZCBsaW5lIGhlaWdodCBtYXkgYmUgIT0gaGVpZ2h0XG4gICAgICBzdHlsZS5saW5lSGVpZ2h0ID0gY29tcHV0ZWQuaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZVtwcm9wXSA9IGNvbXB1dGVkW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGlzRmlyZWZveCkge1xuICAgIC8vIEZpcmVmb3ggbGllcyBhYm91dCB0aGUgb3ZlcmZsb3cgcHJvcGVydHkgZm9yIHRleHRhcmVhczogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9OTg0Mjc1XG4gICAgaWYgKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gX3BhcnNlSW50KGNvbXB1dGVkLmhlaWdodCkpIHtcbiAgICAgIHN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nOyAgLy8gZm9yIENocm9tZSB0byBub3QgcmVuZGVyIGEgc2Nyb2xsYmFyOyBJRSBrZWVwcyBvdmVyZmxvd1kgPSAnc2Nyb2xsJ1xuICB9XG5cbiAgZGl2LnRleHRDb250ZW50ID0gZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcoMCwgcG9zaXRpb24pO1xuICAvLyBUaGUgc2Vjb25kIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGlucHV0IHR5cGU9XCJ0ZXh0XCIgdnMgdGV4dGFyZWE6XG4gIC8vIHNwYWNlcyBuZWVkIHRvIGJlIHJlcGxhY2VkIHdpdGggbm9uLWJyZWFraW5nIHNwYWNlcyAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEzNDAyMDM1LzEyNjkwMzdcbiAgaWYgKGlzSW5wdXQpIHtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBkaXYudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csICdcXHUwMGEwJyk7XG4gIH1cblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAvLyBXcmFwcGluZyBtdXN0IGJlIHJlcGxpY2F0ZWQgKmV4YWN0bHkqLCBpbmNsdWRpbmcgd2hlbiBhIGxvbmcgd29yZCBnZXRzXG4gIC8vIG9udG8gdGhlIG5leHQgbGluZSwgd2l0aCB3aGl0ZXNwYWNlIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmUgYmVmb3JlICgjNykuXG4gIC8vIFRoZSAgKm9ubHkqIHJlbGlhYmxlIHdheSB0byBkbyB0aGF0IGlzIHRvIGNvcHkgdGhlICplbnRpcmUqIHJlc3Qgb2YgdGhlXG4gIC8vIHRleHRhcmVhJ3MgY29udGVudCBpbnRvIHRoZSA8c3Bhbj4gY3JlYXRlZCBhdCB0aGUgY2FyZXQgcG9zaXRpb24uXG4gIC8vIEZvciBpbnB1dHMsIGp1c3QgJy4nIHdvdWxkIGJlIGVub3VnaCwgYnV0IG5vIG5lZWQgdG8gYm90aGVyLlxuICBzcGFuLnRleHRDb250ZW50ID0gZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcocG9zaXRpb24pIHx8ICcuJzsgIC8vIHx8IGJlY2F1c2UgYSBjb21wbGV0ZWx5IGVtcHR5IGZhdXggc3BhbiBkb2Vzbid0IHJlbmRlciBhdCBhbGxcbiAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xuICAgIHRvcDogc3Bhbi5vZmZzZXRUb3AgKyBfcGFyc2VJbnQoY29tcHV0ZWQuYm9yZGVyVG9wV2lkdGgpLFxuICAgIGxlZnQ6IHNwYW4ub2Zmc2V0TGVmdCArIF9wYXJzZUludChjb21wdXRlZC5ib3JkZXJMZWZ0V2lkdGgpLFxuICAgIGhlaWdodDogX3BhcnNlSW50KGNvbXB1dGVkLmxpbmVIZWlnaHQpXG4gIH07XG5cbiAgaWYgKGRlYnVnKSB7XG4gICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VlZSc7XG4gICAgY3JlYXRlRGVidWdFbGUoZWxlbWVudCwgY29vcmRpbmF0ZXMpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlYnVnRWxlKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LCBjb29yZGluYXRlczogQ29vcmRpbmF0ZXMpOiB2b2lkIHtcbiAgY29uc3QgZm9udFNpemUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpO1xuICBjb25zdCByZWN0OiBIVE1MU3BhbkVsZW1lbnQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0RFQlVHJykgYXMgSFRNTFNwYW5FbGVtZW50KVxuICAgIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlY3QpO1xuICByZWN0LmlkID0gJ0RFQlVHJztcbiAgcmVjdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHJlY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gIHJlY3Quc3R5bGUuaGVpZ2h0ID0gZm9udFNpemU7XG4gIHJlY3Quc3R5bGUud2lkdGggPSAnMXB4JztcbiAgcmVjdC5zdHlsZS50b3AgPSBgJHtlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0ICsgY29vcmRpbmF0ZXMudG9wfXB4YDtcbiAgcmVjdC5zdHlsZS5sZWZ0ID0gYCR7ZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gZWxlbWVudC5zY3JvbGxMZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0ICsgY29vcmRpbmF0ZXMubGVmdH1weGA7XG4gIGNvbnNvbGUubG9nKHJlY3Quc3R5bGUudG9wKTtcbiAgY29uc29sZS5sb2cocmVjdC5zdHlsZS5sZWZ0KTtcbn1cbiJdfQ==