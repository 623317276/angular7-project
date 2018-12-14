/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzInputDirective } from './nz-input.directive';
var NzInputGroupComponent = /** @class */ (function () {
    function NzInputGroupComponent(el) {
        this.el = el;
        this._addOnBefore = '';
        this._addOnAfter = '';
        this._prefix = '';
        this._suffix = '';
        this._size = 'default';
        this._compact = false;
        this._search = false;
    }
    Object.defineProperty(NzInputGroupComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.updateChildrenInputSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "nzCompact", {
        get: /**
         * @return {?}
         */
        function () {
            return this._compact;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._compact = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "nzAddOnBefore", {
        get: /**
         * @return {?}
         */
        function () {
            return this._addOnBefore;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isAddOnBeforeString = !(value instanceof TemplateRef);
            this._addOnBefore = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "nzAddOnAfter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._addOnAfter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isAddOnAfterString = !(value instanceof TemplateRef);
            this._addOnAfter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "nzPrefix", {
        get: /**
         * @return {?}
         */
        function () {
            return this._prefix;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isPrefixString = !(value instanceof TemplateRef);
            this._prefix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "nzSuffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this._suffix;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isSuffixString = !(value instanceof TemplateRef);
            this._suffix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "nzSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._search;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._search = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLarge", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmall", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return (!!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isAffixWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return (!!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon)) && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isAddOn", {
        get: /**
         * @return {?}
         */
        function () {
            return !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isAffix) && (!this.isAddOn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isGroup && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeGroupWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAddOn && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAffixWrapper && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSearch && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isGroup && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAffixWrapper && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallGroupWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAddOn && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSearch && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.updateChildrenInputSize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzInputDirectiveQueryList) {
            this.nzInputDirectiveQueryList.forEach(function (item) { return item.nzSize = _this.nzSize; });
        }
    };
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.updateChildrenInputSize();
    };
    NzInputGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-input-group',
                    preserveWhitespaces: false,
                    template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\n  <span class=\"ant-input-group-addon\" *ngIf=\"nzAddOnBefore || nzAddOnBeforeIcon\">\n    <i nz-icon [ngClass]=\"nzAddOnBeforeIcon\" *ngIf=\"nzAddOnBeforeIcon\"></i>\n    <ng-container *ngIf=\"isAddOnBeforeString; else addOnBeforeTemplate\">{{ nzAddOnBefore }}</ng-container>\n    <ng-template #addOnBeforeTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzAddOnBefore\"></ng-template>\n    </ng-template>\n  </span>\n  <ng-template [ngIf]=\"!isAffix\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n  </span>\n  <span class=\"ant-input-group-addon\" *ngIf=\"nzAddOnAfter || nzAddOnAfterIcon\">\n    <i nz-icon [ngClass]=\"nzAddOnAfterIcon\" *ngIf=\"nzAddOnAfterIcon\"></i>\n    <ng-container *ngIf=\"isAddOnAfterString; else addOnAfterTemplate\">{{ nzAddOnAfter }}</ng-container>\n    <ng-template #addOnAfterTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzAddOnAfter\"></ng-template>\n    </ng-template>\n  </span>\n</span>\n<ng-container *ngIf=\"isAffix && !isAddOn\">\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n</ng-container>\n<ng-template #affixTemplate>\n  <span class=\"ant-input-prefix\" *ngIf=\"nzPrefix || nzPrefixIcon\">\n    <!-- TODO: should have a class to set its color, cc: antd-->\n    <i nz-icon [ngClass]=\"nzPrefixIcon\" *ngIf=\"nzPrefixIcon\" style=\"color: rgba(0, 0, 0, 0.25)\"></i>\n    <ng-container *ngIf=\"isPrefixString; else prefixTemplate\">{{ nzPrefix }}</ng-container>\n    <ng-template #prefixTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzPrefix\"></ng-template>\n    </ng-template>\n  </span>\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  <span class=\"ant-input-suffix\" *ngIf=\"nzSuffix || nzSuffixIcon\">\n    <i nz-icon [ngClass]=\"nzSuffixIcon\" *ngIf=\"nzSuffixIcon\"></i>\n    <ng-container *ngIf=\"isSuffixString; else suffixTemplate\">{{ nzSuffix }}</ng-container>\n    <ng-template #suffixTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzSuffix\"></ng-template>\n    </ng-template>\n  </span>\n</ng-template>\n<ng-template [ngIf]=\"isGroup\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>"
                }] }
    ];
    /** @nocollapse */
    NzInputGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NzInputGroupComponent.propDecorators = {
        nzInputDirectiveQueryList: [{ type: ContentChildren, args: [NzInputDirective,] }],
        nzAddOnBeforeIcon: [{ type: Input }],
        nzAddOnAfterIcon: [{ type: Input }],
        nzPrefixIcon: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzCompact: [{ type: Input }, { type: HostBinding, args: ["class.ant-input-group-compact",] }],
        nzAddOnBefore: [{ type: Input }],
        nzAddOnAfter: [{ type: Input }],
        nzPrefix: [{ type: Input }],
        nzSuffix: [{ type: Input }],
        nzSearch: [{ type: Input }, { type: HostBinding, args: ["class.ant-input-search-enter-button",] }, { type: HostBinding, args: ["class.ant-input-search",] }],
        isAffixWrapper: [{ type: HostBinding, args: ['class.ant-input-affix-wrapper',] }],
        isAddOn: [{ type: HostBinding, args: ['class.ant-input-group-wrapper',] }],
        isGroup: [{ type: HostBinding, args: ['class.ant-input-group',] }],
        isLargeGroup: [{ type: HostBinding, args: ["class.ant-input-group-lg",] }],
        isLargeGroupWrapper: [{ type: HostBinding, args: ["class.ant-input-group-wrapper-lg",] }],
        isLargeAffix: [{ type: HostBinding, args: ["class.ant-input-affix-wrapper-lg",] }],
        isLargeSearch: [{ type: HostBinding, args: ["class.ant-input-search-lg",] }],
        isSmallGroup: [{ type: HostBinding, args: ["class.ant-input-group-sm",] }],
        isSmallAffix: [{ type: HostBinding, args: ["class.ant-input-affix-wrapper-sm",] }],
        isSmallGroupWrapper: [{ type: HostBinding, args: ["class.ant-input-group-wrapper-sm",] }],
        isSmallSearch: [{ type: HostBinding, args: ["class.ant-input-search-sm",] }]
    };
    return NzInputGroupComponent;
}());
export { NzInputGroupComponent };
function NzInputGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzInputGroupComponent.prototype._addOnBefore;
    /** @type {?} */
    NzInputGroupComponent.prototype._addOnAfter;
    /** @type {?} */
    NzInputGroupComponent.prototype._prefix;
    /** @type {?} */
    NzInputGroupComponent.prototype._suffix;
    /** @type {?} */
    NzInputGroupComponent.prototype._size;
    /** @type {?} */
    NzInputGroupComponent.prototype._compact;
    /** @type {?} */
    NzInputGroupComponent.prototype._search;
    /** @type {?} */
    NzInputGroupComponent.prototype.isAddOnBeforeString;
    /** @type {?} */
    NzInputGroupComponent.prototype.isAddOnAfterString;
    /** @type {?} */
    NzInputGroupComponent.prototype.isPrefixString;
    /** @type {?} */
    NzInputGroupComponent.prototype.isSuffixString;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzInputDirectiveQueryList;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBeforeIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfterIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImlucHV0L256LWlucHV0LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBNEt0RCwrQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7NEJBaEtpQixFQUFFOzJCQUNILEVBQUU7dUJBQ04sRUFBRTt1QkFDRixFQUFFO3FCQUNWLFNBQVM7d0JBQzVCLEtBQUs7dUJBQ04sS0FBSztLQTRKdEI7SUFqSkQsc0JBQWEseUNBQU07Ozs7UUFLbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBUEQsVUFBb0IsS0FBMkI7WUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7OztPQUFBO0lBTUQsc0JBRUksNENBQVM7Ozs7UUFJYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFSRCxVQUVjLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7OztPQUFBO0lBTUQsc0JBQ0ksZ0RBQWE7Ozs7UUFLakI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUI7Ozs7O1FBUkQsVUFDa0IsS0FBaUM7WUFDakQsSUFBSSxDQUFDLG1CQUFtQixHQUFH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QUs7K0JBQ0wsS0FBSzt5QkFFTCxLQUFLOzRCQVNMLEtBQUssWUFDTCxXQUFXLFNBQUMsK0JBQStCO2dDQVMzQyxLQUFLOytCQVVMLEtBQUs7MkJBVUwsS0FBSzsyQkFVTCxLQUFLOzJCQVVMLEtBQUssWUFDTCxXQUFXLFNBQUMscUNBQXFDLGNBQ2pELFdBQVcsU0FBQyx3QkFBd0I7aUNBcUJwQyxXQUFXLFNBQUMsK0JBQStCOzBCQUszQyxXQUFXLFNBQUMsK0JBQStCOzBCQUszQyxXQUFXLFNBQUMsdUJBQXVCOytCQUtuQyxXQUFXLFNBQUMsMEJBQTBCO3NDQUt0QyxXQUFXLFNBQUMsa0NBQWtDOytCQUs5QyxXQUFXLFNBQUMsa0NBQWtDO2dDQUs5QyxXQUFXLFNBQUMsMkJBQTJCOytCQUt2QyxXQUFXLFNBQUMsMEJBQTBCOytCQUt0QyxXQUFXLFNBQUMsa0NBQWtDO3NDQUs5QyxXQUFXLFNBQUMsa0NBQWtDO2dDQUs5QyxXQUFXLFNBQUMsMkJBQTJCOztnQ0E3SzFDOztTQXVCYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBOeklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1pbnB1dC5kaXJlY3RpdmUnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IHR5cGUgVElucHV0R3JvdXBJY29uQ2xhc3MgPSBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBbIGtsYXNzOiBzdHJpbmcgXTogYW55OyB9O1xuZXhwb3J0IHR5cGUgTnpJbnB1dEdyb3VwU2l6ZVR5cGUgPSAnbGFyZ2UnIHwgJ2RlZmF1bHQnIHwgJ3NtYWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1pbnB1dC1ncm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1pbnB1dC1ncm91cC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBOeklucHV0R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfYWRkT25CZWZvcmU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJyc7XG4gIHByaXZhdGUgX2FkZE9uQWZ0ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJyc7XG4gIHByaXZhdGUgX3ByZWZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnJztcbiAgcHJpdmF0ZSBfc3VmZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcnO1xuICBwcml2YXRlIF9zaXplOiBOeklucHV0R3JvdXBTaXplVHlwZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBfY29tcGFjdCA9IGZhbHNlO1xuICBwcml2YXRlIF9zZWFyY2ggPSBmYWxzZTtcbiAgaXNBZGRPbkJlZm9yZVN0cmluZzogYm9vbGVhbjtcbiAgaXNBZGRPbkFmdGVyU3RyaW5nOiBib29sZWFuO1xuICBpc1ByZWZpeFN0cmluZzogYm9vbGVhbjtcbiAgaXNTdWZmaXhTdHJpbmc6IGJvb2xlYW47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpJbnB1dERpcmVjdGl2ZSkgbnpJbnB1dERpcmVjdGl2ZVF1ZXJ5TGlzdDogUXVlcnlMaXN0PE56SW5wdXREaXJlY3RpdmU+O1xuICBASW5wdXQoKSBuekFkZE9uQmVmb3JlSWNvbjogVElucHV0R3JvdXBJY29uQ2xhc3M7XG4gIEBJbnB1dCgpIG56QWRkT25BZnRlckljb246IFRJbnB1dEdyb3VwSWNvbkNsYXNzO1xuICBASW5wdXQoKSBuelByZWZpeEljb246IFRJbnB1dEdyb3VwSWNvbkNsYXNzO1xuICBASW5wdXQoKSBuelN1ZmZpeEljb246IFRJbnB1dEdyb3VwSWNvbkNsYXNzO1xuXG4gIEBJbnB1dCgpIHNldCBuelNpemUodmFsdWU6IE56SW5wdXRHcm91cFNpemVUeXBlKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcbiAgfVxuXG4gIGdldCBuelNpemUoKTogTnpJbnB1dEdyb3VwU2l6ZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdGApXG4gIHNldCBuekNvbXBhY3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb21wYWN0ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekNvbXBhY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhY3Q7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBZGRPbkJlZm9yZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzQWRkT25CZWZvcmVTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2FkZE9uQmVmb3JlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpBZGRPbkJlZm9yZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZE9uQmVmb3JlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QWRkT25BZnRlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzQWRkT25BZnRlclN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fYWRkT25BZnRlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56QWRkT25BZnRlcigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZE9uQWZ0ZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQcmVmaXgodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1ByZWZpeFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpQcmVmaXgoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTdWZmaXgodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1N1ZmZpeFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fc3VmZml4ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpTdWZmaXgoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9zdWZmaXg7XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1zZWFyY2gtZW50ZXItYnV0dG9uYClcbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy5hbnQtaW5wdXQtc2VhcmNoYClcbiAgc2V0IG56U2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoO1xuICB9XG5cbiAgZ2V0IGlzTGFyZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTaXplID09PSAnbGFyZ2UnO1xuICB9XG5cbiAgZ2V0IGlzU21hbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTaXplID09PSAnc21hbGwnO1xuICB9XG5cbiAgZ2V0IGlzQWZmaXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghISh0aGlzLm56U3VmZml4IHx8IHRoaXMubnpQcmVmaXggfHwgdGhpcy5uelByZWZpeEljb24gfHwgdGhpcy5uelN1ZmZpeEljb24pKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXInKVxuICBnZXQgaXNBZmZpeFdyYXBwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghISh0aGlzLm56U3VmZml4IHx8IHRoaXMubnpQcmVmaXggfHwgdGhpcy5uelByZWZpeEljb24gfHwgdGhpcy5uelN1ZmZpeEljb24pKSAmJiAhdGhpcy5pc0FkZE9uO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlcicpXG4gIGdldCBpc0FkZE9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLm56QWRkT25BZnRlciB8fCB0aGlzLm56QWRkT25CZWZvcmUgfHwgdGhpcy5uekFkZE9uQWZ0ZXJJY29uIHx8IHRoaXMubnpBZGRPbkJlZm9yZUljb24pO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtaW5wdXQtZ3JvdXAnKVxuICBnZXQgaXNHcm91cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzQWZmaXgpICYmICghdGhpcy5pc0FkZE9uKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LWdyb3VwLWxnYClcbiAgZ2V0IGlzTGFyZ2VHcm91cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0dyb3VwICYmIHRoaXMuaXNMYXJnZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItbGdgKVxuICBnZXQgaXNMYXJnZUdyb3VwV3JhcHBlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FkZE9uICYmIHRoaXMuaXNMYXJnZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItbGdgKVxuICBnZXQgaXNMYXJnZUFmZml4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQWZmaXhXcmFwcGVyICYmIHRoaXMuaXNMYXJnZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LXNlYXJjaC1sZ2ApXG4gIGdldCBpc0xhcmdlU2VhcmNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56U2VhcmNoICYmIHRoaXMuaXNMYXJnZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LWdyb3VwLXNtYClcbiAgZ2V0IGlzU21hbGxHcm91cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0dyb3VwICYmIHRoaXMuaXNTbWFsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItc21gKVxuICBnZXQgaXNTbWFsbEFmZml4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQWZmaXhXcmFwcGVyICYmIHRoaXMuaXNTbWFsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItc21gKVxuICBnZXQgaXNTbWFsbEdyb3VwV3JhcHBlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FkZE9uICYmIHRoaXMuaXNTbWFsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbWApXG4gIGdldCBpc1NtYWxsU2VhcmNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56U2VhcmNoICYmIHRoaXMuaXNTbWFsbDtcbiAgfVxuXG4gIHVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56SW5wdXREaXJlY3RpdmVRdWVyeUxpc3QpIHtcbiAgICAgIHRoaXMubnpJbnB1dERpcmVjdGl2ZVF1ZXJ5TGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5uelNpemUgPSB0aGlzLm56U2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuXG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xuICB9XG59XG4iXX0=