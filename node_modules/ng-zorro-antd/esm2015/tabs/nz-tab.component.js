/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzTabSetComponent } from './nz-tabset.component';
export class NzTabComponent {
    /**
     * @param {?} nzTabSetComponent
     */
    constructor(nzTabSetComponent) {
        this.nzTabSetComponent = nzTabSetComponent;
        this._disabled = false;
        this.position = null;
        this.origin = null;
        this.nzClick = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzDeselect = new EventEmitter();
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
     * @return {?}
     */
    ngOnInit() {
        this.nzTabSetComponent.addTab(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nzTabSetComponent.removeTab(this);
    }
}
NzTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tab',
                preserveWhitespaces: false,
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                host: {
                    '[class.ant-tabs-tabpane]': 'true'
                }
            }] }
];
/** @nocollapse */
NzTabComponent.ctorParameters = () => [
    { type: NzTabSetComponent }
];
NzTabComponent.propDecorators = {
    nzDisabled: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzSelect: [{ type: Output }],
    nzDeselect: [{ type: Output }],
    content: [{ type: ViewChild, args: [TemplateRef,] }],
    nzTitle: [{ type: Input }]
};
function NzTabComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabComponent.prototype._title;
    /** @type {?} */
    NzTabComponent.prototype._disabled;
    /** @type {?} */
    NzTabComponent.prototype.position;
    /** @type {?} */
    NzTabComponent.prototype.origin;
    /** @type {?} */
    NzTabComponent.prototype.isTitleString;
    /** @type {?} */
    NzTabComponent.prototype.nzClick;
    /** @type {?} */
    NzTabComponent.prototype.nzSelect;
    /** @type {?} */
    NzTabComponent.prototype.nzDeselect;
    /** @type {?} */
    NzTabComponent.prototype.content;
    /** @type {?} */
    NzTabComponent.prototype.nzTabSetComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFVMUQsTUFBTTs7OztJQStCSixZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjt5QkE3QnBDLEtBQUs7d0JBQ0MsSUFBSTtzQkFDTixJQUFJO3VCQVlSLElBQUksWUFBWSxFQUFRO3dCQUN2QixJQUFJLFlBQVksRUFBUTswQkFDdEIsSUFBSSxZQUFZLEVBQVE7S0FjOUM7Ozs7O0lBekJELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBT0QsSUFDSSxPQUFPLENBQUMsS0FBaUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3JCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7O0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4Qzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsUUFBUTtnQkFDN0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsc0VBQThDO2dCQUM5QyxJQUFJLEVBQWlCO29CQUNuQiwwQkFBMEIsRUFBRSxNQUFNO2lCQUNuQzthQUNGOzs7O1lBVFEsaUJBQWlCOzs7eUJBaUJ2QixLQUFLO3NCQVNMLE1BQU07dUJBQ04sTUFBTTt5QkFDTixNQUFNO3NCQUNOLFNBQVMsU0FBQyxXQUFXO3NCQUVyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56VGFiU2V0Q29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJzZXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10YWInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXRhYnMtdGFicGFuZV0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwb3NpdGlvbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIG9yaWdpbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBAT3V0cHV0KCkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG56U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbnpEZXNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpUYWJTZXRDb21wb25lbnQ6IE56VGFiU2V0Q29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56VGFiU2V0Q29tcG9uZW50LmFkZFRhYih0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubnpUYWJTZXRDb21wb25lbnQucmVtb3ZlVGFiKHRoaXMpO1xuICB9XG5cbn1cbiJdfQ==