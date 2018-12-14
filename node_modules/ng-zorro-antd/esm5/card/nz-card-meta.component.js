/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
var NzCardMetaComponent = /** @class */ (function () {
    function NzCardMetaComponent() {
    }
    Object.defineProperty(NzCardMetaComponent.prototype, "nzTitle", {
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
    Object.defineProperty(NzCardMetaComponent.prototype, "nzDescription", {
        get: /**
         * @return {?}
         */
        function () {
            return this._description;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isDescriptionString = !(value instanceof TemplateRef);
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    NzCardMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card-meta',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-card-meta-avatar\" *ngIf=\"nzAvatar\">\n  <ng-template [ngTemplateOutlet]=\"nzAvatar\"></ng-template>\n</div>\n<div class=\"ant-card-meta-detail\" *ngIf=\"nzTitle || nzDescription\">\n  <div class=\"ant-card-meta-title\" *ngIf=\"nzTitle\">\n    <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n    <ng-template #titleTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n    </ng-template>\n  </div>\n  <div class=\"ant-card-meta-description\" *ngIf=\"nzDescription\">\n    <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ nzDescription }}</ng-container>\n    <ng-template #descriptionTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzDescription\"></ng-template>\n    </ng-template>\n  </div>\n</div>",
                    host: {
                        '[class.ant-card-meta]': 'true'
                    },
                    styles: ["\n    :host {\n      display: block;\n    }\n  "]
                }] }
    ];
    NzCardMetaComponent.propDecorators = {
        nzAvatar: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }]
    };
    return NzCardMetaComponent;
}());
export { NzCardMetaComponent };
function NzCardMetaComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCardMetaComponent.prototype.isDescriptionString;
    /** @type {?} */
    NzCardMetaComponent.prototype.isTitleString;
    /** @type {?} */
    NzCardMetaComponent.prototype._title;
    /** @type {?} */
    NzCardMetaComponent.prototype._description;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzAvatar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjYXJkL256LWNhcmQtbWV0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQzs7OztJQXNCckIsc0JBQ0ksd0NBQU87Ozs7UUFLWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFSRCxVQUNZLEtBQWlDO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBYTs7OztRQUtqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjs7Ozs7UUFSRCxVQUNrQixLQUFpQztZQUNqRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjs7O09BQUE7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGNBQWM7b0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLG16QkFBb0Q7b0JBTXBELElBQUksRUFBaUI7d0JBQ25CLHVCQUF1QixFQUFFLE1BQU07cUJBQ2hDOzZCQVBzQixpREFJdEI7aUJBSUY7OzsyQkFNRSxLQUFLOzBCQUVMLEtBQUs7Z0NBVUwsS0FBSzs7OEJBcENSOztTQW1CYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1jYXJkLW1ldGEnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2FyZC1tZXRhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgIF0sXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYXJkLW1ldGFdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXJkTWV0YUNvbXBvbmVudCB7XG4gIGlzRGVzY3JpcHRpb25TdHJpbmc6IGJvb2xlYW47XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekF2YXRhcjogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNEZXNjcmlwdGlvblN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuekRlc2NyaXB0aW9uKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cbn1cbiJdfQ==