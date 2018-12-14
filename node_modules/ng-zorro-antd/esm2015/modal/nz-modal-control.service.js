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
export class NzModalControlService {
    /**
     * @param {?} parentService
     */
    constructor(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    /**
     * @return {?}
     */
    get afterAllClose() {
        return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
    }
    /**
     * @return {?}
     */
    get openModals() {
        return this.parentService ? this.parentService.openModals : this.rootOpenModals;
    }
    /**
     * @return {?}
     */
    get registeredMetaMap() {
        // Registered modal for later usage
        return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
    }
    /**
     * @param {?} modalRef
     * @return {?}
     */
    registerModal(modalRef) {
        if (!this.hasRegistered(modalRef)) {
            /** @type {?} */
            const afterOpenSubscription = modalRef.afterOpen.subscribe(() => this.openModals.push(modalRef));
            /** @type {?} */
            const afterCloseSubscription = modalRef.afterClose.subscribe(() => this.removeOpenModal(modalRef));
            this.registeredMetaMap.set(modalRef, { modalRef, afterOpenSubscription, afterCloseSubscription });
        }
    }
    /**
     * @param {?} modalRef
     * @return {?}
     */
    deregisterModal(modalRef) {
        /** @type {?} */
        const registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    }
    /**
     * @param {?} modalRef
     * @return {?}
     */
    hasRegistered(modalRef) {
        return this.registeredMetaMap.has(modalRef);
    }
    /**
     * @return {?}
     */
    closeAll() {
        /** @type {?} */
        let i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    }
    /**
     * @param {?} modalRef
     * @return {?}
     */
    removeOpenModal(modalRef) {
        /** @type {?} */
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    }
}
NzModalControlService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzModalControlService.ctorParameters = () => [
    { type: NzModalControlService, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1vZGFsL256LW1vZGFsLWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBVzdDLE1BQU07Ozs7SUFvQkosWUFDa0MsYUFBb0M7UUFBcEMsa0JBQWEsR0FBYixhQUFhLENBQXVCOzhCQVYvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUNBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQVE7cUNBRXpCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7S0FRckc7Ozs7SUFwQkQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0tBQ3ZGOzs7O0lBR0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUNqRjs7OztRQU9XLGlCQUFpQjs7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7Ozs7OztJQVFoRyxhQUFhLENBQUMsUUFBb0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7O1lBQ2pDLE1BQU0scUJBQXFCLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7WUFDakcsTUFBTSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO1NBQ25HO0tBQ0Y7Ozs7O0lBR0QsZUFBZSxDQUFDLFFBQW9COztRQUNsQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksY0FBYyxFQUFFOztZQUVsQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxjQUFjLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkQsY0FBYyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7S0FDRjs7Ozs7SUFFRCxhQUFhLENBQUMsUUFBb0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzdDOzs7O0lBR0QsUUFBUTs7UUFDTixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUUvQixPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7OztJQUVPLGVBQWUsQ0FBQyxRQUFvQjs7UUFDMUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzNCO1NBQ0Y7Ozs7WUFyRUosVUFBVTs7OztZQXNCd0MscUJBQXFCLHVCQUFuRSxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL256LW1vZGFsLXJlZi5jbGFzcyc7XG5cbmludGVyZmFjZSBSZWdpc3RlcmVkTWV0YSB7XG4gIG1vZGFsUmVmOiBOek1vZGFsUmVmO1xuICBhZnRlck9wZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIHtcbiAgLy8gVHJhY2sgc2luZ2xldG9uIGFmdGVyQWxsQ2xvc2UgdGhyb3VnaCBvdmVyIHRoZSBpbmplY3Rpb24gdHJlZVxuICBnZXQgYWZ0ZXJBbGxDbG9zZSgpOiBTdWJqZWN0PHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLmFmdGVyQWxsQ2xvc2UgOiB0aGlzLnJvb3RBZnRlckFsbENsb3NlO1xuICB9XG5cbiAgLy8gVHJhY2sgc2luZ2xldG9uIG9wZW5Nb2RhbHMgYXJyYXkgdGhyb3VnaCBvdmVyIHRoZSBpbmplY3Rpb24gdHJlZVxuICBnZXQgb3Blbk1vZGFscygpOiBOek1vZGFsUmVmW10ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2Uub3Blbk1vZGFscyA6IHRoaXMucm9vdE9wZW5Nb2RhbHM7XG4gIH1cblxuICBwcml2YXRlIHJvb3RPcGVuTW9kYWxzOiBOek1vZGFsUmVmW10gPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogW107XG4gIHByaXZhdGUgcm9vdEFmdGVyQWxsQ2xvc2U6IFN1YmplY3Q8dm9pZD4gPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIHJvb3RSZWdpc3RlcmVkTWV0YU1hcDogTWFwPE56TW9kYWxSZWYsIFJlZ2lzdGVyZWRNZXRhPiA9IHRoaXMucGFyZW50U2VydmljZSA/IG51bGwgOiBuZXcgTWFwKCk7XG5cbiAgcHJpdmF0ZSBnZXQgcmVnaXN0ZXJlZE1ldGFNYXAoKTogTWFwPE56TW9kYWxSZWYsIFJlZ2lzdGVyZWRNZXRhPiB7IC8vIFJlZ2lzdGVyZWQgbW9kYWwgZm9yIGxhdGVyIHVzYWdlXG4gICAgcmV0dXJuIHRoaXMucGFyZW50U2VydmljZSA/IHRoaXMucGFyZW50U2VydmljZS5yZWdpc3RlcmVkTWV0YU1hcCA6IHRoaXMucm9vdFJlZ2lzdGVyZWRNZXRhTWFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBwYXJlbnRTZXJ2aWNlOiBOek1vZGFsQ29udHJvbFNlcnZpY2UpIHtcbiAgfVxuXG4gIC8vIFJlZ2lzdGVyIGEgbW9kYWwgdG8gbGlzdGVuIGl0cyBvcGVuL2Nsb3NlXG4gIHJlZ2lzdGVyTW9kYWwobW9kYWxSZWY6IE56TW9kYWxSZWYpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzUmVnaXN0ZXJlZChtb2RhbFJlZikpIHtcbiAgICAgIGNvbnN0IGFmdGVyT3BlblN1YnNjcmlwdGlvbiA9IG1vZGFsUmVmLmFmdGVyT3Blbi5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vcGVuTW9kYWxzLnB1c2gobW9kYWxSZWYpKTtcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2VTdWJzY3JpcHRpb24gPSBtb2RhbFJlZi5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbW92ZU9wZW5Nb2RhbChtb2RhbFJlZikpO1xuXG4gICAgICB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLnNldChtb2RhbFJlZiwgeyBtb2RhbFJlZiwgYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uLCBhZnRlckNsb3NlU3Vic2NyaXB0aW9uIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlcmVnaXN0ZXIgbW9kYWxzXG4gIGRlcmVnaXN0ZXJNb2RhbChtb2RhbFJlZjogTnpNb2RhbFJlZik6IHZvaWQge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRNZXRhID0gdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5nZXQobW9kYWxSZWYpO1xuICAgIGlmIChyZWdpc3RlcmVkTWV0YSkge1xuICAgICAgLy8gUmVtb3ZlIHRoaXMgbW9kYWwgaWYgaXQgaXMgc3RpbGwgaW4gdGhlIG9wZW5lZCBtb2RhbCBsaXN0IChOT1RFOiBpdCBtYXkgdHJpZ2dlciBcImFmdGVyQWxsQ2xvc2VcIilcbiAgICAgIHRoaXMucmVtb3ZlT3Blbk1vZGFsKHJlZ2lzdGVyZWRNZXRhLm1vZGFsUmVmKTtcbiAgICAgIHJlZ2lzdGVyZWRNZXRhLmFmdGVyT3BlblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgcmVnaXN0ZXJlZE1ldGEuYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5kZWxldGUobW9kYWxSZWYpO1xuICAgIH1cbiAgfVxuXG4gIGhhc1JlZ2lzdGVyZWQobW9kYWxSZWY6IE56TW9kYWxSZWYpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5oYXMobW9kYWxSZWYpO1xuICB9XG5cbiAgLy8gQ2xvc2UgYWxsIHJlZ2lzdGVyZWQgb3BlbmVkIG1vZGFsc1xuICBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICBsZXQgaSA9IHRoaXMub3Blbk1vZGFscy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLm9wZW5Nb2RhbHNbIGkgXS5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlT3Blbk1vZGFsKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm9wZW5Nb2RhbHMuaW5kZXhPZihtb2RhbFJlZik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5vcGVuTW9kYWxzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIGlmICghdGhpcy5vcGVuTW9kYWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFmdGVyQWxsQ2xvc2UubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19