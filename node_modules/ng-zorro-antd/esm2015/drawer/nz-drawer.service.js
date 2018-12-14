/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerComponent } from './nz-drawer.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
/**
 * @template R
 */
export class DrawerBuilderForService {
    /**
     * @param {?} overlay
     * @param {?} options
     */
    constructor(overlay, options) {
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        this.createDrawer();
        this.updateOptions(options);
        this.drawerRef.instance.nzOnViewInit
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.drawerRef.instance.open();
        });
        this.drawerRef.instance.nzOnClose
            .subscribe(() => {
            this.drawerRef.instance.close();
        });
        this.drawerRef.instance.afterClose
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.overlayRef.dispose();
            this.drawerRef = null;
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this.drawerRef && this.drawerRef.instance;
    }
    /**
     * @return {?}
     */
    createDrawer() {
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    updateOptions(options) {
        Object.assign(this.drawerRef.instance, options);
    }
}
function DrawerBuilderForService_tsickle_Closure_declarations() {
    /** @type {?} */
    DrawerBuilderForService.prototype.drawerRef;
    /** @type {?} */
    DrawerBuilderForService.prototype.overlayRef;
    /** @type {?} */
    DrawerBuilderForService.prototype.unsubscribe$;
    /** @type {?} */
    DrawerBuilderForService.prototype.overlay;
    /** @type {?} */
    DrawerBuilderForService.prototype.options;
}
export class NzDrawerService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
    }
    /**
     * @template T, D, R
     * @param {?} options
     * @return {?}
     */
    create(options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    }
}
NzDrawerService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NzDrawerService.ctorParameters = () => [
    { type: Overlay }
];
/** @nocollapse */ NzDrawerService.ngInjectableDef = i0.defineInjectable({ factory: function NzDrawerService_Factory() { return new i1.NzDrawerService(i0.inject(i2.Overlay)); }, token: i1.NzDrawerService, providedIn: "root" });
function NzDrawerService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDrawerService.prototype.overlay;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZHJhd2VyL256LWRyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBRTFELE1BQU07Ozs7O0lBS0osWUFBb0IsT0FBZ0IsRUFBVSxPQUF3QjtRQUFsRCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7NEJBRi9DLElBQUksT0FBTyxFQUFRO1FBR3hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVk7YUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVM7YUFDaEMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVU7YUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztLQUNsRDs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7S0FDakY7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQXdCO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDakQ7Q0FDRjs7Ozs7Ozs7Ozs7OztBQUdELE1BQU07Ozs7SUFFSixZQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0tBQ25DOzs7Ozs7SUFHRCxNQUFNLENBQTRCLE9BQThCO1FBQzlELE9BQU8sSUFBSSx1QkFBdUIsQ0FBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzVFOzs7WUFURixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBcER4QixPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMgfSBmcm9tICcuL256LWRyYXdlci1vcHRpb25zJztcbmltcG9ydCB7IE56RHJhd2VyUmVmIH0gZnJvbSAnLi9uei1kcmF3ZXItcmVmJztcbmltcG9ydCB7IE56RHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcmF3ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIERyYXdlckJ1aWxkZXJGb3JTZXJ2aWNlPFI+IHtcbiAgcHJpdmF0ZSBkcmF3ZXJSZWY6IENvbXBvbmVudFJlZjxOekRyYXdlckNvbXBvbmVudD47XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBvcHRpb25zOiBOekRyYXdlck9wdGlvbnMpIHtcbiAgICB0aGlzLmNyZWF0ZURyYXdlcigpO1xuICAgIHRoaXMudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLmRyYXdlclJlZi5pbnN0YW5jZS5uek9uVmlld0luaXRcbiAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kcmF3ZXJSZWYuaW5zdGFuY2Uub3BlbigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kcmF3ZXJSZWYuaW5zdGFuY2UubnpPbkNsb3NlXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmRyYXdlclJlZi5pbnN0YW5jZS5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kcmF3ZXJSZWYuaW5zdGFuY2UuYWZ0ZXJDbG9zZVxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5kcmF3ZXJSZWYgPSBudWxsO1xuICAgICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEluc3RhbmNlKCk6IE56RHJhd2VyUmVmPFI+IHtcbiAgICByZXR1cm4gdGhpcy5kcmF3ZXJSZWYgJiYgdGhpcy5kcmF3ZXJSZWYuaW5zdGFuY2U7XG4gIH1cblxuICBjcmVhdGVEcmF3ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpO1xuICAgIHRoaXMuZHJhd2VyUmVmID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKE56RHJhd2VyQ29tcG9uZW50KSk7XG4gIH1cblxuICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5kcmF3ZXJSZWYuaW5zdGFuY2UsIG9wdGlvbnMpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBOekRyYXdlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjcmVhdGU8VCA9IGFueSwgRCA9IGFueSwgUiA9IGFueT4ob3B0aW9uczogTnpEcmF3ZXJPcHRpb25zPFQsIEQ+KTogTnpEcmF3ZXJSZWY8Uj4ge1xuICAgIHJldHVybiBuZXcgRHJhd2VyQnVpbGRlckZvclNlcnZpY2U8Uj4odGhpcy5vdmVybGF5LCBvcHRpb25zKS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=