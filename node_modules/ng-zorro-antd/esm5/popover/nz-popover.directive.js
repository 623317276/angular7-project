/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Directive, ElementRef, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzTooltipDirective } from '../tooltip/nz-tooltip.directive';
import { NzPopoverComponent } from './nz-popover.component';
var NzPopoverDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopoverDirective, _super);
    function NzPopoverDirective(elementRef, hostView, resolver, renderer, tooltip) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip) || this;
        _this.factory = _this.resolver.resolveComponentFactory(NzPopoverComponent);
        return _this;
    }
    NzPopoverDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-popover]'
                },] }
    ];
    /** @nocollapse */
    NzPopoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzPopoverComponent, decorators: [{ type: Optional }] }
    ]; };
    return NzPopoverDirective;
}(NzTooltipDirective));
export { NzPopoverDirective };
function NzPopoverDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPopoverDirective.prototype.factory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicG9wb3Zlci9uei1wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFLcEIsOENBQWtCO0lBR3hELDRCQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ1AsT0FBMkI7UUFMekMsWUFNRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQ3pEO3dCQVQrQyxLQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDOztLQVN4Rzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFWQyxVQUFVO2dCQUdWLGdCQUFnQjtnQkFMaEIsd0JBQXdCO2dCQUl4QixTQUFTO2dCQUlGLGtCQUFrQix1QkFhdEIsUUFBUTs7NkJBdkJiO0VBZXdDLGtCQUFrQjtTQUE3QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4uL3Rvb2x0aXAvbnotdG9vbHRpcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1wb3BvdmVyLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1wb3BvdmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTnpQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwRGlyZWN0aXZlIHtcbiAgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelBvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOelBvcG92ZXJDb21wb25lbnQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHRvb2x0aXA6IE56UG9wb3ZlckNvbXBvbmVudCkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIHRvb2x0aXApO1xuICB9XG59XG4iXX0=