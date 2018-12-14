/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone } from '@angular/core';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/common";
var NzDropdownService = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzDropdownService(overlay, document, zone) {
        this.overlay = overlay;
        this.document = document;
        this.zone = zone;
        this.positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
        ];
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    NzDropdownService.prototype.createOverlay = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.createPoint($event);
        /** @type {?} */
        var fakeElementRef = new ElementRef(this.locatePoint);
        this.positionStrategy = this.overlay.position().flexibleConnectedTo(fakeElementRef);
        this.handlePositionChanges(this.positionStrategy);
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy: this.positionStrategy
        });
        return this.overlay.create(overlayConfig);
    };
    /**
     * @param {?} strategy
     * @return {?}
     */
    NzDropdownService.prototype.handlePositionChanges = /**
     * @param {?} strategy
     * @return {?}
     */
    function (strategy) {
        var _this = this;
        strategy.withPositions(this.positions);
        this.onPositionChangeSubscription = this.positionStrategy.positionChanges.subscribe(function (data) {
            /** @type {?} */
            var position = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
            _this.instance.setDropDownPosition(position);
        });
    };
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    NzDropdownService.prototype.handleCloseEvent = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        this.backdropClickSubscription = overlayRef.backdropClick().subscribe(function (_) { return _this.instance.close(); });
        this.detachmentsSubscription = overlayRef.detachments().subscribe(function (_) { return _this.close(); });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzDropdownService.prototype.createPoint = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.locatePoint) {
            /** @type {?} */
            var container = this.document.createElement('span');
            this.document.body.appendChild(container);
            this.locatePoint = container;
        }
        this.locatePoint.style.position = "fixed";
        this.locatePoint.style.top = e.clientY + "px";
        this.locatePoint.style.left = e.clientX + "px";
    };
    /**
     * @return {?}
     */
    NzDropdownService.prototype.removePoint = /**
     * @return {?}
     */
    function () {
        if (this.locatePoint) {
            this.document.body.removeChild(this.locatePoint);
            this.locatePoint = null;
        }
    };
    /**
     * @param {?} instance
     * @param {?} template
     * @return {?}
     */
    NzDropdownService.prototype.setInstanceValue = /**
     * @param {?} instance
     * @param {?} template
     * @return {?}
     */
    function (instance, template) {
        instance.open = true;
        instance.setTemplateRef(template);
        instance.setControl(this);
    };
    /**
     * @param {?} $event
     * @param {?} template
     * @return {?}
     */
    NzDropdownService.prototype.create = /**
     * @param {?} $event
     * @param {?} template
     * @return {?}
     */
    function ($event, template) {
        var _this = this;
        $event.preventDefault();
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.dispose();
        }
        else {
            this.overlayRef = this.createOverlay($event);
            setTimeout(function () {
                if (_this.overlayRef.backdropElement) {
                    _this.zone.runOutsideAngular(function () {
                        _this.overlayRef.backdropElement.addEventListener('contextmenu', function (e) { return e.preventDefault(); });
                    });
                }
            });
            this.instance = this.overlayRef.attach(new ComponentPortal(NzDropdownContextComponent)).instance;
            this.setInstanceValue(this.instance, template);
            this.handleCloseEvent(this.overlayRef);
            return this.instance;
        }
    };
    /**
     * @return {?}
     */
    NzDropdownService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removePoint();
        this.overlayRef.dispose();
        if (this.backdropClickSubscription) {
            this.backdropClickSubscription.unsubscribe();
            this.backdropClickSubscription = null;
        }
        if (this.detachmentsSubscription) {
            this.detachmentsSubscription.unsubscribe();
            this.detachmentsSubscription = null;
        }
        if (this.onPositionChangeSubscription) {
            this.onPositionChangeSubscription.unsubscribe();
            this.onPositionChangeSubscription = null;
        }
    };
    NzDropdownService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzDropdownService.ctorParameters = function () { return [
        { type: Overlay },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ NzDropdownService.ngInjectableDef = i0.defineInjectable({ factory: function NzDropdownService_Factory() { return new i1.NzDropdownService(i0.inject(i2.Overlay), i0.inject(i3.DOCUMENT), i0.inject(i0.NgZone)); }, token: i1.NzDropdownService, providedIn: "root" });
    return NzDropdownService;
}());
export { NzDropdownService };
function NzDropdownService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropdownService.prototype.instance;
    /** @type {?} */
    NzDropdownService.prototype.overlayRef;
    /** @type {?} */
    NzDropdownService.prototype.locatePoint;
    /** @type {?} */
    NzDropdownService.prototype.positionStrategy;
    /** @type {?} */
    NzDropdownService.prototype.backdropClickSubscription;
    /** @type {?} */
    NzDropdownService.prototype.detachmentsSubscription;
    /** @type {?} */
    NzDropdownService.prototype.onPositionChangeSubscription;
    /** @type {?} */
    NzDropdownService.prototype.positions;
    /** @type {?} */
    NzDropdownService.prototype.overlay;
    /** @type {?} */
    NzDropdownService.prototype.document;
    /** @type {?} */
    NzDropdownService.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1kcm9wZG93bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBRWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFHcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7OztJQTRCM0UscUNBQXFDO0lBQ3JDLDJCQUFvQixPQUFnQixFQUE0QixRQUFhLEVBQVUsSUFBWTtRQUEvRSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO3lCQWhCL0U7WUFDbEIsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDcEMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUN6QyxJQUFJLHNCQUFzQixDQUN4QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNwQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQzVDLElBQUksc0JBQXNCLENBQ3hCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ3BDLEVBQUUsUUFBUSxF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LGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7S0FDRjs7OztJQUVELGlDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7U0FDckM7UUFDRCxJQUFJLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtZQUNyQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztTQUMxQztLQUNGOztnQkFuSEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFiQyxPQUFPO2dEQXNDZ0MsTUFBTSxTQUFDLFFBQVE7Z0JBaENmLE1BQU07Ozs0QkFUL0M7O1NBaUJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZlxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi1jb250ZXh0LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56RHJvcGRvd25TZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGluc3RhbmNlOiBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudDtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIGxvY2F0ZVBvaW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gIHByaXZhdGUgYmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRldGFjaG1lbnRzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb25Qb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHBvc2l0aW9ucyA9IFtcbiAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcbiAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcbiAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcbiAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KSxcbiAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcbiAgICAgIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXG4gICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0pXG4gIF07XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiBPdmVybGF5UmVmIHtcbiAgICB0aGlzLmNyZWF0ZVBvaW50KCRldmVudCk7XG4gICAgY29uc3QgZmFrZUVsZW1lbnRSZWYgPSBuZXcgRWxlbWVudFJlZih0aGlzLmxvY2F0ZVBvaW50KTtcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5mbGV4aWJsZUNvbm5lY3RlZFRvKGZha2VFbGVtZW50UmVmKTtcbiAgICB0aGlzLmhhbmRsZVBvc2l0aW9uQ2hhbmdlcyh0aGlzLnBvc2l0aW9uU3RyYXRlZ3kpO1xuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBoYXNCYWNrZHJvcCAgICAgOiB0cnVlLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3kgIDogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMucG9zaXRpb25TdHJhdGVneVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb3NpdGlvbkNoYW5nZXMoc3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xuICAgIHN0cmF0ZWd5LndpdGhQb3NpdGlvbnModGhpcy5wb3NpdGlvbnMpO1xuICAgIHRoaXMub25Qb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMucG9zaXRpb25TdHJhdGVneS5wb3NpdGlvbkNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBkYXRhLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldERyb3BEb3duUG9zaXRpb24ocG9zaXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbG9zZUV2ZW50KG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoXyA9PiB0aGlzLmluc3RhbmNlLmNsb3NlKCkpO1xuICAgIHRoaXMuZGV0YWNobWVudHNTdWJzY3JpcHRpb24gPSBvdmVybGF5UmVmLmRldGFjaG1lbnRzKCkuc3Vic2NyaWJlKF8gPT4gdGhpcy5jbG9zZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUG9pbnQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5sb2NhdGVQb2ludCkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMubG9jYXRlUG9pbnQgPSBjb250YWluZXI7XG4gICAgfVxuICAgIHRoaXMubG9jYXRlUG9pbnQuc3R5bGUucG9zaXRpb24gPSBgZml4ZWRgO1xuICAgIHRoaXMubG9jYXRlUG9pbnQuc3R5bGUudG9wID0gYCR7ZS5jbGllbnRZfXB4YDtcbiAgICB0aGlzLmxvY2F0ZVBvaW50LnN0eWxlLmxlZnQgPSBgJHtlLmNsaWVudFh9cHhgO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVQb2ludCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2NhdGVQb2ludCkge1xuICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubG9jYXRlUG9pbnQpO1xuICAgICAgdGhpcy5sb2NhdGVQb2ludCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRJbnN0YW5jZVZhbHVlKGluc3RhbmNlOiBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+KTogdm9pZCB7XG4gICAgaW5zdGFuY2Uub3BlbiA9IHRydWU7XG4gICAgaW5zdGFuY2Uuc2V0VGVtcGxhdGVSZWYodGVtcGxhdGUpO1xuICAgIGluc3RhbmNlLnNldENvbnRyb2wodGhpcyk7XG4gIH1cblxuICBjcmVhdGUoJGV2ZW50OiBNb3VzZUV2ZW50LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4pOiBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KCRldmVudCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChlOiBNb3VzZUV2ZW50KSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQpKS5pbnN0YW5jZTtcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VWYWx1ZSh0aGlzLmluc3RhbmNlLCB0ZW1wbGF0ZSk7XG4gICAgICB0aGlzLmhhbmRsZUNsb3NlRXZlbnQodGhpcy5vdmVybGF5UmVmKTtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlUG9pbnQoKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgIGlmICh0aGlzLmJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuYmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5iYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGV0YWNobWVudHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZGV0YWNobWVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGV0YWNobWVudHNTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5vblBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm9uUG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub25Qb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=