/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { NzI18nService } from '../i18n/nz-i18n.service';
export class NzPickerComponent {
    /**
     * @param {?} i18n
     * @param {?} changeDetector
     */
    constructor(i18n, changeDetector) {
        this.i18n = i18n;
        this.changeDetector = changeDetector;
        this.isRange = false;
        this.open = undefined;
        this.valueChange = new EventEmitter();
        this.openChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.animationOpenState = false;
        this.overlayOpen = false;
        this.overlayOffsetY = 0;
        this.overlayOffsetX = -2;
        this.overlayPositions = /** @type {?} */ ([
            {
                // offsetX: -10, // TODO: What a pity, cdk/overlay current not support offset configs even though it already provide these properties
                // offsetY: -10,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
        this.dropdownAnimation = 'bottom';
        this.currentPositionX = 'start';
        this.currentPositionY = 'top';
    }
    /**
     * @return {?}
     */
    get realOpenState() {
        // The value that really decide the open state of overlay
        return this.isOpenHandledByUser() ? this.open : this.overlayOpen;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autoFocus) {
            if (this.isRange) {
                /** @type {?} */
                const firstInput = /** @type {?} */ ((/** @type {?} */ (this.pickerInput.nativeElement)).querySelector('input:first-child'));
                firstInput.focus(); // Focus on the first input
            }
            else {
                this.pickerInput.nativeElement.focus();
            }
        }
    }
    /**
     * @return {?}
     */
    showOverlay() {
        if (!this.realOpenState) {
            this.overlayOpen = true;
            this.openChange.emit(this.overlayOpen);
            setTimeout(() => {
                if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                    this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            });
        }
    }
    /**
     * @return {?}
     */
    hideOverlay() {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(this.overlayOpen);
        }
    }
    /**
     * @return {?}
     */
    onClickInputBox() {
        if (!this.disabled && !this.isOpenHandledByUser()) {
            this.showOverlay();
        }
    }
    /**
     * @return {?}
     */
    onClickBackdrop() {
        this.hideOverlay();
    }
    /**
     * @return {?}
     */
    onOverlayDetach() {
        this.hideOverlay();
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
        this.currentPositionX = /** @type {?} */ (position.connectionPair.originX);
        this.currentPositionY = /** @type {?} */ (position.connectionPair.originY);
        this.changeDetector.detectChanges(); // Take side-effects to position styles
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickClear(event) {
        event.preventDefault();
        event.stopPropagation();
        this.value = this.isRange ? [] : null;
        this.valueChange.emit(this.value);
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getReadableValue(partType) {
        /** @type {?} */
        let value;
        if (this.isRange) {
            value = this.value[this.getPartTypeIndex(partType)];
        }
        else {
            value = /** @type {?} */ (this.value);
        }
        return value ? this.i18n.formatDateCompatible(value.nativeDate, this.format) : null;
    }
    /**
     * @param {?} partType
     * @return {?}
     */
    getPartTypeIndex(partType) {
        return { 'left': 0, 'right': 1 }[partType];
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : /** @type {?} */ (this.placeholder);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isEmptyValue(value) {
        if (this.isRange) {
            return !value || !Array.isArray(value) || value.every((val) => !val);
        }
        else {
            return !value;
        }
    }
    /**
     * @return {?}
     */
    isOpenHandledByUser() {
        return this.open !== undefined;
    }
    /**
     * @return {?}
     */
    animationStart() {
        if (this.realOpenState) {
            this.animationOpenState = true;
        }
    }
    /**
     * @return {?}
     */
    animationDone() {
        this.animationOpenState = this.realOpenState;
    }
}
NzPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-picker',
                template: "<span\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  class=\"{{ prefixCls }}-picker {{ size ? prefixCls + '-picker-' + size : '' }} {{ className }}\"\n  [ngStyle]=\"style\"\n  tabindex=\"0\"\n  (click)=\"onClickInputBox()\"\n>\n  <!-- Content of single picker -->\n  <ng-container *ngIf=\"!isRange\">\n    <input\n      #pickerInput\n      class=\"{{ prefixCls }}-picker-input ant-input\"\n      [class.ant-input-lg]=\"size === 'large'\"\n      [class.ant-input-sm]=\"size === 'small'\"\n      [class.ant-input-disabled]=\"disabled\"\n\n      [disabled]=\"disabled\"\n      readonly\n      value=\"{{ getReadableValue() }}\"\n      placeholder=\"{{ getPlaceholder() }}\"\n    />\n    <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\n  </ng-container>\n\n  <!-- Content of range picker -->\n  <ng-container *ngIf=\"isRange\">\n    <span\n      #pickerInput\n      class=\"{{ prefixCls }}-picker-input ant-input\"\n      [class.ant-input-lg]=\"size === 'large'\"\n      [class.ant-input-sm]=\"size === 'small'\"\n      [class.ant-input-disabled]=\"disabled\"\n    >\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'left' }\"></ng-container>\n      <span class=\"{{ prefixCls }}-range-picker-separator\"> ~ </span>\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'right' }\"></ng-container>\n      <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\n    </span>\n  </ng-container>\n</span>\n\n<!-- Input for Range ONLY -->\n<ng-template #tplRangeInput let-partType=\"partType\">\n  <input\n    class=\"{{ prefixCls }}-range-picker-input\"\n    [disabled]=\"disabled\"\n    readonly\n    value=\"{{ getReadableValue(partType) }}\"\n    placeholder=\"{{ getPlaceholder(partType) }}\"\n  />\n</ng-template>\n\n<!-- Right operator icons -->\n<ng-template #tplRightRest>\n  <i\n    nz-icon\n    type=\"close-circle\"\n    theme=\"fill\"\n    *ngIf=\"!disabled && !isEmptyValue(value) && allowClear\"\n    class=\"{{ prefixCls }}-picker-clear\"\n    (click)=\"onClickClear($event)\"\n  ></i>\n  <span class=\"{{ prefixCls }}-picker-icon\">\n    <i nz-icon type=\"calendar\"></i>\n  </span>\n</ng-template>\n\n<!-- Overlay -->\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"realOpenState\"\n  [cdkConnectedOverlayHasBackdrop]=\"!isOpenHandledByUser()\"\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\n  (positionChange)=\"onPositionChange($event)\"\n  (backdropClick)=\"onClickBackdrop()\"\n  (detach)=\"onOverlayDetach()\"\n>\n  <div\n    [@dropDownAnimation]=\"dropdownAnimation\"\n    (@dropDownAnimation.start)=\"animationStart()\"\n    (@dropDownAnimation.done)=\"animationDone()\"\n    style=\"position: relative;\"\n    [style.left]=\"currentPositionX === 'start' ? '-2px' : '2px'\"\n    [style.top]=\"currentPositionY === 'top' ? '-2px' : '2px'\"\n  > <!-- Compatible for overlay that not support offset dynamically and immediately -->\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                animations: [
                    dropDownAnimation
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzPickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef }
];
NzPickerComponent.propDecorators = {
    isRange: [{ type: Input }],
    open: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }],
    allowClear: [{ type: Input }],
    autoFocus: [{ type: Input }],
    className: [{ type: Input }],
    format: [{ type: Input }],
    size: [{ type: Input }],
    style: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    openChange: [{ type: Output }],
    origin: [{ type: ViewChild, args: ['origin',] }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
    pickerInput: [{ type: ViewChild, args: ['pickerInput',] }]
};
function NzPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPickerComponent.prototype.isRange;
    /** @type {?} */
    NzPickerComponent.prototype.open;
    /** @type {?} */
    NzPickerComponent.prototype.disabled;
    /** @type {?} */
    NzPickerComponent.prototype.placeholder;
    /** @type {?} */
    NzPickerComponent.prototype.allowClear;
    /** @type {?} */
    NzPickerComponent.prototype.autoFocus;
    /** @type {?} */
    NzPickerComponent.prototype.className;
    /** @type {?} */
    NzPickerComponent.prototype.format;
    /** @type {?} */
    NzPickerComponent.prototype.size;
    /** @type {?} */
    NzPickerComponent.prototype.style;
    /** @type {?} */
    NzPickerComponent.prototype.value;
    /** @type {?} */
    NzPickerComponent.prototype.valueChange;
    /** @type {?} */
    NzPickerComponent.prototype.openChange;
    /** @type {?} */
    NzPickerComponent.prototype.origin;
    /** @type {?} */
    NzPickerComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzPickerComponent.prototype.pickerInput;
    /** @type {?} */
    NzPickerComponent.prototype.prefixCls;
    /** @type {?} */
    NzPickerComponent.prototype.animationOpenState;
    /** @type {?} */
    NzPickerComponent.prototype.overlayOpen;
    /** @type {?} */
    NzPickerComponent.prototype.overlayOffsetY;
    /** @type {?} */
    NzPickerComponent.prototype.overlayOffsetX;
    /** @type {?} */
    NzPickerComponent.prototype.overlayPositions;
    /** @type {?} */
    NzPickerComponent.prototype.dropdownAnimation;
    /** @type {?} */
    NzPickerComponent.prototype.currentPositionX;
    /** @type {?} */
    NzPickerComponent.prototype.currentPositionY;
    /** @type {?} */
    NzPickerComponent.prototype.i18n;
    /** @type {?} */
    NzPickerComponent.prototype.changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUdqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVl4RCxNQUFNOzs7OztJQWdFSixZQUFvQixJQUFtQixFQUFVLGNBQWlDO1FBQTlELFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7dUJBL0R0RCxLQUFLO29CQUNSLFNBQVM7MkJBV1YsSUFBSSxZQUFZLEVBQTJCOzBCQUU1QyxJQUFJLFlBQVksRUFBVzt5QkFNdEMsY0FBYztrQ0FDTCxLQUFLOzJCQUNILEtBQUs7OEJBQ0gsQ0FBQzs4QkFDRCxDQUFDLENBQUM7a0RBQ2tCO1lBQzNDOzs7Z0JBR0UsT0FBTyxFQUFHLE9BQU87Z0JBQ2pCLE9BQU8sRUFBRyxLQUFLO2dCQUNmLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRyxPQUFPO2dCQUNqQixPQUFPLEVBQUcsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFHLEtBQUs7Z0JBQ2YsT0FBTyxFQUFHLEtBQUs7Z0JBQ2YsUUFB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ZjtLQUNGOzs7O0lBR0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7S0FDaEM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7S0FDRjs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUM5Qzs7O1lBdExGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQVMsV0FBVztnQkFDNUIsOC9GQUEwQztnQkFDMUMsVUFBVSxFQUFPO29CQUNmLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFWUSxhQUFhO1lBWHBCLGlCQUFpQjs7O3NCQXdCaEIsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFFTCxLQUFLOzBCQUNMLE1BQU07eUJBRU4sTUFBTTtxQkFFTixTQUFTLFNBQUMsUUFBUTtrQ0FDbEIsU0FBUyxTQUFDLG1CQUFtQjswQkFDN0IsU0FBUyxTQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxuICBDZGtPdmVybGF5T3JpZ2luLFxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICA6ICduei1waWNrZXInLFxuICB0ZW1wbGF0ZVVybCAgICA6ICcuL3BpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnMgICAgIDogW1xuICAgIGRyb3BEb3duQW5pbWF0aW9uXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgTnpQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG9wZW46IGJvb2xlYW4gPSB1bmRlZmluZWQ7IC8vIFwidW5kZWZpbmVkXCIgPSB0aGlzIHZhbHVlIHdpbGwgYmUgbm90IHVzZWRcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgYWxsb3dDbGVhcjogYm9vbGVhbjtcbiAgQElucHV0KCkgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6ICdsYXJnZScgfCAnc21hbGwnO1xuICBASW5wdXQoKSBzdHlsZTogb2JqZWN0O1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXTtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGUgfCBDYW5keURhdGVbXT4oKTtcblxuICBAT3V0cHV0KCkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTsgLy8gRW1pdHRlZCB3aGVuIG92ZXJsYXkncyBvcGVuIHN0YXRlIGNoYW5nZVxuXG4gIEBWaWV3Q2hpbGQoJ29yaWdpbicpIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkKCdwaWNrZXJJbnB1dCcpIHBpY2tlcklucHV0OiBFbGVtZW50UmVmO1xuXG4gIHByZWZpeENscyA9ICdhbnQtY2FsZW5kYXInO1xuICBhbmltYXRpb25PcGVuU3RhdGUgPSBmYWxzZTtcbiAgb3ZlcmxheU9wZW46IGJvb2xlYW4gPSBmYWxzZTsgLy8gQXZhaWxhYmxlIHdoZW4gXCJvcGVuXCI9dW5kZWZpbmVkXG4gIG92ZXJsYXlPZmZzZXRZOiBudW1iZXIgPSAwO1xuICBvdmVybGF5T2Zmc2V0WDogbnVtYmVyID0gLTI7XG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtcbiAgICB7XG4gICAgICAvLyBvZmZzZXRYOiAtMTAsIC8vIFRPRE86IFdoYXQgYSBwaXR5LCBjZGsvb3ZlcmxheSBjdXJyZW50IG5vdCBzdXBwb3J0IG9mZnNldCBjb25maWdzIGV2ZW4gdGhvdWdoIGl0IGFscmVhZHkgcHJvdmlkZSB0aGVzZSBwcm9wZXJ0aWVzXG4gICAgICAvLyBvZmZzZXRZOiAtMTAsXG4gICAgICBvcmlnaW5YIDogJ3N0YXJ0JyxcbiAgICAgIG9yaWdpblkgOiAndG9wJyxcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgb3ZlcmxheVk6ICd0b3AnXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmlnaW5YIDogJ3N0YXJ0JyxcbiAgICAgIG9yaWdpblkgOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmlnaW5YIDogJ2VuZCcsXG4gICAgICBvcmlnaW5ZIDogJ3RvcCcsXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICBvdmVybGF5WTogJ3RvcCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yaWdpblggOiAnZW5kJyxcbiAgICAgIG9yaWdpblkgOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICAgIH1cbiAgXSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyW107XG4gIGRyb3Bkb3duQW5pbWF0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG4gIGN1cnJlbnRQb3NpdGlvblg6ICdzdGFydCcgfCAnZW5kJyA9ICdzdGFydCc7XG4gIGN1cnJlbnRQb3NpdGlvblk6ICd0b3AnIHwgJ2JvdHRvbScgPSAndG9wJztcbiAgLy8gZ2V0IHZhbHVlUmVhZGFibGUoKTogc3RyaW5nIHtcbiAgLy8gICByZXR1cm4gdGhpcy52YWx1ZSAmJiB0aGlzLmkxOG4uZm9ybWF0RGF0ZUNvbXBhdGlibGUodGhpcy52YWx1ZS5uYXRpdmVEYXRlLCB0aGlzLmZvcm1hdCk7XG4gIC8vIH1cbiAgZ2V0IHJlYWxPcGVuU3RhdGUoKTogYm9vbGVhbiB7IC8vIFRoZSB2YWx1ZSB0aGF0IHJlYWxseSBkZWNpZGUgdGhlIG9wZW4gc3RhdGUgb2Ygb3ZlcmxheVxuICAgIHJldHVybiB0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSA/IHRoaXMub3BlbiA6IHRoaXMub3ZlcmxheU9wZW47XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgY29uc3QgZmlyc3RJbnB1dCA9ICh0aGlzLnBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0OmZpcnN0LWNoaWxkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgZmlyc3RJbnB1dC5mb2N1cygpOyAvLyBGb2N1cyBvbiB0aGUgZmlyc3QgaW5wdXRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGlja2VySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cgb3ZlcmxheSBjb250ZW50XG4gIHNob3dPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWFsT3BlblN0YXRlKSB7XG4gICAgICB0aGlzLm92ZXJsYXlPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3ZlcmxheU9wZW4pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoaWRlT3ZlcmxheSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWFsT3BlblN0YXRlKSB7XG4gICAgICB0aGlzLm92ZXJsYXlPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm92ZXJsYXlPcGVuKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrSW5wdXRCb3goKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSkge1xuICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gIH1cblxuICBvbk92ZXJsYXlEZXRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICB9XG5cbiAgLy8gTk9URTogQSBpc3N1ZSBoZXJlLCB0aGUgZmlyc3QgdGltZSBwb3NpdGlvbiBjaGFuZ2UsIHRoZSBhbmltYXRpb24gd2lsbCBub3QgYmUgdHJpZ2dlcmVkLlxuICAvLyBCZWNhdXNlIHRoZSBvdmVybGF5J3MgXCJwb3NpdGlvbkNoYW5nZVwiIGV2ZW50IGlzIGVtaXR0ZWQgYWZ0ZXIgdGhlIGNvbnRlbnQncyBmdWxsIHNob3duIHVwLlxuICAvLyBBbGwgb3RoZXIgY29tcG9uZW50cyBsaWtlIFwibnotZHJvcGRvd25cIiB3aGljaCBkZXBlbmRzIG9uIG92ZXJsYXkgYWxzbyBoYXMgdGhlIHNhbWUgaXNzdWUuXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzE0MjlcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wZG93bkFuaW1hdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgPT09ICd0b3AnID8gJ2JvdHRvbScgOiAndG9wJztcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblggPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5YIGFzICdzdGFydCcgfCAnZW5kJztcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblkgPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZIGFzICd0b3AnIHwgJ2JvdHRvbSc7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7IC8vIFRha2Ugc2lkZS1lZmZlY3RzIHRvIHBvc2l0aW9uIHN0eWxlc1xuICB9XG5cbiAgb25DbGlja0NsZWFyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmlzUmFuZ2UgPyBbXSA6IG51bGw7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgZ2V0UmVhZGFibGVWYWx1ZShwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBzdHJpbmcge1xuICAgIGxldCB2YWx1ZTogQ2FuZHlEYXRlO1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHZhbHVlID0gdGhpcy52YWx1ZVsgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgPyB0aGlzLmkxOG4uZm9ybWF0RGF0ZUNvbXBhdGlibGUodmFsdWUubmF0aXZlRGF0ZSwgdGhpcy5mb3JtYXQpIDogbnVsbDtcbiAgfVxuXG4gIGdldFBhcnRUeXBlSW5kZXgocGFydFR5cGU6IFJhbmdlUGFydFR5cGUpOiBudW1iZXIge1xuICAgIHJldHVybiB7ICdsZWZ0JzogMCwgJ3JpZ2h0JzogMSB9WyBwYXJ0VHlwZSBdO1xuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy5wbGFjZWhvbGRlclsgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdIDogdGhpcy5wbGFjZWhvbGRlciBhcyBzdHJpbmc7XG4gIH1cblxuICBpc0VtcHR5VmFsdWUodmFsdWU6IENhbmR5RGF0ZVtdIHwgQ2FuZHlEYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgcmV0dXJuICF2YWx1ZSB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUuZXZlcnkoKHZhbCkgPT4gIXZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2hldGhlciBvcGVuIHN0YXRlIGlzIHBlcm1hbmVudGx5IGNvbnRyb2xsZWQgYnkgdXNlciBoaW1zZWxmXG4gIGlzT3BlbkhhbmRsZWRCeVVzZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbiAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYW5pbWF0aW9uU3RhcnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVhbE9wZW5TdGF0ZSkge1xuICAgICAgdGhpcy5hbmltYXRpb25PcGVuU3RhdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGlvbkRvbmUoKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRpb25PcGVuU3RhdGUgPSB0aGlzLnJlYWxPcGVuU3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUmFuZ2VQYXJ0VHlwZSA9ICdsZWZ0JyB8ICdyaWdodCc7XG4iXX0=