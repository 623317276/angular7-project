/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, ElementRef, HostBinding, Input, TemplateRef } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
var NzAnchorLinkComponent = /** @class */ (function () {
    function NzAnchorLinkComponent(el, anchorComp) {
        this.el = el;
        this.anchorComp = anchorComp;
        this.nzHref = '#';
        this.titleStr = '';
        this.active = false;
    }
    Object.defineProperty(NzAnchorLinkComponent.prototype, "nzTitle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.titleTpl = value;
            }
            else {
                this.titleStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.anchorComp.registerLink(this);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.goToClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.anchorComp.handleScrollTo(this);
    };
    /**
     * @return {?}
     */
    NzAnchorLinkComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.anchorComp.unregisterLink(this);
    };
    NzAnchorLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-link',
                    preserveWhitespaces: false,
                    template: "<a (click)=\"goToClick($event)\" href=\"{{nzHref}}\" class=\"ant-anchor-link-title\" title=\"{{titleStr}}\">\n  <span *ngIf=\"titleStr; else (titleTpl || nzTemplate)\">{{ titleStr }}</span>\n</a>\n<ng-content></ng-content>",
                    host: {
                        '[class.ant-anchor-link]': 'true',
                        'style': 'display:block'
                    }
                }] }
    ];
    /** @nocollapse */
    NzAnchorLinkComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzAnchorComponent }
    ]; };
    NzAnchorLinkComponent.propDecorators = {
        nzHref: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzTemplate: [{ type: ContentChild, args: ['nzTemplate',] }],
        active: [{ type: HostBinding, args: ['class.ant-anchor-link-active',] }]
    };
    return NzAnchorLinkComponent;
}());
export { NzAnchorLinkComponent };
function NzAnchorLinkComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAnchorLinkComponent.prototype.nzHref;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.titleStr;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.titleTpl;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.nzTemplate;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.active;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.el;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.anchorComp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFuY2hvci9uei1hbmNob3ItbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUdMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUErQnhELCtCQUFtQixFQUFjLEVBQVUsVUFBNkI7UUFBckQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW1CO3NCQWxCdEQsR0FBRzt3QkFFVixFQUFFO3NCQWNrRCxLQUFLO0tBR25FO0lBZEQsc0JBQ0ksMENBQU87Ozs7O1FBRFgsVUFDWSxLQUFpQztZQUMzQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1NBQ0Y7OztPQUFBOzs7O0lBU0Qsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBRUQseUNBQVM7Ozs7SUFBVCxVQUFVLENBQVE7UUFDaEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0Qzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxTQUFTO29CQUM5QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQiwwT0FBc0Q7b0JBQ3RELElBQUksRUFBaUI7d0JBQ25CLHlCQUF5QixFQUFFLE1BQU07d0JBQ2pDLE9BQU8sRUFBb0IsZUFBZTtxQkFDM0M7aUJBQ0Y7Ozs7Z0JBbEJDLFVBQVU7Z0JBUUgsaUJBQWlCOzs7eUJBYXZCLEtBQUs7MEJBS0wsS0FBSzs2QkFTTCxZQUFZLFNBQUMsWUFBWTt5QkFFekIsV0FBVyxTQUFDLDhCQUE4Qjs7Z0NBeEM3Qzs7U0FzQmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekFuY2hvckNvbXBvbmVudCB9IGZyb20gJy4vbnotYW5jaG9yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbGluaycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1hbmNob3ItbGlua10nOiAndHJ1ZScsXG4gICAgJ3N0eWxlJyAgICAgICAgICAgICAgICAgIDogJ2Rpc3BsYXk6YmxvY2snXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpBbmNob3JMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIG56SHJlZiA9ICcjJztcblxuICB0aXRsZVN0ciA9ICcnO1xuICB0aXRsZVRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMudGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXRsZVN0ciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSBuelRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1hbmNob3ItbGluay1hY3RpdmUnKSBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgYW5jaG9yQ29tcDogTnpBbmNob3JDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYW5jaG9yQ29tcC5yZWdpc3RlckxpbmsodGhpcyk7XG4gIH1cblxuICBnb1RvQ2xpY2soZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmFuY2hvckNvbXAuaGFuZGxlU2Nyb2xsVG8odGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmFuY2hvckNvbXAudW5yZWdpc3RlckxpbmsodGhpcyk7XG4gIH1cblxufVxuIl19