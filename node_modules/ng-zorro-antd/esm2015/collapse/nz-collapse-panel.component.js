/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Host, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzCollapseComponent } from './nz-collapse.component';
export class NzCollapsePanelComponent {
    /**
     * @param {?} nzCollapseComponent
     * @param {?} elementRef
     */
    constructor(nzCollapseComponent, elementRef) {
        this.nzCollapseComponent = nzCollapseComponent;
        this.elementRef = elementRef;
        this._disabled = false;
        this._showArrow = true;
        this._active = false;
        this.el = this.elementRef.nativeElement;
        this.nzActiveChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowArrow(value) {
        this._showArrow = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowArrow() {
        return this._showArrow;
    }
    /**
     * @return {?}
     */
    get isNoArrow() {
        return !this.nzShowArrow;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHeader(value) {
        this.isHeaderString = !(value instanceof TemplateRef);
        this._header = value;
    }
    /**
     * @return {?}
     */
    get nzHeader() {
        return this._header;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzActive(value) {
        this._active = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzActive() {
        return this._active;
    }
    /**
     * @return {?}
     */
    clickHeader() {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzCollapseComponent.addCollapse(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nzCollapseComponent.removeCollapse(this);
    }
}
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
                styles: [`
      :host {
        display: block
      }`]
            }] }
];
/** @nocollapse */
NzCollapsePanelComponent.ctorParameters = () => [
    { type: NzCollapseComponent, decorators: [{ type: Host }] },
    { type: ElementRef }
];
NzCollapsePanelComponent.propDecorators = {
    nzActiveChange: [{ type: Output }],
    nzShowArrow: [{ type: Input }],
    isNoArrow: [{ type: HostBinding, args: ['class.ant-collapse-no-arrow',] }],
    nzHeader: [{ type: Input }],
    nzDisabled: [{ type: Input }, { type: HostBinding, args: ['class.ant-collapse-item-disabled',] }],
    nzActive: [{ type: Input }, { type: HostBinding, args: ['class.ant-collapse-item-active',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvbGxhcHNlL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFdBQVcsRUFDWCxLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUErQjlELE1BQU07Ozs7O0lBMERKLFlBQTRCLG1CQUF3QyxFQUFVLFVBQXNCO1FBQXhFLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO3lCQXpEaEYsS0FBSzswQkFDSixJQUFJO3VCQUNQLEtBQUs7a0JBR0csSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOzhCQUM1QixJQUFJLFlBQVksRUFBVztLQW9EckQ7Ozs7O0lBbERELElBQWEsV0FBVyxDQUFDLEtBQWM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7SUFFRCxJQUNJLFNBQVM7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUMxQjs7Ozs7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUFpQztRQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsSUFFSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxJQUVJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7S0FDRjs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDL0M7OztZQWhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFLLG1CQUFtQjtnQkFDaEMsa3FCQUFpRDtnQkFDakQsVUFBVSxFQUFHO29CQUNYLE9BQU8sQ0FBQyxlQUFlLEVBQUU7d0JBQ3ZCLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDOzRCQUN0QixPQUFPLEVBQUUsR0FBRzs0QkFDWixNQUFNLEVBQUcsQ0FBQzt5QkFDWCxDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7NEJBQ3BCLE9BQU8sRUFBRSxHQUFHOzRCQUNaLE1BQU0sRUFBRyxHQUFHO3lCQUNiLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUMxRCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQzVELENBQUM7aUJBQ0g7Z0JBT0QsSUFBSSxFQUFTO29CQUNYLDJCQUEyQixFQUFFLE1BQU07b0JBQ25DLGFBQWEsRUFBZ0IsV0FBVztpQkFDekM7eUJBUkM7OztRQUdJO2FBTVA7Ozs7WUE3QlEsbUJBQW1CLHVCQXlGYixJQUFJO1lBdEdqQixVQUFVOzs7NkJBbURULE1BQU07MEJBRU4sS0FBSzt3QkFRTCxXQUFXLFNBQUMsNkJBQTZCO3VCQUt6QyxLQUFLO3lCQVVMLEtBQUssWUFDTCxXQUFXLFNBQUMsa0NBQWtDO3VCQVM5QyxLQUFLLFlBQ0wsV0FBVyxTQUFDLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56Q29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL256LWNvbGxhcHNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LWNvbGxhcHNlLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9ucyA6IFtcbiAgICB0cmlnZ2VyKCdjb2xsYXBzZVN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIGhlaWdodCA6IDBcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgaGVpZ2h0IDogJyonXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcxNTBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnMTUwbXMgZWFzZS1vdXQnKSlcbiAgICBdKVxuICBdLFxuICBzdHlsZXMgICAgIDogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgIH1gXG4gIF0sXG4gIGhvc3QgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2UtaXRlbV0nOiAndHJ1ZScsXG4gICAgJ1thdHRyLnJvbGVdJyAgICAgICAgICAgICAgOiAnXCJ0YWJsaXN0XCInXG4gIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dBcnJvdyA9IHRydWU7XG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9oZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBpc0hlYWRlclN0cmluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgQE91dHB1dCgpIG56QWN0aXZlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIHNldCBuelNob3dBcnJvdyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dBcnJvdyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93QXJyb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dBcnJvdztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNvbGxhcHNlLW5vLWFycm93JylcbiAgZ2V0IGlzTm9BcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMubnpTaG93QXJyb3c7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpIZWFkZXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0hlYWRlclN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5faGVhZGVyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpIZWFkZXIoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWRpc2FibGVkJylcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jb2xsYXBzZS1pdGVtLWFjdGl2ZScpXG4gIHNldCBuekFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIGNsaWNrSGVhZGVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLm56Q29sbGFwc2VDb21wb25lbnQuY2xpY2sodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIG56Q29sbGFwc2VDb21wb25lbnQ6IE56Q29sbGFwc2VDb21wb25lbnQsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbGxhcHNlQ29tcG9uZW50LmFkZENvbGxhcHNlKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbGxhcHNlQ29tcG9uZW50LnJlbW92ZUNvbGxhcHNlKHRoaXMpO1xuICB9XG59XG4iXX0=