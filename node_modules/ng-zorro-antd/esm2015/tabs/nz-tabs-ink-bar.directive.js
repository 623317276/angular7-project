/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { reqAnimFrame } from '../core/polyfill/request-animation';
import { toBoolean } from '../core/util/convert';
export class NzTabsInkBarDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} ngZone
     */
    constructor(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this._animated = false;
        this.nzPositionMode = 'horizontal';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAnimated(value) {
        this._animated = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAnimated() {
        return this._animated;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    alignToElement(element) {
        this.show();
        this.ngZone.runOutsideAngular(() => {
            reqAnimFrame(() => {
                /** when horizontal remove height style and add transform left **/
                if (this.nzPositionMode === 'horizontal') {
                    this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
                    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(${this.getLeftPosition(element)}, 0px, 0px)`);
                    this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
                }
                else {
                    /** when vertical remove width style and add transform top **/
                    this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
                    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(0px, ${this.getTopPosition(element)}, 0px)`);
                    this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
                }
            });
        });
    }
    /**
     * @return {?}
     */
    show() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'visible');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDisplay(value) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', value);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getLeftPosition(element) {
        return element ? element.offsetLeft + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getElementWidth(element) {
        return element ? element.offsetWidth + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getTopPosition(element) {
        return element ? element.offsetTop + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getElementHeight(element) {
        return element ? element.offsetHeight + 'px' : '0';
    }
}
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
NzTabsInkBarDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone }
];
NzTabsInkBarDirective.propDecorators = {
    nzAnimated: [{ type: Input }],
    nzPositionMode: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYnMtaW5rLWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFZakQsTUFBTTs7Ozs7O0lBY0osWUFBb0IsUUFBbUIsRUFDbkIsWUFDQTtRQUZBLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVU7UUFDVixXQUFNLEdBQU4sTUFBTTt5QkFmTixLQUFLOzhCQVdvQixZQUFZO0tBS3hEOzs7OztJQWRELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBU0QsY0FBYyxDQUFDLE9BQW9CO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVaLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLFlBQVksQ0FBQyxHQUFHLEVBQUU7O2dCQUVoQixJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssWUFBWSxFQUFFO29CQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUMvRCxlQUFlLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQzNELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDbEM7cUJBQU07O29CQUVMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQy9ELG9CQUFvQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDbkM7YUFDRixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDaEY7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3pFOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFvQjtRQUNsQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUNsRDs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDbkQ7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQW9CO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQ2pEOzs7OztJQUVELGdCQUFnQixDQUFDLE9BQW9CO1FBQ25DLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQ3BEOzs7WUF6RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLElBQUksRUFBTTtvQkFDUiwwQkFBMEIsRUFBYyxNQUFNO29CQUM5QyxtQ0FBbUMsRUFBSyxZQUFZO29CQUNwRCxzQ0FBc0MsRUFBRSxhQUFhO2lCQUN0RDthQUNGOzs7O1lBZDhDLFNBQVM7WUFBcEMsVUFBVTtZQUFTLE1BQU07Ozt5QkFrQjFDLEtBQUs7NkJBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHJlcUFuaW1GcmFtZSB9IGZyb20gJy4uL2NvcmUvcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBOelRhYlBvc2l0aW9uTW9kZSB9IGZyb20gJy4vbnotdGFic2V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei10YWJzLWluay1iYXJdJyxcbiAgaG9zdCAgICA6IHtcbiAgICAnW2NsYXNzLmFudC10YWJzLWluay1iYXJdJyAgICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXRhYnMtaW5rLWJhci1hbmltYXRlZF0nICAgOiAnbnpBbmltYXRlZCcsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1pbmstYmFyLW5vLWFuaW1hdGVkXSc6ICchbnpBbmltYXRlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRhYnNJbmtCYXJEaXJlY3RpdmUge1xuICBwcml2YXRlIF9hbmltYXRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFuaW1hdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYW5pbWF0ZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56QW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGVkO1xuICB9XG5cbiAgQElucHV0KCkgbnpQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gIH1cblxuICBhbGlnblRvRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdygpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcbiAgICAgICAgLyoqIHdoZW4gaG9yaXpvbnRhbCByZW1vdmUgaGVpZ2h0IHN0eWxlIGFuZCBhZGQgdHJhbnNmb3JtIGxlZnQgKiovXG4gICAgICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsXG4gICAgICAgICAgICBgdHJhbnNsYXRlM2QoJHt0aGlzLmdldExlZnRQb3NpdGlvbihlbGVtZW50KX0sIDBweCwgMHB4KWApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRXaWR0aChlbGVtZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqIHdoZW4gdmVydGljYWwgcmVtb3ZlIHdpZHRoIHN0eWxlIGFuZCBhZGQgdHJhbnNmb3JtIHRvcCAqKi9cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgIGB0cmFuc2xhdGUzZCgwcHgsICR7dGhpcy5nZXRUb3BQb3NpdGlvbihlbGVtZW50KX0sIDBweClgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JyxcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudEhlaWdodChlbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gIH1cblxuICBzZXREaXNwbGF5KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHZhbHVlKTtcbiAgfVxuXG4gIGdldExlZnRQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldExlZnQgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0RWxlbWVudFdpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0VG9wUG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRUb3AgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0RWxlbWVudEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCArICdweCcgOiAnMCc7XG4gIH1cbn1cbiJdfQ==