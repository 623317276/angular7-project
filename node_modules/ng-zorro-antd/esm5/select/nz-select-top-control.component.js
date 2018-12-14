/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { isNotNil } from '../core/util/check';
var NzSelectTopControlComponent = /** @class */ (function () {
    function NzSelectTopControlComponent(renderer) {
        this.renderer = renderer;
        this._listTemplateOfOption = [];
        this.listOfCachedSelectedOption = [];
        this.isComposing = false;
        // tslint:disable-next-line:no-any
        this.nzListOfSelectedValueChange = new EventEmitter();
        this.nzOnSearch = new EventEmitter();
        this.nzMode = 'default';
        this.nzShowSearch = false;
        this.nzDisabled = false;
        this.nzOpen = false;
    }
    Object.defineProperty(NzSelectTopControlComponent.prototype, "nzListOfSelectedValue", {
        // tslint:disable-next-line:no-any
        get: /**
         * @return {?}
         */
        function () {
            return this._listOfSelectedValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._listOfSelectedValue = value;
            this.updateListOfCachedOption();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "nzListTemplateOfOption", {
        get: /**
         * @return {?}
         */
        function () {
            return this._listTemplateOfOption;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._listTemplateOfOption = value;
            this.updateListOfCachedOption();
        },
        enumerable: true,
        configurable: true
    });
    /** cached selected option list **/
    /**
     * cached selected option list *
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.updateListOfCachedOption = /**
     * cached selected option list *
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isSingleMode) {
            /** @type {?} */
            var selectedOption = this.nzListTemplateOfOption.find(function (o) { return _this.compareWith(o.nzValue, _this.nzListOfSelectedValue[0]); });
            if (isNotNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            var listOfCachedOptionFromLatestTemplate_1 = this.nzListTemplateOfOption.filter(function (o) { return isNotNil(_this.nzListOfSelectedValue.find(function (v) { return _this.compareWith(v, o.nzValue); })); });
            /** @type {?} */
            var restSelectedValue_1 = this.nzListOfSelectedValue.filter(function (v) { return !isNotNil(listOfCachedOptionFromLatestTemplate_1.find(function (o) { return _this.compareWith(o.nzValue, v); })); });
            /** @type {?} */
            var listOfCachedOptionFromOld = this.listOfCachedSelectedOption.filter(function (o) { return isNotNil(restSelectedValue_1.find(function (v) { return _this.compareWith(o.nzValue, v); })); });
            this.listOfCachedSelectedOption = listOfCachedOptionFromLatestTemplate_1.concat(listOfCachedOptionFromOld);
        }
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.setInputValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.inputValue = value;
        this.updateWidth();
        this.nzOnSearch.emit({ value: value, emit: emit });
    };
    Object.defineProperty(NzSelectTopControlComponent.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'tags' || this.nzMode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.nzListOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "selectedValueDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
            if (!this.nzShowSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.nzOpen) {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                    if (showSelectedValue) {
                        opacity = 0.4;
                    }
                }
                else {
                    showSelectedValue = true;
                }
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectTopControlComponent.prototype, "singleValueLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getPropertyFromValue(this.nzListOfSelectedValue[0], 'nzLabel');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.focusOnInput = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.inputElement) {
                _this.inputElement.nativeElement.focus();
            }
        });
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} prop
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.getPropertyFromValue = /**
     * @param {?} value
     * @param {?} prop
     * @return {?}
     */
    function (value, prop) {
        var _this = this;
        /** @type {?} */
        var targetOption = this.listOfCachedSelectedOption.find(function (item) { return _this.compareWith(item.nzValue, value); });
        return targetOption ? targetOption[prop] : '';
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.isOptionDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (this.nzMode === 'tags') || !!this.getPropertyFromValue(value, 'nzLabel');
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?=} event
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.removeValueFormSelected = /**
     * @param {?} value
     * @param {?=} event
     * @return {?}
     */
    function (value, event) {
        if (this.nzDisabled || this.getPropertyFromValue(value, 'nzDisabled')) {
            return;
        }
        this._listOfSelectedValue = this.nzListOfSelectedValue.filter(function (item) { return item !== value; });
        this.nzListOfSelectedValueChange.emit(this.nzListOfSelectedValue);
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        if (this.isMultipleOrTags && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.onKeyDownInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = /** @type {?} */ (e.target);
        if (this.isMultipleOrTags &&
            !eventTarget.value &&
            // BackSpace
            keyCode === 8) {
            e.preventDefault();
            if (this.nzListOfSelectedValue.length) {
                this.removeValueFormSelected(this.nzListOfSelectedValue[this.nzListOfSelectedValue.length - 1]);
            }
        }
    };
    NzSelectTopControlComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-select-top-control]',
                    preserveWhitespaces: false,
                    animations: [
                        trigger('tagAnimation', [
                            state('*', style({ opacity: 1, transform: 'scale(1)' })),
                            transition('void => *', [
                                style({ opacity: 0, transform: 'scale(0)' }),
                                animate('150ms linear')
                            ]),
                            state('void', style({ opacity: 0, transform: 'scale(0)' })),
                            transition('* => void', [
                                style({ opacity: 1, transform: 'scale(1)' }),
                                animate('150ms linear')
                            ])
                        ])
                    ],
                    template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    (input)=\"updateWidth()\"\n    (keydown)=\"onKeyDownInput($event)\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event,true)\"\n    [disabled]=\"nzDisabled\">\n</ng-template>\n<div\n  *ngIf=\"nzPlaceHolder\"\n  nz-select-unselectable\n  [style.display]=\"placeHolderDisplay\"\n  (click)=\"focusOnInput()\"\n  class=\"ant-select-selection__placeholder\">{{ nzPlaceHolder }}</div>\n<!--single mode-->\n<ng-container *ngIf=\"isSingleMode\">\n  <!--selected label-->\n  <div\n    *ngIf=\"nzListOfSelectedValue.length\"\n    class=\"ant-select-selection-selected-value\"\n    [attr.title]=\"nzListOfSelectedValue[0].nzLabel\"\n    [ngStyle]=\"selectedValueDisplay\">\n    {{ singleValueLabel }}\n  </div>\n  <!--show search-->\n  <div\n    *ngIf=\"nzShowSearch\"\n    class=\"ant-select-search ant-select-search--inline\">\n    <div class=\"ant-select-search__field__wrap\">\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\n    </div>\n  </div>\n</ng-container>\n<!--multiple or tags mode-->\n<ul *ngIf=\"isMultipleOrTags\">\n  <ng-container *ngFor=\"let value of nzListOfSelectedValue\">\n    <li\n      *ngIf=\"isOptionDisplay(value)\"\n      [@tagAnimation]\n      [attr.title]=\"getPropertyFromValue(value,'nzLabel')\"\n      [class.ant-select-selection__choice__disabled]=\"getPropertyFromValue(value,'nzDisabled')\"\n      class=\"ant-select-selection__choice\">\n      <div class=\"ant-select-selection__choice__content\">{{ getPropertyFromValue(value, 'nzLabel') || value }}</div>\n      <span *ngIf=\"!getPropertyFromValue(value,'nzDisabled')\" class=\"ant-select-selection__choice__remove\" (click)=\"removeValueFormSelected(value, $event)\">\n        <i nz-icon type=\"close\" class=\"ant-select-remove-icon\"></i>\n      </span>\n    </li>\n  </ng-container>\n\n  <li class=\"ant-select-search ant-select-search--inline\">\n    <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n  </li>\n</ul>",
                    host: {
                        '[class.ant-select-selection__rendered]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSelectTopControlComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NzSelectTopControlComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        nzListOfSelectedValueChange: [{ type: Output }],
        nzOnSearch: [{ type: Output }],
        nzMode: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzOpen: [{ type: Input }],
        compareWith: [{ type: Input }],
        nzListOfSelectedValue: [{ type: Input }],
        nzListTemplateOfOption: [{ type: Input }]
    };
    return NzSelectTopControlComponent;
}());
export { NzSelectTopControlComponent };
function NzSelectTopControlComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSelectTopControlComponent.prototype._listOfSelectedValue;
    /** @type {?} */
    NzSelectTopControlComponent.prototype._listTemplateOfOption;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.listOfCachedSelectedOption;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.isComposing;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputElement;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzListOfSelectedValueChange;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzOnSearch;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzMode;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzOpen;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.compareWith;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUF3TDVDLHFDQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3FDQTVKYyxFQUFFOzBDQUNMLEVBQUU7MkJBRXRDLEtBQUs7OzJDQUdxQixJQUFJLFlBQVksRUFBUzswQkFDMUMsSUFBSSxZQUFZLEVBQW9DO3NCQUN6RCxTQUFTOzRCQUNILEtBQUs7MEJBQ1AsS0FBSztzQkFHVCxLQUFLO0tBaUp0QjtJQTdJRCxzQkFFSSw4REFBcUI7UUFLekIsa0NBQWtDOzs7O1FBQ2xDO1lBQ0UsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FDbEM7Ozs7O1FBVkQsVUFFMEIsS0FBWTtZQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1NBQ2pDOzs7T0FBQTtJQU9ELHNCQUNJLCtEQUFzQjs7OztRQUsxQjtZQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DOzs7OztRQVJELFVBQzJCLEtBQTBCO1lBQ25ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7WUFDbkMsSUFBSSxD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QyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDOzRCQUMzRCxVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQ0FDNUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzs2QkFDeEIsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO29CQUNELGt2RUFBNkQ7b0JBQzdELElBQUksRUFBaUI7d0JBQ25CLHdDQUF3QyxFQUFFLE1BQU07cUJBQ2pEO2lCQUNGOzs7O2dCQXpCNEQsU0FBUzs7OytCQWlDbkUsU0FBUyxTQUFDLGNBQWM7OENBRXhCLE1BQU07NkJBQ04sTUFBTTt5QkFDTixLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FFTCxLQUFLO3lCQUNMLEtBQUs7OEJBRUwsS0FBSzt3Q0FFTCxLQUFLO3lDQVlMLEtBQUs7O3NDQWpFUjs7U0FpQ2EsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LXNlbGVjdC10b3AtY29udHJvbF0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ3RhZ0FuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCcqJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgbGluZWFyJylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxNTBtcyBsaW5lYXInKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fcmVuZGVyZWRdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIF9saXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXTtcbiAgcHJpdmF0ZSBfbGlzdFRlbXBsYXRlT2ZPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQE91dHB1dCgpIG56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG4gIEBPdXRwdXQoKSBuek9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjx7IHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4gfT4oKTtcbiAgQElucHV0KCkgbnpNb2RlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgY29tcGFyZVdpdGg6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10pIHtcbiAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpMaXN0VGVtcGxhdGVPZk9wdGlvbih2YWx1ZTogTnpPcHRpb25Db21wb25lbnRbXSkge1xuICAgIHRoaXMuX2xpc3RUZW1wbGF0ZU9mT3B0aW9uID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTtcbiAgfVxuXG4gIGdldCBuekxpc3RUZW1wbGF0ZU9mT3B0aW9uKCk6IE56T3B0aW9uQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl9saXN0VGVtcGxhdGVPZk9wdGlvbjtcbiAgfVxuXG4gIC8qKiBjYWNoZWQgc2VsZWN0ZWQgb3B0aW9uIGxpc3QgKiovXG4gIHVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5uekxpc3RUZW1wbGF0ZU9mT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVbIDAgXSkpO1xuICAgICAgaWYgKGlzTm90TmlsKHNlbGVjdGVkT3B0aW9uKSkge1xuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gWyBzZWxlY3RlZE9wdGlvbiBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0T2ZDYWNoZWRPcHRpb25Gcm9tTGF0ZXN0VGVtcGxhdGUgPSB0aGlzLm56TGlzdFRlbXBsYXRlT2ZPcHRpb24uZmlsdGVyKG8gPT4gaXNOb3ROaWwodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgby5uelZhbHVlKSkpKTtcbiAgICAgIGNvbnN0IHJlc3RTZWxlY3RlZFZhbHVlID0gdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUuZmlsdGVyKHYgPT4gIWlzTm90TmlsKGxpc3RPZkNhY2hlZE9wdGlvbkZyb21MYXRlc3RUZW1wbGF0ZS5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHYpKSkpO1xuICAgICAgY29uc3QgbGlzdE9mQ2FjaGVkT3B0aW9uRnJvbU9sZCA9IHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24uZmlsdGVyKG8gPT4gaXNOb3ROaWwocmVzdFNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2KSkpKTtcbiAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBsaXN0T2ZDYWNoZWRPcHRpb25Gcm9tTGF0ZXN0VGVtcGxhdGUuY29uY2F0KGxpc3RPZkNhY2hlZE9wdGlvbkZyb21PbGQpO1xuICAgIH1cbiAgfVxuXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICB0aGlzLm56T25TZWFyY2guZW1pdCh7IHZhbHVlLCBlbWl0IH0pO1xuICB9XG5cbiAgZ2V0IGlzU2luZ2xlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uek1vZGUgPT09ICdkZWZhdWx0JztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlT3JUYWdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMubnpNb2RlID09PSAnbXVsdGlwbGUnO1xuICB9XG5cbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSB7XG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgbGV0IG9wYWNpdHkgPSAxO1xuICAgIGlmICghdGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxuICAgIH07XG4gIH1cblxuICBnZXQgc2luZ2xlVmFsdWVMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5RnJvbVZhbHVlKHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlWyAwIF0sICduekxhYmVsJyk7XG4gIH1cblxuICBmb2N1c09uSW5wdXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXRQcm9wZXJ0eUZyb21WYWx1ZSh2YWx1ZTogYW55LCBwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB2YWx1ZSkpO1xuICAgIHJldHVybiB0YXJnZXRPcHRpb24gPyB0YXJnZXRPcHRpb25bIHByb3AgXSA6ICcnO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBpc09wdGlvbkRpc3BsYXkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5uek1vZGUgPT09ICd0YWdzJykgfHwgISF0aGlzLmdldFByb3BlcnR5RnJvbVZhbHVlKHZhbHVlLCAnbnpMYWJlbCcpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZCh2YWx1ZTogYW55LCBldmVudD86IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkIHx8IHRoaXMuZ2V0UHJvcGVydHlGcm9tVmFsdWUodmFsdWUsICduekRpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHZhbHVlKTtcbiAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlKTtcblxuICAgIC8vIERvIG5vdCB0cmlnZ2VyIHRoZSBwb3B1cFxuICAgIGlmIChldmVudCAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVdpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChcbiAgICAgIHRoaXMuaXNNdWx0aXBsZU9yVGFncyAmJlxuICAgICAgIWV2ZW50VGFyZ2V0LnZhbHVlICYmXG4gICAgICAvLyBCYWNrU3BhY2VcbiAgICAgIGtleUNvZGUgPT09IDhcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZVsgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIC0gMSBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICB9XG59XG4iXX0=