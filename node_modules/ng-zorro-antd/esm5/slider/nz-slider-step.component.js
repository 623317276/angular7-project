/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { MarksArray } from './nz-slider-marks.component';
var NzSliderStepComponent = /** @class */ (function () {
    function NzSliderStepComponent() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.nzLowerBound = null;
        this.nzUpperBound = null;
    }
    Object.defineProperty(NzSliderStepComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Required
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderStepComponent.prototype, "nzIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderStepComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzMarksArray"]) {
            this.buildAttrs();
        }
        if (changes["nzMarksArray"] || changes["nzLowerBound"] || changes["nzUpperBound"]) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    NzSliderStepComponent.prototype.trackById = /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    function (index, attr) {
        return attr.id;
    };
    /**
     * @return {?}
     */
    NzSliderStepComponent.prototype.buildAttrs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var orient = this.nzVertical ? 'bottom' : 'left';
        /** @type {?} */
        var prefixCls = this.nzPrefixCls;
        this.attrs = this.nzMarksArray.map(function (mark) {
            var _a, _b;
            var value = mark.value, offset = mark.offset;
            return {
                id: value,
                value: value,
                offset: offset,
                style: (_a = {},
                    _a[orient] = offset + "%",
                    _a),
                classes: (_b = {},
                    _b[prefixCls + "-dot"] = true,
                    _b[prefixCls + "-dot-active"] = false,
                    _b)
            };
        });
    };
    /**
     * @return {?}
     */
    NzSliderStepComponent.prototype.togglePointActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.attrs && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.attrs.forEach(function (attr) {
                /** @type {?} */
                var value = attr.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= _this.nzUpperBound && value >= _this.nzLowerBound);
                attr.classes[_this.nzPrefixCls + "-dot-active"] = isActive;
            });
        }
    };
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
    return NzSliderStepComponent;
}());
export { NzSliderStepComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNsaWRlci9uei1zbGlkZXItc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7eUJBUW5DLEtBQUs7eUJBQ0wsS0FBSzs7NEJBR08sSUFBSTs0QkFDSixJQUFJOztJQU1wQyxzQkFDSSw2Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYzs7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBO0lBTUQsc0JBQ0ksNkNBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBOzs7OztJQVNELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sa0JBQWU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxPQUFPLG9CQUFpQixPQUFPLGdCQUFhLElBQUksT0FBTyxnQkFBYSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7OztJQUVELHlDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQXlHO1FBQ2hJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjs7OztJQUVELDBDQUFVOzs7SUFBVjs7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7UUFDbkQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTs7WUFDN0IsSUFBQSxrQkFBSyxFQUFFLG9CQUFNLENBQVU7WUFDL0IsT0FBTztnQkFDTCxFQUFFLEVBQU8sS0FBSztnQkFDZCxLQUFLLE9BQUE7Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEtBQUs7b0JBQ0gsR0FBRSxNQUFNLElBQU8sTUFBTSxNQUFHO3VCQUN6QjtnQkFDRCxPQUFPO29CQUNMLEdBQUssU0FBUyxTQUFNLElBQVcsSUFBSTtvQkFDbkMsR0FBSyxTQUFTLGdCQUFhLElBQUksS0FBSzt1QkFDckM7YUFDRixDQUFDO1NBQ0gsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxpREFBaUI7OztJQUFqQjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs7Z0JBQ3JCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7O2dCQUN6QixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEtBQUssS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDaEUsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssSUFBSSxLQUFJLENBQUMsWUFBWSxJQUFJLEtBQUssSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2hGLElBQUksQ0FBQyxPQUFPLENBQUssS0FBSSxDQUFDLFdBQVcsZ0JBQWEsQ0FBRSxHQUFHLFFBQVEsQ0FBQzthQUM3RCxDQUFDLENBQUM7U0FDSjtLQUNGOztnQkFoRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxnQkFBZ0I7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDhLQUFzRDtpQkFDdkQ7OzsrQkFNRSxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFHTCxLQUFLOzZCQUVMLEtBQUs7NkJBU0wsS0FBSzs7Z0NBaENSOztTQVdhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE1hcmtzQXJyYXkgfSBmcm9tICcuL256LXNsaWRlci1tYXJrcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNsaWRlci1zdGVwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNsaWRlci1zdGVwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlclN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmNsdWRlZCA9IGZhbHNlO1xuXG4gIC8vIER5bmFtaWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBuekxvd2VyQm91bmQ6IG51bWJlciA9IG51bGw7XG4gIEBJbnB1dCgpIG56VXBwZXJCb3VuZDogbnVtYmVyID0gbnVsbDtcbiAgQElucHV0KCkgbnpNYXJrc0FycmF5OiBNYXJrc0FycmF5O1xuXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIG56UHJlZml4Q2xzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHsgLy8gUmVxdWlyZWRcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpJbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekluY2x1ZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcbiAgfVxuXG4gIC8vIFRPRE86IHVzaW5nIG5hbWVkIGludGVyZmFjZVxuICBhdHRyczogQXJyYXk8eyBpZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2xhc3NlczogeyBbIGtleTogc3RyaW5nIF06IGJvb2xlYW4gfSwgc3R5bGU6IG9iamVjdCB9PjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5KSB7XG4gICAgICB0aGlzLmJ1aWxkQXR0cnMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5IHx8IGNoYW5nZXMubnpMb3dlckJvdW5kIHx8IGNoYW5nZXMubnpVcHBlckJvdW5kKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGF0dHI6IHsgaWQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNsYXNzZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0sIHN0eWxlOiBvYmplY3QgfSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGF0dHIuaWQ7XG4gIH1cblxuICBidWlsZEF0dHJzKCk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWVudCA9IHRoaXMubnpWZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnO1xuICAgIGNvbnN0IHByZWZpeENscyA9IHRoaXMubnpQcmVmaXhDbHM7XG4gICAgdGhpcy5hdHRycyA9IHRoaXMubnpNYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCB9ID0gbWFyaztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkICAgICA6IHZhbHVlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBzdHlsZSAgOiB7XG4gICAgICAgICAgWyBvcmllbnQgXTogYCR7b2Zmc2V0fSVgXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICBbIGAke3ByZWZpeENsc30tZG90YCBdICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICBbIGAke3ByZWZpeENsc30tZG90LWFjdGl2ZWAgXTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF0dHJzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoIXRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA9PT0gdGhpcy5uelVwcGVyQm91bmQpIHx8XG4gICAgICAgICAgKHRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLm56VXBwZXJCb3VuZCAmJiB2YWx1ZSA+PSB0aGlzLm56TG93ZXJCb3VuZCk7XG4gICAgICAgIGF0dHIuY2xhc3Nlc1sgYCR7dGhpcy5uelByZWZpeENsc30tZG90LWFjdGl2ZWAgXSA9IGlzQWN0aXZlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==