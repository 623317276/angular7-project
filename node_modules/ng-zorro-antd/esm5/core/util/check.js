/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { TemplateRef, Type } from '@angular/core';
/**
 * @param {?} value
 * @return {?}
 */
export function isNotNil(value) {
    return (typeof (value) !== 'undefined') && value !== null;
}
/**
 * 校验对象是否相等
 * @param {?} objA
 * @param {?} objB
 * @return {?}
 */
export function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    /** @type {?} */
    var keysA = Object.keys(objA);
    /** @type {?} */
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    /** @type {?} */
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (var idx = 0; idx < keysA.length; idx++) {
        /** @type {?} */
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isInteger(value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
}
/**
 * @param {?} element
 * @return {?}
 */
export function isEmpty(element) {
    /** @type {?} */
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        if (filterNotEmptyNode(nodes.item(i))) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} node
 * @return {?}
 */
export function filterNotEmptyNode(node) {
    if (node) {
        if ((node.nodeType === 1) && ((/** @type {?} */ (node)).outerHTML.toString().trim().length !== 0)) {
            // ELEMENT_NODE
            return node;
        }
        else if ((node.nodeType === 3) && (node.textContent.toString().trim().length !== 0)) {
            // TEXT_NODE
            return node;
        }
        return null;
    }
    return null;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNonEmptyString(value) {
    // tslint:disable-line:no-any
    return typeof value === 'string' && value !== '';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isTemplateRef(value) {
    // tslint:disable-line:no-any
    return value instanceof TemplateRef;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isComponent(value) {
    // tslint:disable-line:no-any
    return value instanceof Type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL2NoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHbEQsTUFBTSxtQkFBbUIsS0FBVTtJQUNqQyxPQUFPLENBQUMsT0FBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFdBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUM7Q0FDMUQ7Ozs7Ozs7QUFHRCxNQUFNLHVCQUF1QixJQUFRLEVBQUUsSUFBUTtJQUM3QyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDakIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtRQUMxRSxPQUFPLEtBQUssQ0FBQztLQUNkOztJQUVELElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBQ2hDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakMsT0FBTyxLQUFLLENBQUM7S0FDZDs7SUFFRCxJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBR25FLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFOztRQUMzQyxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxDQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxJQUFJLENBQUUsR0FBRyxDQUFFLEtBQUssSUFBSSxDQUFFLEdBQUcsQ0FBRSxFQUFFO1lBQy9CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0NBQ2I7Ozs7O0FBRUQsTUFBTSxvQkFBb0IsS0FBc0I7SUFDOUMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQzlCLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQztDQUMvQjs7Ozs7QUFFRCxNQUFNLGtCQUFrQixPQUFvQjs7SUFDMUMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNiOzs7OztBQUVELE1BQU0sNkJBQTZCLElBQVU7SUFDM0MsSUFBSSxJQUFJLEVBQUU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFDLElBQW1CLEVBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFOztZQUU3RixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTs7WUFFckYsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNiOzs7OztBQUVELE1BQU0sMkJBQTJCLEtBQVU7O0lBQ3pDLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUM7Q0FDbEQ7Ozs7O0FBRUQsTUFBTSx3QkFBd0IsS0FBVTs7SUFDdEMsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDO0NBQ3JDOzs7OztBQUVELE1BQU0sc0JBQXNCLEtBQVU7O0lBQ3BDLE9BQU8sS0FBSyxZQUFZLElBQUksQ0FBQztDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBpc05vdE5pbCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiAodHlwZW9mKHZhbHVlKSAhPT0gJ3VuZGVmaW5lZCcpICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG4vKiog5qCh6aqM5a+56LGh5piv5ZCm55u4562JICovXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakE6IHt9LCBvYmpCOiB7fSk6IGJvb2xlYW4ge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCAhb2JqQSB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c0FbIGlkeCBdO1xuICAgIGlmICghYkhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iakFbIGtleSBdICE9PSBvYmpCWyBrZXkgXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiZcbiAgICBpc0Zpbml0ZSh2YWx1ZSkgJiZcbiAgICBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IG5vZGVzID0gZWxlbWVudC5jaGlsZE5vZGVzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZpbHRlck5vdEVtcHR5Tm9kZShub2Rlcy5pdGVtKGkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlck5vdEVtcHR5Tm9kZShub2RlOiBOb2RlKTogTm9kZSB7XG4gIGlmIChub2RlKSB7XG4gICAgaWYgKChub2RlLm5vZGVUeXBlID09PSAxKSAmJiAoKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDApKSB7XG4gICAgICAvLyBFTEVNRU5UX05PREVcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoKG5vZGUubm9kZVR5cGUgPT09IDMpICYmIChub2RlLnRleHRDb250ZW50LnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgIC8vIFRFWFRfTk9ERVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb25FbXB0eVN0cmluZyh2YWx1ZTogYW55KTogYm9vbGVhbiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGVtcGxhdGVSZWYodmFsdWU6IGFueSk6IGJvb2xlYW4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50KHZhbHVlOiBhbnkpOiBib29sZWFuIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVHlwZTtcbn1cbiJdfQ==