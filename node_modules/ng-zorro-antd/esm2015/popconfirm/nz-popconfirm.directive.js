/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzTooltipDirective } from '../tooltip/nz-tooltip.directive';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
export class NzPopconfirmDirective extends NzTooltipDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?} tooltip
     */
    constructor(elementRef, hostView, resolver, renderer, tooltip) {
        super(elementRef, hostView, resolver, renderer, tooltip);
        this.subclassUnsubscribe$ = new Subject();
        this.factory = this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        this._condition = false;
        this._okType = 'primary';
        this.nzOnCancel = new EventEmitter();
        this.nzOnConfirm = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOkText(value) {
        this._okText = value;
        this.updateCompValue('nzOkText', value);
    }
    /**
     * @return {?}
     */
    get nzOkText() {
        return this._okText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOkType(value) {
        this._okType = value;
        this.updateCompValue('nzOkType', value);
    }
    /**
     * @return {?}
     */
    get nzOkType() {
        return this._okType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCancelText(value) {
        this._cancelText = value;
        this.updateCompValue('nzCancelText', value);
    }
    /**
     * @return {?}
     */
    get nzCancelText() {
        return this._cancelText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCondition(value) {
        this._condition = toBoolean(value);
        this.updateCompValue('nzCondition', value);
    }
    /**
     * @return {?}
     */
    get nzCondition() {
        return this._condition;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.tooltip) {
            /** @type {?} */
            const tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            /** @type {?} */
            const properties = [
                'nzTitle',
                'nzContent',
                'nzOverlayClassName',
                'nzOverlayStyle',
                'nzMouseEnterDelay',
                'nzMouseLeaveDelay',
                'nzVisible',
                'nzTrigger',
                'nzPlacement',
                'nzOkText',
                'nzOkType',
                'nzCancelText',
                'nzCondition'
            ];
            properties.forEach(property => this.updateCompValue(property, this[property]));
            this.tooltip.nzVisibleChange.pipe(takeUntil(this.subclassUnsubscribe$), distinctUntilChanged()).subscribe(data => {
                this._visible = data;
                this.nzVisibleChange.emit(data);
            });
            (/** @type {?} */ (this.tooltip)).nzOnCancel.pipe(takeUntil(this.subclassUnsubscribe$)).subscribe(data => {
                this.nzOnCancel.emit();
            });
            (/** @type {?} */ (this.tooltip)).nzOnConfirm.pipe(takeUntil(this.subclassUnsubscribe$)).subscribe(data => {
                this.nzOnConfirm.emit();
            });
        }
        this.tooltip.setOverlayOrigin(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subclassUnsubscribe$.next();
        this.subclassUnsubscribe$.complete();
    }
}
NzPopconfirmDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-popconfirm]'
            },] }
];
/** @nocollapse */
NzPopconfirmDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzPopconfirmComponent, decorators: [{ type: Optional }] }
];
NzPopconfirmDirective.propDecorators = {
    nzOnCancel: [{ type: Output }],
    nzOnConfirm: [{ type: Output }],
    nzOkText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzCancelText: [{ type: Input }],
    nzCondition: [{ type: Input }]
};
function NzPopconfirmDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPopconfirmDirective.prototype.subclassUnsubscribe$;
    /** @type {?} */
    NzPopconfirmDirective.prototype.factory;
    /** @type {?} */
    NzPopconfirmDirective.prototype._condition;
    /** @type {?} */
    NzPopconfirmDirective.prototype._okText;
    /** @type {?} */
    NzPopconfirmDirective.prototype._okType;
    /** @type {?} */
    NzPopconfirmDirective.prototype._cancelText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnConfirm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicG9wY29uZmlybS9uei1wb3Bjb25maXJtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtsRSxNQUFNLDRCQUE2QixTQUFRLGtCQUFrQjs7Ozs7Ozs7SUFvRDNELFlBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUCxPQUE4QjtRQUMxQyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29DQXpENUIsSUFBSSxPQUFPLEVBQVE7dUJBRUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQzswQkFDekYsS0FBSzt1QkFFVCxTQUFTOzBCQUdnQixJQUFJLFlBQVksRUFBRTsyQkFDakIsSUFBSSxZQUFZLEVBQUU7S0FpRDdEOzs7OztJQS9DRCxJQUNJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUVELElBQ0ksUUFBUSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsSUFDSSxZQUFZLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM3Qzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxJQUNJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzVDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7O0lBV0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFOztZQUNqQixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQzs7WUFFekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzs7WUFDN0IsTUFBTSxVQUFVLEdBQUc7Z0JBQ2pCLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWCxvQkFBb0I7Z0JBQ3BCLGdCQUFnQjtnQkFDaEIsbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxhQUFhO2dCQUNiLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixjQUFjO2dCQUNkLGFBQWE7YUFBRSxDQUFDO1lBQ2xCLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUUsUUFBUSxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0csSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDLENBQUMsQ0FBQztZQUNILG1CQUFDLElBQUksQ0FBQyxPQUFpQyxFQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzlHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEIsQ0FBQyxDQUFDO1lBQ0gsbUJBQUMsSUFBSSxDQUFDLE9BQWlDLEVBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6QixDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUN0Qzs7O1lBdkdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBcEJDLFVBQVU7WUFRVixnQkFBZ0I7WUFWaEIsd0JBQXdCO1lBU3hCLFNBQVM7WUFTRixxQkFBcUIsdUJBOER6QixRQUFROzs7eUJBaERWLE1BQU07MEJBQ04sTUFBTTt1QkFFTixLQUFLO3VCQVVMLEtBQUs7MkJBVUwsS0FBSzswQkFVTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4uL3Rvb2x0aXAvbnotdG9vbHRpcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpQb3Bjb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1wb3Bjb25maXJtLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1wb3Bjb25maXJtXSdcbn0pXG5leHBvcnQgY2xhc3MgTnpQb3Bjb25maXJtRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YmNsYXNzVW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56UG9wY29uZmlybUNvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE56UG9wY29uZmlybUNvbXBvbmVudCk7XG4gIF9jb25kaXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgX29rVGV4dDogc3RyaW5nO1xuICBfb2tUeXBlOiBzdHJpbmcgPSAncHJpbWFyeSc7XG4gIF9jYW5jZWxUZXh0OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG56T25Db25maXJtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56T2tUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9va1RleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpPa1RleHQnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpPa1RleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb2tUZXh0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56T2tUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9va1R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpPa1R5cGUnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpPa1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb2tUeXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2FuY2VsVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2FuY2VsVGV4dCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCduekNhbmNlbFRleHQnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpDYW5jZWxUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbmNlbFRleHQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDb25kaXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb25kaXRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCduekNvbmRpdGlvbicsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekNvbmRpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZGl0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgdG9vbHRpcDogTnpQb3Bjb25maXJtQ29tcG9uZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgdG9vbHRpcCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudG9vbHRpcCkge1xuICAgICAgY29uc3QgdG9vbHRpcENvbXBvbmVudCA9IHRoaXMuaG9zdFZpZXcuY3JlYXRlQ29tcG9uZW50KHRoaXMuZmFjdG9yeSk7XG4gICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwQ29tcG9uZW50Lmluc3RhbmNlO1xuICAgICAgLy8gUmVtb3ZlIGVsZW1lbnQgd2hlbiB1c2UgZGlyZWN0aXZlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8xOTY3XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRvb2x0aXBDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPSB0cnVlO1xuICAgICAgY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICAgICAgJ256VGl0bGUnLFxuICAgICAgICAnbnpDb250ZW50JyxcbiAgICAgICAgJ256T3ZlcmxheUNsYXNzTmFtZScsXG4gICAgICAgICduek92ZXJsYXlTdHlsZScsXG4gICAgICAgICduek1vdXNlRW50ZXJEZWxheScsXG4gICAgICAgICduek1vdXNlTGVhdmVEZWxheScsXG4gICAgICAgICduelZpc2libGUnLFxuICAgICAgICAnbnpUcmlnZ2VyJyxcbiAgICAgICAgJ256UGxhY2VtZW50JyxcbiAgICAgICAgJ256T2tUZXh0JyxcbiAgICAgICAgJ256T2tUeXBlJyxcbiAgICAgICAgJ256Q2FuY2VsVGV4dCcsXG4gICAgICAgICduekNvbmRpdGlvbicgXTtcbiAgICAgIHByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB0aGlzLnVwZGF0ZUNvbXBWYWx1ZShwcm9wZXJ0eSwgdGhpc1sgcHJvcGVydHkgXSkpO1xuICAgICAgdGhpcy50b29sdGlwLm56VmlzaWJsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnN1YmNsYXNzVW5zdWJzY3JpYmUkKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gZGF0YTtcbiAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdChkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgKHRoaXMudG9vbHRpcCAgYXMgTnpQb3Bjb25maXJtQ29tcG9uZW50KS5uek9uQ2FuY2VsLnBpcGUodGFrZVVudGlsKHRoaXMuc3ViY2xhc3NVbnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMubnpPbkNhbmNlbC5lbWl0KCk7XG4gICAgICB9KTtcbiAgICAgICh0aGlzLnRvb2x0aXAgIGFzIE56UG9wY29uZmlybUNvbXBvbmVudCkubnpPbkNvbmZpcm0ucGlwZSh0YWtlVW50aWwodGhpcy5zdWJjbGFzc1Vuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5uek9uQ29uZmlybS5lbWl0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50b29sdGlwLnNldE92ZXJsYXlPcmlnaW4odGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YmNsYXNzVW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnN1YmNsYXNzVW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==