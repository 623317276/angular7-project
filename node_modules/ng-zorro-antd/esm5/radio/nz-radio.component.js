/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { forwardRef, Component, ElementRef, HostListener, Inject, Input, Optional, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
import { NzRadioGroupComponent } from './nz-radio-group.component';
var NzRadioComponent = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzRadioComponent(nzRadioGroup, renderer, document) {
        this.nzRadioGroup = nzRadioGroup;
        this.renderer = renderer;
        this.document = document;
        this._checked = false;
        this._disabled = false;
        this._autoFocus = false;
        this.isInit = false;
        this.prefixCls = 'ant-radio';
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(NzRadioComponent.prototype, "nzChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._checked = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRadioComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRadioComponent.prototype, "nzAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.updateInputFocus = /**
     * @return {?}
     */
    function () {
        if (this.inputElement) {
            if (this.nzChecked) {
                if (this.document.activeElement.nodeName === 'BODY') {
                    this.inputElement.nativeElement.focus();
                }
            }
            else {
                this.inputElement.nativeElement.blur();
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRadioComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        this.setClassMap();
        if (this.nzDisabled || this.nzChecked) {
            this.updateInputFocus();
            return;
        }
        else {
            if (this.nzRadioGroup) {
                this.nzRadioGroup.selectRadio(this);
            }
            else {
                this.updateValue(true);
            }
            this.updateInputFocus();
        }
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        if (this.nzRadioGroup) {
            this.nzRadioGroup.onTouched();
        }
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-checked"] = this.nzChecked,
            _a[this.prefixCls + "-disabled"] = this.nzDisabled,
            _a);
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
        this.onBlur();
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzRadioGroup) {
            this.nzRadioGroup.addRadio(this);
        }
        this.setClassMap();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onChange(value);
        this.nzChecked = value;
        this.setClassMap();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRadioComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzChecked = value;
        this.setClassMap();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.updateAutoFocus();
        this.updateInputFocus();
    };
    NzRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-radio]',
                    preserveWhitespaces: false,
                    template: "<span [ngClass]=\"classMap\">\n  <input #inputElement type=\"radio\" class=\"ant-radio-input\" [disabled]=\"nzDisabled\" [(ngModel)]=\"nzChecked\" (blur)=\"onBlur()\" [attr.name]=\"name\">\n  <span class=\"ant-radio-inner\"></span>\n</span>\n<span><ng-content></ng-content></span>",
                    host: {
                        '[class.ant-radio-wrapper]': 'true',
                        '[class.ant-radio-wrapper-checked]': 'nzChecked',
                        '[class.ant-radio-wrapper-disabled]': 'nzDisabled'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzRadioComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzRadioComponent.ctorParameters = function () { return [
        { type: NzRadioGroupComponent, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NzRadioComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        nzValue: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return NzRadioComponent;
}());
export { NzRadioComponent };
function NzRadioComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRadioComponent.prototype._checked;
    /** @type {?} */
    NzRadioComponent.prototype._disabled;
    /** @type {?} */
    NzRadioComponent.prototype._autoFocus;
    /** @type {?} */
    NzRadioComponent.prototype.isInit;
    /** @type {?} */
    NzRadioComponent.prototype.classMap;
    /** @type {?} */
    NzRadioComponent.prototype.name;
    /** @type {?} */
    NzRadioComponent.prototype.prefixCls;
    /** @type {?} */
    NzRadioComponent.prototype.inputElement;
    /** @type {?} */
    NzRadioComponent.prototype.onChange;
    /** @type {?} */
    NzRadioComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioComponent.prototype.nzValue;
    /** @type {?} */
    NzRadioComponent.prototype.nzRadioGroup;
    /** @type {?} */
    NzRadioComponent.prototype.renderer;
    /** @type {?} */
    NzRadioComponent.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInJhZGlvL256LXJhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBRVYsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQTRIakUscUNBQXFDO0lBQ3JDLDBCQUErQixZQUFtQyxFQUFVLFFBQW1CLEVBQTRCLFFBQWE7UUFBekcsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFLO3dCQXpHckgsS0FBSzt5QkFDSixLQUFLOzBCQUNKLEtBQUs7c0JBQ2pCLEtBQUs7eUJBR0YsV0FBVzt3QkFFVSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUk7eUJBQ25CLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSTtLQWlHakM7SUE5RkQsc0JBQUksdUNBQVM7Ozs7UUFLYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFQRCxVQUFjLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCOzs7T0FBQTtJQU1ELHNCQUNJLHdDQUFVOzs7O1FBS2Q7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUkQsVUFDZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjs7O09BQUE7SUFNRCxzQkFDSSx5Q0FBVzs7OztRQUtmO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQVJELFVBQ2dCLEtBQWM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCOzs7T0FBQTs7OztJQU1ELDBDQUFlOzs7SUFBZjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzdFO1NBQ0Y7S0FDRjs7OztJQUVELDJDQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO29CQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDekM7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4QztTQUNGO0tBQ0Y7Ozs7O0lBR0Qsa0NBQU87Ozs7SUFEUCxVQUNRLENBQWE7UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixPQUFPO1NBQ1I7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0tBQ0Y7Ozs7SUFFRCxpQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDL0I7S0FDRjs7OztJQUVELHNDQUFXOzs7SUFBWDs7UUFDRSxJQUFJLENBQUMsUUFBUTtZQUNYLEdBQUUsSUFBSSxDQUFDLFNBQVMsSUFBa0IsSUFBSTtZQUN0QyxHQUFLLElBQUksQ0FBQyxTQUFTLGFBQVUsSUFBSyxJQUFJLENBQUMsU0FBUztZQUNoRCxHQUFLLElBQUksQ0FBQyxTQUFTLGNBQVcsSUFBSSxJQUFJLENBQUMsVUFBVTtlQUNsRCxDQUFDO0tBQ0g7Ozs7SUFFRCxnQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN6Qzs7OztJQUVELCtCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNmOzs7O0lBTUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELDJDQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUM5Qjs7Ozs7SUFFRCxxQ0FBVTs7OztJQUFWLFVBQVcsS0FBYztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXNCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELDRDQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOztnQkFoS0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxZQUFZO29CQUNqQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixvU0FBZ0Q7b0JBQ2hELElBQUksRUFBaUI7d0JBQ25CLDJCQUEyQixFQUFXLE1BQU07d0JBQzVDLG1DQUFtQyxFQUFHLFdBQVc7d0JBQ2pELG9DQUFvQyxFQUFFLFlBQVk7cUJBQ25EO29CQUNELFNBQVMsRUFBWTt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFNLGlCQUFpQjs0QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7NEJBQy9DLEtBQUssRUFBUSxJQUFJO3lCQUNsQjtxQkFDRjtpQkFDRjs7OztnQkFsQlEscUJBQXFCLHVCQTZIZixRQUFRO2dCQXBJckIsU0FBUztnREFvSXlGLE1BQU0sU0FBQyxRQUFROzs7K0JBbEdoSCxTQUFTLFNBQUMsY0FBYzswQkFHeEIsS0FBSzs2QkFXTCxLQUFLOzhCQVVMLEtBQUs7MEJBZ0NMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUU7OzJCQXJHckM7O1NBcUNhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBOelJhZGlvR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LXJhZGlvLWdyb3VwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LXJhZGlvXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyXScgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWNoZWNrZWRdJyA6ICduekNoZWNrZWQnLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLXdyYXBwZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXG4gIH0sXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56UmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9hdXRvRm9jdXMgPSBmYWxzZTtcbiAgaXNJbml0ID0gZmFsc2U7XG4gIGNsYXNzTWFwO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByZWZpeENscyA9ICdhbnQtcmFkaW8nO1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIG9uQ2hhbmdlOiAoXzogYm9vbGVhbikgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIEBJbnB1dCgpIG56VmFsdWU6IHN0cmluZztcblxuICBzZXQgbnpDaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hlY2tlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56Q2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIGdldCBuekF1dG9Gb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xuICB9XG5cbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5pdCkge1xuICAgICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVJbnB1dEZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMubnpDaGVja2VkKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbICckZXZlbnQnIF0pXG4gIG9uQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCB0aGlzLm56Q2hlY2tlZCkge1xuICAgICAgdGhpcy51cGRhdGVJbnB1dEZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm56UmFkaW9Hcm91cCkge1xuICAgICAgICB0aGlzLm56UmFkaW9Hcm91cC5zZWxlY3RSYWRpbyh0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUlucHV0Rm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICBpZiAodGhpcy5uelJhZGlvR3JvdXApIHtcbiAgICAgIHRoaXMubnpSYWRpb0dyb3VwLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrZWRgIF0gOiB0aGlzLm56Q2hlY2tlZCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYCBdOiB0aGlzLm56RGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB0aGlzLm9uQmx1cigpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgbnpSYWRpb0dyb3VwOiBOelJhZGlvR3JvdXBDb21wb25lbnQsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelJhZGlvR3JvdXApIHtcbiAgICAgIHRoaXMubnpSYWRpb0dyb3VwLmFkZFJhZGlvKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMubnpDaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56Q2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBib29sZWFuKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gICAgdGhpcy51cGRhdGVJbnB1dEZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==