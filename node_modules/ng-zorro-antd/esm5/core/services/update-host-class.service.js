/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Renderer2 } from '@angular/core';
var NzUpdateHostClassService = /** @class */ (function () {
    function NzUpdateHostClassService(renderer) {
        this.renderer = renderer;
        this.classMap = {};
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    NzUpdateHostClassService.prototype.updateHostClass = /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    function (el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = tslib_1.__assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    };
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    NzUpdateHostClassService.prototype.removeClass = /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    };
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    NzUpdateHostClassService.prototype.addClass = /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                if (classMap[i]) {
                    renderer.addClass(el, i);
                }
            }
        }
    };
    NzUpdateHostClassService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzUpdateHostClassService.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return NzUpdateHostClassService;
}());
export { NzUpdateHostClassService };
function NzUpdateHostClassService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzUpdateHostClassService.prototype.classMap;
    /** @type {?} */
    NzUpdateHostClassService.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUE4QnBELGtDQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3dCQTFCcEIsRUFBRTtLQTRCcEI7Ozs7OztJQTFCRCxrREFBZTs7Ozs7SUFBZixVQUFnQixFQUFlLEVBQUUsUUFBZ0I7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsd0JBQVEsUUFBUSxDQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakQ7Ozs7Ozs7SUFFTyw4Q0FBVzs7Ozs7O2NBQUMsRUFBZSxFQUFFLFFBQWdCLEVBQUUsUUFBbUI7UUFDeEUsS0FBSyxJQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM5QixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QjtTQUNGOzs7Ozs7OztJQUdLLDJDQUFROzs7Ozs7Y0FBQyxFQUFlLEVBQUUsUUFBZ0IsRUFBRSxRQUFtQjtRQUNyRSxLQUFLLElBQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksUUFBUSxDQUFFLENBQUMsQ0FBRSxFQUFFO29CQUNqQixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtTQUNGOzs7Z0JBekJKLFVBQVU7Ozs7Z0JBRlUsU0FBUzs7bUNBQTlCOztTQUdhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjbGFzc01hcCA9IHt9O1xuXG4gIHVwZGF0ZUhvc3RDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTWFwOiBvYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKGVsLCB0aGlzLmNsYXNzTWFwLCB0aGlzLnJlbmRlcmVyKTtcbiAgICB0aGlzLmNsYXNzTWFwID0geyAuLi5jbGFzc01hcCB9O1xuICAgIHRoaXMuYWRkQ2xhc3MoZWwsIHRoaXMuY2xhc3NNYXAsIHRoaXMucmVuZGVyZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTWFwOiBvYmplY3QsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICAgIGlmIChjbGFzc01hcC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTWFwOiBvYmplY3QsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICAgIGlmIChjbGFzc01hcC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBpZiAoY2xhc3NNYXBbIGkgXSkge1xuICAgICAgICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXG4gIH1cbn1cbiJdfQ==