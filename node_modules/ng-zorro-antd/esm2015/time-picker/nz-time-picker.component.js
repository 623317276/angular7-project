/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkOverlayOrigin, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzUpdateHostClassService as UpdateCls } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzI18nService as I18n } from '../i18n/nz-i18n.service';
export class NzTimePickerComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} overlay
     * @param {?} positionBuilder
     * @param {?} i18n
     * @param {?} updateCls
     */
    constructor(element, renderer, overlay, positionBuilder, i18n, updateCls) {
        this.element = element;
        this.renderer = renderer;
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.i18n = i18n;
        this.updateCls = updateCls;
        this._disabled = false;
        this._value = null;
        this._allowEmpty = true;
        this._autoFocus = false;
        this._hideDisabledOptions = false;
        this.isInit = false;
        this.overlayPositions = [{
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }];
        this.nzSize = null;
        this.nzHourStep = 1;
        this.nzMinuteStep = 1;
        this.nzSecondStep = 1;
        this.nzClearText = 'clear';
        this.nzPopupClassName = '';
        this.nzPlaceHolder = '';
        this.nzDefaultOpenValue = new Date();
        this.nzFormat = 'HH:mm:ss';
        this.nzOpen = false;
        this.nzOpenChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHideDisabledOptions(value) {
        this._hideDisabledOptions = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzHideDisabledOptions() {
        return this._hideDisabledOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowEmpty(value) {
        this._allowEmpty = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutoFocus(value) {
        this._autoFocus = toBoolean(value);
        this.updateAutoFocus();
    }
    /**
     * @return {?}
     */
    get nzAutoFocus() {
        return this._autoFocus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
        /** @type {?} */
        const input = /** @type {?} */ (this.inputRef.nativeElement);
        if (this._disabled) {
            this.renderer.setAttribute(input, 'disabled', '');
        }
        else {
            this.renderer.removeAttribute(input, 'disabled');
        }
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    open() {
        if (this.nzDisabled) {
            return;
        }
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    }
    /**
     * @return {?}
     */
    close() {
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`ant-time-picker`]: true,
            [`ant-time-picker-${this.nzSize}`]: isNotNil(this.nzSize)
        });
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
        this.updateAutoFocus();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    writeValue(time) {
        this._value = time;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
    }
}
NzTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-time-picker',
                template: "<input\n  type=\"text\"\n  [nzTime]=\"nzFormat\"\n  class=\"ant-time-picker-input\"\n  [placeholder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\n  [(ngModel)]=\"value\"\n  readonly=\"readonly\"\n  (click)=\"open()\"\n  #inputElement>\n<span class=\"ant-time-picker-icon\">\n  <i nz-icon type=\"clock-circle\"></i>\n</span>\n\n<ng-template\n  cdkConnectedOverlay\n  cdkConnectedOverlayHasBackdrop\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"nzOpen\"\n  [cdkConnectedOverlayOffsetY]=\"-2\"\n  (detach)=\"close()\"\n  (backdropClick)=\"close()\">\n  <nz-time-picker-panel\n    [ngClass]=\"nzPopupClassName\"\n    [@dropDownAnimation]=\"'bottom'\"\n    [format]=\"nzFormat\"\n    [nzHourStep]=\"nzHourStep\"\n    [nzMinuteStep]=\"nzMinuteStep\"\n    [nzSecondStep]=\"nzSecondStep\"\n    [nzDisabledHours]=\"nzDisabledHours\"\n    [nzDisabledMinutes]=\"nzDisabledMinutes\"\n    [nzDisabledSeconds]=\"nzDisabledSeconds\"\n    [nzPlaceHolder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\n    [nzHideDisabledOptions]=\"nzHideDisabledOptions\"\n    [nzDefaultOpenValue]=\"nzDefaultOpenValue\"\n    [nzAddOn]=\"nzAddOn\"\n    [opened]=\"nzOpen\"\n    [nzClearText]=\"nzClearText\"\n    [nzAllowEmpty]=\"nzAllowEmpty\"\n    (timeClear)=\"close()\"\n    [(ngModel)]=\"value\">\n  </nz-time-picker-panel>\n</ng-template>\n\n",
                animations: [
                    trigger('dropDownAnimation', [
                        state('void', style({
                            opacity: 0,
                            display: 'none'
                        })),
                        state('*', style({
                            opacity: 1,
                            transform: 'scaleY(1)',
                            transformOrigin: '0% 0%'
                        })),
                        transition('void => *', [
                            style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }),
                            animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                        ]),
                        transition('* => void', [
                            animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }))
                        ])
                    ])
                ],
                providers: [
                    UpdateCls,
                    { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }
                ]
            }] }
];
/** @nocollapse */
NzTimePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Overlay },
    { type: OverlayPositionBuilder },
    { type: I18n },
    { type: UpdateCls }
];
NzTimePickerComponent.propDecorators = {
    inputRef: [{ type: ViewChild, args: ['inputElement',] }],
    nzSize: [{ type: Input }],
    nzHourStep: [{ type: Input }],
    nzMinuteStep: [{ type: Input }],
    nzSecondStep: [{ type: Input }],
    nzClearText: [{ type: Input }],
    nzPopupClassName: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzAddOn: [{ type: Input }],
    nzDefaultOpenValue: [{ type: Input }],
    nzDisabledHours: [{ type: Input }],
    nzDisabledMinutes: [{ type: Input }],
    nzDisabledSeconds: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzOpenChange: [{ type: Output }],
    nzHideDisabledOptions: [{ type: Input }],
    nzAllowEmpty: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzDisabled: [{ type: Input }]
};
function NzTimePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimePickerComponent.prototype._disabled;
    /** @type {?} */
    NzTimePickerComponent.prototype._value;
    /** @type {?} */
    NzTimePickerComponent.prototype._allowEmpty;
    /** @type {?} */
    NzTimePickerComponent.prototype._autoFocus;
    /** @type {?} */
    NzTimePickerComponent.prototype._onChange;
    /** @type {?} */
    NzTimePickerComponent.prototype._onTouched;
    /** @type {?} */
    NzTimePickerComponent.prototype._hideDisabledOptions;
    /** @type {?} */
    NzTimePickerComponent.prototype.isInit;
    /** @type {?} */
    NzTimePickerComponent.prototype.origin;
    /** @type {?} */
    NzTimePickerComponent.prototype.overlayPositions;
    /** @type {?} */
    NzTimePickerComponent.prototype.inputRef;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSize;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzHourStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzMinuteStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSecondStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPopupClassName;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDefaultOpenValue;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledHours;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledMinutes;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledSeconds;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpen;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTimePickerComponent.prototype.element;
    /** @type {?} */
    NzTimePickerComponent.prototype.renderer;
    /** @type {?} */
    NzTimePickerComponent.prototype.overlay;
    /** @type {?} */
    NzTimePickerComponent.prototype.positionBuilder;
    /** @type {?} */
    NzTimePickerComponent.prototype.i18n;
    /** @type {?} */
    NzTimePickerComponent.prototype.updateCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyL256LXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pILE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxJQUFJLElBQUksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBc0NoRSxNQUFNOzs7Ozs7Ozs7SUFzSUosWUFBb0IsT0FBbUIsRUFDbkIsVUFDQSxTQUNBLGlCQUNBLE1BQ0E7UUFMQSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRO1FBQ1IsWUFBTyxHQUFQLE9BQU87UUFDUCxvQkFBZSxHQUFmLGVBQWU7UUFDZixTQUFJLEdBQUosSUFBSTtRQUNKLGNBQVMsR0FBVCxTQUFTO3lCQTFJVCxLQUFLO3NCQUNLLElBQUk7MkJBQ1osSUFBSTswQkFDTCxL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QUNYLFNBQVM7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ2hGO2FBQ0Y7Ozs7WUFuREMsVUFBVTtZQUtWLFNBQVM7WUFUd0MsT0FBTztZQUFFLHNCQUFzQjtZQWtCeEQsSUFBSTtZQUhPLFNBQVM7Ozt1QkEyRDNDLFNBQVMsU0FBQyxjQUFjO3FCQUN4QixLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsTUFBTTtvQ0FFTixLQUFLOzJCQVNMLEtBQUs7MEJBU0wsS0FBSzt5QkFVTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciwgT3ZlcmxheSwgT3ZlcmxheVBvc2l0aW9uQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgYXMgVXBkYXRlQ2xzIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgYXMgSTE4biB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnbnotdGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zIDogW1xuICAgIHRyaWdnZXIoJ2Ryb3BEb3duQW5pbWF0aW9uJywgW1xuICAgICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJyonLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHkgICAgICAgIDogMSxcbiAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJywgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgICAgIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICBwcm92aWRlcnMgIDogW1xuICAgIFVwZGF0ZUNscyxcbiAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogTnpUaW1lUGlja2VyQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2FsbG93RW1wdHkgPSB0cnVlO1xuICBwcml2YXRlIF9hdXRvRm9jdXMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfb25DaGFuZ2U6ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9oaWRlRGlzYWJsZWRPcHRpb25zID0gZmFsc2U7XG4gIGlzSW5pdCA9IGZhbHNlO1xuICBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsge1xuICAgIG9yaWdpblggOiAnc3RhcnQnLFxuICAgIG9yaWdpblkgOiAndG9wJyxcbiAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgb3ZlcmxheVk6ICd0b3AnLFxuICAgIG9mZnNldFggOiAwLFxuICAgIG9mZnNldFkgOiAwXG4gIH0gXTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRSZWY6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG56U2l6ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56SG91clN0ZXAgPSAxO1xuICBASW5wdXQoKSBuek1pbnV0ZVN0ZXAgPSAxO1xuICBASW5wdXQoKSBuelNlY29uZFN0ZXAgPSAxO1xuICBASW5wdXQoKSBuekNsZWFyVGV4dCA9ICdjbGVhcic7XG4gIEBJbnB1dCgpIG56UG9wdXBDbGFzc05hbWUgPSAnJztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBuekFkZE9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpEZWZhdWx0T3BlblZhbHVlID0gbmV3IERhdGUoKTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZEhvdXJzOiAoKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZE1pbnV0ZXM6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xuICBASW5wdXQoKSBuekRpc2FibGVkU2Vjb25kczogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xuICBASW5wdXQoKSBuekZvcm1hdCA9ICdISDptbTpzcyc7XG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekhpZGVEaXNhYmxlZE9wdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlRGlzYWJsZWRPcHRpb25zID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekhpZGVEaXNhYmxlZE9wdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVEaXNhYmxlZE9wdGlvbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBbGxvd0VtcHR5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWxsb3dFbXB0eSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpBbGxvd0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0VtcHR5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xuICB9XG5cbiAgZ2V0IG56QXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4gfCBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vblRvdWNoZWQpIHtcbiAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBEYXRlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMubnpPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gIH1cblxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJbml0ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDbHMudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBbIGBhbnQtdGltZS1waWNrZXJgIF0gICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtdGltZS1waWNrZXItJHt0aGlzLm56U2l6ZX1gIF06IGlzTm90TmlsKHRoaXMubnpTaXplKVxuICAgIH0pO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgICAgICAgICAgIHByaXZhdGUgcG9zaXRpb25CdWlsZGVyOiBPdmVybGF5UG9zaXRpb25CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGkxOG46IEkxOG4sXG4gICAgICAgICAgICAgIHByaXZhdGUgdXBkYXRlQ2xzOiBVcGRhdGVDbHMpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBDZGtPdmVybGF5T3JpZ2luKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHRpbWU6IERhdGUgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB0aW1lO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHRpbWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==