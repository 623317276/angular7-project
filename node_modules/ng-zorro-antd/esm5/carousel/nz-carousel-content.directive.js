/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
var NzCarouselContentDirective = /** @class */ (function () {
    function NzCarouselContentDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._active = false;
        this._width = 0;
        this._fadeMode = false;
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(NzCarouselContentDirective.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this._width;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
            this.renderer.setStyle(this.el, 'width', this.width + "px");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "left", {
        get: /**
         * @return {?}
         */
        function () {
            return this._left;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._left = value;
            if (isNotNil(this.left)) {
                this.renderer.setStyle(this.el, 'left', this.left + "px");
            }
            else {
                this.renderer.removeStyle(this.el, 'left');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "top", {
        get: /**
         * @return {?}
         */
        function () {
            return this._top;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._top = value;
            if (isNotNil(this.top)) {
                this.renderer.setStyle(this.el, 'top', this.top + "px");
            }
            else {
                this.renderer.removeStyle(this.el, 'top');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._active = value;
            this.updateOpacity();
            if (this.isActive) {
                this.renderer.addClass(this.el, 'slick-active');
            }
            else {
                this.renderer.removeClass(this.el, 'slick-active');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "fadeMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fadeMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fadeMode = value;
            if (this.fadeMode) {
                this.renderer.setStyle(this.el, 'position', 'relative');
            }
            else {
                this.renderer.removeStyle(this.el, 'position');
            }
            this.updateOpacity();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselContentDirective.prototype.updateOpacity = /**
     * @return {?}
     */
    function () {
        if (this.fadeMode) {
            this.renderer.setStyle(this.el, 'opacity', this.isActive ? 1 : 0);
        }
    };
    /**
     * @return {?}
     */
    NzCarouselContentDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'transition', 'opacity 500ms ease');
    };
    NzCarouselContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-carousel-content]',
                    host: {
                        '[class.slick-slide]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzCarouselContentDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return NzCarouselContentDirective;
}());
export { NzCarouselContentDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwvbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBcUY1QyxvQ0FBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzt1QkE1RXJELEtBQUs7c0JBQ0UsQ0FBQzt5QkFHTixLQUFLO2tCQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtLQXdFOUM7SUF0RUQsc0JBQUksNkNBQUs7Ozs7UUFLVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFQRCxVQUFVLEtBQWE7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUssSUFBSSxDQUFDLEtBQUssT0FBSSxDQUFDLENBQUM7U0FDN0Q7OztPQUFBO0lBTUQsc0JBQUksNENBQUk7Ozs7UUFTUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Ozs7UUFYRCxVQUFTLEtBQWE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBSyxJQUFJLENBQUMsSUFBSSxPQUFJLENBQUMsQ0FBQzthQUMzRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzVDO1NBQ0Y7OztPQUFBO0lBTUQsc0JBQUksMkNBQUc7Ozs7UUFTUDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjs7Ozs7UUFYRCxVQUFRLEtBQWE7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBSyxJQUFJLENBQUMsR0FBRyxPQUFJLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzNDO1NBQ0Y7OztPQUFBO0lBTUQsc0JBQUksZ0RBQVE7Ozs7UUFVWjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFaRCxVQUFhLEtBQWM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUNqRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0Y7OztPQUFBO0lBTUQsc0JBQUksZ0RBQVE7Ozs7UUFVWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFaRCxVQUFhLEtBQWM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCOzs7T0FBQTs7OztJQU1ELGtEQUFhOzs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25FO0tBQ0Y7Ozs7SUFLRCw2Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0tBQ3JFOztnQkF4RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLElBQUksRUFBTTt3QkFDUixxQkFBcUIsRUFBRSxNQUFNO3FCQUM5QjtpQkFDRjs7OztnQkFaQyxVQUFVO2dCQUVWLFNBQVM7O3FDQUpYOztTQWVhLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWNhcm91c2VsLWNvbnRlbnRdJyxcbiAgaG9zdCAgICA6IHtcbiAgICAnW2NsYXNzLnNsaWNrLXNsaWRlXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9sZWZ0OiBudW1iZXI7XG4gIHByaXZhdGUgX3RvcDogbnVtYmVyO1xuICBwcml2YXRlIF9mYWRlTW9kZSA9IGZhbHNlO1xuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnLCBgJHt0aGlzLndpZHRofXB4YCk7XG4gIH1cblxuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICBzZXQgbGVmdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGVmdCA9IHZhbHVlO1xuICAgIGlmIChpc05vdE5pbCh0aGlzLmxlZnQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdsZWZ0JywgYCR7dGhpcy5sZWZ0fXB4YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ2xlZnQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sZWZ0O1xuICB9XG5cbiAgc2V0IHRvcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG9wID0gdmFsdWU7XG4gICAgaWYgKGlzTm90TmlsKHRoaXMudG9wKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAndG9wJywgYCR7dGhpcy50b3B9cHhgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAndG9wJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3A7XG4gIH1cblxuICBzZXQgaXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZU9wYWNpdHkoKTtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnc2xpY2stYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ3NsaWNrLWFjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgc2V0IGZhZGVNb2RlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmFkZU1vZGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5mYWRlTW9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVPcGFjaXR5KCk7XG4gIH1cblxuICBnZXQgZmFkZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhZGVNb2RlO1xuICB9XG5cbiAgdXBkYXRlT3BhY2l0eSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mYWRlTW9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnb3BhY2l0eScsIHRoaXMuaXNBY3RpdmUgPyAxIDogMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3RyYW5zaXRpb24nLCAnb3BhY2l0eSA1MDBtcyBlYXNlJyk7XG4gIH1cblxufVxuIl19