/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
var NzOptionGroupComponent = /** @class */ (function () {
    function NzOptionGroupComponent() {
    }
    Object.defineProperty(NzOptionGroupComponent.prototype, "nzLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._label;
        },
        set: /**
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
    return NzOptionGroupComponent;
}());
export { NzOptionGroupComponent };
function NzOptionGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionGroupComponent.prototype._label;
    /** @type {?} */
    NzOptionGroupComponent.prototype.isLabelString;
    /** @type {?} */
    NzOptionGroupComponent.prototype.listOfNzOptionComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7SUFXeEQsc0JBQ0ksMkNBQU87Ozs7UUFLWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFSRCxVQUNZLEtBQWlDO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7O09BQUE7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUssaUJBQWlCO29CQUM5QixxQ0FBK0M7aUJBQ2hEOzs7MENBSUUsZUFBZSxTQUFDLGlCQUFpQjswQkFFakMsS0FBSzs7aUNBWlI7O1NBT2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LW9wdGlvbi1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56T3B0aW9uR3JvdXBDb21wb25lbnQge1xuICBfbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBpc0xhYmVsU3RyaW5nOiBib29sZWFuO1xuICBAQ29udGVudENoaWxkcmVuKE56T3B0aW9uQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpMYWJlbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzTGFiZWxTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpMYWJlbCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbn1cbiJdfQ==