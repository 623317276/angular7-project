/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const availablePrefixs = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    let lastTime = 0;
    return function (callback) {
        /** @type {?} */
        const currTime = new Date().getTime();
        /** @type {?} */
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        const id = window.setTimeout(() => { callback(currTime + timeToCall); }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return () => null;
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    const prefix = availablePrefixs.filter(key => `${key}RequestAnimationFrame` in window)[0];
    return prefix
        ? window[`${prefix}RequestAnimationFrame`]
        : requestAnimationFramePolyfill();
}
/**
 * @param {?} id
 * @return {?}
 */
export function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    /** @type {?} */
    const prefix = availablePrefixs.filter(key => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window)[0];
    return prefix ?
        ((/** @type {?} */ (window))[`${prefix}CancelAnimationFrame`] ||
            (/** @type {?} */ (window))[`${prefix}CancelRequestAnimationFrame`]).call(this, id) : clearTimeout(id);
}
/** @type {?} */
export const reqAnimFrame = getRequestAnimationFrame();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7O0FBRWpEOztJQUNFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixPQUFPLFVBQVUsUUFBOEI7O1FBQzdDLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ3RDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDOztRQUMzRCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3JGLFFBQVEsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQztDQUNIOzs7O0FBRUQ7SUFDRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztLQUNuQjtJQUNELElBQUksTUFBTSxDQUFDLHFCQUFxQixFQUFFOztRQUVoQyxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbEQ7O0lBRUQsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLHVCQUF1QixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFGLE9BQU8sTUFBTTtRQUNYLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLHVCQUF1QixDQUFDO1FBQzFDLENBQUMsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0NBQ3JDOzs7OztBQUVELE1BQU0sc0NBQXNDLEVBQVU7SUFDcEQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksTUFBTSxDQUFDLG9CQUFvQixFQUFFO1FBQy9CLE9BQU8sTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3hDOztJQUNELE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUMzQyxHQUFHLEdBQUcsc0JBQXNCLElBQUksTUFBTSxJQUFJLEdBQUcsR0FBRyw2QkFBNkIsSUFBSSxNQUFNLENBQ3hGLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFTCxPQUFPLE1BQU0sQ0FBQyxDQUFDO1FBQ2IsQ0FDRSxtQkFBQyxNQUFhLEVBQUMsQ0FBQyxHQUFHLE1BQU0sc0JBQXNCLENBQUM7WUFDaEQsbUJBQUMsTUFBYSxFQUFDLENBQUMsR0FBRyxNQUFNLDZCQUE2QixDQUFDLENBQ3hELENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ3ZDOztBQUVELGFBQWEsWUFBWSxHQUFHLHdCQUF3QixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgdHlwZWRlZiBuby1pbnZhbGlkLXRoaXNcbmNvbnN0IGF2YWlsYWJsZVByZWZpeHMgPSBbJ21veicsICdtcycsICd3ZWJraXQnXTtcblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwoKTogdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSB7XG4gIGxldCBsYXN0VGltZSA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKTogbnVtYmVyIHtcbiAgICBjb25zdCBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgY29uc3QgaWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sIHRpbWVUb0NhbGwpO1xuICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgIHJldHVybiBpZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gKCkgPT4gbnVsbDtcbiAgfVxuICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvaXNzdWVzLzQ0NjVcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XG4gIH1cblxuICBjb25zdCBwcmVmaXggPSBhdmFpbGFibGVQcmVmaXhzLmZpbHRlcihrZXkgPT4gYCR7a2V5fVJlcXVlc3RBbmltYXRpb25GcmFtZWAgaW4gd2luZG93KVswXTtcblxuICByZXR1cm4gcHJlZml4XG4gICAgPyB3aW5kb3dbYCR7cHJlZml4fVJlcXVlc3RBbmltYXRpb25GcmFtZWBdXG4gICAgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGlkOiBudW1iZXIpOiBhbnkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG4gIH1cbiAgY29uc3QgcHJlZml4ID0gYXZhaWxhYmxlUHJlZml4cy5maWx0ZXIoa2V5ID0+XG4gICAgYCR7a2V5fUNhbmNlbEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3cgfHwgYCR7a2V5fUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZWAgaW4gd2luZG93LFxuICApWzBdO1xuXG4gIHJldHVybiBwcmVmaXggP1xuICAgIChcbiAgICAgICh3aW5kb3cgYXMgYW55KVtgJHtwcmVmaXh9Q2FuY2VsQW5pbWF0aW9uRnJhbWVgXSB8fFxuICAgICAgKHdpbmRvdyBhcyBhbnkpW2Ake3ByZWZpeH1DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVgXVxuICAgICkuY2FsbCh0aGlzLCBpZCkgOiBjbGVhclRpbWVvdXQoaWQpO1xufVxuXG5leHBvcnQgY29uc3QgcmVxQW5pbUZyYW1lID0gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4iXX0=