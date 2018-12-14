/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { cancelRequestAnimationFrame, reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} fn
 * @return {?}
 */
export default function throttleByAnimationFrame(fn) {
    /** @type {?} */
    var requestId;
    /** @type {?} */
    var later = function (args) { return function () {
        requestId = null;
        fn.apply(void 0, tslib_1.__spread(args));
    }; };
    /** @type {?} */
    var throttled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    };
    // tslint:disable-next-line:no-non-null-assertion
    (/** @type {?} */ (throttled)).cancel = function () { return cancelRequestAnimationFrame(/** @type {?} */ ((requestId))); };
    return throttled;
}
/**
 * @return {?}
 */
export function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        /** @type {?} */
        var fn = descriptor.value;
        /** @type {?} */
        var definingProperty = false;
        return {
            configurable: true,
            get: /**
             * @return {?}
             */
            function () {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                /** @type {?} */
                var boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true,
                });
                definingProperty = false;
                return boundFn;
            },
        };
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBRTFGLE1BQU0sQ0FBQyxPQUFPLG1DQUFtQyxFQUFPOztJQUN0RCxJQUFJLFNBQVMsQ0FBZ0I7O0lBRTdCLElBQU0sS0FBSyxHQUFHLFVBQUMsSUFBVyxJQUFLLE9BQUE7UUFDN0IsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLGdDQUFJLElBQUksR0FBRTtLQUNiLEVBSDhCLENBRzlCLENBQUM7O0lBRUYsSUFBTSxTQUFTLEdBQUc7UUFBQyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUMvQixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDckIsU0FBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN2QztLQUNGLENBQUM7O0lBR0YsbUJBQUMsU0FBZ0IsRUFBQyxDQUFDLE1BQU0sR0FBRyxjQUFNLE9BQUEsMkJBQTJCLG9CQUFDLFNBQVMsR0FBRSxFQUF2QyxDQUF1QyxDQUFDO0lBRTFFLE9BQU8sU0FBUyxDQUFDO0NBQ2xCOzs7O0FBRUQsTUFBTTtJQUNKLE9BQU8sVUFBUyxNQUFXLEVBQUUsR0FBVyxFQUFFLFVBQWU7O1FBQ3ZELElBQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7O1FBQzVCLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzdCLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSTtZQUNsQixHQUFHOzs7O2dCQUNELElBQUksZ0JBQWdCLElBQUksSUFBSSxLQUFLLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0UsT0FBTyxFQUFFLENBQUM7aUJBQ1g7O2dCQUVELElBQU0sT0FBTyxHQUFHLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7b0JBQy9CLEtBQUssRUFBRSxPQUFPO29CQUNkLFlBQVksRUFBRSxJQUFJO29CQUNsQixRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUM7Z0JBQ0gsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixPQUFPLE9BQU8sQ0FBQzthQUNoQjtTQUNGLENBQUM7S0FDSCxDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgdHlwZWRlZiBuby1pbnZhbGlkLXRoaXNcbmltcG9ydCB7IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSwgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUoZm46IGFueSkge1xuICBsZXQgcmVxdWVzdElkOiBudW1iZXIgfCBudWxsO1xuXG4gIGNvbnN0IGxhdGVyID0gKGFyZ3M6IGFueVtdKSA9PiAoKSA9PiB7XG4gICAgcmVxdWVzdElkID0gbnVsbDtcbiAgICBmbiguLi5hcmdzKTtcbiAgfTtcblxuICBjb25zdCB0aHJvdHRsZWQgPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAocmVxdWVzdElkID09IG51bGwpIHtcbiAgICAgIHJlcXVlc3RJZCA9IHJlcUFuaW1GcmFtZShsYXRlcihhcmdzKSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ub24tbnVsbC1hc3NlcnRpb25cbiAgKHRocm90dGxlZCBhcyBhbnkpLmNhbmNlbCA9ICgpID0+IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQhKTtcblxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yKCkge1xuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBhbnkpIHtcbiAgICBjb25zdCBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgbGV0IGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0KCkge1xuICAgICAgICBpZiAoZGVmaW5pbmdQcm9wZXJ0eSB8fCB0aGlzID09PSB0YXJnZXQucHJvdG90eXBlIHx8IHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJvdW5kRm4gPSB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUoZm4uYmluZCh0aGlzKSk7XG4gICAgICAgIGRlZmluaW5nUHJvcGVydHkgPSB0cnVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgICAgdmFsdWU6IGJvdW5kRm4sXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gYm91bmRGbjtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==