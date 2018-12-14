/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, ElementRef, HostBinding, Input, TemplateRef } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
export class NzAnchorLinkComponent {
    /**
     * @param {?} el
     * @param {?} anchorComp
     */
    constructor(el, anchorComp) {
        this.el = el;
        this.anchorComp = anchorComp;
        this.nzHref = '#';
        this.titleStr = '';
        this.active = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTitle(value) {
        if (value instanceof TemplateRef) {
            this.titleTpl = value;
        }
        else {
            this.titleStr = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.anchorComp.registerLink(this);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    goToClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.anchorComp.handleScrollTo(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.anchorComp.unregisterLink(this);
    }
}
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
NzAnchorLinkComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzAnchorComponent }
];
NzAnchorLinkComponent.propDecorators = {
    nzHref: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzTemplate: [{ type: ContentChild, args: ['nzTemplate',] }],
    active: [{ type: HostBinding, args: ['class.ant-anchor-link-active',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFuY2hvci9uei1hbmNob3ItbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUdMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVcxRCxNQUFNOzs7OztJQW9CSixZQUFtQixFQUFjLEVBQVUsVUFBNkI7UUFBckQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW1CO3NCQWxCdEQsR0FBRzt3QkFFVixFQUFFO3NCQWNrRCxLQUFLO0tBR25FOzs7OztJQWRELElBQ0ksT0FBTyxDQUFDLEtBQWlDO1FBQzNDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7S0FDRjs7OztJQVNELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQzs7Ozs7SUFFRCxTQUFTLENBQUMsQ0FBUTtRQUNoQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxTQUFTO2dCQUM5QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiwwT0FBc0Q7Z0JBQ3RELElBQUksRUFBaUI7b0JBQ25CLHlCQUF5QixFQUFFLE1BQU07b0JBQ2pDLE9BQU8sRUFBb0IsZUFBZTtpQkFDM0M7YUFDRjs7OztZQWxCQyxVQUFVO1lBUUgsaUJBQWlCOzs7cUJBYXZCLEtBQUs7c0JBS0wsS0FBSzt5QkFTTCxZQUFZLFNBQUMsWUFBWTtxQkFFekIsV0FBVyxTQUFDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpBbmNob3JDb21wb25lbnQgfSBmcm9tICcuL256LWFuY2hvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWxpbmsnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotYW5jaG9yLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtYW5jaG9yLWxpbmtdJzogJ3RydWUnLFxuICAgICdzdHlsZScgICAgICAgICAgICAgICAgICA6ICdkaXNwbGF5OmJsb2NrJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56QW5jaG9yTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBuekhyZWYgPSAnIyc7XG5cbiAgdGl0bGVTdHIgPSAnJztcbiAgdGl0bGVUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnRpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGl0bGVTdHIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJykgbnpUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtYW5jaG9yLWxpbmstYWN0aXZlJykgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGFuY2hvckNvbXA6IE56QW5jaG9yQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFuY2hvckNvbXAucmVnaXN0ZXJMaW5rKHRoaXMpO1xuICB9XG5cbiAgZ29Ub0NsaWNrKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5hbmNob3JDb21wLmhhbmRsZVNjcm9sbFRvKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5hbmNob3JDb21wLnVucmVnaXN0ZXJMaW5rKHRoaXMpO1xuICB9XG5cbn1cbiJdfQ==