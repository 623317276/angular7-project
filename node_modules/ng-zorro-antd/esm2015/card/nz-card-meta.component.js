/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
export class NzCardMetaComponent {
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
    set nzDescription(value) {
        this.isDescriptionString = !(value instanceof TemplateRef);
        this._description = value;
    }
    /**
     * @return {?}
     */
    get nzDescription() {
        return this._description;
    }
}
NzCardMetaComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-card-meta',
                preserveWhitespaces: false,
                template: "<div class=\"ant-card-meta-avatar\" *ngIf=\"nzAvatar\">\n  <ng-template [ngTemplateOutlet]=\"nzAvatar\"></ng-template>\n</div>\n<div class=\"ant-card-meta-detail\" *ngIf=\"nzTitle || nzDescription\">\n  <div class=\"ant-card-meta-title\" *ngIf=\"nzTitle\">\n    <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n    <ng-template #titleTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n    </ng-template>\n  </div>\n  <div class=\"ant-card-meta-description\" *ngIf=\"nzDescription\">\n    <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ nzDescription }}</ng-container>\n    <ng-template #descriptionTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzDescription\"></ng-template>\n    </ng-template>\n  </div>\n</div>",
                host: {
                    '[class.ant-card-meta]': 'true'
                },
                styles: [`
    :host {
      display: block;
    }
  `]
            }] }
];
NzCardMetaComponent.propDecorators = {
    nzAvatar: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzDescription: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjYXJkL256LWNhcmQtbWV0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQWV2QixNQUFNOzs7OztJQU9KLElBQ0ksT0FBTyxDQUFDLEtBQWlDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUNyQjs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7SUFFRCxJQUNJLGFBQWEsQ0FBQyxLQUFpQztRQUNqRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztLQUMzQjs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsY0FBYztnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsbXpCQUFvRDtnQkFNcEQsSUFBSSxFQUFpQjtvQkFDbkIsdUJBQXVCLEVBQUUsTUFBTTtpQkFDaEM7eUJBUHNCOzs7O0dBSXRCO2FBSUY7Ozt1QkFNRSxLQUFLO3NCQUVMLEtBQUs7NEJBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNhcmQtbWV0YScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jYXJkLW1ldGEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGAgXSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNhcmQtbWV0YV0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcmRNZXRhQ29tcG9uZW50IHtcbiAgaXNEZXNjcmlwdGlvblN0cmluZzogYm9vbGVhbjtcbiAgaXNUaXRsZVN0cmluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56QXZhdGFyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzVGl0bGVTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0Rlc2NyaXB0aW9uU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56RGVzY3JpcHRpb24oKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxufVxuIl19