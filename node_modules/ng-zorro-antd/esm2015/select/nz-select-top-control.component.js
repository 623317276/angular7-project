/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { isNotNil } from '../core/util/check';
export class NzSelectTopControlComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzListOfSelectedValue(value) {
        this._listOfSelectedValue = value;
        this.updateListOfCachedOption();
    }
    /**
     * @return {?}
     */
    get nzListOfSelectedValue() {
        return this._listOfSelectedValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzListTemplateOfOption(value) {
        this._listTemplateOfOption = value;
        this.updateListOfCachedOption();
    }
    /**
     * @return {?}
     */
    get nzListTemplateOfOption() {
        return this._listTemplateOfOption;
    }
    /**
     * cached selected option list *
     * @return {?}
     */
    updateListOfCachedOption() {
        if (this.isSingleMode) {
            /** @type {?} */
            const selectedOption = this.nzListTemplateOfOption.find(o => this.compareWith(o.nzValue, this.nzListOfSelectedValue[0]));
            if (isNotNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            const listOfCachedOptionFromLatestTemplate = this.nzListTemplateOfOption.filter(o => isNotNil(this.nzListOfSelectedValue.find(v => this.compareWith(v, o.nzValue))));
            /** @type {?} */
            const restSelectedValue = this.nzListOfSelectedValue.filter(v => !isNotNil(listOfCachedOptionFromLatestTemplate.find(o => this.compareWith(o.nzValue, v))));
            /** @type {?} */
            const listOfCachedOptionFromOld = this.listOfCachedSelectedOption.filter(o => isNotNil(restSelectedValue.find(v => this.compareWith(o.nzValue, v))));
            this.listOfCachedSelectedOption = listOfCachedOptionFromLatestTemplate.concat(listOfCachedOptionFromOld);
        }
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    setInputValue(value, emit) {
        this.inputValue = value;
        this.updateWidth();
        this.nzOnSearch.emit({ value, emit });
    }
    /**
     * @return {?}
     */
    get isSingleMode() {
        return this.nzMode === 'default';
    }
    /**
     * @return {?}
     */
    get isMultipleOrTags() {
        return this.nzMode === 'tags' || this.nzMode === 'multiple';
    }
    /**
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.nzListOfSelectedValue.length ? 'none' : 'block';
    }
    /**
     * @return {?}
     */
    get selectedValueDisplay() {
        /** @type {?} */
        let showSelectedValue = false;
        /** @type {?} */
        let opacity = 1;
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
            opacity: `${opacity}`
        };
    }
    /**
     * @return {?}
     */
    get singleValueLabel() {
        return this.getPropertyFromValue(this.nzListOfSelectedValue[0], 'nzLabel');
    }
    /**
     * @return {?}
     */
    focusOnInput() {
        setTimeout(() => {
            if (this.inputElement) {
                this.inputElement.nativeElement.focus();
            }
        });
    }
    /**
     * @param {?} value
     * @param {?} prop
     * @return {?}
     */
    getPropertyFromValue(value, prop) {
        /** @type {?} */
        const targetOption = this.listOfCachedSelectedOption.find(item => this.compareWith(item.nzValue, value));
        return targetOption ? targetOption[prop] : '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isOptionDisplay(value) {
        return (this.nzMode === 'tags') || !!this.getPropertyFromValue(value, 'nzLabel');
    }
    /**
     * @param {?} value
     * @param {?=} event
     * @return {?}
     */
    removeValueFormSelected(value, event) {
        if (this.nzDisabled || this.getPropertyFromValue(value, 'nzDisabled')) {
            return;
        }
        this._listOfSelectedValue = this.nzListOfSelectedValue.filter(item => item !== value);
        this.nzListOfSelectedValueChange.emit(this.nzListOfSelectedValue);
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    }
    /**
     * @return {?}
     */
    updateWidth() {
        if (this.isMultipleOrTags && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownInput(e) {
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = /** @type {?} */ (e.target);
        if (this.isMultipleOrTags &&
            !eventTarget.value &&
            // BackSpace
            keyCode === 8) {
            e.preventDefault();
            if (this.nzListOfSelectedValue.length) {
                this.removeValueFormSelected(this.nzListOfSelectedValue[this.nzListOfSelectedValue.length - 1]);
            }
        }
    }
}
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
NzSelectTopControlComponent.ctorParameters = () => [
    { type: Renderer2 }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXlCOUMsTUFBTTs7OztJQStKSixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3FDQTVKYyxFQUFFOzBDQUNMLEVBQUU7MkJBRXRDLEtBQUs7OzJDQUdxQixJQUFJLFlBQVksRUFBUzswQkFDMUMsSUFBSSxZQUFZLEVBQW9DO3NCQUN6RCxTQUFTOzRCQUNILEtBQUs7MEJBQ1AsS0FBSztzQkFHVCxLQUFLO0tBaUp0Qjs7Ozs7SUE3SUQsSUFFSSxxQkFBcUIsQ0FBQyxLQUFZO1FBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7S0FDakM7Ozs7SUFHRCxJQUFJLHFCQUFxQjtRQUN2QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztLQUNsQzs7Ozs7SUFFRCxJQUNJLHNCQUFzQixDQUFDLEtBQTBCO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJLHNCQUFzQjtRQUN4QixPQUFP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S0FBSzt5QkFDTCxLQUFLOzRCQUVMLEtBQUs7cUJBQ0wsS0FBSzswQkFFTCxLQUFLO29DQUVMLEtBQUs7cUNBWUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tuei1zZWxlY3QtdG9wLWNvbnRyb2xdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCd0YWdBbmltYXRpb24nLCBbXG4gICAgICBzdGF0ZSgnKicsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGxpbmVhcicpXG4gICAgICBdKSxcbiAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgbGluZWFyJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb25fX3JlbmRlcmVkXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBfbGlzdE9mU2VsZWN0ZWRWYWx1ZTogYW55W107XG4gIHByaXZhdGUgX2xpc3RUZW1wbGF0ZU9mT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIGlucHV0VmFsdWU6IHN0cmluZztcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBPdXRwdXQoKSBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICBAT3V0cHV0KCkgbnpPblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuIH0+KCk7XG4gIEBJbnB1dCgpIG56TW9kZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpTaG93U2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdKSB7XG4gICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TGlzdFRlbXBsYXRlT2ZPcHRpb24odmFsdWU6IE56T3B0aW9uQ29tcG9uZW50W10pIHtcbiAgICB0aGlzLl9saXN0VGVtcGxhdGVPZk9wdGlvbiA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk7XG4gIH1cblxuICBnZXQgbnpMaXN0VGVtcGxhdGVPZk9wdGlvbigpOiBOek9wdGlvbkNvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdFRlbXBsYXRlT2ZPcHRpb247XG4gIH1cblxuICAvKiogY2FjaGVkIHNlbGVjdGVkIG9wdGlvbiBsaXN0ICoqL1xuICB1cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMubnpMaXN0VGVtcGxhdGVPZk9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlWyAwIF0pKTtcbiAgICAgIGlmIChpc05vdE5pbChzZWxlY3RlZE9wdGlvbikpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IFsgc2VsZWN0ZWRPcHRpb24gXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGlzdE9mQ2FjaGVkT3B0aW9uRnJvbUxhdGVzdFRlbXBsYXRlID0gdGhpcy5uekxpc3RUZW1wbGF0ZU9mT3B0aW9uLmZpbHRlcihvID0+IGlzTm90TmlsKHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIG8ubnpWYWx1ZSkpKSk7XG4gICAgICBjb25zdCByZXN0U2VsZWN0ZWRWYWx1ZSA9IHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbHRlcih2ID0+ICFpc05vdE5pbChsaXN0T2ZDYWNoZWRPcHRpb25Gcm9tTGF0ZXN0VGVtcGxhdGUuZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2KSkpKTtcbiAgICAgIGNvbnN0IGxpc3RPZkNhY2hlZE9wdGlvbkZyb21PbGQgPSB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmZpbHRlcihvID0+IGlzTm90TmlsKHJlc3RTZWxlY3RlZFZhbHVlLmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdikpKSk7XG4gICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gbGlzdE9mQ2FjaGVkT3B0aW9uRnJvbUxhdGVzdFRlbXBsYXRlLmNvbmNhdChsaXN0T2ZDYWNoZWRPcHRpb25Gcm9tT2xkKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgdGhpcy5uek9uU2VhcmNoLmVtaXQoeyB2YWx1ZSwgZW1pdCB9KTtcbiAgfVxuXG4gIGdldCBpc1NpbmdsZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAnZGVmYXVsdCc7XG4gIH1cblxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uek1vZGUgPT09ICd0YWdzJyB8fCB0aGlzLm56TW9kZSA9PT0gJ211bHRpcGxlJztcbiAgfVxuXG4gIGdldCBwbGFjZUhvbGRlckRpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgfVxuXG4gIGdldCBzZWxlY3RlZFZhbHVlRGlzcGxheSgpOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH0ge1xuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGxldCBvcGFjaXR5ID0gMTtcbiAgICBpZiAoIXRoaXMubnpTaG93U2VhcmNoKSB7XG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBvcGFjaXR5ID0gMC40O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHNpbmdsZVZhbHVlTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eUZyb21WYWx1ZSh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZVsgMCBdLCAnbnpMYWJlbCcpO1xuICB9XG5cbiAgZm9jdXNPbklucHV0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0UHJvcGVydHlGcm9tVmFsdWUodmFsdWU6IGFueSwgcHJvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB0YXJnZXRPcHRpb24gPSB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdmFsdWUpKTtcbiAgICByZXR1cm4gdGFyZ2V0T3B0aW9uID8gdGFyZ2V0T3B0aW9uWyBwcm9wIF0gOiAnJztcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgaXNPcHRpb25EaXNwbGF5KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMubnpNb2RlID09PSAndGFncycpIHx8ICEhdGhpcy5nZXRQcm9wZXJ0eUZyb21WYWx1ZSh2YWx1ZSwgJ256TGFiZWwnKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQodmFsdWU6IGFueSwgZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCB0aGlzLmdldFByb3BlcnR5RnJvbVZhbHVlKHZhbHVlLCAnbnpEaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSk7XG4gICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XG5cbiAgICAvLyBEbyBub3QgdHJpZ2dlciB0aGUgcG9wdXBcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVXaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlT3JUYWdzICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoXG4gICAgICB0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiZcbiAgICAgICFldmVudFRhcmdldC52YWx1ZSAmJlxuICAgICAgLy8gQmFja1NwYWNlXG4gICAgICBrZXlDb2RlID09PSA4XG4gICAgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVbIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCAtIDEgXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxufVxuIl19