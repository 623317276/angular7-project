/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
export class NzMessageComponent {
    /**
     * @param {?} _messageContainer
     */
    constructor(_messageContainer) {
        this._messageContainer = _messageContainer;
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._options = this.nzMessage.options;
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'enter';
        }
        this._autoErase = this._options.nzDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    onEnter() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    }
    /**
     * @return {?}
     */
    onLeave() {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    _destroy() {
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            setTimeout(() => this._messageContainer.removeMessage(this.nzMessage.messageId), 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId);
        }
    }
    /**
     * @return {?}
     */
    _initErase() {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    }
    /**
     * @return {?}
     */
    _updateTTL() {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    }
    /**
     * @return {?}
     */
    _startEraseTimeout() {
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout(); // To prevent calling _startEraseTimeout() more times to create more timer
            this._eraseTimer = window.setTimeout(() => this._destroy(), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    }
    /**
     * @return {?}
     */
    _clearEraseTimeout() {
        if (this._eraseTimer !== null) {
            window.clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    }
}
NzMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-message',
                preserveWhitespaces: false,
                animations: [
                    trigger('enterLeave', [
                        state('enter', style({ opacity: 1, transform: 'translateY(0)' })),
                        transition('* => enter', [
                            style({ opacity: 0, transform: 'translateY(-50%)' }),
                            animate('100ms linear')
                        ]),
                        state('leave', style({ opacity: 0, transform: 'translateY(-50%)' })),
                        transition('* => leave', [
                            style({ opacity: 1, transform: 'translateY(0)' }),
                            animate('100ms linear')
                        ])
                    ])
                ],
                template: "<div class=\"ant-message-notice\"\n  [@enterLeave]=\"nzMessage.state\"\n  (mouseenter)=\"onEnter()\"\n  (mouseleave)=\"onLeave()\">\n  <div class=\"ant-message-notice-content\">\n    <div class=\"ant-message-custom-content\" [ngClass]=\"'ant-message-' + nzMessage.type\">\n      <ng-container [ngSwitch]=\"nzMessage.type\">\n        <i *ngSwitchCase=\"'success'\" nz-icon type=\"check-circle\"></i>\n        <i *ngSwitchCase=\"'info'\"  nz-icon type=\"info-circle\"></i>\n        <i *ngSwitchCase=\"'warning'\" nz-icon type=\"exclamation-circle\"></i>\n        <i *ngSwitchCase=\"'error'\" nz-icon type=\"close-circle\"></i>\n        <i *ngSwitchCase=\"'loading'\" nz-icon type=\"loading\"></i>\n      </ng-container>\n      <span [innerHTML]=\"nzMessage.content\"></span>\n    </div>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
NzMessageComponent.ctorParameters = () => [
    { type: NzMessageContainerComponent }
];
NzMessageComponent.propDecorators = {
    nzMessage: [{ type: Input }],
    nzIndex: [{ type: Input }]
};
function NzMessageComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMessageComponent.prototype.nzMessage;
    /** @type {?} */
    NzMessageComponent.prototype.nzIndex;
    /** @type {?} */
    NzMessageComponent.prototype._options;
    /** @type {?} */
    NzMessageComponent.prototype._autoErase;
    /** @type {?} */
    NzMessageComponent.prototype._eraseTimer;
    /** @type {?} */
    NzMessageComponent.prototype._eraseTimingStart;
    /** @type {?} */
    NzMessageComponent.prototype._eraseTTL;
    /** @type {?} */
    NzMessageComponent.prototype._messageContainer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVzc2FnZS9uei1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQXNCL0UsTUFBTTs7OztJQWFKLFlBQW9CLGlCQUE4QztRQUE5QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTZCOzJCQUpwQyxJQUFJO0tBS2pDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFFdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FB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RDs7OztZQXJCUSwyQkFBMkI7Ozt3QkF3QmpDLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbWVzc2FnZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignZW50ZXJMZWF2ZScsIFtcbiAgICAgIHN0YXRlKCdlbnRlcicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBlbnRlcicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2xlYXZlJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pLFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBsaW5lYXInKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgIDogJy4vbnotbWVzc2FnZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIG56TWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZDtcbiAgQElucHV0KCkgbnpJbmRleDogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBfb3B0aW9uczogTnpNZXNzYWdlRGF0YU9wdGlvbnM7IC8vIFNob3J0Y3V0IHJlZmVyZW5jZSB0byBuek1lc3NhZ2Uub3B0aW9uc1xuXG4gIC8vIEZvciBhdXRvIGVyYXNpbmcoZGVzdHJveSkgc2VsZlxuICBwcml2YXRlIF9hdXRvRXJhc2U6IGJvb2xlYW47IC8vIFdoZXRoZXIgcmVjb3JkIHRpbWVvdXQgdG8gYXV0byBkZXN0cm95IHNlbGZcbiAgcHJpdmF0ZSBfZXJhc2VUaW1lcjogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSBfZXJhc2VUaW1pbmdTdGFydDogbnVtYmVyO1xuICBwcml2YXRlIF9lcmFzZVRUTDogbnVtYmVyOyAvLyBUaW1lIHRvIGxpdmVcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlQ29udGFpbmVyOiBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm56TWVzc2FnZS5vcHRpb25zO1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMubnpBbmltYXRlKSB7XG4gICAgICB0aGlzLm56TWVzc2FnZS5zdGF0ZSA9ICdlbnRlcic7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b0VyYXNlID0gdGhpcy5fb3B0aW9ucy5uekR1cmF0aW9uID4gMDtcblxuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcbiAgICAgIHRoaXMuX2luaXRFcmFzZSgpO1xuICAgICAgdGhpcy5fc3RhcnRFcmFzZVRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlKSB7XG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRW50ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSAmJiB0aGlzLl9vcHRpb25zLm56UGF1c2VPbkhvdmVyKSB7XG4gICAgICB0aGlzLl9jbGVhckVyYXNlVGltZW91dCgpO1xuICAgICAgdGhpcy5fdXBkYXRlVFRMKCk7XG4gICAgfVxuICB9XG5cbiAgb25MZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlICYmIHRoaXMuX29wdGlvbnMubnpQYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuX3N0YXJ0RXJhc2VUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIHNlbGZcbiAgcHJvdGVjdGVkIF9kZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLm56QW5pbWF0ZSkge1xuICAgICAgdGhpcy5uek1lc3NhZ2Uuc3RhdGUgPSAnbGVhdmUnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5uek1lc3NhZ2UubWVzc2FnZUlkKSwgMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVNZXNzYWdlKHRoaXMubnpNZXNzYWdlLm1lc3NhZ2VJZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdEVyYXNlKCk6IHZvaWQge1xuICAgIHRoaXMuX2VyYXNlVFRMID0gdGhpcy5fb3B0aW9ucy5uekR1cmF0aW9uO1xuICAgIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVFRMKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcbiAgICAgIHRoaXMuX2VyYXNlVFRMIC09IERhdGUubm93KCkgLSB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N0YXJ0RXJhc2VUaW1lb3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lcmFzZVRUTCA+IDApIHtcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7IC8vIFRvIHByZXZlbnQgY2FsbGluZyBfc3RhcnRFcmFzZVRpbWVvdXQoKSBtb3JlIHRpbWVzIHRvIGNyZWF0ZSBtb3JlIHRpbWVyXG4gICAgICB0aGlzLl9lcmFzZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGVzdHJveSgpLCB0aGlzLl9lcmFzZVRUTCk7XG4gICAgICB0aGlzLl9lcmFzZVRpbWluZ1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyRXJhc2VUaW1lb3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lcmFzZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX2VyYXNlVGltZXIpO1xuICAgICAgdGhpcy5fZXJhc2VUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=