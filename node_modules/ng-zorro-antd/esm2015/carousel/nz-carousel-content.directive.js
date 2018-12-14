/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
export class NzCarouselContentDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._active = false;
        this._width = 0;
        this._fadeMode = false;
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this._width = value;
        this.renderer.setStyle(this.el, 'width', `${this.width}px`);
    }
    /**
     * @return {?}
     */
    get width() {
        return this._width;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set left(value) {
        this._left = value;
        if (isNotNil(this.left)) {
            this.renderer.setStyle(this.el, 'left', `${this.left}px`);
        }
        else {
            this.renderer.removeStyle(this.el, 'left');
        }
    }
    /**
     * @return {?}
     */
    get left() {
        return this._left;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set top(value) {
        this._top = value;
        if (isNotNil(this.top)) {
            this.renderer.setStyle(this.el, 'top', `${this.top}px`);
        }
        else {
            this.renderer.removeStyle(this.el, 'top');
        }
    }
    /**
     * @return {?}
     */
    get top() {
        return this._top;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isActive(value) {
        this._active = value;
        this.updateOpacity();
        if (this.isActive) {
            this.renderer.addClass(this.el, 'slick-active');
        }
        else {
            this.renderer.removeClass(this.el, 'slick-active');
        }
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this._active;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set fadeMode(value) {
        this._fadeMode = value;
        if (this.fadeMode) {
            this.renderer.setStyle(this.el, 'position', 'relative');
        }
        else {
            this.renderer.removeStyle(this.el, 'position');
        }
        this.updateOpacity();
    }
    /**
     * @return {?}
     */
    get fadeMode() {
        return this._fadeMode;
    }
    /**
     * @return {?}
     */
    updateOpacity() {
        if (this.fadeMode) {
            this.renderer.setStyle(this.el, 'opacity', this.isActive ? 1 : 0);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setStyle(this.el, 'transition', 'opacity 500ms ease');
    }
}
NzCarouselContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-carousel-content]',
                host: {
                    '[class.slick-slide]': 'true'
                }
            },] }
];
/** @nocollapse */
NzCarouselContentDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
function NzCarouselContentDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCarouselContentDirective.prototype._active;
    /** @type {?} */
    NzCarouselContentDirective.prototype._width;
    /** @type {?} */
    NzCarouselContentDirective.prototype._left;
    /** @type {?} */
    NzCarouselContentDirective.prototype._top;
    /** @type {?} */
    NzCarouselContentDirective.prototype._fadeMode;
    /** @type {?} */
    NzCarouselContentDirective.prototype.el;
    /** @type {?} */
    NzCarouselContentDirective.prototype.elementRef;
    /** @type {?} */
    NzCarouselContentDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwvbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFROUMsTUFBTTs7Ozs7SUE2RUosWUFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzt1QkE1RXJELEtBQUs7c0JBQ0UsQ0FBQzt5QkFHTixLQUFLO2tCQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtLQXdFOUM7Ozs7O0lBdEVELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztLQUM3RDs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO0tBQ0Y7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7O0lBRUQsSUFBSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQztLQUNGOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCOzs7OztJQUVELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0Y7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkU7S0FDRjs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0tBQ3JFOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLElBQUksRUFBTTtvQkFDUixxQkFBcUIsRUFBRSxNQUFNO2lCQUM5QjthQUNGOzs7O1lBWkMsVUFBVTtZQUVWLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1jYXJvdXNlbC1jb250ZW50XScsXG4gIGhvc3QgICAgOiB7XG4gICAgJ1tjbGFzcy5zbGljay1zbGlkZV0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF93aWR0aDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfbGVmdDogbnVtYmVyO1xuICBwcml2YXRlIF90b3A6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZmFkZU1vZGUgPSBmYWxzZTtcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3dpZHRoJywgYCR7dGhpcy53aWR0aH1weGApO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgc2V0IGxlZnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xlZnQgPSB2YWx1ZTtcbiAgICBpZiAoaXNOb3ROaWwodGhpcy5sZWZ0KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbGVmdCcsIGAke3RoaXMubGVmdH1weGApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdsZWZ0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGVmdDtcbiAgfVxuXG4gIHNldCB0b3AodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RvcCA9IHZhbHVlO1xuICAgIGlmIChpc05vdE5pbCh0aGlzLnRvcCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3RvcCcsIGAke3RoaXMudG9wfXB4YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ3RvcCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0b3AoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9wO1xuICB9XG5cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVPcGFjaXR5KCk7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ3NsaWNrLWFjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdzbGljay1hY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHNldCBmYWRlTW9kZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZhZGVNb2RlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuZmFkZU1vZGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ3Bvc2l0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlT3BhY2l0eSgpO1xuICB9XG5cbiAgZ2V0IGZhZGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mYWRlTW9kZTtcbiAgfVxuXG4gIHVwZGF0ZU9wYWNpdHkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmFkZU1vZGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ29wYWNpdHknLCB0aGlzLmlzQWN0aXZlID8gMSA6IDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd0cmFuc2l0aW9uJywgJ29wYWNpdHkgNTAwbXMgZWFzZScpO1xuICB9XG5cbn1cbiJdfQ==