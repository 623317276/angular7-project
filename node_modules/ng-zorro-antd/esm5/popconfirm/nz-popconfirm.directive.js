/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzTooltipDirective } from '../tooltip/nz-tooltip.directive';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
var NzPopconfirmDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopconfirmDirective, _super);
    function NzPopconfirmDirective(elementRef, hostView, resolver, renderer, tooltip) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip) || this;
        _this.subclassUnsubscribe$ = new Subject();
        _this.factory = _this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        _this._condition = false;
        _this._okType = 'primary';
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        return _this;
    }
    Object.defineProperty(NzPopconfirmDirective.prototype, "nzOkText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._okText;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._okText = value;
            this.updateCompValue('nzOkText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopconfirmDirective.prototype, "nzOkType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._okType;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._okType = value;
            this.updateCompValue('nzOkType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopconfirmDirective.prototype, "nzCancelText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cancelText;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cancelText = value;
            this.updateCompValue('nzCancelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPopconfirmDirective.prototype, "nzCondition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._condition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._condition = toBoolean(value);
            this.updateCompValue('nzCondition', value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzPopconfirmDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.tooltip) {
            /** @type {?} */
            var tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            /** @type {?} */
            var properties = [
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
            properties.forEach(function (property) { return _this.updateCompValue(property, _this[property]); });
            this.tooltip.nzVisibleChange.pipe(takeUntil(this.subclassUnsubscribe$), distinctUntilChanged()).subscribe(function (data) {
                _this._visible = data;
                _this.nzVisibleChange.emit(data);
            });
            (/** @type {?} */ (this.tooltip)).nzOnCancel.pipe(takeUntil(this.subclassUnsubscribe$)).subscribe(function (data) {
                _this.nzOnCancel.emit();
            });
            (/** @type {?} */ (this.tooltip)).nzOnConfirm.pipe(takeUntil(this.subclassUnsubscribe$)).subscribe(function (data) {
                _this.nzOnConfirm.emit();
            });
        }
        this.tooltip.setOverlayOrigin(this);
    };
    /**
     * @return {?}
     */
    NzPopconfirmDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subclassUnsubscribe$.next();
        this.subclassUnsubscribe$.complete();
    };
    NzPopconfirmDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-popconfirm]'
                },] }
    ];
    /** @nocollapse */
    NzPopconfirmDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzPopconfirmComponent, decorators: [{ type: Optional }] }
    ]; };
    NzPopconfirmDirective.propDecorators = {
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }],
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzCondition: [{ type: Input }]
    };
    return NzPopconfirmDirective;
}(NzTooltipDirective));
export { NzPopconfirmDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicG9wY29uZmlybS9uei1wb3Bjb25maXJtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBS3ZCLGlEQUFrQjtJQW9EM0QsK0JBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUCxPQUE4QjtRQUw1QyxZQU1FLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FDekQ7cUNBMUQ4QixJQUFJLE9BQU8sRUFBUTt3QkFFQyxLQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDOzJCQUN6RixLQUFLO3dCQUVULFNBQVM7MkJBR2dCLElBQUksWUFBWSxFQUFFOzRCQUNqQixJQUFJLFlBQVksRUFBRTs7S0FpRDdEO0lBL0NELHNCQUNJLDJDQUFROzs7O1FBS1o7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBUkQsVUFDYSxLQUFh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SSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQzVHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUN0Qzs7Z0JBdkdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFwQkMsVUFBVTtnQkFRVixnQkFBZ0I7Z0JBVmhCLHdCQUF3QjtnQkFTeEIsU0FBUztnQkFTRixxQkFBcUIsdUJBOER6QixRQUFROzs7NkJBaERWLE1BQU07OEJBQ04sTUFBTTsyQkFFTixLQUFLOzJCQVVMLEtBQUs7K0JBVUwsS0FBSzs4QkFVTCxLQUFLOztnQ0FuRVI7RUF5QjJDLGtCQUFrQjtTQUFoRCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9vbHRpcC9uei10b29sdGlwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelBvcGNvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL256LXBvcGNvbmZpcm0uY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXBvcGNvbmZpcm1dJ1xufSlcbmV4cG9ydCBjbGFzcyBOelBvcGNvbmZpcm1EaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3ViY2xhc3NVbnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpQb3Bjb25maXJtQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTnpQb3Bjb25maXJtQ29tcG9uZW50KTtcbiAgX2NvbmRpdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBfb2tUZXh0OiBzdHJpbmc7XG4gIF9va1R5cGU6IHN0cmluZyA9ICdwcmltYXJ5JztcbiAgX2NhbmNlbFRleHQ6IHN0cmluZztcblxuICBAT3V0cHV0KCkgbnpPbkNhbmNlbDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpPbkNvbmZpcm06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpPa1RleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29rVGV4dCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCduek9rVGV4dCcsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuek9rVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9va1RleHQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpPa1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29rVHlwZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCduek9rVHlwZScsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuek9rVHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9va1R5cGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDYW5jZWxUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYW5jZWxUZXh0ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ256Q2FuY2VsVGV4dCcsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekNhbmNlbFRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuY2VsVGV4dDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekNvbmRpdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NvbmRpdGlvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ256Q29uZGl0aW9uJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56Q29uZGl0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb25kaXRpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSB0b29sdGlwOiBOelBvcGNvbmZpcm1Db21wb25lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0b29sdGlwKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50b29sdGlwKSB7XG4gICAgICBjb25zdCB0b29sdGlwQ29tcG9uZW50ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQodGhpcy5mYWN0b3J5KTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXBDb21wb25lbnQuaW5zdGFuY2U7XG4gICAgICAvLyBSZW1vdmUgZWxlbWVudCB3aGVuIHVzZSBkaXJlY3RpdmUgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzE5NjdcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdG9vbHRpcENvbXBvbmVudC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuaXNEeW5hbWljVG9vbHRpcCA9IHRydWU7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAnbnpUaXRsZScsXG4gICAgICAgICduekNvbnRlbnQnLFxuICAgICAgICAnbnpPdmVybGF5Q2xhc3NOYW1lJyxcbiAgICAgICAgJ256T3ZlcmxheVN0eWxlJyxcbiAgICAgICAgJ256TW91c2VFbnRlckRlbGF5JyxcbiAgICAgICAgJ256TW91c2VMZWF2ZURlbGF5JyxcbiAgICAgICAgJ256VmlzaWJsZScsXG4gICAgICAgICduelRyaWdnZXInLFxuICAgICAgICAnbnpQbGFjZW1lbnQnLFxuICAgICAgICAnbnpPa1RleHQnLFxuICAgICAgICAnbnpPa1R5cGUnLFxuICAgICAgICAnbnpDYW5jZWxUZXh0JyxcbiAgICAgICAgJ256Q29uZGl0aW9uJyBdO1xuICAgICAgcHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5ID0+IHRoaXMudXBkYXRlQ29tcFZhbHVlKHByb3BlcnR5LCB0aGlzWyBwcm9wZXJ0eSBdKSk7XG4gICAgICB0aGlzLnRvb2x0aXAubnpWaXNpYmxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuc3ViY2xhc3NVbnN1YnNjcmliZSQpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSBkYXRhO1xuICAgICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KGRhdGEpO1xuICAgICAgfSk7XG4gICAgICAodGhpcy50b29sdGlwICBhcyBOelBvcGNvbmZpcm1Db21wb25lbnQpLm56T25DYW5jZWwucGlwZSh0YWtlVW50aWwodGhpcy5zdWJjbGFzc1Vuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5uek9uQ2FuY2VsLmVtaXQoKTtcbiAgICAgIH0pO1xuICAgICAgKHRoaXMudG9vbHRpcCAgYXMgTnpQb3Bjb25maXJtQ29tcG9uZW50KS5uek9uQ29uZmlybS5waXBlKHRha2VVbnRpbCh0aGlzLnN1YmNsYXNzVW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLm56T25Db25maXJtLmVtaXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3ViY2xhc3NVbnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMuc3ViY2xhc3NVbnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19