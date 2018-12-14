/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
export class NzAutocompleteOptgroupComponent {
    constructor() {
    }
    /**
     * group 的 label，支持 'string' 和 `TemplateRef`
     * @param {?} value
     * @return {?}
     */
    set nzLabel(value) {
        this.isLabelString = !(value instanceof TemplateRef);
        this._label = value;
    }
    /**
     * @return {?}
     */
    get nzLabel() {
        return this._label;
    }
}
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
NzAutocompleteOptgroupComponent.ctorParameters = () => [];
NzAutocompleteOptgroupComponent.propDecorators = {
    nzLabel: [{ type: Input }]
};
function NzAutocompleteOptgroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAutocompleteOptgroupComponent.prototype.isLabelString;
    /** @type {?} */
    NzAutocompleteOptgroupComponent.prototype._label;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdXRvLWNvbXBsZXRlL256LWF1dG9jb21wbGV0ZS1vcHRncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFZdkIsTUFBTTtJQWdCSjtLQUNDOzs7Ozs7SUFiRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDckI7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGtCQUFrQjtnQkFDdkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELGdaQUFnRTtnQkFDaEUsSUFBSSxFQUFpQjtvQkFDbkIsTUFBTSxFQUFHLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxxQ0FBcUM7aUJBQy9DO2FBQ0Y7Ozs7O3NCQUtFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYXV0by1vcHRncm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWF1dG9jb21wbGV0ZS1vcHRncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAncm9sZScgOiAnZ3JvdXAnLFxuICAgICdjbGFzcyc6ICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZU9wdGdyb3VwQ29tcG9uZW50IHtcbiAgaXNMYWJlbFN0cmluZzogYm9vbGVhbjtcblxuICAvKiogZ3JvdXAg55qEIGxhYmVs77yM5pSv5oyBICdzdHJpbmcnIOWSjCBgVGVtcGxhdGVSZWZgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekxhYmVsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNMYWJlbFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuekxhYmVsKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cblxuICBfbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbn1cbiJdfQ==