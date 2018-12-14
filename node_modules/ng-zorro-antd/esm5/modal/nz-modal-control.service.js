/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @record
 */
function RegisteredMeta() { }
function RegisteredMeta_tsickle_Closure_declarations() {
    /** @type {?} */
    RegisteredMeta.prototype.modalRef;
    /** @type {?} */
    RegisteredMeta.prototype.afterOpenSubscription;
    /** @type {?} */
    RegisteredMeta.prototype.afterCloseSubscription;
}
var NzModalControlService = /** @class */ (function () {
    function NzModalControlService(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    Object.defineProperty(NzModalControlService.prototype, "afterAllClose", {
        // Track singleton afterAllClose through over the injection tree
        get: /**
         * @return {?}
         */
        function () {
            return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalControlService.prototype, "openModals", {
        // Track singleton openModals array through over the injection tree
        get: /**
         * @return {?}
         */
        function () {
            return this.parentService ? this.parentService.openModals : this.rootOpenModals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalControlService.prototype, "registeredMetaMap", {
        get: /**
         * @return {?}
         */
        function () {
            // Registered modal for later usage
            return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
        },
        enumerable: true,
        configurable: true
    });
    // Register a modal to listen its open/close
    /**
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.registerModal = /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        var _this = this;
        if (!this.hasRegistered(modalRef)) {
            /** @type {?} */
            var afterOpenSubscription = modalRef.afterOpen.subscribe(function () { return _this.openModals.push(modalRef); });
            /** @type {?} */
            var afterCloseSubscription = modalRef.afterClose.subscribe(function () { return _this.removeOpenModal(modalRef); });
            this.registeredMetaMap.set(modalRef, { modalRef: modalRef, afterOpenSubscription: afterOpenSubscription, afterCloseSubscription: afterCloseSubscription });
        }
    };
    // deregister modals
    /**
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.deregisterModal = /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        /** @type {?} */
        var registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    };
    /**
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.hasRegistered = /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        return this.registeredMetaMap.has(modalRef);
    };
    // Close all registered opened modals
    /**
     * @return {?}
     */
    NzModalControlService.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    };
    /**
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.removeOpenModal = /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        /** @type {?} */
        var index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    };
    NzModalControlService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzModalControlService.ctorParameters = function () { return [
        { type: NzModalControlService, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return NzModalControlService;
}());
export { NzModalControlService };
function NzModalControlService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzModalControlService.prototype.rootOpenModals;
    /** @type {?} */
    NzModalControlService.prototype.rootAfterAllClose;
    /** @type {?} */
    NzModalControlService.prototype.rootRegisteredMetaMap;
    /** @type {?} */
    NzModalControlService.prototype.parentService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1vZGFsL256LW1vZGFsLWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7OztJQStCM0MsK0JBQ2tDLGFBQW9DO1FBQXBDLGtCQUFhLEdBQWIsYUFBYSxDQUF1Qjs4QkFWL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lDQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFRO3FDQUV6QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO0tBUXJHO0lBcEJELHNCQUFJLGdEQUFhO1FBRGpCLGdFQUFnRTs7OztRQUNoRTtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUN2Rjs7O09BQUE7SUFHRCxzQkFBSSw2Q0FBVTtRQURkLG1FQUFtRTs7OztRQUNuRTtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDakY7OztPQUFBOzBCQU9XLG9EQUFpQjs7Ozs7O1lBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDOzs7OztJQU9oRyw0Q0FBNEM7Ozs7O0lBQzVDLDZDQUFhOzs7O0lBQWIsVUFBYyxRQUFvQjtRQUFsQyxpQkFPQztRQU5DLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFOztZQUNqQyxJQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDOztZQUNqRyxJQUFNLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7WUFFbkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxxQkFBcUIsdUJBQUEsRUFBRSxzQkFBc0Isd0JBQUEsRUFBRSxDQUFDLENBQUM7U0FDbkc7S0FDRjtJQUVELG9CQUFvQjs7Ozs7SUFDcEIsK0NBQWU7Ozs7SUFBZixVQUFnQixRQUFvQjs7UUFDbEMsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLGNBQWMsRUFBRTs7WUFFbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25ELGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7Ozs7O0lBRUQsNkNBQWE7Ozs7SUFBYixVQUFjLFFBQW9CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM3QztJQUVELHFDQUFxQzs7OztJQUNyQyx3Q0FBUTs7O0lBQVI7O1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFL0IsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNWLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQyxDQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUI7S0FDRjs7Ozs7SUFFTywrQ0FBZTs7OztjQUFDLFFBQW9COztRQUMxQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDM0I7U0FDRjs7O2dCQXJFSixVQUFVOzs7O2dCQXNCd0MscUJBQXFCLHVCQUFuRSxRQUFRLFlBQUksUUFBUTs7Z0NBakN6Qjs7U0FZYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9uei1tb2RhbC1yZWYuY2xhc3MnO1xuXG5pbnRlcmZhY2UgUmVnaXN0ZXJlZE1ldGEge1xuICBtb2RhbFJlZjogTnpNb2RhbFJlZjtcbiAgYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGFmdGVyQ2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56TW9kYWxDb250cm9sU2VydmljZSB7XG4gIC8vIFRyYWNrIHNpbmdsZXRvbiBhZnRlckFsbENsb3NlIHRocm91Z2ggb3ZlciB0aGUgaW5qZWN0aW9uIHRyZWVcbiAgZ2V0IGFmdGVyQWxsQ2xvc2UoKTogU3ViamVjdDx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50U2VydmljZSA/IHRoaXMucGFyZW50U2VydmljZS5hZnRlckFsbENsb3NlIDogdGhpcy5yb290QWZ0ZXJBbGxDbG9zZTtcbiAgfVxuXG4gIC8vIFRyYWNrIHNpbmdsZXRvbiBvcGVuTW9kYWxzIGFycmF5IHRocm91Z2ggb3ZlciB0aGUgaW5qZWN0aW9uIHRyZWVcbiAgZ2V0IG9wZW5Nb2RhbHMoKTogTnpNb2RhbFJlZltdIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLm9wZW5Nb2RhbHMgOiB0aGlzLnJvb3RPcGVuTW9kYWxzO1xuICB9XG5cbiAgcHJpdmF0ZSByb290T3Blbk1vZGFsczogTnpNb2RhbFJlZltdID0gdGhpcy5wYXJlbnRTZXJ2aWNlID8gbnVsbCA6IFtdO1xuICBwcml2YXRlIHJvb3RBZnRlckFsbENsb3NlOiBTdWJqZWN0PHZvaWQ+ID0gdGhpcy5wYXJlbnRTZXJ2aWNlID8gbnVsbCA6IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSByb290UmVnaXN0ZXJlZE1ldGFNYXA6IE1hcDxOek1vZGFsUmVmLCBSZWdpc3RlcmVkTWV0YT4gPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogbmV3IE1hcCgpO1xuXG4gIHByaXZhdGUgZ2V0IHJlZ2lzdGVyZWRNZXRhTWFwKCk6IE1hcDxOek1vZGFsUmVmLCBSZWdpc3RlcmVkTWV0YT4geyAvLyBSZWdpc3RlcmVkIG1vZGFsIGZvciBsYXRlciB1c2FnZVxuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2UucmVnaXN0ZXJlZE1ldGFNYXAgOiB0aGlzLnJvb3RSZWdpc3RlcmVkTWV0YU1hcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHByaXZhdGUgcGFyZW50U2VydmljZTogTnpNb2RhbENvbnRyb2xTZXJ2aWNlKSB7XG4gIH1cblxuICAvLyBSZWdpc3RlciBhIG1vZGFsIHRvIGxpc3RlbiBpdHMgb3Blbi9jbG9zZVxuICByZWdpc3Rlck1vZGFsKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc1JlZ2lzdGVyZWQobW9kYWxSZWYpKSB7XG4gICAgICBjb25zdCBhZnRlck9wZW5TdWJzY3JpcHRpb24gPSBtb2RhbFJlZi5hZnRlck9wZW4uc3Vic2NyaWJlKCgpID0+IHRoaXMub3Blbk1vZGFscy5wdXNoKG1vZGFsUmVmKSk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlU3Vic2NyaXB0aW9uID0gbW9kYWxSZWYuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZW1vdmVPcGVuTW9kYWwobW9kYWxSZWYpKTtcblxuICAgICAgdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5zZXQobW9kYWxSZWYsIHsgbW9kYWxSZWYsIGFmdGVyT3BlblN1YnNjcmlwdGlvbiwgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbiB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBkZXJlZ2lzdGVyIG1vZGFsc1xuICBkZXJlZ2lzdGVyTW9kYWwobW9kYWxSZWY6IE56TW9kYWxSZWYpOiB2b2lkIHtcbiAgICBjb25zdCByZWdpc3RlcmVkTWV0YSA9IHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuZ2V0KG1vZGFsUmVmKTtcbiAgICBpZiAocmVnaXN0ZXJlZE1ldGEpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGlzIG1vZGFsIGlmIGl0IGlzIHN0aWxsIGluIHRoZSBvcGVuZWQgbW9kYWwgbGlzdCAoTk9URTogaXQgbWF5IHRyaWdnZXIgXCJhZnRlckFsbENsb3NlXCIpXG4gICAgICB0aGlzLnJlbW92ZU9wZW5Nb2RhbChyZWdpc3RlcmVkTWV0YS5tb2RhbFJlZik7XG4gICAgICByZWdpc3RlcmVkTWV0YS5hZnRlck9wZW5TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHJlZ2lzdGVyZWRNZXRhLmFmdGVyQ2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuZGVsZXRlKG1vZGFsUmVmKTtcbiAgICB9XG4gIH1cblxuICBoYXNSZWdpc3RlcmVkKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuaGFzKG1vZGFsUmVmKTtcbiAgfVxuXG4gIC8vIENsb3NlIGFsbCByZWdpc3RlcmVkIG9wZW5lZCBtb2RhbHNcbiAgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgbGV0IGkgPSB0aGlzLm9wZW5Nb2RhbHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5vcGVuTW9kYWxzWyBpIF0uY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZU9wZW5Nb2RhbChtb2RhbFJlZjogTnpNb2RhbFJlZik6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcGVuTW9kYWxzLmluZGV4T2YobW9kYWxSZWYpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMub3Blbk1vZGFscy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICBpZiAoIXRoaXMub3Blbk1vZGFscy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hZnRlckFsbENsb3NlLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==