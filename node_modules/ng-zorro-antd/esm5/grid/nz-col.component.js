/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Host, HostBinding, Input, Optional, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
function EmbeddedProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    EmbeddedProperty.prototype.span;
    /** @type {?} */
    EmbeddedProperty.prototype.pull;
    /** @type {?} */
    EmbeddedProperty.prototype.push;
    /** @type {?} */
    EmbeddedProperty.prototype.offset;
    /** @type {?} */
    EmbeddedProperty.prototype.order;
}
var NzColComponent = /** @class */ (function () {
    function NzColComponent(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowComponent = nzRowComponent;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
    }
    Object.defineProperty(NzColComponent.prototype, "paddingLeft", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzRow && this.nzRow.actualGutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzColComponent.prototype, "paddingRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzRow && this.nzRow.actualGutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzColComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = tslib_1.__assign((_a = {}, _a[this.prefixCls + "-" + this.nzSpan] = isNotNil(this.nzSpan), _a[this.prefixCls + "-order-" + this.nzOrder] = isNotNil(this.nzOrder), _a[this.prefixCls + "-offset-" + this.nzOffset] = isNotNil(this.nzOffset), _a[this.prefixCls + "-pull-" + this.nzPull] = isNotNil(this.nzPull), _a[this.prefixCls + "-push-" + this.nzPush] = isNotNil(this.nzPush), _a), this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzColComponent.prototype.generateClass = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        var listClassMap = {};
        listOfSizeInputName.forEach(function (name) {
            /** @type {?} */
            var sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(_this[name])) {
                if ((typeof (_this[name]) === 'number') || (typeof (_this[name]) === 'string')) {
                    listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name]] = true;
                }
                else {
                    listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name].span] = _this[name] && isNotNil(_this[name].span);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-pull-" + _this[name].pull] = _this[name] && isNotNil(_this[name].pull);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-push-" + _this[name].push] = _this[name] && isNotNil(_this[name].push);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-offset-" + _this[name].offset] = _this[name] && isNotNil(_this[name].offset);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-order-" + _this[name].order] = _this[name] && isNotNil(_this[name].order);
                }
            }
        });
        return listClassMap;
    };
    Object.defineProperty(NzColComponent.prototype, "nzRow", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzRowComponent || this.nzRowDirective;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzColComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzColComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    NzColComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-col',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NzColComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 }
    ]; };
    NzColComponent.propDecorators = {
        paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
        paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
        nzSpan: [{ type: Input }],
        nzOrder: [{ type: Input }],
        nzOffset: [{ type: Input }],
        nzPush: [{ type: Input }],
        nzPull: [{ type: Input }],
        nzXs: [{ type: Input }],
        nzSm: [{ type: Input }],
        nzMd: [{ type: Input }],
        nzLg: [{ type: Input }],
        nzXl: [{ type: Input }],
        nzXXl: [{ type: Input }]
    };
    return NzColComponent;
}());
export { NzColComponent };
function NzColComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzColComponent.prototype.el;
    /** @type {?} */
    NzColComponent.prototype.prefixCls;
    /** @type {?} */
    NzColComponent.prototype.nzSpan;
    /** @type {?} */
    NzColComponent.prototype.nzOrder;
    /** @type {?} */
    NzColComponent.prototype.nzOffset;
    /** @type {?} */
    NzColComponent.prototype.nzPush;
    /** @type {?} */
    NzColComponent.prototype.nzPull;
    /** @type {?} */
    NzColComponent.prototype.nzXs;
    /** @type {?} */
    NzColComponent.prototype.nzSm;
    /** @type {?} */
    NzColComponent.prototype.nzMd;
    /** @type {?} */
    NzColComponent.prototype.nzLg;
    /** @type {?} */
    NzColComponent.prototype.nzXl;
    /** @type {?} */
    NzColComponent.prototype.nzXXl;
    /** @type {?} */
    NzColComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzColComponent.prototype.elementRef;
    /** @type {?} */
    NzColComponent.prototype.nzRowComponent;
    /** @type {?} */
    NzColComponent.prototype.nzRowDirective;
    /** @type {?} */
    NzColComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osV0FBVyxFQUNYLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvRmxELHdCQUFvQix3QkFBa0QsRUFBVSxVQUFzQixFQUE2QixjQUE4QixFQUE2QixjQUE4QixFQUFVLFFBQW1CO1FBQXJPLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQTZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUE2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO2tCQW5FL04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3lCQUNuQyxTQUFTO0tBbUU1QjtJQWpFRCxzQkFDSSx1Q0FBVzs7OztRQURmO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUNsRDs7O09BQUE7SUFFRCxzQkFDSSx3Q0FBWTs7OztRQURoQjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDbEQ7OztPQUFBO0lBY0QsdUdBQXVHOzs7OztJQUN2RyxvQ0FBVzs7OztJQUFYOzs7UUFDRSxJQUFNLFFBQVEsaUNBQ1AsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsTUFBUSxJQUFhLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQ2pFLElBQUksQ0FBQyxTQUFTLGVBQVUsSUFBSSxDQUFDLE9BQVMsSUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUNsRSxJQUFJLENBQUMsU0FBUyxnQkFBVyxJQUFJLENBQUMsUUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQ25FLElBQUksQ0FBQyxTQUFTLGNBQVMsSUFBSSxDQUFDLE1BQVEsSUFBUSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUNqRSxJQUFJLENBQUMsU0FBUyxjQUFTLElBQUksQ0FBQyxNQUFRLElBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FDbkUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUN2QjtRQUNGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNsRTs7OztJQUVELHNDQUFhOzs7SUFBYjtRQUFBLGlCQW1CQzs7UUFsQkMsSUFBTSxtQkFBbUIsR0FBRyxDQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFFLENBQUM7O1FBQ2hGLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBbUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJOztZQUM5QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0RCxJQUFJLFFBQVEsQ0FBQyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE9BQU0sQ0FBQyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtvQkFDL0UsWUFBWSxDQUFLLEtBQUksQ0FBQyxTQUFTLFNBQUksUUFBUSxTQUFJLEtBQUksQ0FBRSxJQUFJLENBQUksQ0FBRSxHQUFHLElBQUksQ0FBQztpQkFDeEU7cUJBQU07b0JBQ0wsWUFBWSxDQUFLLEtBQUksQ0FBQyxTQUFTLFNBQUksUUFBUSxTQUFJLEtBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxJQUFNLENBQUUsR0FBRyxLQUFJLENBQUUsSUFBSSxDQUFFLElBQUksUUFBUSxDQUFDLEtBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkgsWUFBWSxDQUFLLEtBQUksQ0FBQyxTQUFTLFNBQUksUUFBUSxjQUFTLEtBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxJQUFNLENBQUUsR0FBRyxLQUFJLENBQUUsSUFBSSxDQUFFLElBQUksUUFBUSxDQUFDLEtBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDeEgsWUFBWSxDQUFLLEtBQUksQ0FBQyxTQUFTLFNBQUksUUFBUSxjQUFTLEtBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxJQUFNLENBQUUsR0FBRyxLQUFJLENBQUUsSUFBSSxDQUFFLElBQUksUUFBUSxDQUFDLEtBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDeEgsWUFBWSxDQUFLLEtBQUksQ0FBQyxTQUFTLFNBQUksUUFBUSxnQkFBVyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsTUFBUSxDQUFFLEdBQUcsS0FBSSxDQUFFLElBQUksQ0FBRSxJQUFJLFFBQVEsQ0FBQyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzlILFlBQVksQ0FBSyxLQUFJLENBQUMsU0FBUyxTQUFJLFFBQVEsZUFBVSxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsS0FBTyxDQUFFLEdBQUcsS0FBSSxDQUFFLElBQUksQ0FBRSxJQUFJLFFBQVEsQ0FBQyxLQUFJLENBQUUsSUFBSSxDQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzVIO2FBQ0Y7U0FFRixDQUFDLENBQUM7UUFDSCxPQUFPLFlBQVksQ0FBQztLQUNyQjtJQUVELHNCQUFJLGlDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUNuRDs7O09BQUE7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQW1EO1FBQzdELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7OztJQUtELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7Z0JBL0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsUUFBUTtvQkFDN0IsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7b0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHFDQUE4QztpQkFDL0M7Ozs7Z0JBbkJRLHdCQUF3QjtnQkFYL0IsVUFBVTtnQkFjSCxjQUFjLHVCQXFGb0YsUUFBUSxZQUFJLElBQUk7Z0JBcEZsSCxjQUFjLHVCQW9GK0ksUUFBUSxZQUFJLElBQUk7Z0JBNUZwTCxTQUFTOzs7OEJBNEJSLFdBQVcsU0FBQyx1QkFBdUI7K0JBS25DLFdBQVcsU0FBQyx3QkFBd0I7eUJBS3BDLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7eUJBekRSOztTQWlDYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5cbmltcG9ydCB7IE56Um93Q29tcG9uZW50IH0gZnJvbSAnLi9uei1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yb3cuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFByb3BlcnR5IHtcbiAgc3BhbjogbnVtYmVyO1xuICBwdWxsOiBudW1iZXI7XG4gIHB1c2g6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIG9yZGVyOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY29sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNvbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpDb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1jb2wnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcbiAgZ2V0IHBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpSb3cgJiYgdGhpcy5uelJvdy5hY3R1YWxHdXR0ZXIgLyAyO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4JylcbiAgZ2V0IHBhZGRpbmdSaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm56Um93ICYmIHRoaXMubnpSb3cuYWN0dWFsR3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBJbnB1dCgpIG56U3BhbjogbnVtYmVyO1xuICBASW5wdXQoKSBuek9yZGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56UHVzaDogbnVtYmVyO1xuICBASW5wdXQoKSBuelB1bGw6IG51bWJlcjtcbiAgQElucHV0KCkgbnpYczogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpTbTogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpNZDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpMZzogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpYWGw6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG5cbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNwYW59YCBdICAgICAgICAgOiBpc05vdE5pbCh0aGlzLm56U3BhbiksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1vcmRlci0ke3RoaXMubnpPcmRlcn1gIF0gIDogaXNOb3ROaWwodGhpcy5uek9yZGVyKSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW9mZnNldC0ke3RoaXMubnpPZmZzZXR9YCBdOiBpc05vdE5pbCh0aGlzLm56T2Zmc2V0KSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXB1bGwtJHt0aGlzLm56UHVsbH1gIF0gICAgOiBpc05vdE5pbCh0aGlzLm56UHVsbCksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1wdXNoLSR7dGhpcy5uelB1c2h9YCBdICAgIDogaXNOb3ROaWwodGhpcy5uelB1c2gpLFxuICAgICAgLi4udGhpcy5nZW5lcmF0ZUNsYXNzKClcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBnZW5lcmF0ZUNsYXNzKCk6IG9iamVjdCB7XG4gICAgY29uc3QgbGlzdE9mU2l6ZUlucHV0TmFtZSA9IFsgJ256WHMnLCAnbnpTbScsICduek1kJywgJ256TGcnLCAnbnpYbCcsICduelhYbCcgXTtcbiAgICBjb25zdCBsaXN0Q2xhc3NNYXAgPSB7fTtcbiAgICBsaXN0T2ZTaXplSW5wdXROYW1lLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBzaXplTmFtZSA9IG5hbWUucmVwbGFjZSgnbnonLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzWyBuYW1lIF0pKSB7XG4gICAgICAgIGlmICgodHlwZW9mKHRoaXNbIG5hbWUgXSkgPT09ICdudW1iZXInKSB8fCAodHlwZW9mICh0aGlzWyBuYW1lIF0pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS0ke3RoaXNbIG5hbWUgXX1gIF0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LSR7dGhpc1sgbmFtZSBdLnNwYW59YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5zcGFuKTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1wdWxsLSR7dGhpc1sgbmFtZSBdLnB1bGx9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5wdWxsKTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1wdXNoLSR7dGhpc1sgbmFtZSBdLnB1c2h9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5wdXNoKTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1vZmZzZXQtJHt0aGlzWyBuYW1lIF0ub2Zmc2V0fWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ub2Zmc2V0KTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1vcmRlci0ke3RoaXNbIG5hbWUgXS5vcmRlcn1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLm9yZGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3RDbGFzc01hcDtcbiAgfVxuXG4gIGdldCBuelJvdygpOiBOelJvd0NvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMubnpSb3dDb21wb25lbnQgfHwgdGhpcy5uelJvd0RpcmVjdGl2ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgWyBwcm9wZXJ0eU5hbWU6IHN0cmluZyBdOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbnpSb3dDb21wb25lbnQ6IE56Um93Q29tcG9uZW50LCBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG59XG4iXX0=