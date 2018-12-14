/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzCardTabComponent } from './nz-card-tab.component';
export class NzCardComponent {
    constructor() {
        this._bordered = true;
        this._loading = false;
        this._hoverable = false;
        this.nzActions = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTitle(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
    /**
     * @return {?}
     */
    get nzTitle() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExtra(value) {
        this.isExtraString = !(value instanceof TemplateRef);
        this._extra = value;
    }
    /**
     * @return {?}
     */
    get nzExtra() {
        return this._extra;
    }
    /**
     * @return {?}
     */
    get isInner() {
        return this.nzType === 'inner';
    }
    /**
     * @return {?}
     */
    get isTabs() {
        return !!this.tab;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzBordered(value) {
        this._bordered = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzBordered() {
        return this._bordered;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLoading(value) {
        this._loading = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzLoading() {
        return this._loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHoverable(value) {
        this._hoverable = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzHoverable() {
        return this._hoverable;
    }
}
NzCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-card',
                preserveWhitespaces: false,
                template: "<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n</ng-template>\n<div class=\"ant-card-head\" *ngIf=\"nzTitle||nzExtra||tab\">\n  <div class=\"ant-card-head-wrapper\">\n    <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\n      <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n    </div>\n    <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\n      <ng-container *ngIf=\"isExtraString; else extraTemplate\">{{ nzExtra }}</ng-container>\n    </div>\n  </div>\n  <ng-container *ngIf=\"tab\">\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\n  </ng-container>\n</div>\n<div class=\"ant-card-cover\" *ngIf=\"nzCover\">\n  <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\n</div>\n<div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\n  <ng-container *ngIf=\"!nzLoading\">\n    <ng-content></ng-content>\n  </ng-container>\n  <nz-card-loading *ngIf=\"nzLoading\"></nz-card-loading>\n</div>\n<ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\n  <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100/nzActions.length\">\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n  </li>\n</ul>",
                host: {
                    '[class.ant-card]': 'true',
                    '[class.ant-card-loading]': 'nzLoading'
                },
                styles: [`
    :host {
      display: block;
      position: relative;
    }
  `]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2FyZC9uei1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBaUI3RCxNQUFNOzt5QkFDZ0IsSUFBSTt3QkFDTCxLQUFLOzBCQUNILEtBQUs7eUJBUXFCLEVBQUU7Ozs7OztJQUdqRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDckI7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBRUQsSUFDSSxPQUFPLENBQUMsS0FBaUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3JCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7O0lBRUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQztLQUNoQzs7OztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7S0FDbkI7Ozs7O0lBRUQsSUFFSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7OztJQUVELElBRUksV0FBVyxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7OztZQXRGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFNBQVM7Z0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGsxQ0FBK0M7Z0JBTy9DLElBQUksRUFBaUI7b0JBQ25CLGtCQUFrQixFQUFVLE1BQU07b0JBQ2xDLDBCQUEwQixFQUFFLFdBQVc7aUJBQ3hDO3lCQVRzQjs7Ozs7R0FLdEI7YUFLRjs7O2tCQVNFLFlBQVksU0FBQyxrQkFBa0I7MEJBQy9CLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBRUwsS0FBSztzQkFVTCxLQUFLO3NCQVVMLFdBQVcsU0FBQywyQkFBMkI7cUJBS3ZDLFdBQVcsU0FBQyw2QkFBNkI7eUJBS3pDLEtBQUssWUFDTCxXQUFXLFNBQUMseUJBQXlCO3dCQVNyQyxLQUFLOzBCQVNMLEtBQUssWUFDTCxXQUFXLFNBQUMsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpDYXJkVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXJkLXRhYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNhcmQnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgYCBdLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY2FyZF0nICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1jYXJkLWxvYWRpbmddJzogJ256TG9hZGluZydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcmRDb21wb25lbnQge1xuICBwcml2YXRlIF9ib3JkZXJlZCA9IHRydWU7XG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaG92ZXJhYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBpc1RpdGxlU3RyaW5nOiBib29sZWFuO1xuICBpc0V4dHJhU3RyaW5nOiBib29sZWFuO1xuICBAQ29udGVudENoaWxkKE56Q2FyZFRhYkNvbXBvbmVudCkgdGFiOiBOekNhcmRUYWJDb21wb25lbnQ7XG4gIEBJbnB1dCgpIG56Qm9keVN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XG4gIEBJbnB1dCgpIG56Q292ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekFjdGlvbnM6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+PiA9IFtdO1xuICBASW5wdXQoKSBuelR5cGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbnpUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzVGl0bGVTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RXh0cmEodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0V4dHJhU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9leHRyYSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56RXh0cmEoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9leHRyYTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNhcmQtdHlwZS1pbm5lcicpXG4gIGdldCBpc0lubmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2lubmVyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNhcmQtY29udGFpbi10YWJzJylcbiAgZ2V0IGlzVGFicygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnRhYjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNhcmQtYm9yZGVyZWQnKVxuICBzZXQgbnpCb3JkZXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2JvcmRlcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekJvcmRlcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ib3JkZXJlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekxvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jYXJkLWhvdmVyYWJsZScpXG4gIHNldCBuekhvdmVyYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hvdmVyYWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpIb3ZlcmFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hvdmVyYWJsZTtcbiAgfVxufVxuIl19