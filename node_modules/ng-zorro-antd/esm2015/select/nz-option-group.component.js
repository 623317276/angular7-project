/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
export class NzOptionGroupComponent {
    /**
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
NzOptionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-option-group',
                template: "<ng-content></ng-content>"
            }] }
];
NzOptionGroupComponent.propDecorators = {
    listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
    nzLabel: [{ type: Input }]
};
function NzOptionGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionGroupComponent.prototype._label;
    /** @type {?} */
    NzOptionGroupComponent.prototype.isLabelString;
    /** @type {?} */
    NzOptionGroupComponent.prototype.listOfNzOptionComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNMUQsTUFBTTs7Ozs7SUFLSixJQUNJLE9BQU8sQ0FBQyxLQUFpQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDckI7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFLLGlCQUFpQjtnQkFDOUIscUNBQStDO2FBQ2hEOzs7c0NBSUUsZUFBZSxTQUFDLGlCQUFpQjtzQkFFakMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICduei1vcHRpb24tZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IHtcbiAgX2xhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgaXNMYWJlbFN0cmluZzogYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZHJlbihOek9wdGlvbkNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD47XG5cbiAgQElucHV0KClcbiAgc2V0IG56TGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0xhYmVsU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56TGFiZWwoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuXG59XG4iXX0=