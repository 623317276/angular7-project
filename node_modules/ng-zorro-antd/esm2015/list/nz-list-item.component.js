/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
export class NzListItemComponent {
    constructor() {
        this.nzActions = [];
        this.isCon = false;
        this.conStr = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzContent(value) {
        if (value instanceof TemplateRef) {
            this.conStr = null;
            this.conTpl = value;
        }
        else {
            this.conStr = value;
        }
        this.isCon = !!value;
    }
}
NzListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-item',
                template: "<ng-template #contentTpl>\n  <div *ngIf=\"isCon\" class=\"ant-list-item-content\" [ngClass]=\"{'ant-list-item-content-single': metas.length < 1}\">\n    <ng-container *ngIf=\"conStr; else conTpl\">{{ conStr }}</ng-container>\n  </div>\n</ng-template>\n<ng-template #actionsTpl>\n  <ul *ngIf=\"nzActions?.length > 0\" class=\"ant-list-item-action\">\n    <li *ngFor=\"let i of nzActions; let idx = index\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"idx!==nzActions.length-1\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #mainTpl>\n  <ng-content></ng-content>\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n</ng-template>\n<div *ngIf=\"nzExtra; else mainTpl\" class=\"ant-list-item-extra-wrap\">\n  <div class=\"ant-list-item-main\">\n    <ng-template [ngTemplateOutlet]=\"mainTpl\"></ng-template>\n  </div>\n  <div class=\"ant-list-item-extra\">\n    <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n  </div>\n</div>",
                preserveWhitespaces: false,
                host: {
                    '[class.ant-list-item]': 'true'
                }
            }] }
];
NzListItemComponent.propDecorators = {
    nzActions: [{ type: Input }],
    metas: [{ type: ContentChildren, args: [NzListItemMetaComponent,] }],
    nzContent: [{ type: Input }],
    nzExtra: [{ type: Input }]
};
function NzListItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzListItemComponent.prototype.nzActions;
    /** @type {?} */
    NzListItemComponent.prototype.metas;
    /** @type {?} */
    NzListItemComponent.prototype.isCon;
    /** @type {?} */
    NzListItemComponent.prototype.conStr;
    /** @type {?} */
    NzListItemComponent.prototype.conTpl;
    /** @type {?} */
    NzListItemComponent.prototype.nzExtra;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJsaXN0L256LWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBVXhFLE1BQU07O3lCQUMyQyxFQUFFO3FCQUd6QyxLQUFLO3NCQUNKLEVBQUU7Ozs7OztJQUdYLElBQ0ksU0FBUyxDQUFDLEtBQWlDO1FBQzdDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDdEI7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGNBQWM7Z0JBQ25DLG9sQ0FBb0Q7Z0JBQ3BELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLElBQUksRUFBaUI7b0JBQ25CLHVCQUF1QixFQUFFLE1BQU07aUJBQ2hDO2FBQ0Y7Ozt3QkFFRSxLQUFLO29CQUNMLGVBQWUsU0FBQyx1QkFBdUI7d0JBTXZDLEtBQUs7c0JBWUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekxpc3RJdGVtTWV0YUNvbXBvbmVudCB9IGZyb20gJy4vbnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1saXN0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWxpc3QtaXRlbV0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQENvbnRlbnRDaGlsZHJlbihOekxpc3RJdGVtTWV0YUNvbXBvbmVudCkgbWV0YXM6IFF1ZXJ5TGlzdDxOekxpc3RJdGVtTWV0YUNvbXBvbmVudD47XG5cbiAgaXNDb24gPSBmYWxzZTtcbiAgY29uU3RyID0gJyc7XG4gIGNvblRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5jb25TdHIgPSBudWxsO1xuICAgICAgdGhpcy5jb25UcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25TdHIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmlzQ29uID0gISF2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIG56RXh0cmE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xufVxuIl19