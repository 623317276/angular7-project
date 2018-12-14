/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NzFormItemComponent } from './nz-form-item.component';
var NzFormExplainComponent = /** @class */ (function () {
    function NzFormExplainComponent(nzFormItemComponent) {
        this.nzFormItemComponent = nzFormItemComponent;
    }
    /**
     * @return {?}
     */
    NzFormExplainComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzFormItemComponent.disableHelp();
    };
    /**
     * @return {?}
     */
    NzFormExplainComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nzFormItemComponent.enableHelp();
    };
    NzFormExplainComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-explain',
                    preserveWhitespaces: false,
                    animations: [
                        trigger('formExplainAnimation', [
                            transition('void => *', [
                                style({
                                    opacity: 0,
                                    transform: 'translateY(-5px)'
                                }),
                                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                }))
                            ]),
                            transition('* => void', [
                                style({
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                }),
                                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                    opacity: 0,
                                    transform: 'translateY(-5px)'
                                }))
                            ])
                        ])
                    ],
                    template: "<div [@formExplainAnimation]>\n  <ng-content></ng-content>\n</div>",
                    host: {
                        '[class.ant-form-explain]': 'true'
                    },
                    styles: [":host{\n      display:block;\n    }"]
                }] }
    ];
    /** @nocollapse */
    NzFormExplainComponent.ctorParameters = function () { return [
        { type: NzFormItemComponent }
    ]; };
    return NzFormExplainComponent;
}());
export { NzFormExplainComponent };
function NzFormExplainComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormExplainComponent.prototype.nzFormItemComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUF3QzdELGdDQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtLQUMzRDs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN4Qzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUN2Qzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsaUJBQWlCO29CQUN0QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixVQUFVLEVBQVc7d0JBQ25CLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRTs0QkFDOUIsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDO29DQUNKLE9BQU8sRUFBSSxDQUFDO29DQUNaLFNBQVMsRUFBRSxrQkFBa0I7aUNBQzlCLENBQUM7Z0NBQ0YsT0FBTyxDQUFDLDJDQUEyQyxFQUFFLEtBQUssQ0FBQztvQ0FDekQsT0FBTyxFQUFJLENBQUM7b0NBQ1osU0FBUyxFQUFFLGVBQWU7aUNBQzNCLENBQUMsQ0FBQzs2QkFDSixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUksQ0FBQztvQ0FDWixTQUFTLEVBQUUsZUFBZTtpQ0FDM0IsQ0FBQztnQ0FDRixPQUFPLENBQUMsMkNBQTJDLEVBQUUsS0FBSyxDQUFDO29DQUN6RCxPQUFPLEVBQUksQ0FBQztvQ0FDWixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5QixDQUFDLENBQUM7NkJBQ0osQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO29CQUNELDhFQUF1RDtvQkFDdkQsSUFBSSxFQUFpQjt3QkFDbkIsMEJBQTBCLEVBQUUsTUFBTTtxQkFDbkM7NkJBRUMscUNBRUU7aUJBRUw7Ozs7Z0JBdENRLG1CQUFtQjs7aUNBUDVCOztTQThDYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Rm9ybUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWZvcm0taXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWZvcm0tZXhwbGFpbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignZm9ybUV4cGxhaW5BbmltYXRpb24nLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJywgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgIDogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgOiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KSdcbiAgICAgICAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1mb3JtLWV4cGxhaW5dJzogJ3RydWUnXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICBgOmhvc3R7XG4gICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpGb3JtRXhwbGFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekZvcm1JdGVtQ29tcG9uZW50OiBOekZvcm1JdGVtQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm56Rm9ybUl0ZW1Db21wb25lbnQuZGlzYWJsZUhlbHAoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpGb3JtSXRlbUNvbXBvbmVudC5lbmFibGVIZWxwKCk7XG4gIH1cbn1cbiJdfQ==