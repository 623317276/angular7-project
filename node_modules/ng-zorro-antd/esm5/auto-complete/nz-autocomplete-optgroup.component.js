/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
var NzAutocompleteOptgroupComponent = /** @class */ (function () {
    function NzAutocompleteOptgroupComponent() {
    }
    Object.defineProperty(NzAutocompleteOptgroupComponent.prototype, "nzLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._label;
        },
        /** group 的 label，支持 'string' 和 `TemplateRef` */
        set: /**
         * group 的 label，支持 'string' 和 `TemplateRef`
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isLabelString = !(value instanceof TemplateRef);
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    NzAutocompleteOptgroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-auto-optgroup',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<div class=\"ant-select-dropdown-menu-item-group-title\">\n  <ng-container *ngIf=\"isLabelString; else labelTemplate\">{{nzLabel}}</ng-container>\n  <ng-template #labelTemplate>\n    <ng-template [ngTemplateOutlet]=\"nzLabel\"></ng-template>\n  </ng-template>\n</div>\n<ul class=\"ant-select-dropdown-menu-item-group-list\">\n  <ng-content select=\"nz-auto-option\"></ng-content>\n</ul>\n",
                    host: {
                        'role': 'group',
                        'class': 'ant-select-dropdown-menu-item-group'
                    }
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteOptgroupComponent.ctorParameters = function () { return []; };
    NzAutocompleteOptgroupComponent.propDecorators = {
        nzLabel: [{ type: Input }]
    };
    return NzAutocompleteOptgroupComponent;
}());
export { NzAutocompleteOptgroupComponent };
function NzAutocompleteOptgroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAutocompleteOptgroupComponent.prototype.isLabelString;
    /** @type {?} */
    NzAutocompleteOptgroupComponent.prototype._label;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdXRvLWNvbXBsZXRlL256LWF1dG9jb21wbGV0ZS1vcHRncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7O0lBNEJyQjtLQUNDO0lBYkQsc0JBQ0ksb0RBQU87Ozs7UUFLWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQVRELGdEQUFnRDs7Ozs7O1FBQ2hELFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCOzs7T0FBQTs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsa0JBQWtCO29CQUN2QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsZ1pBQWdFO29CQUNoRSxJQUFJLEVBQWlCO3dCQUNuQixNQUFNLEVBQUcsT0FBTzt3QkFDaEIsT0FBTyxFQUFFLHFDQUFxQztxQkFDL0M7aUJBQ0Y7Ozs7OzBCQUtFLEtBQUs7OzBDQXJCUjs7U0FpQmEsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWF1dG8tb3B0Z3JvdXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1hdXRvY29tcGxldGUtb3B0Z3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ3JvbGUnIDogJ2dyb3VwJyxcbiAgICAnY2xhc3MnOiAnYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudCB7XG4gIGlzTGFiZWxTdHJpbmc6IGJvb2xlYW47XG5cbiAgLyoqIGdyb3VwIOeahCBsYWJlbO+8jOaUr+aMgSAnc3RyaW5nJyDlkowgYFRlbXBsYXRlUmVmYCAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpMYWJlbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzTGFiZWxTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpMYWJlbCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgX2xhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG59XG4iXX0=