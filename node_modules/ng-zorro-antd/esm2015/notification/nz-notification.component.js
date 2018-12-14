/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { NzMessageComponent } from '../message/nz-message.component';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
export class NzNotificationComponent extends NzMessageComponent {
    /**
     * @param {?} container
     */
    constructor(container) {
        super(container);
        this.container = container;
    }
    /**
     * @return {?}
     */
    close() {
        this._destroy();
    }
    /**
     * @return {?}
     */
    get state() {
        if (this.nzMessage.state === 'enter') {
            if ((this.container.config["nzPlacement"] === 'topLeft') || (this.container.config["nzPlacement"] === 'bottomLeft')) {
                return 'enterLeft';
            }
            else {
                return 'enterRight';
            }
        }
        else {
            return this.nzMessage.state;
        }
    }
}
NzNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-notification',
                preserveWhitespaces: false,
                animations: [
                    trigger('enterLeave', [
                        state('enterRight', style({ opacity: 1, transform: 'translateX(0)' })),
                        transition('* => enterRight', [
                            style({ opacity: 0, transform: 'translateX(5%)' }),
                            animate('100ms linear')
                        ]),
                        state('enterLeft', style({ opacity: 1, transform: 'translateX(0)' })),
                        transition('* => enterLeft', [
                            style({ opacity: 0, transform: 'translateX(-5%)' }),
                            animate('100ms linear')
                        ]),
                        state('leave', style({
                            opacity: 0,
                            transform: 'scaleY(0.8)',
                            transformOrigin: '0% 0%'
                        })),
                        transition('* => leave', [
                            style({
                                opacity: 1,
                                transform: 'scaleY(1)',
                                transformOrigin: '0% 0%'
                            }),
                            animate('100ms linear')
                        ])
                    ])
                ],
                template: "<div class=\"ant-notification-notice ant-notification-notice-closable\"\n  [ngStyle]=\"nzMessage.options.nzStyle\"\n  [ngClass]=\"nzMessage.options.nzClass\"\n  [@enterLeave]=\"state\"\n  (mouseenter)=\"onEnter()\"\n  (mouseleave)=\"onLeave()\">\n  <div *ngIf=\"!nzMessage.template\" class=\"ant-notification-notice-content\">\n    <div class=\"ant-notification-notice-content\" [ngClass]=\"{ 'ant-notification-notice-with-icon': nzMessage.type !== 'blank' }\">\n      <div [class.ant-notification-notice-with-icon]=\"nzMessage.type !== 'blank'\">\n        <ng-container [ngSwitch]=\"nzMessage.type\">\n          <i *ngSwitchCase=\"'success'\" nz-icon type=\"check-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-success\"></i>\n          <i *ngSwitchCase=\"'info'\" nz-icon type=\"info-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-info\"></i>\n          <i *ngSwitchCase=\"'warning'\" nz-icon type=\"exclamation-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-warning\"></i>\n          <i *ngSwitchCase=\"'error'\" nz-icon type=\"close-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-error\"></i>\n        </ng-container>\n        <div class=\"ant-notification-notice-message\" [innerHTML]=\"nzMessage.title\"></div>\n        <div class=\"ant-notification-notice-description\" [innerHTML]=\"nzMessage.content\"></div>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngIf]=\"nzMessage.template\" [ngTemplateOutlet]=\"nzMessage.template\" [ngTemplateOutletContext]=\"{ $implicit: this }\"></ng-template>\n  <a tabindex=\"0\" class=\"ant-notification-notice-close\" (click)=\"close()\">\n    <span class=\"ant-notification-notice-close-x\">\n      <i nz-icon type=\"close\" class=\"ant-notification-close-icon\"></i>\n    </span>\n  </a>\n</div>"
            }] }
];
/** @nocollapse */
NzNotificationComponent.ctorParameters = () => [
    { type: NzNotificationContainerComponent }
];
NzNotificationComponent.propDecorators = {
    nzMessage: [{ type: Input }]
};
function NzNotificationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzNotificationComponent.prototype.nzMessage;
    /** @type {?} */
    NzNotificationComponent.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJub3RpZmljYXRpb24vbnotbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQW1DekYsTUFBTSw4QkFBK0IsU0FBUSxrQkFBa0I7Ozs7SUFHN0QsWUFBb0IsU0FBMkM7UUFDN0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBREMsY0FBUyxHQUFULFNBQVMsQ0FBa0M7S0FFOUQ7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxvQkFBaUIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sb0JBQWlCLFlBQVksQ0FBQyxFQUFFO2dCQUM3RyxPQUFPLFdBQVcsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxPQUFPLFlBQVksQ0FBQzthQUNyQjtTQUNGO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQzdCO0tBRUY7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGlCQUFpQjtnQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsVUFBVSxFQUFXO29CQUNuQixPQUFPLENBQUMsWUFBWSxFQUFFO3dCQUNwQixLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7d0JBQ3RFLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTs0QkFDNUIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzs0QkFDbEQsT0FBTyxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsQ0FBQzt3QkFDRixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7d0JBQ3JFLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDM0IsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQzs0QkFDbkQsT0FBTyxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsQ0FBQzt3QkFDRixLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzs0QkFDbkIsT0FBTyxFQUFVLENBQUM7NEJBQ2xCLFNBQVMsRUFBUSxhQUFhOzRCQUM5QixlQUFlLEVBQUUsT0FBTzt5QkFDekIsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxZQUFZLEVBQUU7NEJBQ3ZCLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQVUsQ0FBQztnQ0FDbEIsU0FBUyxFQUFRLFdBQVc7Z0NBQzVCLGVBQWUsRUFBRSxPQUFPOzZCQUN6QixDQUFDOzRCQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7eUJBQ3hCLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDtnQkFDRCwrMERBQXdEO2FBQ3pEOzs7O1lBbENRLGdDQUFnQzs7O3dCQW9DdEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbWVzc2FnZS9uei1tZXNzYWdlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5kZWZpbml0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbm90aWZpY2F0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdlbnRlckxlYXZlJywgW1xuICAgICAgc3RhdGUoJ2VudGVyUmlnaHQnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gZW50ZXJSaWdodCcsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDUlKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdlbnRlckxlZnQnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gZW50ZXJMZWZ0JywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUlKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCdsZWF2ZScsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMSxcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgICA6ICcuL256LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25Db21wb25lbnQgZXh0ZW5kcyBOek1lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBuek1lc3NhZ2U6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQpIHtcbiAgICBzdXBlcihjb250YWluZXIpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZGVzdHJveSgpO1xuICB9XG5cbiAgZ2V0IHN0YXRlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubnpNZXNzYWdlLnN0YXRlID09PSAnZW50ZXInKSB7XG4gICAgICBpZiAoKHRoaXMuY29udGFpbmVyLmNvbmZpZy5uelBsYWNlbWVudCA9PT0gJ3RvcExlZnQnKSB8fCAodGhpcy5jb250YWluZXIuY29uZmlnLm56UGxhY2VtZW50ID09PSAnYm90dG9tTGVmdCcpKSB7XG4gICAgICAgIHJldHVybiAnZW50ZXJMZWZ0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnZW50ZXJSaWdodCc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm56TWVzc2FnZS5zdGF0ZTtcbiAgICB9XG5cbiAgfVxufVxuIl19