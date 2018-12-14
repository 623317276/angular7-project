/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class NzSliderService {
    /**
     * @param {?} e
     * @return {?}
     */
    pauseEvent(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    /**
     * @param {?} num
     * @return {?}
     */
    getPrecision(num) {
        /** @type {?} */
        const numStr = num.toString();
        /** @type {?} */
        const dotIndex = numStr.indexOf('.');
        return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
    }
    /**
     * @template T
     * @param {?} arr
     * @return {?}
     */
    cloneArray(arr) {
        return arr.slice();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    isNotTouchEvent(e) {
        return !e.touches || e.touches.length > 1 ||
            (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
    }
    /**
     * @param {?} min
     * @param {?} max
     * @param {?} value
     * @return {?}
     */
    valueToOffset(min, max, value) {
        return (value - min) / (max - min) * 100;
    }
    /**
     * @param {?} num
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    correctNumLimit(num, min, max) {
        /** @type {?} */
        let res = +num;
        if (isNaN(res)) {
            return min;
        }
        if (num < min) {
            res = min;
        }
        else if (num > max) {
            res = max;
        }
        return res;
    }
    /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param {?} elem HTMLElement ref
     * @return {?}
     */
    getElementOffset(elem) {
        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error
        if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        /** @type {?} */
        const rect = elem.getBoundingClientRect();
        /** @type {?} */
        const win = elem.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    }
}
NzSliderService.decorators = [
    { type: Injectable }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2xpZGVyL256LXNsaWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU07Ozs7O0lBRUosVUFBVSxDQUFDLENBQVE7UUFDakIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBVzs7UUFDdEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUM5QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekQ7Ozs7OztJQUVELFVBQVUsQ0FBSSxHQUFRO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELGVBQWUsQ0FBQyxDQUFhO1FBQzNCLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNqRTs7Ozs7OztJQUdELGFBQWEsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEtBQWE7UUFDbkQsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDMUM7Ozs7Ozs7SUFFRCxlQUFlLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXOztRQUNuRCxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNmLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQUUsT0FBTyxHQUFHLENBQUM7U0FBRTtRQUMvQixJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQUU7YUFBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQUU7UUFDaEUsT0FBTyxHQUFHLENBQUM7S0FDWjs7Ozs7O0lBTUQsZ0JBQWdCLENBQUMsSUFBaUI7Ozs7O1FBS2hDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUM1Qjs7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7UUFDMUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDM0MsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXO1lBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXO1NBQ2xDLENBQUM7S0FDSDs7O1lBdERGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelNsaWRlclNlcnZpY2Uge1xuXG4gIHBhdXNlRXZlbnQoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGdldFByZWNpc2lvbihudW06IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgbnVtU3RyID0gbnVtLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgZG90SW5kZXggPSBudW1TdHIuaW5kZXhPZignLicpO1xuICAgIHJldHVybiBkb3RJbmRleCA+PSAwID8gbnVtU3RyLmxlbmd0aCAtIGRvdEluZGV4IC0gMSA6IDA7XG4gIH1cblxuICBjbG9uZUFycmF5PFQ+KGFycjogVFtdKTogVFtdIHtcbiAgICByZXR1cm4gYXJyLnNsaWNlKCk7XG4gIH1cblxuICBpc05vdFRvdWNoRXZlbnQoZTogVG91Y2hFdmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhZS50b3VjaGVzIHx8IGUudG91Y2hlcy5sZW5ndGggPiAxIHx8XG4gICAgICAoZS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd0b3VjaGVuZCcgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDApO1xuICB9XG5cbiAgLy8gY29udmVydCB2YWx1ZSB0byBvZmZzZXQgaW4gcGVyY2VudFxuICB2YWx1ZVRvT2Zmc2V0KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSAqIDEwMDtcbiAgfVxuXG4gIGNvcnJlY3ROdW1MaW1pdChudW06IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzID0gK251bTtcbiAgICBpZiAoaXNOYU4ocmVzKSkgeyByZXR1cm4gbWluOyB9XG4gICAgaWYgKG51bSA8IG1pbikgeyByZXMgPSBtaW47IH0gZWxzZSBpZiAobnVtID4gbWF4KSB7IHJlcyA9IG1heDsgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHRoZSBvZmZzZXQgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQgKFJlZmVyZW5jZSBmcm9tIGpxdWVyeSdzIG9mZnNldCgpKVxuICAgKiBAcGFyYW0gZWxlbSBIVE1MRWxlbWVudCByZWZcbiAgICovXG4gIGdldEVsZW1lbnRPZmZzZXQoZWxlbTogSFRNTEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSB7XG4gICAgLy8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiAoZGlzcGxheTogbm9uZSkgZWxlbWVudHMgKGdoLTIzMTApXG4gICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4gICAgLy8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxuICAgIC8vIGRpc2Nvbm5lY3RlZCBub2RlIGluIElFIHRocm93cyBhbiBlcnJvclxuICAgIGlmICghZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gICAgfVxuICAgIC8vIEdldCBkb2N1bWVudC1yZWxhdGl2ZSBwb3NpdGlvbiBieSBhZGRpbmcgdmlld3BvcnQgc2Nyb2xsIHRvIHZpZXdwb3J0LXJlbGF0aXZlIGdCQ1JcbiAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aW4gPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXRcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==