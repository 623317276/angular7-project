/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Optional, Renderer2 } from '@angular/core';
import { NzRadioGroupComponent } from './nz-radio-group.component';
import { NzRadioComponent } from './nz-radio.component';
export class NzRadioButtonComponent extends NzRadioComponent {
    /**
     * @param {?} nzRadioGroup
     * @param {?} renderer
     * @param {?} document
     */
    constructor(nzRadioGroup, renderer, document) {
        super(nzRadioGroup, renderer, document);
        this.prefixCls = 'ant-radio-button';
    }
}
NzRadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-radio-button]',
                preserveWhitespaces: false,
                template: "<span [ngClass]=\"classMap\">\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"nzDisabled\" [(ngModel)]=\"nzChecked\" (blur)=\"onBlur()\" [attr.name]=\"name\">\n  <span class=\"ant-radio-button-inner\"></span>\n</span>\n<span><ng-content></ng-content></span>",
                host: {
                    '[class.ant-radio-button-wrapper]': 'true',
                    '[class.ant-radio-button-wrapper-checked]': 'nzChecked',
                    '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled'
                }
            }] }
];
/** @nocollapse */
NzRadioButtonComponent.ctorParameters = () => [
    { type: NzRadioGroupComponent, decorators: [{ type: Optional }] },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
function NzRadioButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRadioButtonComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJyYWRpby9uei1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBRU4sUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVl4RCxNQUFNLDZCQUE4QixTQUFRLGdCQUFnQjs7Ozs7O0lBRzFELFlBQXdCLFlBQW1DLEVBQUUsUUFBbUIsRUFBb0IsUUFBYTtRQUMvRyxLQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzt5QkFIOUIsa0JBQWtCO0tBSTdCOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLG1CQUFtQjtnQkFDeEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsa1RBQXVEO2dCQUN2RCxJQUFJLEVBQWlCO29CQUNuQixrQ0FBa0MsRUFBVyxNQUFNO29CQUNuRCwwQ0FBMEMsRUFBRyxXQUFXO29CQUN4RCwyQ0FBMkMsRUFBRSxZQUFZO2lCQUMxRDthQUNGOzs7O1lBWlEscUJBQXFCLHVCQWdCZixRQUFRO1lBbkJyQixTQUFTOzRDQW1CMEUsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelJhZGlvR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LXJhZGlvLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYWRpby5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tuei1yYWRpby1idXR0b25dJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlcl0nICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZF0nIDogJ256Q2hlY2tlZCcsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpSYWRpb0J1dHRvbkNvbXBvbmVudCBleHRlbmRzIE56UmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcmVmaXhDbHMgPSAnYW50LXJhZGlvLWJ1dHRvbic7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgbnpSYWRpb0dyb3VwOiBOelJhZGlvR3JvdXBDb21wb25lbnQsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcbiAgICBzdXBlcihuelJhZGlvR3JvdXAsIHJlbmRlcmVyLCBkb2N1bWVudCk7XG4gIH1cbn1cbiJdfQ==