/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG } from './nz-message-config';
var NzMessageContainerComponent = /** @class */ (function () {
    function NzMessageContainerComponent(defaultConfig, config) {
        this.messages = [];
        this.config = {};
        this.setConfig(tslib_1.__assign({}, defaultConfig, config));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NzMessageContainerComponent.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = tslib_1.__assign({}, this.config, config);
    };
    // Create a new message
    /**
     * @param {?} message
     * @return {?}
     */
    NzMessageContainerComponent.prototype.createMessage = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (this.messages.length >= this.config.nzMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        this.messages.push(message);
    };
    // Remove a message by messageId
    /**
     * @param {?} messageId
     * @return {?}
     */
    NzMessageContainerComponent.prototype.removeMessage = /**
     * @param {?} messageId
     * @return {?}
     */
    function (messageId) {
        var _this = this;
        this.messages.some(function (message, index) {
            if (message.messageId === messageId) {
                _this.messages.splice(index, 1);
                return true;
            }
        });
    };
    // Remove all messages
    /**
     * @return {?}
     */
    NzMessageContainerComponent.prototype.removeMessageAll = /**
     * @return {?}
     */
    function () {
        this.messages = [];
    };
    // Merge default options and cutom message options
    /**
     * @param {?} options
     * @return {?}
     */
    NzMessageContainerComponent.prototype._mergeMessageOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var defaultOptions = {
            nzDuration: this.config.nzDuration,
            nzAnimate: this.config.nzAnimate,
            nzPauseOnHover: this.config.nzPauseOnHover
        };
        return tslib_1.__assign({}, defaultOptions, options);
    };
    NzMessageContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-message-container',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-message\">\n  <nz-message *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-message>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzMessageContainerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_CONFIG,] }] }
    ]; };
    return NzMessageContainerComponent;
}());
export { NzMessageContainerComponent };
function NzMessageContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMessageContainerComponent.prototype.messages;
    /** @type {?} */
    NzMessageContainerComponent.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBbUIsaUJBQWlCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFZbEcscUNBQTJELGFBQThCLEVBQ3RDLE1BQXVCO3dCQUp4QyxFQUFFO3NCQUNWLEVBQUU7UUFJMUIsSUFBSSxDQUFDLFNBQVMsc0JBQU0sYUFBYSxFQUFLLE1BQU0sRUFBRyxDQUFDO0tBQ2pEOzs7OztJQUVELCtDQUFTOzs7O0lBQVQsVUFBVSxNQUF1QjtRQUMvQixJQUFJLENBQUMsTUFBTSx3QkFBUSxJQUFJLENBQUMsTUFBTSxFQUFLLE1BQU0sQ0FBRSxDQUFDO0tBQzdDO0lBRUQsdUJBQXVCOzs7OztJQUN2QixtREFBYTs7OztJQUFiLFVBQWMsT0FBNEI7UUFDeEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0I7SUFFRCxnQ0FBZ0M7Ozs7O0lBQ2hDLG1EQUFhOzs7O0lBQWIsVUFBYyxTQUFpQjtRQUEvQixpQkFPQztRQU5DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTyxFQUFFLEtBQUs7WUFDaEMsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxzQkFBc0I7Ozs7SUFDdEIsc0RBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjtJQUVELGtEQUFrRDs7Ozs7SUFDeEMsMERBQW9COzs7O0lBQTlCLFVBQStCLE9BQTZCOztRQUMxRCxJQUFNLGNBQWMsR0FBeUI7WUFDM0MsVUFBVSxFQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUN0QyxTQUFTLEVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7U0FDM0MsQ0FBQztRQUNGLDRCQUFZLGNBQWMsRUFBSyxPQUFPLEVBQUc7S0FDMUM7O2dCQWxERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLHNCQUFzQjtvQkFDM0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsc0tBQTREO2lCQUM3RDs7OztnREFLYyxRQUFRLFlBQUksTUFBTSxTQUFDLHlCQUF5QjtnREFDNUMsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7O3NDQWZuRDs7U0FVYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpNZXNzYWdlQ29uZmlnLCBOWl9NRVNTQUdFX0NPTkZJRywgTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LW1lc3NhZ2UtY29udGFpbmVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQge1xuICBtZXNzYWdlczogTnpNZXNzYWdlRGF0YUZpbGxlZFtdID0gW107XG4gIGNvbmZpZzogTnpNZXNzYWdlQ29uZmlnID0ge307XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBOek1lc3NhZ2VDb25maWcsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTUVTU0FHRV9DT05GSUcpIGNvbmZpZzogTnpNZXNzYWdlQ29uZmlnKSB7XG4gICAgdGhpcy5zZXRDb25maWcoeyAuLi5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfSk7XG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnOiBOek1lc3NhZ2VDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5jb25maWcsIC4uLmNvbmZpZyB9O1xuICB9XG5cbiAgLy8gQ3JlYXRlIGEgbmV3IG1lc3NhZ2VcbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBOek1lc3NhZ2VEYXRhRmlsbGVkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWVzc2FnZXMubGVuZ3RoID49IHRoaXMuY29uZmlnLm56TWF4U3RhY2spIHtcbiAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xuICAgIH1cbiAgICBtZXNzYWdlLm9wdGlvbnMgPSB0aGlzLl9tZXJnZU1lc3NhZ2VPcHRpb25zKG1lc3NhZ2Uub3B0aW9ucyk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGEgbWVzc2FnZSBieSBtZXNzYWdlSWRcbiAgcmVtb3ZlTWVzc2FnZShtZXNzYWdlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZXMuc29tZSgobWVzc2FnZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2VJZCA9PT0gbWVzc2FnZUlkKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZW1vdmUgYWxsIG1lc3NhZ2VzXG4gIHJlbW92ZU1lc3NhZ2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICB9XG5cbiAgLy8gTWVyZ2UgZGVmYXVsdCBvcHRpb25zIGFuZCBjdXRvbSBtZXNzYWdlIG9wdGlvbnNcbiAgcHJvdGVjdGVkIF9tZXJnZU1lc3NhZ2VPcHRpb25zKG9wdGlvbnM6IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YU9wdGlvbnMge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBOek1lc3NhZ2VEYXRhT3B0aW9ucyA9IHtcbiAgICAgIG56RHVyYXRpb24gICAgOiB0aGlzLmNvbmZpZy5uekR1cmF0aW9uLFxuICAgICAgbnpBbmltYXRlICAgICA6IHRoaXMuY29uZmlnLm56QW5pbWF0ZSxcbiAgICAgIG56UGF1c2VPbkhvdmVyOiB0aGlzLmNvbmZpZy5uelBhdXNlT25Ib3ZlclxuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgfVxufVxuIl19