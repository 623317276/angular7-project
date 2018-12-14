/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
export class NzTimeValueAccessorDirective {
    /**
     * @param {?} i18n
     * @param {?} elementRef
     */
    constructor(i18n, elementRef) {
        this.i18n = i18n;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    keyup() {
        this.changed();
    }
    /**
     * @return {?}
     */
    blur() {
        this.touched();
    }
    /**
     * @return {?}
     */
    changed() {
        if (this._onChange) {
            /** @type {?} */
            const value = this.i18n.parseTime(this.elementRef.nativeElement.value);
            this._onChange(value);
        }
    }
    /**
     * @return {?}
     */
    touched() {
        if (this._onTouch) {
            this._onTouch();
        }
    }
    /**
     * @return {?}
     */
    setRange() {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.elementRef.nativeElement.value = this.i18n.formatDate(value, this.nzTime);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
}
NzTimeValueAccessorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nzTime]',
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }
                ]
            },] }
];
/** @nocollapse */
NzTimeValueAccessorDirective.ctorParameters = () => [
    { type: NzI18nService },
    { type: ElementRef }
];
NzTimeValueAccessorDirective.propDecorators = {
    nzTime: [{ type: Input }],
    keyup: [{ type: HostListener, args: ['keyup',] }],
    blur: [{ type: HostListener, args: ['blur',] }]
};
function NzTimeValueAccessorDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype._onChange;
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype._onTouch;
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype.nzTime;
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype.i18n;
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGltZS1waWNrZXIvbnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVF4RCxNQUFNOzs7OztJQWtDSixZQUFvQixJQUFtQixFQUFVLFVBQXNCO1FBQW5ELFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO0tBQ3RFOzs7O0lBNUJELEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEI7Ozs7SUFHRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2hCOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7WUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtLQUNGOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7S0FDRjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hHOzs7OztJQUtELFVBQVUsQ0FBQyxLQUFXO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hGOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXlCO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7OztZQXJERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFHLGVBQWU7Z0JBQzFCLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDdkY7YUFDRjs7OztZQVBRLGFBQWE7WUFGRixVQUFVOzs7cUJBYzNCLEtBQUs7b0JBRUwsWUFBWSxTQUFDLE9BQU87bUJBS3BCLFlBQVksU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IgOiAnaW5wdXRbbnpUaW1lXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBwcml2YXRlIF9vbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIF9vblRvdWNoOiAoKSA9PiB2b2lkO1xuICBASW5wdXQoKSBuelRpbWU6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcpXG4gIGtleXVwKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy50b3VjaGVkKCk7XG4gIH1cblxuICBjaGFuZ2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmkxOG4ucGFyc2VUaW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB0b3VjaGVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vblRvdWNoKSB7XG4gICAgICB0aGlzLl9vblRvdWNoKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UmFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKHZhbHVlLCB0aGlzLm56VGltZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoID0gZm47XG4gIH1cblxufVxuIl19