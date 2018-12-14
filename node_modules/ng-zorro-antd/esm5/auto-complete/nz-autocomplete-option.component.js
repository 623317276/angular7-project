/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzOptionSelectionChange = /** @class */ (function () {
    function NzOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return NzOptionSelectionChange;
}());
export { NzOptionSelectionChange };
function NzOptionSelectionChange_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionSelectionChange.prototype.source;
    /** @type {?} */
    NzOptionSelectionChange.prototype.isUserInput;
}
var NzAutocompleteOptionComponent = /** @class */ (function () {
    function NzAutocompleteOptionComponent(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.disabled = false;
        this.active = false;
        this.selected = false;
        this.selectionChange = new EventEmitter();
    }
    Object.defineProperty(NzAutocompleteOptionComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /** 选择 */
    /**
     * 选择
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.select = /**
     * 选择
     * @return {?}
     */
    function () {
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /** 取消选择 */
    /**
     * 取消选择
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.deselect = /**
     * 取消选择
     * @return {?}
     */
    function () {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /** 获取用于显示的 label */
    /**
     * 获取用于显示的 label
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.getLabel = /**
     * 获取用于显示的 label
     * @return {?}
     */
    function () {
        return this.nzLabel || this.nzValue.toString();
    };
    /** 设置激活样式 (仅限样式) */
    /**
     * 设置激活样式 (仅限样式)
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.setActiveStyles = /**
     * 设置激活样式 (仅限样式)
     * @return {?}
     */
    function () {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    };
    /** 设置非激活样式 (仅限样式) */
    /**
     * 设置非激活样式 (仅限样式)
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.setInactiveStyles = /**
     * 设置非激活样式 (仅限样式)
     * @return {?}
     */
    function () {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* tslint:disable-next-line:no-string-literal */
        if (this.element.nativeElement && this.element.nativeElement['scrollIntoViewIfNeeded']) {
            /* tslint:disable-next-line:no-string-literal */
            setTimeout(function () { return _this.element.nativeElement['scrollIntoViewIfNeeded'](false); }, 150);
        }
    };
    /**
     * @param {?=} isUserInput
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = /**
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.selectViaInteraction = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.selected = !this.selected;
            if (this.selected) {
                this.setActiveStyles();
            }
            else {
                this.setInactiveStyles();
            }
            this.emitSelectionChangeEvent(true);
            this.changeDetectorRef.markForCheck();
        }
    };
    NzAutocompleteOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-auto-option',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-content></ng-content>",
                    host: {
                        'role': 'menuitem',
                        'class': 'ant-select-dropdown-menu-item',
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                        '[class.ant-select-dropdown-menu-item-active]': 'active',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'nzDisabled',
                        '[attr.aria-selected]': 'selected.toString()',
                        '[attr.aria-disabled]': 'nzDisabled.toString()',
                        '(click)': 'selectViaInteraction()'
                    }
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteOptionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    NzAutocompleteOptionComponent.propDecorators = {
        nzValue: [{ type: Input }],
        nzLabel: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    return NzAutocompleteOptionComponent;
}());
export { NzAutocompleteOptionComponent };
function NzAutocompleteOptionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.disabled;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.active;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selected;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzValue;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.changeDetectorRef;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiYXV0by1jb21wbGV0ZS9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQ25DLEtBQUssRUFBRSxNQUFNLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELElBQUE7SUFDRSxpQ0FDUyxRQUNBOztRQURBLFdBQU0sR0FBTixNQUFNO1FBQ04sZ0JBQVcsR0FBWCxXQUFXO0tBRW5CO2tDQWRIO0lBZUMsQ0FBQTtBQU5ELG1DQU1DOzs7Ozs7OztJQXVDQyx1Q0FBb0IsaUJBQW9DLEVBQVUsT0FBbUI7UUFBakUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7d0JBcEJsRSxLQUFLO3NCQUVmLEtBQUs7d0JBQ0gsS0FBSzsrQkFlWSxJQUFJLFlBQVksRUFBMkI7S0FHdEU7SUFaRCxzQkFDSSxxREFBVTs7OztRQURkO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQUVELFVBQWUsS0FBYztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQzs7O09BSkE7SUFXRCxTQUFTOzs7OztJQUNULDhDQUFNOzs7O0lBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7S0FDakM7SUFFRCxXQUFXOzs7OztJQUNYLGdEQUFROzs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7S0FDakM7SUFFRCxvQkFBb0I7Ozs7O0lBQ3BCLGdEQUFROzs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNoRDtJQUVELG9CQUFvQjs7Ozs7SUFDcEIsdURBQWU7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztLQUNGO0lBRUQscUJBQXFCOzs7OztJQUNyQix5REFBaUI7Ozs7SUFBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7S0FDRjs7OztJQUVELDhEQUFzQjs7O0lBQXRCO1FBQUEsaUJBTUM7O1FBSkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFOztZQUV0RixVQUFVLENBQUMsY0FBTyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFFLHdCQUF3QixDQUFFLENBQUMsS0FBSyxDQUFDLEVBQTdELENBQTZELEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdkY7S0FDRjs7Ozs7SUFFTyxnRUFBd0I7Ozs7Y0FBQyxXQUE0QjtRQUE1Qiw0QkFBQSxFQUFBLG1CQUE0QjtRQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUF1QixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7OztJQUc1RSw0REFBb0I7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzFCO1lBQ0QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztLQUNGOztnQkFsR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxnQkFBZ0I7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO29CQUNuRCxxQ0FBOEQ7b0JBQzlELElBQUksRUFBaUI7d0JBQ25CLE1BQU0sRUFBNEMsVUFBVTt3QkFDNUQsT0FBTyxFQUEyQywrQkFBK0I7d0JBQ2pGLGdEQUFnRCxFQUFFLFVBQVU7d0JBQzVELDhDQUE4QyxFQUFJLFFBQVE7d0JBQzFELGdEQUFnRCxFQUFFLFlBQVk7d0JBQzlELHNCQUFzQixFQUE0QixxQkFBcUI7d0JBQ3ZFLHNCQUFzQixFQUE0Qix1QkFBdUI7d0JBQ3pFLFNBQVMsRUFBeUMsd0JBQXdCO3FCQUMzRTtpQkFDRjs7OztnQkE5QkMsaUJBQWlCO2dCQUNOLFVBQVU7OzswQkFxQ3BCLEtBQUs7MEJBQ0wsS0FBSzs2QkFFTCxLQUFLO2tDQVNMLE1BQU07O3dDQXBEVDs7U0FpQ2EsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5leHBvcnQgY2xhc3MgTnpPcHRpb25TZWxlY3Rpb25DaGFuZ2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc291cmNlOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCxcbiAgICBwdWJsaWMgaXNVc2VySW5wdXQ6IGJvb2xlYW4gPSBmYWxzZVxuICApIHtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWF1dG8tb3B0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAncm9sZScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdtZW51aXRlbScsXG4gICAgJ2NsYXNzJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0nLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogJ3NlbGVjdGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWFjdGl2ZV0nICA6ICdhY3RpdmUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICdbYXR0ci5hcmlhLXNlbGVjdGVkXScgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NlbGVjdGVkLnRvU3RyaW5nKCknLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXScgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ256RGlzYWJsZWQudG9TdHJpbmcoKScsXG4gICAgJyhjbGljayknICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2VsZWN0VmlhSW50ZXJhY3Rpb24oKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB7XG4gIHByaXZhdGUgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBhY3RpdmUgPSBmYWxzZTtcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBJbnB1dCgpIG56VmFsdWU6IGFueTtcbiAgQElucHV0KCkgbnpMYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIC8qKiDpgInmi6kgKi9cbiAgc2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQoKTtcbiAgfVxuXG4gIC8qKiDlj5bmtojpgInmi6kgKi9cbiAgZGVzZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQoKTtcbiAgfVxuXG4gIC8qKiDojrflj5bnlKjkuo7mmL7npLrnmoQgbGFiZWwgKi9cbiAgZ2V0TGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uekxhYmVsIHx8IHRoaXMubnpWYWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqIOiuvue9rua/gOa0u+agt+W8jyAo5LuF6ZmQ5qC35byPKSAqL1xuICBzZXRBY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiog6K6+572u6Z2e5r+A5rS75qC35byPICjku4XpmZDmoLflvI8pICovXG4gIHNldEluYWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICBpZiAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnRbJ3Njcm9sbEludG9WaWV3SWZOZWVkZWQnXSkge1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFsgJ3Njcm9sbEludG9WaWV3SWZOZWVkZWQnIF0oZmFsc2UpLCAxNTApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KGlzVXNlcklucHV0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KG5ldyBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSh0aGlzLCBpc1VzZXJJbnB1dCkpO1xuICB9XG5cbiAgc2VsZWN0VmlhSW50ZXJhY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVN0eWxlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQodHJ1ZSk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=