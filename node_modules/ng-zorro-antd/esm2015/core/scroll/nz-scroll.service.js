/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    const cc = c - b;
    /** @type {?} */
    let tt = t / (d / 2);
    if (tt < 1) {
        return cc / 2 * tt * tt * tt + b;
    }
    else {
        return cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
    }
}
export class NzScrollService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            (/** @type {?} */ (el)).scrollTop = topValue;
        }
    }
    /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    getOffset(el) {
        /** @type {?} */
        const ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length)
            return ret;
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            const doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    getScroll(el, top = true) {
        /** @type {?} */
        const target = el ? el : window;
        /** @type {?} */
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        const method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        const isWindow = target === window;
        /** @type {?} */
        let ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    }
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    scrollTo(containerEl, targetTopValue = 0, easing, callback) {
        /** @type {?} */
        const target = containerEl ? containerEl : window;
        /** @type {?} */
        const scrollTop = this.getScroll(target);
        /** @type {?} */
        const startTime = Date.now();
        /** @type {?} */
        const frameFunc = () => {
            /** @type {?} */
            const timestamp = Date.now();
            /** @type {?} */
            const time = timestamp - startTime;
            this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback)
                    callback();
            }
        };
        reqAnimFrame(frameFunc);
    }
}
NzScrollService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
function NzScrollService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
/** @type {?} */
export const SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9zY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7QUFJN0Qsd0JBQXdCLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7O0lBQ2hFLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDVixPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDO1NBQU07UUFDTCxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMvQztDQUNGO0FBR0QsTUFBTTs7OztJQUlKLFlBQThCLEdBQVE7UUFDcEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDaEI7Ozs7Ozs7SUFHRCxZQUFZLENBQUMsRUFBb0IsRUFBRSxXQUFtQixDQUFDO1FBQ3JELElBQUksRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFD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LENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxRQUFRO29CQUFFLFFBQVEsRUFBRSxDQUFDO2FBQzFCO1NBQ0YsQ0FBQztRQUNGLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN6Qjs7O1lBbEZGLFVBQVU7Ozs7NENBS0ksTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7Ozs7O0FBaUY5QixNQUFNLDBDQUEwQyxHQUFhLEVBQUUsYUFBOEI7SUFDM0YsT0FBTyxhQUFhLElBQUksSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDbEQ7O0FBRUQsYUFBYSx1QkFBdUIsR0FBYTtJQUMvQyxPQUFPLEVBQUssZUFBZTtJQUMzQixVQUFVLEVBQUUsK0JBQStCO0lBQzNDLElBQUksRUFBUSxDQUFFLFFBQVEsRUFBRSxDQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBRTtDQUM5RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHJlcUFuaW1GcmFtZSB9IGZyb20gJy4uL3BvbHlmaWxsL3JlcXVlc3QtYW5pbWF0aW9uJztcblxuZXhwb3J0IHR5cGUgRWFzeWluZ0ZuID0gKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gbnVtYmVyO1xuXG5mdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBjYyA9IGMgLSBiO1xuICBsZXQgdHQgPSB0IC8gKGQgLyAyKTtcbiAgaWYgKHR0IDwgMSkge1xuICAgIHJldHVybiBjYyAvIDIgKiB0dCAqIHR0ICogdHQgKyBiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYyAvIDIgKiAoKHR0IC09IDIpICogdHQgKiB0dCArIDIpICsgYjtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpTY3JvbGxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkb2M6IERvY3VtZW50O1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnkpIHtcbiAgICB0aGlzLmRvYyA9IGRvYztcbiAgfVxuXG4gIC8qKiDorr7nva4gYGVsYCDmu5rliqjmnaHkvY3nva4gKi9cbiAgc2V0U2Nyb2xsVG9wKGVsOiBFbGVtZW50IHwgV2luZG93LCB0b3BWYWx1ZTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIGlmIChlbCA9PT0gd2luZG93KSB7XG4gICAgICB0aGlzLmRvYy5ib2R5LnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZWwgYXMgRWxlbWVudCkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIOiOt+WPliBgZWxgIOebuOWvueS6juinhueql+i3neemuyAqL1xuICBnZXRPZmZzZXQoZWw6IEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgdG9wIDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9O1xuICAgIGlmICghZWwgfHwgIWVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSByZXR1cm4gcmV0O1xuXG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChyZWN0LndpZHRoIHx8IHJlY3QuaGVpZ2h0KSB7XG4gICAgICBjb25zdCBkb2MgPSBlbC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHJldC50b3AgPSByZWN0LnRvcCAtIGRvYy5jbGllbnRUb3A7XG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdCAtIGRvYy5jbGllbnRMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQudG9wID0gcmVjdC50b3A7XG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqIOiOt+WPliBgZWxgIOa7muWKqOadoeS9jee9riAqL1xuICAvLyBUT0RPOiByZW1vdmUgJ3wgV2luZG93JyBhcyB0aGUgZmFsbGJhY2sgYWxyZWFkeSBoYXBwZW5zIGhlcmVcbiAgZ2V0U2Nyb2xsKGVsPzogRWxlbWVudCB8IFdpbmRvdywgdG9wOiBib29sZWFuID0gdHJ1ZSk6IG51bWJlciB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZWwgPyBlbCA6IHdpbmRvdztcbiAgICBjb25zdCBwcm9wID0gdG9wID8gJ3BhZ2VZT2Zmc2V0JyA6ICdwYWdlWE9mZnNldCc7XG4gICAgY29uc3QgbWV0aG9kID0gdG9wID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gICAgY29uc3QgaXNXaW5kb3cgPSB0YXJnZXQgPT09IHdpbmRvdztcbiAgICBsZXQgcmV0ID0gaXNXaW5kb3cgPyB0YXJnZXRbIHByb3AgXSA6IHRhcmdldFsgbWV0aG9kIF07XG4gICAgaWYgKGlzV2luZG93ICYmIHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICByZXQgPSB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnRbIG1ldGhvZCBdO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOS9v+eUqOWKqOeUu+W9ouW8j+WwhiBgZWxgIOa7muWKqOiHs+afkOS9jee9rlxuICAgKlxuICAgKiBAcGFyYW0gY29udGFpbmVyRWwg5a655Zmo77yM6buY6K6kIGB3aW5kb3dgXG4gICAqIEBwYXJhbSB0YXJnZXRUb3BWYWx1ZSDmu5rliqjoh7Pnm67moIcgYHRvcGAg5YC877yM6buY6K6k77yaMO+8jOebuOW9k+S6jumhtumDqFxuICAgKiBAcGFyYW0gZWFzaW5nIOWKqOS9nOeul+azle+8jOm7mOiupO+8mmBlYXNlSW5PdXRDdWJpY2BcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWKqOeUu+e7k+adn+WQjuWbnuiwg1xuICAgKi9cbiAgc2Nyb2xsVG8oXG4gICAgY29udGFpbmVyRWw6IEVsZW1lbnQgfCBXaW5kb3csXG4gICAgdGFyZ2V0VG9wVmFsdWU6IG51bWJlciA9IDAsXG4gICAgZWFzaW5nPzogRWFzeWluZ0ZuLFxuICAgIGNhbGxiYWNrPzogKCkgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBjb250YWluZXJFbCA/IGNvbnRhaW5lckVsIDogd2luZG93O1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsKHRhcmdldCk7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBmcmFtZUZ1bmMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgdGltZSA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHRhcmdldCwgKGVhc2luZyB8fCBlYXNlSW5PdXRDdWJpYykodGltZSwgc2Nyb2xsVG9wLCB0YXJnZXRUb3BWYWx1ZSwgNDUwKSk7XG4gICAgICBpZiAodGltZSA8IDQ1MCkge1xuICAgICAgICByZXFBbmltRnJhbWUoZnJhbWVGdW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZG9jOiBEb2N1bWVudCwgc2Nyb2xsU2VydmljZTogTnpTY3JvbGxTZXJ2aWNlKTogTnpTY3JvbGxTZXJ2aWNlIHtcbiAgcmV0dXJuIHNjcm9sbFNlcnZpY2UgfHwgbmV3IE56U2Nyb2xsU2VydmljZShkb2MpO1xufVxuXG5leHBvcnQgY29uc3QgU0NST0xMX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlICAgOiBOelNjcm9sbFNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXG4gIGRlcHMgICAgICA6IFsgRE9DVU1FTlQsIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBOelNjcm9sbFNlcnZpY2UgXSBdXG59O1xuIl19