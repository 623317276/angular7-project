/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var NzRadioGroupComponent = /** @class */ (function () {
    function NzRadioGroupComponent(elementRef) {
        this.elementRef = elementRef;
        this._size = 'default';
        this.el = this.elementRef.nativeElement;
        // ngModel Access
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.radios = [];
        this.nzButtonStyle = 'outline';
    }
    Object.defineProperty(NzRadioGroupComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRadioGroupComponent.prototype, "nzDisabled", {
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
            this.updateDisabledState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRadioGroupComponent.prototype, "nzName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this.updateChildrenName();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isNotNil(this.nzDisabled)) {
            this.radios.forEach(function (radio) {
                radio.nzDisabled = _this.nzDisabled;
            });
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.updateChildrenName = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzName) {
            this.radios.forEach(function (item) {
                item.name = _this.nzName;
            });
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.syncCheckedValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.radios.forEach(function (item) {
            item.nzChecked = item.nzValue === _this.value;
        });
    };
    Object.defineProperty(NzRadioGroupComponent.prototype, "isLarge", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRadioGroupComponent.prototype, "isSmall", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRadioGroupComponent.prototype, "isSolid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzButtonStyle === 'solid';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} radio
     * @return {?}
     */
    NzRadioGroupComponent.prototype.addRadio = /**
     * @param {?} radio
     * @return {?}
     */
    function (radio) {
        this.radios.push(radio);
        radio.nzChecked = radio.nzValue === this.value;
    };
    /**
     * @param {?} radio
     * @return {?}
     */
    NzRadioGroupComponent.prototype.selectRadio = /**
     * @param {?} radio
     * @return {?}
     */
    function (radio) {
        this.updateValue(radio.nzValue, true);
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzRadioGroupComponent.prototype.updateValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.value = value;
        this.syncCheckedValue();
        if (emit) {
            this.onChange(value);
        }
    };
    /**
     * @return {?}
     */
    NzRadioGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.syncCheckedValue();
        this.updateChildrenName();
        Promise.resolve().then(function () {
            _this.updateDisabledState();
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateValue(value, false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioGroupComponent.prototype.registerOnChange = /**
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
    NzRadioGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    NzRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-radio-group',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>",
                    host: {
                        '[class.ant-radio-group]': 'true'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzRadioGroupComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzRadioGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NzRadioGroupComponent.propDecorators = {
        nzSize: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzName: [{ type: Input }],
        nzButtonStyle: [{ type: Input }],
        isLarge: [{ type: HostBinding, args: ['class.ant-radio-group-large',] }],
        isSmall: [{ type: HostBinding, args: ['class.ant-radio-group-small',] }],
        isSolid: [{ type: HostBinding, args: ['class.ant-radio-group-solid',] }]
    };
    return NzRadioGroupComponent;
}());
export { NzRadioGroupComponent };
function NzRadioGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRadioGroupComponent.prototype._size;
    /** @type {?} */
    NzRadioGroupComponent.prototype._name;
    /** @type {?} */
    NzRadioGroupComponent.prototype._disabled;
    /** @type {?} */
    NzRadioGroupComponent.prototype.el;
    /** @type {?} */
    NzRadioGroupComponent.prototype.value;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onChange;
    /** @type {?} */
    NzRadioGroupComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioGroupComponent.prototype.radios;
    /** @type {?} */
    NzRadioGroupComponent.prototype.nzButtonStyle;
    /** @type {?} */
    NzRadioGroupComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInJhZGlvL256LXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBeUgvQywrQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtxQkFqR0osU0FBUztrQkFHN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOzt3QkFJZixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUk7eUJBQ2xCLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSTtzQkFFeUIsRUFBRTs2QkErQmhCLFNBQVM7S0F5RHJEO0lBdEZELHNCQUNJLHlDQUFNOzs7O1FBSVY7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBUEQsVUFDVyxLQUEyQjtZQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjs7O09BQUE7SUFNRCxzQkFDSSw2Q0FBVTs7OztRQUtkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVJELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1Qjs7O09BQUE7SUFNRCxzQkFDSSx5Q0FBTTs7OztRQUtWO1lBQ0UsT0FB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RUQsZ0RBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOztnQkExSUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxnQkFBZ0I7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHFDQUFzRDtvQkFDdEQsSUFBSSxFQUFpQjt3QkFDbkIseUJBQXlCLEVBQUUsTUFBTTtxQkFDbEM7b0JBQ0QsU0FBUyxFQUFZO3dCQUNuQjs0QkFDRSxPQUFPLEVBQU0saUJBQWlCOzRCQUM5QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsQ0FBQzs0QkFDcEQsS0FBSyxFQUFRLElBQUk7eUJBQ2xCO3FCQUNGO2lCQUNGOzs7O2dCQTVCQyxVQUFVOzs7eUJBMENULEtBQUs7NkJBU0wsS0FBSzt5QkFVTCxLQUFLO2dDQVVMLEtBQUs7MEJBd0JMLFdBQVcsU0FBQyw2QkFBNkI7MEJBS3pDLFdBQVcsU0FBQyw2QkFBNkI7MEJBS3pDLFdBQVcsU0FBQyw2QkFBNkI7O2dDQTdHNUM7O1NBaUNhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5leHBvcnQgdHlwZSBOelJhZGlvR3JvdXBTaXplVHlwZSA9ICdsYXJnZScgfCAnZGVmYXVsdCcgfCAnc21hbGwnO1xuZXhwb3J0IHR5cGUgTnpSYWRpb0J1dHRvblN0eWxlID0gJ291dGxpbmUnIHwgJ3NvbGlkJztcblxuaW1wb3J0IHsgTnpSYWRpb0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYWRpby5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXJhZGlvLWdyb3VwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwXSc6ICd0cnVlJ1xuICB9LFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpSYWRpb0dyb3VwQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56UmFkaW9Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfc2l6ZTogTnpSYWRpb0dyb3VwU2l6ZVR5cGUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8vIG5nTW9kZWwgQWNjZXNzXG4gIG9uQ2hhbmdlOiAoXzogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICByYWRpb3M6IEFycmF5PE56UmFkaW9Db21wb25lbnQgfCBOelJhZGlvQnV0dG9uQ29tcG9uZW50PiA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpemUodmFsdWU6IE56UmFkaW9Hcm91cFNpemVUeXBlKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56U2l6ZSgpOiBOelJhZGlvR3JvdXBTaXplVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuTmFtZSgpO1xuICB9XG5cbiAgZ2V0IG56TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgQElucHV0KCkgbnpCdXR0b25TdHlsZTogTnpSYWRpb0J1dHRvblN0eWxlID0gJ291dGxpbmUnO1xuXG4gIHVwZGF0ZURpc2FibGVkU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKGlzTm90TmlsKHRoaXMubnpEaXNhYmxlZCkpIHtcbiAgICAgIHRoaXMucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgIHJhZGlvLm56RGlzYWJsZWQgPSB0aGlzLm56RGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlbk5hbWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpOYW1lKSB7XG4gICAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0ubmFtZSA9IHRoaXMubnpOYW1lO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3luY0NoZWNrZWRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLm56Q2hlY2tlZCA9IGl0ZW0ubnpWYWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXJhZGlvLWdyb3VwLWxhcmdlJylcbiAgZ2V0IGlzTGFyZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTaXplID09PSAnbGFyZ2UnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtcmFkaW8tZ3JvdXAtc21hbGwnKVxuICBnZXQgaXNTbWFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelNpemUgPT09ICdzbWFsbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1yYWRpby1ncm91cC1zb2xpZCcpXG4gIGdldCBpc1NvbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56QnV0dG9uU3R5bGUgPT09ICdzb2xpZCc7XG4gIH1cblxuICBhZGRSYWRpbyhyYWRpbzogTnpSYWRpb0NvbXBvbmVudCB8IE56UmFkaW9CdXR0b25Db21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnJhZGlvcy5wdXNoKHJhZGlvKTtcbiAgICByYWRpby5uekNoZWNrZWQgPSByYWRpby5uelZhbHVlID09PSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgc2VsZWN0UmFkaW8ocmFkaW86IE56UmFkaW9Db21wb25lbnQgfCBOelJhZGlvQnV0dG9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZShyYWRpby5uelZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zeW5jQ2hlY2tlZFZhbHVlKCk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3luY0NoZWNrZWRWYWx1ZSgpO1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5OYW1lKCk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=