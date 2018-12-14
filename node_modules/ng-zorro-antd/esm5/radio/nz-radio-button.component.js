/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Optional, Renderer2 } from '@angular/core';
import { NzRadioGroupComponent } from './nz-radio-group.component';
import { NzRadioComponent } from './nz-radio.component';
var NzRadioButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzRadioButtonComponent, _super);
    /* tslint:disable-next-line:no-any */
    function NzRadioButtonComponent(nzRadioGroup, renderer, document) {
        var _this = _super.call(this, nzRadioGroup, renderer, document) || this;
        _this.prefixCls = 'ant-radio-button';
        return _this;
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
    NzRadioButtonComponent.ctorParameters = function () { return [
        { type: NzRadioGroupComponent, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return NzRadioButtonComponent;
}(NzRadioComponent));
export { NzRadioButtonComponent };
function NzRadioButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRadioButtonComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJyYWRpby9uei1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBWVosa0RBQWdCO0lBRTFELHFDQUFxQztJQUNyQyxnQ0FBd0IsWUFBbUMsRUFBRSxRQUFtQixFQUFvQixRQUFhO1FBQWpILFlBQ0Usa0JBQU0sWUFBWSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FDeEM7MEJBSlcsa0JBQWtCOztLQUk3Qjs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxtQkFBbUI7b0JBQ3hDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGtUQUF1RDtvQkFDdkQsSUFBSSxFQUFpQjt3QkFDbkIsa0NBQWtDLEVBQVcsTUFBTTt3QkFDbkQsMENBQTBDLEVBQUcsV0FBVzt3QkFDeEQsMkNBQTJDLEVBQUUsWUFBWTtxQkFDMUQ7aUJBQ0Y7Ozs7Z0JBWlEscUJBQXFCLHVCQWdCZixRQUFRO2dCQW5CckIsU0FBUztnREFtQjBFLE1BQU0sU0FBQyxRQUFROztpQ0F6QnBHO0VBc0I0QyxnQkFBZ0I7U0FBL0Msc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpSYWRpb0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYWRpby1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vbnotcmFkaW8uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbbnotcmFkaW8tYnV0dG9uXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXJdJyAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWRdJyA6ICduekNoZWNrZWQnLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UmFkaW9CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBOelJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJlZml4Q2xzID0gJ2FudC1yYWRpby1idXR0b24nO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIG56UmFkaW9Hcm91cDogTnpSYWRpb0dyb3VwQ29tcG9uZW50LCByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG4gICAgc3VwZXIobnpSYWRpb0dyb3VwLCByZW5kZXJlciwgZG9jdW1lbnQpO1xuICB9XG59XG4iXX0=