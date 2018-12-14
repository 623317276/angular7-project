/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { NzMessageContainerComponent } from '../message/nz-message-container.component';
import { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG } from './nz-notification-config';
export class NzNotificationContainerComponent extends NzMessageContainerComponent {
    /**
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(defaultConfig, config) {
        super(defaultConfig, config);
    }
}
NzNotificationContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-notification-container',
                preserveWhitespaces: false,
                template: "<div\n  class=\"ant-notification ant-notification-{{config.nzPlacement}}\"\n  [style.top]=\"(config.nzPlacement==='topLeft'||config.nzPlacement=='topRight')? config.nzTop:null\"\n  [style.bottom]=\"(config.nzPlacement==='bottomLeft'||config.nzPlacement=='bottomRight')? config.nzBottom:null\"\n  [style.right]=\"(config.nzPlacement==='bottomRight'||config.nzPlacement=='topRight')?'0px':null\"\n  [style.left]=\"(config.nzPlacement==='topLeft'||config.nzPlacement=='bottomLeft')?'0px':null\">\n  <nz-notification *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-notification>\n</div>"
            }] }
];
/** @nocollapse */
NzNotificationContainerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uL256LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFeEYsT0FBTyxFQUF3QixzQkFBc0IsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT3hILE1BQU0sdUNBQXdDLFNBQVEsMkJBQTJCOzs7OztJQUUvRSxZQUFnRSxhQUFtQyxFQUMzQyxNQUE0QjtRQUNsRixLQUFLLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzlCOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLDJCQUEyQjtnQkFDaEQsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsaW9CQUFpRTthQUNsRTs7Ozs0Q0FHYyxRQUFRLFlBQUksTUFBTSxTQUFDLDhCQUE4Qjs0Q0FDakQsUUFBUSxZQUFJLE1BQU0sU0FBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbWVzc2FnZS9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkNvbmZpZywgTlpfTk9USUZJQ0FUSU9OX0NPTkZJRywgTlpfTk9USUZJQ0FUSU9OX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1ub3RpZmljYXRpb24tY29udGFpbmVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTnpOb3RpZmljYXRpb25Db25maWcsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTk9USUZJQ0FUSU9OX0NPTkZJRykgY29uZmlnOiBOek5vdGlmaWNhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gIH1cblxufVxuIl19