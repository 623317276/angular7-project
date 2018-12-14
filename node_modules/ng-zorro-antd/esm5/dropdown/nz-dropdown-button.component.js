/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
var NzDropDownButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzDropDownButtonComponent, _super);
    function NzDropDownButtonComponent(renderer, changeDetector) {
        var _this = _super.call(this, renderer, changeDetector) || this;
        _this.nzSize = 'default';
        _this.nzType = 'default';
        _this.nzClick = new EventEmitter();
        _this.onVisibleChange = function (visible) {
            if (_this.nzDisabled) {
                return;
            }
            if (visible) {
                _this.setTriggerWidth();
            }
            if (_this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.nzVisibleChange.emit(_this.nzVisible);
            }
            _this.changeDetector.markForCheck();
        };
        return _this;
    }
    /** rewrite afterViewInit hook */
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    NzDropDownButtonComponent.prototype.ngAfterViewInit = /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    function () {
        this.startSubscribe(this.$visibleChange);
    };
    NzDropDownButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown-button',
                    preserveWhitespaces: false,
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<div class=\"ant-btn-group ant-dropdown-button\" nz-dropdown>\n  <button\n    type=\"button\"\n    nz-button\n    [disabled]=\"nzDisabled\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    (click)=\"nzClick.emit($event)\">\n    <span><ng-content></ng-content></span>\n  </button>\n  <button\n    nz-button\n    type=\"button\"\n    class=\"ant-dropdown-trigger\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    [disabled]=\"nzDisabled\"\n    (click)=\"onClickEvent()\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\">\n    <i nz-icon type=\"ellipsis\"></i>\n  </button>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzOrigin\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\n  <div\n    class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [@dropDownAnimation]=\"dropDownPosition\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <ng-content select=\"[nz-menu]\"></ng-content>\n  </div>\n</ng-template>",
                    styles: ["\n    :host {\n      position: relative;\n      display: inline-block;\n    }\n\n    .ant-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzDropDownButtonComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzDropDownButtonComponent.propDecorators = {
        nzSize: [{ type: Input }],
        nzType: [{ type: Input }],
        content: [{ type: ViewChild, args: ['content',] }],
        nzClick: [{ type: Output }],
        nzOrigin: [{ type: ViewChild, args: [NzDropDownDirective,] }]
    };
    return NzDropDownButtonComponent;
}(NzDropDownComponent));
export { NzDropDownButtonComponent };
function NzDropDownButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzSize;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzType;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.content;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzClick;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzOrigin;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.onVisibleChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUEwQmYscURBQW1CO0lBcUJoRSxtQ0FBWSxRQUFtQixFQUFFLGNBQWlDO1FBQWxFLFlBQ0Usa0JBQU0sUUFBUSxFQUFFLGNBQWMsQ0FBQyxTQUNoQzt1QkF0QmlCLFNBQVM7dUJBQ1QsU0FBUzt3QkFFUCxJQUFJLFlBQVksRUFBYztnQ0FHaEMsVUFBQyxPQUFnQjtZQUNqQyxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLE9BQU87YUFDUjtZQUNELElBQUksT0FBTyxFQUFFO2dCQUNYLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksS0FBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0M7WUFDRCxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BDOztLQUlBO0lBRUQsaUNBQWlDOzs7OztJQUNqQyxtREFBZTs7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDMUM7O2dCQXBERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLG9CQUFvQjtvQkFDekMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsVUFBVSxFQUFXO3dCQUNuQixpQkFBaUI7cUJBQ2xCO29CQUNELGkwQ0FBMEQ7NkJBQ25DLHFQQWN0QjtpQkFDRjs7OztnQkEvQkMsU0FBUztnQkFQVCxpQkFBaUI7Ozt5QkF5Q2hCLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxTQUFTLFNBQUMsU0FBUzswQkFDbkIsTUFBTTsyQkFDTixTQUFTLFNBQUMsbUJBQW1COztvQ0EvQ2hDO0VBMEMrQyxtQkFBbUI7U0FBckQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IE56RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuL256LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWRyb3Bkb3duLWJ1dHRvbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgZHJvcERvd25BbmltYXRpb25cbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgOmhvc3Qge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5hbnQtZHJvcGRvd24ge1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgYCBdXG59KVxuXG5leHBvcnQgY2xhc3MgTnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIE56RHJvcERvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpUeXBlID0gJ2RlZmF1bHQnO1xuICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDtcbiAgQE91dHB1dCgpIG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIEBWaWV3Q2hpbGQoTnpEcm9wRG93bkRpcmVjdGl2ZSkgbnpPcmlnaW47XG5cbiAgb25WaXNpYmxlQ2hhbmdlID0gKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5uelZpc2libGUpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIocmVuZGVyZXIsIGNoYW5nZURldGVjdG9yKTtcbiAgfVxuXG4gIC8qKiByZXdyaXRlIGFmdGVyVmlld0luaXQgaG9vayAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydFN1YnNjcmliZSh0aGlzLiR2aXNpYmxlQ2hhbmdlKTtcbiAgfVxufVxuIl19