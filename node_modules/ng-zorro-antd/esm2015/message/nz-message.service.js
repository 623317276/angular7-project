/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
/** @type {?} */
let globalCounter = 0;
// unsupported: template constraints.
// unsupported: template constraints.
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export class NzMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} containerClass
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     * @param {?=} _idPrefix
     */
    constructor(overlay, containerClass, injector, cfr, appRef, _idPrefix = '') {
        this.overlay = overlay;
        this.containerClass = containerClass;
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this._idPrefix = _idPrefix;
        // this._container = overlay.create().attach(new ComponentPortal(containerClass)).instance;
        this._container = this.createContainer();
    }
    /**
     * @param {?=} messageId
     * @return {?}
     */
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createMessage(message, options) {
        /** @type {?} */
        const resultMessage = Object.assign({}, (/** @type {?} */ (message)), {
            messageId: this._generateMessageId(),
            options,
            createdAt: new Date()
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    config(config) {
        this._container.setConfig(config);
    }
    /**
     * @return {?}
     */
    _generateMessageId() {
        return this._idPrefix + globalCounter++;
    }
    /**
     * @return {?}
     */
    createContainer() {
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        const componentRef = factory.create(this.injector); // Use root injector
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild(/** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]));
        return componentRef.instance;
    }
}
function NzMessageBaseService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMessageBaseService.prototype._container;
    /** @type {?} */
    NzMessageBaseService.prototype.overlay;
    /** @type {?} */
    NzMessageBaseService.prototype.containerClass;
    /** @type {?} */
    NzMessageBaseService.prototype.injector;
    /** @type {?} */
    NzMessageBaseService.prototype.cfr;
    /** @type {?} */
    NzMessageBaseService.prototype.appRef;
    /** @type {?} */
    NzMessageBaseService.prototype._idPrefix;
}
export class NzMessageService extends NzMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     */
    constructor(overlay, injector, cfr, appRef) {
        super(overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message-');
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(content, options) {
        return this.createMessage({ type: 'success', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(content, options) {
        return this.createMessage({ type: 'error', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(content, options) {
        return this.createMessage({ type: 'info', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(content, options) {
        return this.createMessage({ type: 'warning', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    loading(content, options) {
        return this.createMessage({ type: 'loading', content }, options);
    }
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, content, options) {
        return this.createMessage({ type, content }, options);
    }
}
NzMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzMessageService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ NzMessageService.ngInjectableDef = i0.defineInjectable({ factory: function NzMessageService_Factory() { return new i1.NzMessageService(i0.inject(i2.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: i1.NzMessageService, providedIn: "root" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbnotbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBbUIsVUFBVSxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUd0SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFHL0UsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7QUFFdEIsTUFBTTs7Ozs7Ozs7O0lBR0osWUFDVSxTQUNBLGdCQUNBLFVBQ0EsS0FDQSxRQUNBLFlBQW9CLEVBQUU7UUFMdEIsWUFBTyxHQUFQLE9BQU87UUFDUCxtQkFBYyxHQUFkLGNBQWM7UUFDZCxhQUFRLEdBQVIsUUFBUTtRQUNSLFFBQUcsR0FBSCxHQUFHO1FBQ0gsV0FBTSxHQUFOLE1BQU07UUFDTixjQUFTLEdBQVQsU0FBUzs7UUFHakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDMUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFNBQWtCO1FBQ3ZCLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQztLQUNGOzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBb0IsRUFBRSxPQUE4Qjs7UUFFaEUsTUFBTSxhQUFhLHFCQUNkLG1CQUFDLE9BQWEsRUFBQyxFQUFLO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDcEMsT0FBTztZQUNQLFNBQVMsRUFB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QXdCO1lBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdGFibGUsIEluamVjdG9yLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56TWVzc2FnZUNvbmZpZyB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YSwgTnpNZXNzYWdlRGF0YUZpbGxlZCwgTnpNZXNzYWdlRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW1lc3NhZ2UuZGVmaW5pdGlvbnMnO1xuXG5sZXQgZ2xvYmFsQ291bnRlciA9IDA7IC8vIGdsb2JhbCBJRCBjb3VudGVyIGZvciBtZXNzYWdlc1xuXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQmFzZVNlcnZpY2U8Q29udGFpbmVyQ2xhc3MgZXh0ZW5kcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIE1lc3NhZ2VEYXRhLCBNZXNzYWdlQ29uZmlnIGV4dGVuZHMgTnpNZXNzYWdlQ29uZmlnPiB7XG4gIHByb3RlY3RlZCBfY29udGFpbmVyOiBDb250YWluZXJDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBjb250YWluZXJDbGFzczogVHlwZTxDb250YWluZXJDbGFzcz4sXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfaWRQcmVmaXg6IHN0cmluZyA9ICcnKSB7XG5cbiAgICAvLyB0aGlzLl9jb250YWluZXIgPSBvdmVybGF5LmNyZWF0ZSgpLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKGNvbnRhaW5lckNsYXNzKSkuaW5zdGFuY2U7XG4gICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5jcmVhdGVDb250YWluZXIoKTtcbiAgfVxuXG4gIHJlbW92ZShtZXNzYWdlSWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAobWVzc2FnZUlkKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIucmVtb3ZlTWVzc2FnZShtZXNzYWdlSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250YWluZXIucmVtb3ZlTWVzc2FnZUFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZURhdGEsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xuICAgIC8vIFRPRE86IHNwcmVhZCBvbiBsaXRlcmFsIGhhcyBiZWVuIGRpc2FsbG93IG9uIGxhdGVzdCBwcm9wb3NhbFxuICAgIGNvbnN0IHJlc3VsdE1lc3NhZ2U6IE56TWVzc2FnZURhdGFGaWxsZWQgPSB7XG4gICAgICAuLi4obWVzc2FnZSBhcyB7fSksIC4uLntcbiAgICAgICAgbWVzc2FnZUlkOiB0aGlzLl9nZW5lcmF0ZU1lc3NhZ2VJZCgpLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuX2NvbnRhaW5lci5jcmVhdGVNZXNzYWdlKHJlc3VsdE1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1lc3NhZ2U7XG4gIH1cblxuICBjb25maWcoY29uZmlnOiBNZXNzYWdlQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fY29udGFpbmVyLnNldENvbmZpZyhjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9nZW5lcmF0ZU1lc3NhZ2VJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pZFByZWZpeCArIGdsb2JhbENvdW50ZXIrKztcbiAgfVxuXG4gIC8vIE1hbnVhbGx5IGNyZWF0aW5nIGNvbnRhaW5lciBmb3Igb3ZlcmxheSB0byBhdm9pZCBtdWx0aS1jaGVja2luZyBlcnJvciwgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMzkxXG4gIC8vIE5PVEU6IHdlIG5ldmVyIGNsZWFuIHVwIHRoZSBjb250YWluZXIgY29tcG9uZW50IGFuZCBpdCdzIG92ZXJsYXkgcmVzb3VyY2VzLCBpZiB3ZSBzaG91bGQsIHdlIG5lZWQgdG8gZG8gaXQgYnkgb3VyIG93biBjb2Rlcy5cbiAgcHJpdmF0ZSBjcmVhdGVDb250YWluZXIoKTogQ29udGFpbmVyQ2xhc3Mge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTsgLy8gVXNlIHJvb3QgaW5qZWN0b3JcbiAgICBjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpOyAvLyBJbW1lZGlhdGVseSBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGF2b2lkIG11bHRpLWNoZWNraW5nIGVycm9yXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpOyAvLyBMb2FkIHZpZXcgaW50byBhcHAgcm9vdFxuICAgIGNvbnN0IG92ZXJsYXlQYW5lID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpLm92ZXJsYXlFbGVtZW50O1xuICAgIG92ZXJsYXlQYW5lLnN0eWxlLnpJbmRleCA9ICcxMDEwJzsgLy8gUGF0Y2hpbmc6IGFzc2lnbiB0aGUgc2FtZSB6SW5kZXggb2YgYW50LW1lc3NhZ2UgdG8gaXQncyBwYXJlbnQgb3ZlcmxheSBwYW5lbCwgdG8gdGhlIGFudC1tZXNzYWdlJ3MgemluZGV4IHdvcmsuXG4gICAgb3ZlcmxheVBhbmUuYXBwZW5kQ2hpbGQoKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8e30+KS5yb290Tm9kZXNbIDAgXSBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZVNlcnZpY2UgZXh0ZW5kcyBOek1lc3NhZ2VCYXNlU2VydmljZTxOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIE56TWVzc2FnZURhdGEsIE56TWVzc2FnZUNvbmZpZz4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcblxuICAgIHN1cGVyKG92ZXJsYXksIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgaW5qZWN0b3IsIGNmciwgYXBwUmVmLCAnbWVzc2FnZS0nKTtcbiAgfVxuXG4gIC8vIFNob3J0Y3V0IG1ldGhvZHNcbiAgc3VjY2Vzcyhjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnc3VjY2VzcycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBlcnJvcihjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnZXJyb3InLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgaW5mbyhjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnaW5mbycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICB3YXJuaW5nKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIGxvYWRpbmcoY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2xvYWRpbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlKHR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnbG9hZGluZycgfCBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGUsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==