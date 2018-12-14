/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class OkButtonComponent {
    constructor() {
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
}
OkButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ok-button',
                template: "<a\n    class=\"{{ prefixCls }}-ok-btn {{ okDisabled ? prefixCls + '-ok-btn-disabled' : '' }}\"\n    role=\"button\"\n    (click)=\"okDisabled ? null : clickOk.emit()\"\n  >\n    {{ locale.ok }}\n  </a>"
            }] }
];
OkButtonComponent.propDecorators = {
    locale: [{ type: Input }],
    okDisabled: [{ type: Input }],
    clickOk: [{ type: Output }]
};
function OkButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    OkButtonComponent.prototype.locale;
    /** @type {?} */
    OkButtonComponent.prototype.okDisabled;
    /** @type {?} */
    OkButtonComponent.prototype.clickOk;
    /** @type {?} */
    OkButtonComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvY2FsZW5kYXIvb2stYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMvRSxNQUFNOzswQkFFMkIsS0FBSzt1QkFDaEIsSUFBSSxZQUFZLEVBQVE7eUJBRXhCLGNBQWM7Ozs7WUFWbkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixzTkFBdUM7YUFDeEM7OztxQkFHRSxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb2stYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICdvay1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgT2tCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBva0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjbGlja09rID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG59XG4iXX0=