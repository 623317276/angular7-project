/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Host, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzCollapseComponent } from './nz-collapse.component';
var NzCollapsePanelComponent = /** @class */ (function () {
    function NzCollapsePanelComponent(nzCollapseComponent, elementRef) {
        this.nzCollapseComponent = nzCollapseComponent;
        this.elementRef = elementRef;
        this._disabled = false;
        this._showArrow = true;
        this._active = false;
        this.el = this.elementRef.nativeElement;
        this.nzActiveChange = new EventEmitter();
    }
    Object.defineProperty(NzCollapsePanelComponent.prototype, "nzShowArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showArrow;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showArrow = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCollapsePanelComponent.prototype, "isNoArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzShowArrow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCollapsePanelComponent.prototype, "nzHeader", {
        get: /**
         * @return {?}
         */
        function () {
            return this._header;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isHeaderString = !(value instanceof TemplateRef);
            this._header = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCollapsePanelComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCollapsePanelComponent.prototype, "nzActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._active = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.clickHeader = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nzCollapseComponent.addCollapse(this);
    };
    /**
     * @return {?}
     */
    NzCollapsePanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzCollapseComponent.removeCollapse(this);
    };
    NzCollapsePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-collapse-panel',
                    template: "<div\n  role=\"tab\"\n  [attr.aria-expanded]=\"nzActive\"\n  class=\"ant-collapse-header\"\n  (click)=\"clickHeader()\">\n  <i nz-icon type=\"right\" class=\"arrow anticon-right\" *ngIf=\"nzShowArrow\"></i>\n  <ng-container *ngIf=\"isHeaderString; else headerTemplate\">{{ nzHeader }}</ng-container>\n  <ng-template #headerTemplate>\n    <ng-template [ngTemplateOutlet]=\"nzHeader\"></ng-template>\n  </ng-template>\n</div>\n<div\n  class=\"ant-collapse-content\"\n  [class.ant-collapse-content-active]=\"nzActive\"\n  [@collapseState]=\"nzActive?'active':'inactive'\">\n  <div class=\"ant-collapse-content-box\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                    animations: [
                        trigger('collapseState', [
                            state('inactive', style({
                                opacity: '0',
                                height: 0
                            })),
                            state('active', style({
                                opacity: '1',
                                height: '*'
                            })),
                            transition('inactive => active', animate('150ms ease-in')),
                            transition('active => inactive', animate('150ms ease-out'))
                        ])
                    ],
                    host: {
                        '[class.ant-collapse-item]': 'true',
                        '[attr.role]': '"tablist"'
                    },
                    styles: ["\n      :host {\n        display: block\n      }"]
                }] }
    ];
    /** @nocollapse */
    NzCollapsePanelComponent.ctorParameters = function () { return [
        { type: NzCollapseComponent, decorators: [{ type: Host }] },
        { type: ElementRef }
    ]; };
    NzCollapsePanelComponent.propDecorators = {
        nzActiveChange: [{ type: Output }],
        nzShowArrow: [{ type: Input }],
        isNoArrow: [{ type: HostBinding, args: ['class.ant-collapse-no-arrow',] }],
        nzHeader: [{ type: Input }],
        nzDisabled: [{ type: Input }, { type: HostBinding, args: ['class.ant-collapse-item-disabled',] }],
        nzActive: [{ type: Input }, { type: HostBinding, args: ['class.ant-collapse-item-active',] }]
    };
    return NzCollapsePanelComponent;
}());
export { NzCollapsePanelComponent };
function NzCollapsePanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCollapsePanelComponent.prototype._disabled;
    /** @type {?} */
    NzCollapsePanelComponent.prototype._showArrow;
    /** @type {?} */
    NzCollapsePanelComponent.prototype._active;
    /** @type {?} */
    NzCollapsePanelComponent.prototype._header;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.isHeaderString;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.el;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzActiveChange;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.nzCollapseComponent;
    /** @type {?} */
    NzCollapsePanelComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvbGxhcHNlL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFdBQVcsRUFDWCxLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBeUY1RCxrQ0FBNEIsbUJBQXdDLEVBQVUsVUFBc0I7UUFBeEUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7eUJBekRoRixLQUFLOzBCQUNKLElBQUk7dUJBQ1AsS0FBSztrQkFHRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7OEJBQzVCLElBQUksWUFBWSxFQUFXO0tBb0RyRDtJQWxERCxzQkFBYSxpREFBVzs7OztRQUl4QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7Ozs7UUFORCxVQUF5QixLQUFjO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7T0FBQTtJQU1ELHNCQUNJLCtDQUFTOzs7O1FBRGI7WUFFRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMxQjs7O09BQUE7SUFFRCxzQkFDSSw4Q0FBUTs7OztRQUtaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVJELFVBQ2EsS0FBaUM7WUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCOzs7T0FBQTtJQU1ELHNCQUVJLGdEQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUkQsVUFFZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTtJQU1ELHNCQUVJLDhDQUFROzs7O1FBSVo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBUkQsVUFFYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDOzs7T0FBQTs7OztJQU1ELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7S0FDRjs7OztJQUtELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9DOztnQkFoR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBSyxtQkFBbUI7b0JBQ2hDLGtxQkFBaUQ7b0JBQ2pELFVBQVUsRUFBRzt3QkFDWCxPQUFPLENBQUMsZUFBZSxFQUFFOzRCQUN2QixLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztnQ0FDdEIsT0FBTyxFQUFFLEdBQUc7Z0NBQ1osTUFBTSxFQUFHLENBQUM7NkJBQ1gsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2dDQUNwQixPQUFPLEVBQUUsR0FBRztnQ0FDWixNQUFNLEVBQUcsR0FBRzs2QkFDYixDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzs0QkFDMUQsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3lCQUM1RCxDQUFDO3FCQUNIO29CQU9ELElBQUksRUFBUzt3QkFDWCwyQkFBMkIsRUFBRSxNQUFNO3dCQUNuQyxhQUFhLEVBQWdCLFdBQVc7cUJBQ3pDOzZCQVJDLGtEQUdJO2lCQU1QOzs7O2dCQTdCUSxtQkFBbUIsdUJBeUZiLElBQUk7Z0JBdEdqQixVQUFVOzs7aUNBbURULE1BQU07OEJBRU4sS0FBSzs0QkFRTCxXQUFXLFNBQUMsNkJBQTZCOzJCQUt6QyxLQUFLOzZCQVVMLEtBQUssWUFDTCxXQUFXLFNBQUMsa0NBQWtDOzJCQVM5QyxLQUFLLFlBQ0wsV0FBVyxTQUFDLGdDQUFnQzs7bUNBaEcvQzs7U0FxRGEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotY29sbGFwc2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnbnotY29sbGFwc2UtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zIDogW1xuICAgIHRyaWdnZXIoJ2NvbGxhcHNlU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgaGVpZ2h0IDogMFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICBoZWlnaHQgOiAnKidcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nKSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCcxNTBtcyBlYXNlLW91dCcpKVxuICAgIF0pXG4gIF0sXG4gIHN0eWxlcyAgICAgOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgfWBcbiAgXSxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtXSc6ICd0cnVlJyxcbiAgICAnW2F0dHIucm9sZV0nICAgICAgICAgICAgICA6ICdcInRhYmxpc3RcIidcbiAgfVxufSlcblxuZXhwb3J0IGNsYXNzIE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0Fycm93ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX2hlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIGlzSGVhZGVyU3RyaW5nOiBib29sZWFuO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBAT3V0cHV0KCkgbnpBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgc2V0IG56U2hvd0Fycm93KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0Fycm93ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNob3dBcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0Fycm93O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY29sbGFwc2Utbm8tYXJyb3cnKVxuICBnZXQgaXNOb0Fycm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5uelNob3dBcnJvdztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekhlYWRlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzSGVhZGVyU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9oZWFkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuekhlYWRlcigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tZGlzYWJsZWQnKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tYWN0aXZlJylcbiAgc2V0IG56QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgY2xpY2tIZWFkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubnpDb2xsYXBzZUNvbXBvbmVudC5jbGljayh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgbnpDb2xsYXBzZUNvbXBvbmVudDogTnpDb2xsYXBzZUNvbXBvbmVudCwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQuYWRkQ29sbGFwc2UodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQucmVtb3ZlQ29sbGFwc2UodGhpcyk7XG4gIH1cbn1cbiJdfQ==