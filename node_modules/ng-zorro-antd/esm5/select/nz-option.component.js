/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzOptionComponent = /** @class */ (function () {
    function NzOptionComponent() {
        this._disabled = false;
        this._customContent = false;
    }
    Object.defineProperty(NzOptionComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzOptionComponent.prototype, "nzCustomContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._customContent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customContent = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    NzOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-option',
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
                }] }
    ];
    NzOptionComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        nzLabel: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzCustomContent: [{ type: Input }]
    };
    return NzOptionComponent;
}());
export { NzOptionComponent };
function NzOptionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionComponent.prototype._disabled;
    /** @type {?} */
    NzOptionComponent.prototype._customContent;
    /** @type {?} */
    NzOptionComponent.prototype.template;
    /** @type {?} */
    NzOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzOptionComponent.prototype.nzValue;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozt5QkFPM0IsS0FBSzs4QkFDQSxLQUFLOztJQU05QixzQkFDSSx5Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBZTs7OztRQUluQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM1Qjs7Ozs7UUFQRCxVQUNvQixLQUFjO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDOzs7T0FBQTs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUssV0FBVztvQkFDeEIsc0VBQXlDO2lCQUMxQzs7OzJCQUlFLFNBQVMsU0FBQyxXQUFXOzBCQUNyQixLQUFLOzBCQUVMLEtBQUs7NkJBRUwsS0FBSztrQ0FTTCxLQUFLOzs0QkF6QlI7O1NBUWEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LW9wdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56T3B0aW9uQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY3VzdG9tQ29udGVudCA9IGZhbHNlO1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56TGFiZWw6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBuelZhbHVlOiBhbnk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDdXN0b21Db250ZW50KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY3VzdG9tQ29udGVudCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpDdXN0b21Db250ZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21Db250ZW50O1xuICB9XG59XG4iXX0=