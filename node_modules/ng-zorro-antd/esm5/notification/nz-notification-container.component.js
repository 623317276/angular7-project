/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { NzMessageContainerComponent } from '../message/nz-message-container.component';
import { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG } from './nz-notification-config';
var NzNotificationContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzNotificationContainerComponent, _super);
    function NzNotificationContainerComponent(defaultConfig, config) {
        return _super.call(this, defaultConfig, config) || this;
    }
    NzNotificationContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-notification-container',
                    preserveWhitespaces: false,
                    template: "<div\n  class=\"ant-notification ant-notification-{{config.nzPlacement}}\"\n  [style.top]=\"(config.nzPlacement==='topLeft'||config.nzPlacement=='topRight')? config.nzTop:null\"\n  [style.bottom]=\"(config.nzPlacement==='bottomLeft'||config.nzPlacement=='bottomRight')? config.nzBottom:null\"\n  [style.right]=\"(config.nzPlacement==='bottomRight'||config.nzPlacement=='topRight')?'0px':null\"\n  [style.left]=\"(config.nzPlacement==='topLeft'||config.nzPlacement=='bottomLeft')?'0px':null\">\n  <nz-notification *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-notification>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzNotificationContainerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
    ]; };
    return NzNotificationContainerComponent;
}(NzMessageContainerComponent));
export { NzNotificationContainerComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uL256LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXhGLE9BQU8sRUFBd0Isc0JBQXNCLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFPbEUsNERBQTJCO0lBRS9FLDBDQUFnRSxhQUFtQyxFQUMzQyxNQUE0QjtlQUNsRixrQkFBTSxhQUFhLEVBQUUsTUFBTSxDQUFDO0tBQzdCOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLDJCQUEyQjtvQkFDaEQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsaW9CQUFpRTtpQkFDbEU7Ozs7Z0RBR2MsUUFBUSxZQUFJLE1BQU0sU0FBQyw4QkFBOEI7Z0RBQ2pELFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCOzsyQ0FkeEQ7RUFXc0QsMkJBQTJCO1NBQXBFLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi9tZXNzYWdlL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29uZmlnLCBOWl9OT1RJRklDQVRJT05fQ09ORklHLCBOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LW5vdGlmaWNhdGlvbi1jb250YWluZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTk9USUZJQ0FUSU9OX0RFRkFVTFRfQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBOek5vdGlmaWNhdGlvbkNvbmZpZyxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9OT1RJRklDQVRJT05fQ09ORklHKSBjb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgfVxuXG59XG4iXX0=