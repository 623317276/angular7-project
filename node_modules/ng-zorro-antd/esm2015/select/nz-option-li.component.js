/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzOptionComponent } from './nz-option.component';
export class NzOptionLiComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.nzShowActive = true;
        this.nzMode = 'default';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzActiveOption(value) {
        if (value) {
            this.active = this.compareWith(value.nzValue, this.nzOption.nzValue);
        }
        else {
            this.active = false;
        }
    }
    /**
     * @param {?} valueList
     * @return {?}
     */
    set nzListOfSelectedValue(valueList) {
        this.selected = isNotNil(valueList.find(v => this.compareWith(v, this.nzOption.nzValue)));
    }
}
NzOptionLiComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-option-li]',
                template: "<ng-container *ngIf=\"nzOption.nzCustomContent\">\n  <ng-template [ngTemplateOutlet]=\"nzOption.template\"></ng-template>\n  <i nz-icon *ngIf=\"nzMode !== 'default'\" type=\"check\" class=\"ant-select-selected-icon\"></i>\n</ng-container>\n<ng-container *ngIf=\"!nzOption.nzCustomContent\">\n  {{nzOption.nzLabel}}\n  <i nz-icon *ngIf=\"nzMode !== 'default'\" type=\"check\" class=\"ant-select-selected-icon\"></i>\n</ng-container>",
                host: {
                    '[class.ant-select-dropdown-menu-item]': 'true',
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled && nzShowActive && !selected',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"'
                }
            }] }
];
/** @nocollapse */
NzOptionLiComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzOptionLiComponent.propDecorators = {
    nzOption: [{ type: Input }],
    nzShowActive: [{ type: Input }],
    nzMode: [{ type: Input }],
    compareWith: [{ type: Input }],
    nzActiveOption: [{ type: Input }],
    nzListOfSelectedValue: [{ type: Input }]
};
function NzOptionLiComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionLiComponent.prototype.el;
    /** @type {?} */
    NzOptionLiComponent.prototype.selected;
    /** @type {?} */
    NzOptionLiComponent.prototype.active;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzOption;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzShowActive;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzMode;
    /** @type {?} */
    NzOptionLiComponent.prototype.compareWith;
    /** @type {?} */
    NzOptionLiComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWMxRCxNQUFNOzs7O0lBeUJKLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7a0JBeEJ4QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7d0JBQ3BDLEtBQUs7c0JBQ1AsS0FBSzs0QkFFVSxJQUFJO3NCQUNWLFNBQVM7S0FvQjFCOzs7OztJQWhCRCxJQUNJLGNBQWMsQ0FBQyxLQUF3QjtRQUN6QyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0tBQ0Y7Ozs7O0lBRUQsSUFFSSxxQkFBcUIsQ0FBQyxTQUFnQjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0Y7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFLLGdCQUFnQjtnQkFDN0IsMmJBQTRDO2dCQUM1QyxJQUFJLEVBQVM7b0JBQ1gsdUNBQXVDLEVBQVcsTUFBTTtvQkFDeEQsZ0RBQWdELEVBQUUsa0NBQWtDO29CQUNwRixnREFBZ0QsRUFBRSxxQkFBcUI7b0JBQ3ZFLDhDQUE4QyxFQUFJLDZEQUE2RDtvQkFDL0cscUJBQXFCLEVBQTZCLGdCQUFnQjtvQkFDbEUscUJBQXFCLEVBQTZCLFFBQVE7aUJBQzNEO2FBQ0Y7Ozs7WUFmbUIsVUFBVTs7O3VCQW9CM0IsS0FBSzsyQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBRUwsS0FBSzs2QkFFTCxLQUFLO29DQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ1tuei1vcHRpb24tbGldJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW9wdGlvbi1saS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbV0nICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQgJiYgIW56T3B0aW9uLm56RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ256T3B0aW9uLm56RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlXScgIDogJ2FjdGl2ZSAmJiAhbnpPcHRpb24ubnpEaXNhYmxlZCAmJiBuelNob3dBY3RpdmUgJiYgIXNlbGVjdGVkJyxcbiAgICAnW2F0dHIudW5zZWxlY3RhYmxlXScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdcInVuc2VsZWN0YWJsZVwiJyxcbiAgICAnW3N0eWxlLnVzZXItc2VsZWN0XScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdcIm5vbmVcIidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkxpQ29tcG9uZW50IHtcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHNlbGVjdGVkID0gZmFsc2U7XG4gIGFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuek9wdGlvbjogTnpPcHRpb25Db21wb25lbnQ7XG4gIEBJbnB1dCgpIG56U2hvd0FjdGl2ZSA9IHRydWU7XG4gIEBJbnB1dCgpIG56TW9kZSA9ICdkZWZhdWx0JztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjb21wYXJlV2l0aDogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IG56QWN0aXZlT3B0aW9uKHZhbHVlOiBOek9wdGlvbkNvbXBvbmVudCkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmNvbXBhcmVXaXRoKHZhbHVlLm56VmFsdWUsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlTGlzdDogYW55W10pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gaXNOb3ROaWwodmFsdWVMaXN0LmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSkpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICB9XG59XG4iXX0=