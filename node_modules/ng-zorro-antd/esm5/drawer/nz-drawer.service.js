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
var /**
 * @template R
 */
DrawerBuilderForService = /** @class */ (function () {
    function DrawerBuilderForService(overlay, options) {
        var _this = this;
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        this.createDrawer();
        this.updateOptions(options);
        this.drawerRef.instance.nzOnViewInit
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(function () {
            _this.drawerRef.instance.open();
        });
        this.drawerRef.instance.nzOnClose
            .subscribe(function () {
            _this.drawerRef.instance.close();
        });
        this.drawerRef.instance.afterClose
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(function () {
            _this.overlayRef.dispose();
            _this.drawerRef = null;
            _this.unsubscribe$.next();
            _this.unsubscribe$.complete();
        });
    }
    /**
     * @return {?}
     */
    DrawerBuilderForService.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this.drawerRef && this.drawerRef.instance;
    };
    /**
     * @return {?}
     */
    DrawerBuilderForService.prototype.createDrawer = /**
     * @return {?}
     */
    function () {
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent));
    };
    /**
     * @param {?} options
     * @return {?}
     */
    DrawerBuilderForService.prototype.updateOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        Object.assign(this.drawerRef.instance, options);
    };
    return DrawerBuilderForService;
}());
/**
 * @template R
 */
export { DrawerBuilderForService };
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
var NzDrawerService = /** @class */ (function () {
    function NzDrawerService(overlay) {
        this.overlay = overlay;
    }
    // tslint:disable-next-line:no-any
    /**
     * @template T, D, R
     * @param {?} options
     * @return {?}
     */
    NzDrawerService.prototype.create = /**
     * @template T, D, R
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    };
    NzDrawerService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NzDrawerService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ NzDrawerService.ngInjectableDef = i0.defineInjectable({ factory: function NzDrawerService_Factory() { return new i1.NzDrawerService(i0.inject(i2.Overlay)); }, token: i1.NzDrawerService, providedIn: "root" });
    return NzDrawerService;
}());
export { NzDrawerService };
function NzDrawerService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDrawerService.prototype.overlay;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZHJhd2VyL256LWRyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBRTFEOzs7QUFBQTtJQUtFLGlDQUFvQixPQUFnQixFQUFVLE9BQXdCO1FBQXRFLGlCQXNCQztRQXRCbUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCOzRCQUYvQyxJQUFJLE9BQU8sRUFBUTtRQUd4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZO2FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLFNBQVMsQ0FBQztZQUNULEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVM7YUFDaEMsU0FBUyxDQUFDO1lBQ1QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVTthQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsQyxTQUFTLENBQUM7WUFDVCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM5QixDQUFDLENBQUM7S0FDSjs7OztJQUVELDZDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztLQUNsRDs7OztJQUVELDhDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztLQUNqRjs7Ozs7SUFFRCwrQ0FBYTs7OztJQUFiLFVBQWMsT0FBd0I7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNqRDtrQ0FqREg7SUFrREMsQ0FBQTs7OztBQXpDRCxtQ0F5Q0M7Ozs7Ozs7Ozs7Ozs7O0lBS0MseUJBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7S0FDbkM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyxnQ0FBTTs7Ozs7SUFBTixVQUFrQyxPQUE4QjtRQUM5RCxPQUFPLElBQUksdUJBQXVCLENBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM1RTs7Z0JBVEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztnQkFwRHhCLE9BQU87OzswQkFBaEI7O1NBcURhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJy4vbnotZHJhd2VyLW9wdGlvbnMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJSZWYgfSBmcm9tICcuL256LWRyYXdlci1yZWYnO1xuaW1wb3J0IHsgTnpEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL256LWRyYXdlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgRHJhd2VyQnVpbGRlckZvclNlcnZpY2U8Uj4ge1xuICBwcml2YXRlIGRyYXdlclJlZjogQ29tcG9uZW50UmVmPE56RHJhd2VyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIG9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucykge1xuICAgIHRoaXMuY3JlYXRlRHJhd2VyKCk7XG4gICAgdGhpcy51cGRhdGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuZHJhd2VyUmVmLmluc3RhbmNlLm56T25WaWV3SW5pdFxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmRyYXdlclJlZi5pbnN0YW5jZS5vcGVuKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYXdlclJlZi5pbnN0YW5jZS5uek9uQ2xvc2VcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZHJhd2VyUmVmLmluc3RhbmNlLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYXdlclJlZi5pbnN0YW5jZS5hZnRlckNsb3NlXG4gICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmRyYXdlclJlZiA9IG51bGw7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogTnpEcmF3ZXJSZWY8Uj4ge1xuICAgIHJldHVybiB0aGlzLmRyYXdlclJlZiAmJiB0aGlzLmRyYXdlclJlZi5pbnN0YW5jZTtcbiAgfVxuXG4gIGNyZWF0ZURyYXdlcigpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7XG4gICAgdGhpcy5kcmF3ZXJSZWYgPSB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTnpEcmF3ZXJDb21wb25lbnQpKTtcbiAgfVxuXG4gIHVwZGF0ZU9wdGlvbnMob3B0aW9uczogTnpEcmF3ZXJPcHRpb25zKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmRyYXdlclJlZi5pbnN0YW5jZSwgb3B0aW9ucyk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE56RHJhd2VyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNyZWF0ZTxUID0gYW55LCBEID0gYW55LCBSID0gYW55PihvcHRpb25zOiBOekRyYXdlck9wdGlvbnM8VCwgRD4pOiBOekRyYXdlclJlZjxSPiB7XG4gICAgcmV0dXJuIG5ldyBEcmF3ZXJCdWlsZGVyRm9yU2VydmljZTxSPih0aGlzLm92ZXJsYXksIG9wdGlvbnMpLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiJdfQ==