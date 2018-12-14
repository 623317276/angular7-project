/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
var NzListItemMetaComponent = /** @class */ (function () {
    function NzListItemMetaComponent() {
        this.isAvatar = false;
        this.avatarStr = '';
        this.isTitle = false;
        this.titleStr = '';
        this.isDesc = false;
        this.descStr = '';
    }
    Object.defineProperty(NzListItemMetaComponent.prototype, "nzAvatar", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.avatarStr = null;
                this.avatarTpl = value;
            }
            else {
                this.avatarStr = value;
            }
            this.isAvatar = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzListItemMetaComponent.prototype, "nzTitle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.titleStr = null;
                this.titleTpl = value;
            }
            else {
                this.titleStr = value;
            }
            this.isTitle = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzListItemMetaComponent.prototype, "nzDescription", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.descStr = null;
                this.descTpl = value;
            }
            else {
                this.descStr = value;
            }
            this.isDesc = !!value;
        },
        enumerable: true,
        configurable: true
    });
    NzListItemMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item-meta',
                    template: "<div *ngIf=\"isAvatar\" class=\"ant-list-item-meta-avatar\">\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\n  </ng-container>\n</div>\n<div *ngIf=\"isTitle || isDesc\" class=\"ant-list-item-meta-content\">\n  <h4 *ngIf=\"isTitle\" class=\"ant-list-item-meta-title\">\n    <ng-container *ngIf=\"titleStr; else titleTpl\">{{ titleStr }}</ng-container>\n  </h4>\n  <div *ngIf=\"isDesc\" class=\"ant-list-item-meta-description\">\n    <ng-container *ngIf=\"descStr; else descTpl\">{{ descStr }}</ng-container>\n  </div>\n</div>",
                    preserveWhitespaces: false,
                    host: {
                        '[class.ant-list-item-meta]': 'true'
                    }
                }] }
    ];
    NzListItemMetaComponent.propDecorators = {
        nzAvatar: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }]
    };
    return NzListItemMetaComponent;
}());
export { NzListItemMetaComponent };
function NzListItemMetaComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzListItemMetaComponent.prototype.isAvatar;
    /** @type {?} */
    NzListItemMetaComponent.prototype.avatarStr;
    /** @type {?} */
    NzListItemMetaComponent.prototype.avatarTpl;
    /** @type {?} */
    NzListItemMetaComponent.prototype.isTitle;
    /** @type {?} */
    NzListItemMetaComponent.prototype.titleStr;
    /** @type {?} */
    NzListItemMetaComponent.prototype.titleTpl;
    /** @type {?} */
    NzListItemMetaComponent.prototype.isDesc;
    /** @type {?} */
    NzListItemMetaComponent.prototype.descStr;
    /** @type {?} */
    NzListItemMetaComponent.prototype.descTpl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImxpc3QvbnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozt3QkFZakQsS0FBSzt5QkFDSixFQUFFO3VCQWVKLEtBQUs7d0JBQ0osRUFBRTtzQkFlSixLQUFLO3VCQUNKLEVBQUU7O0lBN0JaLHNCQUNJLDZDQUFROzs7OztRQURaLFVBQ2EsS0FBaUM7WUFDNUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDekI7OztPQUFBO0lBTUQsc0JBQ0ksNENBQU87Ozs7O1FBRFgsVUFDWSxLQUFpQztZQUMzQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN2QjtZQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN4Qjs7O09BQUE7SUFNRCxzQkFDSSxrREFBYTs7Ozs7UUFEakIsVUFDa0IsS0FBaUM7WUFDakQsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7WUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDdkI7OztPQUFBOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxtQkFBbUI7b0JBQ3hDLGtsQkFBeUQ7b0JBQ3pELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLElBQUksRUFBaUI7d0JBQ25CLDRCQUE0QixFQUFFLE1BQU07cUJBQ3JDO2lCQUNGOzs7MkJBT0UsS0FBSzswQkFnQkwsS0FBSztnQ0FnQkwsS0FBSzs7a0NBaERSOztTQVVhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbGlzdC1pdGVtLW1ldGEnLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtbGlzdC1pdGVtLW1ldGFdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0SXRlbU1ldGFDb21wb25lbnQge1xuXG4gIGlzQXZhdGFyID0gZmFsc2U7XG4gIGF2YXRhclN0ciA9ICcnO1xuICBhdmF0YXJUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekF2YXRhcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5hdmF0YXJTdHIgPSBudWxsO1xuICAgICAgdGhpcy5hdmF0YXJUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdmF0YXJTdHIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmlzQXZhdGFyID0gISF2YWx1ZTtcbiAgfVxuXG4gIGlzVGl0bGUgPSBmYWxzZTtcbiAgdGl0bGVTdHIgPSAnJztcbiAgdGl0bGVUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnRpdGxlU3RyID0gbnVsbDtcbiAgICAgIHRoaXMudGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXRsZVN0ciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuaXNUaXRsZSA9ICEhdmFsdWU7XG4gIH1cblxuICBpc0Rlc2MgPSBmYWxzZTtcbiAgZGVzY1N0ciA9ICcnO1xuICBkZXNjVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpEZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5kZXNjU3RyID0gbnVsbDtcbiAgICAgIHRoaXMuZGVzY1RwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc2NTdHIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGVzYyA9ICEhdmFsdWU7XG4gIH1cbn1cbiJdfQ==