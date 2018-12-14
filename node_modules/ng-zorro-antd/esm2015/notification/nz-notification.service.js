/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NzMessageBaseService } from '../message/nz-message.service';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
export class NzNotificationService extends NzMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     */
    constructor(overlay, injector, cfr, appRef) {
        super(overlay, NzNotificationContainerComponent, injector, cfr, appRef, 'notification-');
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'success', title, content }, options));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'error', title, content }, options));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'info', title, content }, options));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'warning', title, content }, options));
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    blank(title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'blank', title, content }, options));
    }
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, title, content, options) {
        return /** @type {?} */ (this.createMessage({ type, title, content }, options));
    }
    /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    template(template, options) {
        return /** @type {?} */ (this.createMessage({ template }, options));
    }
}
NzNotificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzNotificationService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ NzNotificationService.ngInjectableDef = i0.defineInjectable({ factory: function NzNotificationService_Factory() { return new i1.NzNotificationService(i0.inject(i2.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: i1.NzNotificationService, providedIn: "root" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uL256LW5vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRTVHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3JFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBTXpGLE1BQU0sNEJBQTZCLFNBQVEsb0JBQWdHOzs7Ozs7O0lBRXpJLFlBQ0UsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0I7UUFFdEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztLQUMxRjs7Ozs7OztJQUdELE9BQU8sQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO1FBQ3pFLHlCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQTZCLEVBQUM7S0FDckc7Ozs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFtQztRQUN2RSx5QkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUE2QixFQUFDO0tBQ25HOzs7Ozs7O0lBRUQsSUFBSSxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7UUFDdEUseUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBNkIsRUFBQztLQUNsRzs7Ozs7OztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO1FBQ3pFLHlCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQTZCLEVBQUM7S0FDckc7Ozs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFtQztRQUN2RSx5QkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUE2QixFQUFDO0tBQ25HOzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFpRSxFQUFFLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7UUFDM0kseUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUE2QixFQUFDO0tBQzFGOzs7Ozs7SUFHRCxRQUFRLENBQUMsUUFBeUIsRUFBRSxPQUFtQztRQUNyRSx5QkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUE2QixFQUFDO0tBQzlFOzs7WUExQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWFEsT0FBTztZQUMrQyxRQUFRO1lBQTlDLHdCQUF3QjtZQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1lc3NhZ2VCYXNlU2VydmljZSB9IGZyb20gJy4uL21lc3NhZ2UvbnotbWVzc2FnZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25Db25maWcgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uRGF0YSwgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkLCBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24uZGVmaW5pdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOek5vdGlmaWNhdGlvblNlcnZpY2UgZXh0ZW5kcyBOek1lc3NhZ2VCYXNlU2VydmljZTxOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCwgTnpOb3RpZmljYXRpb25EYXRhLCBOek5vdGlmaWNhdGlvbkNvbmZpZz4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcblxuICAgIHN1cGVyKG92ZXJsYXksIE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LCBpbmplY3RvciwgY2ZyLCBhcHBSZWYsICdub3RpZmljYXRpb24tJyk7XG4gIH1cblxuICAvLyBTaG9ydGN1dCBtZXRob2RzXG4gIHN1Y2Nlc3ModGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdzdWNjZXNzJywgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xuICB9XG5cbiAgZXJyb3IodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdlcnJvcicsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpIGFzIE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcbiAgfVxuXG4gIGluZm8odGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdpbmZvJywgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xuICB9XG5cbiAgd2FybmluZyh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKSBhcyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XG4gIH1cblxuICBibGFuayh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2JsYW5rJywgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xuICB9XG5cbiAgY3JlYXRlKHR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnYmxhbmsnIHwgc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZSwgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xuICB9XG5cbiAgLy8gRm9yIGNvbnRlbnQgd2l0aCB0ZW1wbGF0ZVxuICB0ZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+LCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHRlbXBsYXRlIH0sIG9wdGlvbnMpIGFzIE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcbiAgfVxufVxuIl19