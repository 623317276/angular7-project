/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
var NzMessageComponent = /** @class */ (function () {
    function NzMessageComponent(_messageContainer) {
        this._messageContainer = _messageContainer;
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._options = this.nzMessage.options;
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'enter';
        }
        this._autoErase = this._options.nzDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.onLeave = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    };
    // Remove self
    /**
     * @return {?}
     */
    NzMessageComponent.prototype._destroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            setTimeout(function () { return _this._messageContainer.removeMessage(_this.nzMessage.messageId); }, 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId);
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype._initErase = /**
     * @return {?}
     */
    function () {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype._updateTTL = /**
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype._startEraseTimeout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout(); // To prevent calling _startEraseTimeout() more times to create more timer
            this._eraseTimer = window.setTimeout(function () { return _this._destroy(); }, this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype._clearEraseTimeout = /**
     * @return {?}
     */
    function () {
        if (this._eraseTimer !== null) {
            window.clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    };
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
    NzMessageComponent.ctorParameters = function () { return [
        { type: NzMessageContainerComponent }
    ]; };
    NzMessageComponent.propDecorators = {
        nzMessage: [{ type: Input }],
        nzIndex: [{ type: Input }]
    };
    return NzMessageComponent;
}());
export { NzMessageComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVzc2FnZS9uei1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7SUFtQzdFLDRCQUFvQixpQkFBOEM7UUFBOUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE2QjsyQkFKcEMsSUFBSTtLQUtqQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFFdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7S0FDRjs7OztJQUVELG9DQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMs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QUM7Z0NBQ2pELE9BQU8sQ0FBQyxjQUFjLENBQUM7NkJBQ3hCLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtvQkFDRCw4eUJBQW1EO2lCQUNwRDs7OztnQkFyQlEsMkJBQTJCOzs7NEJBd0JqQyxLQUFLOzBCQUNMLEtBQUs7OzZCQXZDUjs7U0FvQ2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1tZXNzYWdlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdlbnRlckxlYXZlJywgW1xuICAgICAgc3RhdGUoJ2VudGVyJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGVudGVyJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBsaW5lYXInKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnbGVhdmUnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gbGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICAgOiAnLi9uei1tZXNzYWdlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgbnpNZXNzYWdlOiBOek1lc3NhZ2VEYXRhRmlsbGVkO1xuICBASW5wdXQoKSBuekluZGV4OiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIF9vcHRpb25zOiBOek1lc3NhZ2VEYXRhT3B0aW9uczsgLy8gU2hvcnRjdXQgcmVmZXJlbmNlIHRvIG56TWVzc2FnZS5vcHRpb25zXG5cbiAgLy8gRm9yIGF1dG8gZXJhc2luZyhkZXN0cm95KSBzZWxmXG4gIHByaXZhdGUgX2F1dG9FcmFzZTogYm9vbGVhbjsgLy8gV2hldGhlciByZWNvcmQgdGltZW91dCB0byBhdXRvIGRlc3Ryb3kgc2VsZlxuICBwcml2YXRlIF9lcmFzZVRpbWVyOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIF9lcmFzZVRpbWluZ1N0YXJ0OiBudW1iZXI7XG4gIHByaXZhdGUgX2VyYXNlVFRMOiBudW1iZXI7IC8vIFRpbWUgdG8gbGl2ZVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VDb250YWluZXI6IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMubnpNZXNzYWdlLm9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5uekFuaW1hdGUpIHtcbiAgICAgIHRoaXMubnpNZXNzYWdlLnN0YXRlID0gJ2VudGVyJztcbiAgICB9XG5cbiAgICB0aGlzLl9hdXRvRXJhc2UgPSB0aGlzLl9vcHRpb25zLm56RHVyYXRpb24gPiAwO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSkge1xuICAgICAgdGhpcy5faW5pdEVyYXNlKCk7XG4gICAgICB0aGlzLl9zdGFydEVyYXNlVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgb25FbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlICYmIHRoaXMuX29wdGlvbnMubnpQYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XG4gICAgICB0aGlzLl91cGRhdGVUVEwoKTtcbiAgICB9XG4gIH1cblxuICBvbkxlYXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UgJiYgdGhpcy5fb3B0aW9ucy5uelBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5fc3RhcnRFcmFzZVRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgc2VsZlxuICBwcm90ZWN0ZWQgX2Rlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMubnpBbmltYXRlKSB7XG4gICAgICB0aGlzLm56TWVzc2FnZS5zdGF0ZSA9ICdsZWF2ZSc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21lc3NhZ2VDb250YWluZXIucmVtb3ZlTWVzc2FnZSh0aGlzLm56TWVzc2FnZS5tZXNzYWdlSWQpLCAyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5uek1lc3NhZ2UubWVzc2FnZUlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbml0RXJhc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZXJhc2VUVEwgPSB0aGlzLl9vcHRpb25zLm56RHVyYXRpb247XG4gICAgdGhpcy5fZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUVEwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSkge1xuICAgICAgdGhpcy5fZXJhc2VUVEwgLT0gRGF0ZS5ub3coKSAtIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3RhcnRFcmFzZVRpbWVvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VyYXNlVFRMID4gMCkge1xuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTsgLy8gVG8gcHJldmVudCBjYWxsaW5nIF9zdGFydEVyYXNlVGltZW91dCgpIG1vcmUgdGltZXMgdG8gY3JlYXRlIG1vcmUgdGltZXJcbiAgICAgIHRoaXMuX2VyYXNlVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kZXN0cm95KCksIHRoaXMuX2VyYXNlVFRMKTtcbiAgICAgIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXJFcmFzZVRpbWVvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VyYXNlVGltZXIgIT09IG51bGwpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fZXJhc2VUaW1lcik7XG4gICAgICB0aGlzLl9lcmFzZVRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==