/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ContentChild } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
var NzPopoverComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopoverComponent, _super);
    function NzPopoverComponent(cdr) {
        var _this = _super.call(this, cdr) || this;
        _this._prefix = 'ant-popover-placement';
        return _this;
    }
    NzPopoverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-popover',
                    animations: [fadeAnimation],
                    template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"nzOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow\"></div>\n      <div class=\"ant-popover-inner\">\n        <div class=\"ant-popover-title\" *ngIf=\"nzTitle\">\n          <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n          <ng-template #titleTemplate>\n            <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n          </ng-template>\n        </div>\n        <div class=\"ant-popover-inner-content\">\n          <ng-container *ngIf=\"isContentString; else contentTemplate\">{{ nzContent }}</ng-container>\n          <ng-template #contentTemplate>\n            <ng-template [ngTemplateOutlet]=\"nzContent\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                    preserveWhitespaces: false,
                    styles: ["\n    .ant-popover {\n      position: relative;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzPopoverComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzPopoverComponent.propDecorators = {
        _title: [{ type: ContentChild, args: ['neverUsedTemplate',] }],
        _content: [{ type: ContentChild, args: ['nzTemplate',] }]
    };
    return NzPopoverComponent;
}(NzToolTipComponent));
export { NzPopoverComponent };
function NzPopoverComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPopoverComponent.prototype._prefix;
    /** @type {?} */
    NzPopoverComponent.prototype._title;
    /** @type {?} */
    NzPopoverComponent.prototype._content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicG9wb3Zlci9uei1wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0lBYTdCLDhDQUFrQjtJQUl4RCw0QkFBWSxHQUFzQjtRQUFsQyxZQUNFLGtCQUFNLEdBQUcsQ0FBQyxTQUNYO3dCQUxTLHVCQUF1Qjs7S0FLaEM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFlBQVk7b0JBQ2pDLFVBQVUsRUFBVyxDQUFFLGFBQWEsQ0FBRTtvQkFDdEMscTRDQUFrRDtvQkFDbEQsbUJBQW1CLEVBQUUsS0FBSzs2QkFDSCw0REFJdEI7aUJBQ0Y7Ozs7Z0JBbEJDLGlCQUFpQjs7O3lCQXFCaEIsWUFBWSxTQUFDLG1CQUFtQjsyQkFDaEMsWUFBWSxTQUFDLFlBQVk7OzZCQXZCNUI7RUFvQndDLGtCQUFrQjtTQUE3QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL256LXRvb2x0aXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1wb3BvdmVyJyxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBmYWRlQW5pbWF0aW9uIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXBvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgLmFudC1wb3BvdmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelBvcG92ZXJDb21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQge1xuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XG4gIEBDb250ZW50Q2hpbGQoJ25ldmVyVXNlZFRlbXBsYXRlJykgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjsgLy8gdXNlZCB0byByZW1vdmUgTnpUb29sVGlwQ29tcG9uZW50IEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKVxuICBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJykgX2NvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoY2RyKTtcbiAgfVxufVxuIl19