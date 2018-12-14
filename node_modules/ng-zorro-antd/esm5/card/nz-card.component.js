/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzCardTabComponent } from './nz-card-tab.component';
var NzCardComponent = /** @class */ (function () {
    function NzCardComponent() {
        this._bordered = true;
        this._loading = false;
        this._hoverable = false;
        this.nzActions = [];
    }
    Object.defineProperty(NzCardComponent.prototype, "nzTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isTitleString = !(value instanceof TemplateRef);
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCardComponent.prototype, "nzExtra", {
        get: /**
         * @return {?}
         */
        function () {
            return this._extra;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isExtraString = !(value instanceof TemplateRef);
            this._extra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCardComponent.prototype, "isInner", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'inner';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCardComponent.prototype, "isTabs", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.tab;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCardComponent.prototype, "nzBordered", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bordered;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bordered = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCardComponent.prototype, "nzLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCardComponent.prototype, "nzHoverable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hoverable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hoverable = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    NzCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card',
                    preserveWhitespaces: false,
                    template: "<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n</ng-template>\n<div class=\"ant-card-head\" *ngIf=\"nzTitle||nzExtra||tab\">\n  <div class=\"ant-card-head-wrapper\">\n    <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\n      <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n    </div>\n    <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\n      <ng-container *ngIf=\"isExtraString; else extraTemplate\">{{ nzExtra }}</ng-container>\n    </div>\n  </div>\n  <ng-container *ngIf=\"tab\">\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\n  </ng-container>\n</div>\n<div class=\"ant-card-cover\" *ngIf=\"nzCover\">\n  <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\n</div>\n<div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\n  <ng-container *ngIf=\"!nzLoading\">\n    <ng-content></ng-content>\n  </ng-container>\n  <nz-card-loading *ngIf=\"nzLoading\"></nz-card-loading>\n</div>\n<ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\n  <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100/nzActions.length\">\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n  </li>\n</ul>",
                    host: {
                        '[class.ant-card]': 'true',
                        '[class.ant-card-loading]': 'nzLoading'
                    },
                    styles: ["\n    :host {\n      display: block;\n      position: relative;\n    }\n  "]
                }] }
    ];
    NzCardComponent.propDecorators = {
        tab: [{ type: ContentChild, args: [NzCardTabComponent,] }],
        nzBodyStyle: [{ type: Input }],
        nzCover: [{ type: Input }],
        nzActions: [{ type: Input }],
        nzType: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzExtra: [{ type: Input }],
        isInner: [{ type: HostBinding, args: ['class.ant-card-type-inner',] }],
        isTabs: [{ type: HostBinding, args: ['class.ant-card-contain-tabs',] }],
        nzBordered: [{ type: Input }, { type: HostBinding, args: ['class.ant-card-bordered',] }],
        nzLoading: [{ type: Input }],
        nzHoverable: [{ type: Input }, { type: HostBinding, args: ['class.ant-card-hoverable',] }]
    };
    return NzCardComponent;
}());
export { NzCardComponent };
function NzCardComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCardComponent.prototype._bordered;
    /** @type {?} */
    NzCardComponent.prototype._loading;
    /** @type {?} */
    NzCardComponent.prototype._hoverable;
    /** @type {?} */
    NzCardComponent.prototype._title;
    /** @type {?} */
    NzCardComponent.prototype._extra;
    /** @type {?} */
    NzCardComponent.prototype.isTitleString;
    /** @type {?} */
    NzCardComponent.prototype.isExtraString;
    /** @type {?} */
    NzCardComponent.prototype.tab;
    /** @type {?} */
    NzCardComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzCardComponent.prototype.nzCover;
    /** @type {?} */
    NzCardComponent.prototype.nzActions;
    /** @type {?} */
    NzCardComponent.prototype.nzType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2FyZC9uei1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7eUJBa0J2QyxJQUFJO3dCQUNMLEtBQUs7MEJBQ0gsS0FBSzt5QkFRcUIsRUFBRTs7SUFHakQsc0JBQ0ksb0NBQU87Ozs7UUFLWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFSRCxVQUNZLEtBQWlDO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7O09BQUE7SUFNRCxzQkFDSSxvQ0FBTzs7OztRQUtYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVJELFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCOzs7T0FBQTtJQU1ELHNCQUNJLG9DQUFPOzs7O1FBRFg7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDO1NBQ2hDOzs7T0FBQTtJQUVELHNCQUNJLG1DQUFNOzs7O1FBRFY7WUFFRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ25COzs7T0FBQTtJQUVELHNCQUVJLHVDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUkQsVUFFZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTtJQU1ELHNCQUNJLHNDQUFTOzs7O1FBSWI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBUEQsVUFDYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDOzs7T0FBQTtJQU1ELHNCQUVJLHdDQUFXOzs7O1FBSWY7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O1FBUkQsVUFFZ0IsS0FBYztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzs7O09BQUE7O2dCQWxGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFNBQVM7b0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGsxQ0FBK0M7b0JBTy9DLElBQUksRUFBaUI7d0JBQ25CLGtCQUFrQixFQUFVLE1BQU07d0JBQ2xDLDBCQUEwQixFQUFFLFdBQVc7cUJBQ3hDOzZCQVRzQiw0RUFLdEI7aUJBS0Y7OztzQkFTRSxZQUFZLFNBQUMsa0JBQWtCOzhCQUMvQixLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUVMLEtBQUs7MEJBVUwsS0FBSzswQkFVTCxXQUFXLFNBQUMsMkJBQTJCO3lCQUt2QyxXQUFXLFNBQUMsNkJBQTZCOzZCQUt6QyxLQUFLLFlBQ0wsV0FBVyxTQUFDLHlCQUF5Qjs0QkFTckMsS0FBSzs4QkFTTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLDBCQUEwQjs7MEJBM0Z6Qzs7U0EyQmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56Q2FyZFRhYkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC10YWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1jYXJkJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIGAgXSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNhcmRdJyAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1sb2FkaW5nXSc6ICduekxvYWRpbmcnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXJkQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSB0cnVlO1xuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2hvdmVyYWJsZSA9IGZhbHNlO1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX2V4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgaXNUaXRsZVN0cmluZzogYm9vbGVhbjtcbiAgaXNFeHRyYVN0cmluZzogYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZChOekNhcmRUYWJDb21wb25lbnQpIHRhYjogTnpDYXJkVGFiQ29tcG9uZW50O1xuICBASW5wdXQoKSBuekJvZHlTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBASW5wdXQoKSBuekNvdmVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQElucHV0KCkgbnpUeXBlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekV4dHJhKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNFeHRyYVN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fZXh0cmEgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuekV4dHJhKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmE7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jYXJkLXR5cGUtaW5uZXInKVxuICBnZXQgaXNJbm5lcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelR5cGUgPT09ICdpbm5lcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jYXJkLWNvbnRhaW4tdGFicycpXG4gIGdldCBpc1RhYnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy50YWI7XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jYXJkLWJvcmRlcmVkJylcbiAgc2V0IG56Qm9yZGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ib3JkZXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpCb3JkZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYm9yZGVyZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGUnKVxuICBzZXQgbnpIb3ZlcmFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ob3ZlcmFibGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56SG92ZXJhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ob3ZlcmFibGU7XG4gIH1cbn1cbiJdfQ==