/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG } from './nz-message-config';
export class NzMessageContainerComponent {
    /**
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(defaultConfig, config) {
        this.messages = [];
        this.config = {};
        this.setConfig(Object.assign({}, defaultConfig, config));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this.config = Object.assign({}, this.config, config);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    createMessage(message) {
        if (this.messages.length >= this.config.nzMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        this.messages.push(message);
    }
    /**
     * @param {?} messageId
     * @return {?}
     */
    removeMessage(messageId) {
        this.messages.some((message, index) => {
            if (message.messageId === messageId) {
                this.messages.splice(index, 1);
                return true;
            }
        });
    }
    /**
     * @return {?}
     */
    removeMessageAll() {
        this.messages = [];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _mergeMessageOptions(options) {
        /** @type {?} */
        const defaultOptions = {
            nzDuration: this.config.nzDuration,
            nzAnimate: this.config.nzAnimate,
            nzPauseOnHover: this.config.nzPauseOnHover
        };
        return Object.assign({}, defaultOptions, options);
    }
}
NzMessageContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-message-container',
                preserveWhitespaces: false,
                template: "<div class=\"ant-message\">\n  <nz-message *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-message>\n</div>"
            }] }
];
/** @nocollapse */
NzMessageContainerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_CONFIG,] }] }
];
function NzMessageContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMessageContainerComponent.prototype.messages;
    /** @type {?} */
    NzMessageContainerComponent.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBUXBHLE1BQU07Ozs7O0lBSUosWUFBMkQsYUFBOEIsRUFDdEMsTUFBdUI7d0JBSnhDLEVBQUU7c0JBQ1YsRUFBRTtRQUkxQixJQUFJLENBQUMsU0FBUyxtQkFBTSxhQUFhLEVBQUssTUFBTSxFQUFHLENBQUM7S0FDakQ7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQXVCO1FBQy9CLElBQUksQ0FBQyxNQUFNLHFCQUFRLElBQUksQ0FBQyxNQUFNLEVBQUssTUFBTSxDQUFFLENBQUM7S0FDN0M7Ozs7O0lBR0QsYUFBYSxDQUFDLE9BQTRCO1FBQ3hDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUdELGFBQWEsQ0FBQyxTQUFpQjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNwQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRixDQUFDLENBQUM7S0FDSjs7OztJQUdELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUdTLG9CQUFvQixDQUFDLE9BQTZCOztRQUMxRCxNQUFNLGNBQWMsR0FBeUI7WUFDM0MsVUFBVSxFQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUN0QyxTQUFTLEVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7U0FDM0MsQ0FBQztRQUNGLHlCQUFZLGNBQWMsRUFBSyxPQUFPLEVBQUc7S0FDMUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLHNCQUFzQjtnQkFDM0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsc0tBQTREO2FBQzdEOzs7OzRDQUtjLFFBQVEsWUFBSSxNQUFNLFNBQUMseUJBQXlCOzRDQUM1QyxRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1lc3NhZ2VDb25maWcsIE5aX01FU1NBR0VfQ09ORklHLCBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbWVzc2FnZS1jb250YWluZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIG1lc3NhZ2VzOiBOek1lc3NhZ2VEYXRhRmlsbGVkW10gPSBbXTtcbiAgY29uZmlnOiBOek1lc3NhZ2VDb25maWcgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5aX01FU1NBR0VfREVGQVVMVF9DT05GSUcpIGRlZmF1bHRDb25maWc6IE56TWVzc2FnZUNvbmZpZyxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9NRVNTQUdFX0NPTkZJRykgY29uZmlnOiBOek1lc3NhZ2VDb25maWcpIHtcbiAgICB0aGlzLnNldENvbmZpZyh7IC4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9KTtcbiAgfVxuXG4gIHNldENvbmZpZyhjb25maWc6IE56TWVzc2FnZUNvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnID0geyAuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnIH07XG4gIH1cblxuICAvLyBDcmVhdGUgYSBuZXcgbWVzc2FnZVxuICBjcmVhdGVNZXNzYWdlKG1lc3NhZ2U6IE56TWVzc2FnZURhdGFGaWxsZWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPj0gdGhpcy5jb25maWcubnpNYXhTdGFjaykge1xuICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgMSk7XG4gICAgfVxuICAgIG1lc3NhZ2Uub3B0aW9ucyA9IHRoaXMuX21lcmdlTWVzc2FnZU9wdGlvbnMobWVzc2FnZS5vcHRpb25zKTtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gIH1cblxuICAvLyBSZW1vdmUgYSBtZXNzYWdlIGJ5IG1lc3NhZ2VJZFxuICByZW1vdmVNZXNzYWdlKG1lc3NhZ2VJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlcy5zb21lKChtZXNzYWdlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UubWVzc2FnZUlkID09PSBtZXNzYWdlSWQpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBhbGwgbWVzc2FnZXNcbiAgcmVtb3ZlTWVzc2FnZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gIH1cblxuICAvLyBNZXJnZSBkZWZhdWx0IG9wdGlvbnMgYW5kIGN1dG9tIG1lc3NhZ2Ugb3B0aW9uc1xuICBwcm90ZWN0ZWQgX21lcmdlTWVzc2FnZU9wdGlvbnMob3B0aW9uczogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhT3B0aW9ucyB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56TWVzc2FnZURhdGFPcHRpb25zID0ge1xuICAgICAgbnpEdXJhdGlvbiAgICA6IHRoaXMuY29uZmlnLm56RHVyYXRpb24sXG4gICAgICBuekFuaW1hdGUgICAgIDogdGhpcy5jb25maWcubnpBbmltYXRlLFxuICAgICAgbnpQYXVzZU9uSG92ZXI6IHRoaXMuY29uZmlnLm56UGF1c2VPbkhvdmVyXG4gICAgfTtcbiAgICByZXR1cm4geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICB9XG59XG4iXX0=