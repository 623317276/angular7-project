/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { MarksArray } from './nz-slider-marks.component';
export class NzSliderStepComponent {
    constructor() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.nzLowerBound = null;
        this.nzUpperBound = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVertical(value) {
        // Required
        this._vertical = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzVertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIncluded(value) {
        this._included = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzIncluded() {
        return this._included;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzMarksArray"]) {
            this.buildAttrs();
        }
        if (changes["nzMarksArray"] || changes["nzLowerBound"] || changes["nzUpperBound"]) {
            this.togglePointActive();
        }
    }
    /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    trackById(index, attr) {
        return attr.id;
    }
    /**
     * @return {?}
     */
    buildAttrs() {
        /** @type {?} */
        const orient = this.nzVertical ? 'bottom' : 'left';
        /** @type {?} */
        const prefixCls = this.nzPrefixCls;
        this.attrs = this.nzMarksArray.map(mark => {
            const { value, offset } = mark;
            return {
                id: value,
                value,
                offset,
                style: {
                    [orient]: `${offset}%`
                },
                classes: {
                    [`${prefixCls}-dot`]: true,
                    [`${prefixCls}-dot-active`]: false
                }
            };
        });
    }
    /**
     * @return {?}
     */
    togglePointActive() {
        if (this.attrs && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.attrs.forEach(attr => {
                /** @type {?} */
                const value = attr.value;
                /** @type {?} */
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= this.nzUpperBound && value >= this.nzLowerBound);
                attr.classes[`${this.nzPrefixCls}-dot-active`] = isActive;
            });
        }
    }
}
NzSliderStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-slider-step',
                preserveWhitespaces: false,
                template: "<div class=\"{{nzPrefixCls}}-step\">\n  <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\"></span>\n</div>"
            }] }
];
NzSliderStepComponent.propDecorators = {
    nzLowerBound: [{ type: Input }],
    nzUpperBound: [{ type: Input }],
    nzMarksArray: [{ type: Input }],
    nzPrefixCls: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzIncluded: [{ type: Input }]
};
function NzSliderStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderStepComponent.prototype._vertical;
    /** @type {?} */
    NzSliderStepComponent.prototype._included;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzPrefixCls;
    /** @type {?} */
    NzSliderStepComponent.prototype.attrs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNsaWRlci9uei1zbGlkZXItc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBT3pELE1BQU07O3lCQUNnQixLQUFLO3lCQUNMLEtBQUs7OzRCQUdPLElBQUk7NEJBQ0osSUFBSTs7Ozs7O0lBTXBDLElBQ0ksVUFBVSxDQUFDLEtBQWM7O1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBS0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxrQkFBZTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE9BQU8sb0JBQWlCLE9BQU8sZ0JBQWEsSUFBSSxPQUFPLGdCQUFhLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7S0FDRjs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUF5RztRQUNoSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDaEI7Ozs7SUFFRCxVQUFVOztRQUNSLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDOztRQUNuRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDL0IsT0FBTztnQkFDTCxFQUFFLEVBQU8sS0FBSztnQkFDZCxLQUFLO2dCQUNMLE1BQU07Z0JBQ04sS0FBSyxFQUFJO29CQUNQLENBQUUsTUFBTSxDQUFFLEVBQUUsR0FBRyxNQUFNLEdBQUc7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxDQUFFLEdBQUcsU0FBUyxNQUFNLENBQUUsRUFBUyxJQUFJO29CQUNuQyxDQUFFLEdBQUcsU0FBUyxhQUFhLENBQUUsRUFBRSxLQUFLO2lCQUNyQzthQUNGLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUMxRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7O2dCQUN6QixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDaEUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2hGLElBQUksQ0FBQyxPQUFPLENBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxhQUFhLENBQUUsR0FBRyxRQUFRLENBQUM7YUFDN0QsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7O1lBaEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsZ0JBQWdCO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiw4S0FBc0Q7YUFDdkQ7OzsyQkFNRSxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFHTCxLQUFLO3lCQUVMLEtBQUs7eUJBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE1hcmtzQXJyYXkgfSBmcm9tICcuL256LXNsaWRlci1tYXJrcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNsaWRlci1zdGVwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNsaWRlci1zdGVwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlclN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmNsdWRlZCA9IGZhbHNlO1xuXG4gIC8vIER5bmFtaWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBuekxvd2VyQm91bmQ6IG51bWJlciA9IG51bGw7XG4gIEBJbnB1dCgpIG56VXBwZXJCb3VuZDogbnVtYmVyID0gbnVsbDtcbiAgQElucHV0KCkgbnpNYXJrc0FycmF5OiBNYXJrc0FycmF5O1xuXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIG56UHJlZml4Q2xzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHsgLy8gUmVxdWlyZWRcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpJbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekluY2x1ZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcbiAgfVxuXG4gIC8vIFRPRE86IHVzaW5nIG5hbWVkIGludGVyZmFjZVxuICBhdHRyczogQXJyYXk8eyBpZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2xhc3NlczogeyBbIGtleTogc3RyaW5nIF06IGJvb2xlYW4gfSwgc3R5bGU6IG9iamVjdCB9PjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5KSB7XG4gICAgICB0aGlzLmJ1aWxkQXR0cnMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5IHx8IGNoYW5nZXMubnpMb3dlckJvdW5kIHx8IGNoYW5nZXMubnpVcHBlckJvdW5kKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGF0dHI6IHsgaWQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNsYXNzZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0sIHN0eWxlOiBvYmplY3QgfSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGF0dHIuaWQ7XG4gIH1cblxuICBidWlsZEF0dHJzKCk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWVudCA9IHRoaXMubnpWZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnO1xuICAgIGNvbnN0IHByZWZpeENscyA9IHRoaXMubnpQcmVmaXhDbHM7XG4gICAgdGhpcy5hdHRycyA9IHRoaXMubnpNYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCB9ID0gbWFyaztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkICAgICA6IHZhbHVlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBzdHlsZSAgOiB7XG4gICAgICAgICAgWyBvcmllbnQgXTogYCR7b2Zmc2V0fSVgXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICBbIGAke3ByZWZpeENsc30tZG90YCBdICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICBbIGAke3ByZWZpeENsc30tZG90LWFjdGl2ZWAgXTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF0dHJzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoIXRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA9PT0gdGhpcy5uelVwcGVyQm91bmQpIHx8XG4gICAgICAgICAgKHRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLm56VXBwZXJCb3VuZCAmJiB2YWx1ZSA+PSB0aGlzLm56TG93ZXJCb3VuZCk7XG4gICAgICAgIGF0dHIuY2xhc3Nlc1sgYCR7dGhpcy5uelByZWZpeENsc30tZG90LWFjdGl2ZWAgXSA9IGlzQWN0aXZlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==