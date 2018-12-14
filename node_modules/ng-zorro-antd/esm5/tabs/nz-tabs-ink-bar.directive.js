/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { reqAnimFrame } from '../core/polyfill/request-animation';
import { toBoolean } from '../core/util/convert';
var NzTabsInkBarDirective = /** @class */ (function () {
    function NzTabsInkBarDirective(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this._animated = false;
        this.nzPositionMode = 'horizontal';
    }
    Object.defineProperty(NzTabsInkBarDirective.prototype, "nzAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._animated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animated = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.alignToElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        this.show();
        this.ngZone.runOutsideAngular(function () {
            reqAnimFrame(function () {
                /** when horizontal remove height style and add transform left **/
                if (_this.nzPositionMode === 'horizontal') {
                    _this.renderer.removeStyle(_this.elementRef.nativeElement, 'height');
                    _this.renderer.setStyle(_this.elementRef.nativeElement, 'transform', "translate3d(" + _this.getLeftPosition(element) + ", 0px, 0px)");
                    _this.renderer.setStyle(_this.elementRef.nativeElement, 'width', _this.getElementWidth(element));
                }
                else {
                    /** when vertical remove width style and add transform top **/
                    /** when vertical remove width style and add transform top **/
                    _this.renderer.removeStyle(_this.elementRef.nativeElement, 'width');
                    _this.renderer.setStyle(_this.elementRef.nativeElement, 'transform', "translate3d(0px, " + _this.getTopPosition(element) + ", 0px)");
                    _this.renderer.setStyle(_this.elementRef.nativeElement, 'height', _this.getElementHeight(element));
                }
            });
        });
    };
    /**
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'visible');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.setDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', value);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getLeftPosition = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getElementWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getTopPosition = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetTop + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzTabsInkBarDirective.prototype.getElementHeight = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetHeight + 'px' : '0';
    };
    NzTabsInkBarDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-tabs-ink-bar]',
                    host: {
                        '[class.ant-tabs-ink-bar]': 'true',
                        '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
                        '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTabsInkBarDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    NzTabsInkBarDirective.propDecorators = {
        nzAnimated: [{ type: Input }],
        nzPositionMode: [{ type: Input }]
    };
    return NzTabsInkBarDirective;
}());
export { NzTabsInkBarDirective };
function NzTabsInkBarDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabsInkBarDirective.prototype._animated;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.nzPositionMode;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.renderer;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.elementRef;
    /** @type {?} */
    NzTabsInkBarDirective.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYnMtaW5rLWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBMEIvQywrQkFBb0IsUUFBbUIsRUFDbkIsWUFDQTtRQUZBLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVU7UUFDVixXQUFNLEdBQU4sTUFBTTt5QkFmTixLQUFLOzhCQVdvQixZQUFZO0tBS3hEO0lBZEQsc0JBQ0ksNkNBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBOzs7OztJQWFELDhDQUFjOzs7O0lBQWQsVUFBZSxPQUFvQjtRQUFuQyxpQkFzQkM7UUFyQkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVosSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUM1QixZQUFZLENBQUM7O2dCQUVYLElBQUksS0FBSSxDQUFDLGNBQWMsS0FBSyxZQUFZLEVBQUU7b0JBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNuRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQy9ELGlCQUFlLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGdCQUFhLENBQUMsQ0FBQztvQkFDN0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUMzRCxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNOztvQkFFTCxBQURBLDhEQUE4RDtvQkFDOUQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2xFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFDL0Qsc0JBQW9CLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVEsQ0FBQyxDQUFDO29CQUM1RCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQzVELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNuQzthQUNGLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsb0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2hGOzs7OztJQUVELDBDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN6RTs7Ozs7SUFFRCwrQ0FBZTs7OztJQUFmLFVBQWdCLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQ2xEOzs7OztJQUVELCtDQUFlOzs7O0lBQWYsVUFBZ0IsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDbkQ7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLE9BQW9CO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQ2pEOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixPQUFvQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUNwRDs7Z0JBekVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixJQUFJLEVBQU07d0JBQ1IsMEJBQTBCLEVBQWMsTUFBTTt3QkFDOUMsbUNBQW1DLEVBQUssWUFBWTt3QkFDcEQsc0NBQXNDLEVBQUUsYUFBYTtxQkFDdEQ7aUJBQ0Y7Ozs7Z0JBZDhDLFNBQVM7Z0JBQXBDLFVBQVU7Z0JBQVMsTUFBTTs7OzZCQWtCMUMsS0FBSztpQ0FTTCxLQUFLOztnQ0EzQlI7O1NBZWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vY29yZS9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56VGFiUG9zaXRpb25Nb2RlIH0gZnJvbSAnLi9uei10YWJzZXQuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXRhYnMtaW5rLWJhcl0nLFxuICBob3N0ICAgIDoge1xuICAgICdbY2xhc3MuYW50LXRhYnMtaW5rLWJhcl0nICAgICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1pbmstYmFyLWFuaW1hdGVkXScgICA6ICduekFuaW1hdGVkJyxcbiAgICAnW2NsYXNzLmFudC10YWJzLWluay1iYXItbm8tYW5pbWF0ZWRdJzogJyFuekFuaW1hdGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFic0lua0JhckRpcmVjdGl2ZSB7XG4gIHByaXZhdGUgX2FuaW1hdGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG56QW5pbWF0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbmltYXRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpBbmltYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0ZWQ7XG4gIH1cblxuICBASW5wdXQoKSBuelBvc2l0aW9uTW9kZTogTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgfVxuXG4gIGFsaWduVG9FbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5zaG93KCk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXFBbmltRnJhbWUoKCkgPT4ge1xuICAgICAgICAvKiogd2hlbiBob3Jpem9udGFsIHJlbW92ZSBoZWlnaHQgc3R5bGUgYW5kIGFkZCB0cmFuc2Zvcm0gbGVmdCAqKi9cbiAgICAgICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgIGB0cmFuc2xhdGUzZCgke3RoaXMuZ2V0TGVmdFBvc2l0aW9uKGVsZW1lbnQpfSwgMHB4LCAwcHgpYCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyxcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudFdpZHRoKGVsZW1lbnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiogd2hlbiB2ZXJ0aWNhbCByZW1vdmUgd2lkdGggc3R5bGUgYW5kIGFkZCB0cmFuc2Zvcm0gdG9wICoqL1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLFxuICAgICAgICAgICAgYHRyYW5zbGF0ZTNkKDBweCwgJHt0aGlzLmdldFRvcFBvc2l0aW9uKGVsZW1lbnQpfSwgMHB4KWApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLFxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50SGVpZ2h0KGVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgfVxuXG4gIHNldERpc3BsYXkodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0TGVmdFBvc2l0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0TGVmdCArICdweCcgOiAnMCc7XG4gIH1cblxuICBnZXRFbGVtZW50V2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRXaWR0aCArICdweCcgOiAnMCc7XG4gIH1cblxuICBnZXRUb3BQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldFRvcCArICdweCcgOiAnMCc7XG4gIH1cblxuICBnZXRFbGVtZW50SGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JyA6ICcwJztcbiAgfVxufVxuIl19