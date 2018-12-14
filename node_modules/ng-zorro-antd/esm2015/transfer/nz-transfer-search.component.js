/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class NzTransferSearchComponent {
    constructor() {
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    _handle() {
        this.valueChanged.emit(this.value);
    }
    /**
     * @return {?}
     */
    _clear() {
        this.value = '';
        this.valueClear.emit();
    }
}
NzTransferSearchComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-transfer-search]',
                preserveWhitespaces: false,
                template: "<input nz-input [(ngModel)]=\"value\" (ngModelChange)=\"_handle()\"\n  [placeholder]=\"placeholder\" class=\"ant-transfer-list-search\">\n<a *ngIf=\"value && value.length > 0; else def\" class=\"ant-transfer-list-search-action\" (click)=\"_clear()\">\n  <i nz-icon type=\"close-circle\"></i>\n</a>\n<ng-template #def>\n  <span class=\"ant-transfer-list-search-action\"><i nz-icon type=\"search\"></i></span>\n</ng-template>"
            }] }
];
NzTransferSearchComponent.propDecorators = {
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    valueChanged: [{ type: Output }],
    valueClear: [{ type: Output }]
};
function NzTransferSearchComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTransferSearchComponent.prototype.placeholder;
    /** @type {?} */
    NzTransferSearchComponent.prototype.value;
    /** @type {?} */
    NzTransferSearchComponent.prototype.valueChanged;
    /** @type {?} */
    NzTransferSearchComponent.prototype.valueClear;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0cmFuc2Zlci9uei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3ZFLE1BQU07OzRCQU9xQixJQUFJLFlBQVksRUFBVTswQkFDNUIsSUFBSSxZQUFZLEVBQUU7Ozs7O0lBSXpDLE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN4Qjs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsc0JBQXNCO2dCQUMzQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtYkFBMEQ7YUFDM0Q7OzswQkFLRSxLQUFLO29CQUNMLEtBQUs7MkJBRUwsTUFBTTt5QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbbnotdHJhbnNmZXItc2VhcmNoXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10cmFuc2Zlci1zZWFyY2guY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VHJhbnNmZXJTZWFyY2hDb21wb25lbnQge1xuXG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSB2YWx1ZUNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIF9oYW5kbGUoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIF9jbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgdGhpcy52YWx1ZUNsZWFyLmVtaXQoKTtcbiAgfVxuXG59XG4iXX0=