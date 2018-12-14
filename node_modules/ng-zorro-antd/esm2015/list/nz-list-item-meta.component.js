/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
export class NzListItemMetaComponent {
    constructor() {
        this.isAvatar = false;
        this.avatarStr = '';
        this.isTitle = false;
        this.titleStr = '';
        this.isDesc = false;
        this.descStr = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = null;
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
        this.isAvatar = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTitle(value) {
        if (value instanceof TemplateRef) {
            this.titleStr = null;
            this.titleTpl = value;
        }
        else {
            this.titleStr = value;
        }
        this.isTitle = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDescription(value) {
        if (value instanceof TemplateRef) {
            this.descStr = null;
            this.descTpl = value;
        }
        else {
            this.descStr = value;
        }
        this.isDesc = !!value;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImxpc3QvbnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVOUQsTUFBTTs7d0JBRU8sS0FBSzt5QkFDSixFQUFFO3VCQWVKLEtBQUs7d0JBQ0osRUFBRTtzQkFlSixLQUFLO3VCQUNKLEVBQUU7Ozs7OztJQTdCWixJQUNJLFFBQVEsQ0FBQyxLQUFpQztRQUM1QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ3pCOzs7OztJQU1ELElBQ0ksT0FBTyxDQUFDLEtBQWlDO1FBQzNDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDeEI7Ozs7O0lBTUQsSUFDSSxhQUFhLENBQUMsS0FBaUM7UUFDakQsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUN2Qjs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsbUJBQW1CO2dCQUN4QyxrbEJBQXlEO2dCQUN6RCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixJQUFJLEVBQWlCO29CQUNuQiw0QkFBNEIsRUFBRSxNQUFNO2lCQUNyQzthQUNGOzs7dUJBT0UsS0FBSztzQkFnQkwsS0FBSzs0QkFnQkwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbGlzdC1pdGVtLW1ldGEnLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtbGlzdC1pdGVtLW1ldGFdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0SXRlbU1ldGFDb21wb25lbnQge1xuXG4gIGlzQXZhdGFyID0gZmFsc2U7XG4gIGF2YXRhclN0ciA9ICcnO1xuICBhdmF0YXJUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekF2YXRhcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5hdmF0YXJTdHIgPSBudWxsO1xuICAgICAgdGhpcy5hdmF0YXJUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdmF0YXJTdHIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmlzQXZhdGFyID0gISF2YWx1ZTtcbiAgfVxuXG4gIGlzVGl0bGUgPSBmYWxzZTtcbiAgdGl0bGVTdHIgPSAnJztcbiAgdGl0bGVUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnRpdGxlU3RyID0gbnVsbDtcbiAgICAgIHRoaXMudGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXRsZVN0ciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuaXNUaXRsZSA9ICEhdmFsdWU7XG4gIH1cblxuICBpc0Rlc2MgPSBmYWxzZTtcbiAgZGVzY1N0ciA9ICcnO1xuICBkZXNjVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpEZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5kZXNjU3RyID0gbnVsbDtcbiAgICAgIHRoaXMuZGVzY1RwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc2NTdHIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGVzYyA9ICEhdmFsdWU7XG4gIH1cbn1cbiJdfQ==