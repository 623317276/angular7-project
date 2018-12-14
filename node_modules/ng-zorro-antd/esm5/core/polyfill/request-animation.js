/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
var availablePrefixs = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    var lastTime = 0;
    return function (callback) {
        /** @type {?} */
        var currTime = new Date().getTime();
        /** @type {?} */
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        var id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return function () { return null; };
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    var prefix = availablePrefixs.filter(function (key) { return key + "RequestAnimationFrame" in window; })[0];
    return prefix
        ? window[prefix + "RequestAnimationFrame"]
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
    var prefix = availablePrefixs.filter(function (key) {
        return key + "CancelAnimationFrame" in window || key + "CancelRequestAnimationFrame" in window;
    })[0];
    return prefix ?
        ((/** @type {?} */ (window))[prefix + "CancelAnimationFrame"] ||
            (/** @type {?} */ (window))[prefix + "CancelRequestAnimationFrame"]).call(this, id) : clearTimeout(id);
}
/** @type {?} */
export var reqAnimFrame = getRequestAnimationFrame();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7O0FBRWpEOztJQUNFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixPQUFPLFVBQVUsUUFBOEI7O1FBQzdDLElBQU0sUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ3RDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDOztRQUMzRCxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQVEsUUFBUSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckYsUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDO0NBQ0g7Ozs7QUFFRDtJQUNFLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7S0FDbkI7SUFDRCxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTs7UUFFaEMsT0FBTyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOztJQUVELElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFHLEdBQUcsMEJBQXVCLElBQUksTUFBTSxFQUF2QyxDQUF1QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUYsT0FBTyxNQUFNO1FBQ1gsQ0FBQyxDQUFDLE1BQU0sQ0FBSSxNQUFNLDBCQUF1QixDQUFDO1FBQzFDLENBQUMsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0NBQ3JDOzs7OztBQUVELE1BQU0sc0NBQXNDLEVBQVU7SUFDcEQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksTUFBTSxDQUFDLG9CQUFvQixFQUFFO1FBQy9CLE9BQU8sTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3hDOztJQUNELElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUc7UUFDeEMsT0FBRyxHQUFHLHlCQUFzQixJQUFJLE1BQU0sSUFBTyxHQUFHLGdDQUE2QixJQUFJLE1BQU07SUFBdkYsQ0FBdUYsQ0FDeEYsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVMLE9BQU8sTUFBTSxDQUFDLENBQUM7UUFDYixDQUNFLG1CQUFDLE1BQWEsRUFBQyxDQUFJLE1BQU0seUJBQXNCLENBQUM7WUFDaEQsbUJBQUMsTUFBYSxFQUFDLENBQUksTUFBTSxnQ0FBNkIsQ0FBQyxDQUN4RCxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUN2Qzs7QUFFRCxXQUFhLFlBQVksR0FBRyx3QkFBd0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IHR5cGVkZWYgbm8taW52YWxpZC10aGlzXG5jb25zdCBhdmFpbGFibGVQcmVmaXhzID0gWydtb3onLCAnbXMnLCAnd2Via2l0J107XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xuICBsZXQgbGFzdFRpbWUgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjayk6IG51bWJlciB7XG4gICAgY29uc3QgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgIGNvbnN0IGlkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpOyB9LCB0aW1lVG9DYWxsKTtcbiAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpOiB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICgpID0+IG51bGw7XG4gIH1cbiAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy80NDY1XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xuICB9XG5cbiAgY29uc3QgcHJlZml4ID0gYXZhaWxhYmxlUHJlZml4cy5maWx0ZXIoa2V5ID0+IGAke2tleX1SZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvdylbMF07XG5cbiAgcmV0dXJuIHByZWZpeFxuICAgID8gd2luZG93W2Ake3ByZWZpeH1SZXF1ZXN0QW5pbWF0aW9uRnJhbWVgXVxuICAgIDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShpZDogbnVtYmVyKTogYW55IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICB9XG4gIGNvbnN0IHByZWZpeCA9IGF2YWlsYWJsZVByZWZpeHMuZmlsdGVyKGtleSA9PlxuICAgIGAke2tleX1DYW5jZWxBbmltYXRpb25GcmFtZWAgaW4gd2luZG93IHx8IGAke2tleX1DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvdyxcbiAgKVswXTtcblxuICByZXR1cm4gcHJlZml4ID9cbiAgICAoXG4gICAgICAod2luZG93IGFzIGFueSlbYCR7cHJlZml4fUNhbmNlbEFuaW1hdGlvbkZyYW1lYF0gfHxcbiAgICAgICh3aW5kb3cgYXMgYW55KVtgJHtwcmVmaXh9Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lYF1cbiAgICApLmNhbGwodGhpcywgaWQpIDogY2xlYXJUaW1lb3V0KGlkKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlcUFuaW1GcmFtZSA9IGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuIl19