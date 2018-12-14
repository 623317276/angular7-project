/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzOptionComponent } from './nz-option.component';
var NzOptionLiComponent = /** @class */ (function () {
    function NzOptionLiComponent(elementRef) {
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.nzShowActive = true;
        this.nzMode = 'default';
    }
    Object.defineProperty(NzOptionLiComponent.prototype, "nzActiveOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.active = this.compareWith(value.nzValue, this.nzOption.nzValue);
            }
            else {
                this.active = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzOptionLiComponent.prototype, "nzListOfSelectedValue", {
        set: /**
         * @param {?} valueList
         * @return {?}
         */
        function (valueList) {
            var _this = this;
            this.selected = isNotNil(valueList.find(function (v) { return _this.compareWith(v, _this.nzOption.nzValue); }));
        },
        enumerable: true,
        configurable: true
    });
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
    NzOptionLiComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NzOptionLiComponent.propDecorators = {
        nzOption: [{ type: Input }],
        nzShowActive: [{ type: Input }],
        nzMode: [{ type: Input }],
        compareWith: [{ type: Input }],
        nzActiveOption: [{ type: Input }],
        nzListOfSelectedValue: [{ type: Input }]
    };
    return NzOptionLiComponent;
}());
export { NzOptionLiComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUF1Q3hELDZCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO2tCQXhCeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3dCQUNwQyxLQUFLO3NCQUNQLEtBQUs7NEJBRVUsSUFBSTtzQkFDVixTQUFTO0tBb0IxQjtJQWhCRCxzQkFDSSwrQ0FBYzs7Ozs7UUFEbEIsVUFDbUIsS0FBd0I7WUFDekMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtTQUNGOzs7T0FBQTtJQUVELHNCQUVJLHNEQUFxQjs7Ozs7UUFGekIsVUFFMEIsU0FBZ0I7WUFGMUMsaUJBSUM7WUFEQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDLENBQUM7U0FDM0Y7OztPQUFBOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBSyxnQkFBZ0I7b0JBQzdCLDJiQUE0QztvQkFDNUMsSUFBSSxFQUFTO3dCQUNYLHVDQUF1QyxFQUFXLE1BQU07d0JBQ3hELGdEQUFnRCxFQUFFLGtDQUFrQzt3QkFDcEYsZ0RBQWdELEVBQUUscUJBQXFCO3dCQUN2RSw4Q0FBOEMsRUFBSSw2REFBNkQ7d0JBQy9HLHFCQUFxQixFQUE2QixnQkFBZ0I7d0JBQ2xFLHFCQUFxQixFQUE2QixRQUFRO3FCQUMzRDtpQkFDRjs7OztnQkFmbUIsVUFBVTs7OzJCQW9CM0IsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBRUwsS0FBSztpQ0FFTCxLQUFLO3dDQVNMLEtBQUs7OzhCQW5DUjs7U0FnQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdbbnotb3B0aW9uLWxpXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1vcHRpb24tbGkuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW1dJyAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogJ3NlbGVjdGVkICYmICFuek9wdGlvbi5uekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXSc6ICduek9wdGlvbi5uekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWFjdGl2ZV0nICA6ICdhY3RpdmUgJiYgIW56T3B0aW9uLm56RGlzYWJsZWQgJiYgbnpTaG93QWN0aXZlICYmICFzZWxlY3RlZCcsXG4gICAgJ1thdHRyLnVuc2VsZWN0YWJsZV0nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnXCJ1bnNlbGVjdGFibGVcIicsXG4gICAgJ1tzdHlsZS51c2VyLXNlbGVjdF0nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnXCJub25lXCInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25MaUNvbXBvbmVudCB7XG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBzZWxlY3RlZCA9IGZhbHNlO1xuICBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpPcHRpb246IE56T3B0aW9uQ29tcG9uZW50O1xuICBASW5wdXQoKSBuelNob3dBY3RpdmUgPSB0cnVlO1xuICBASW5wdXQoKSBuek1vZGUgPSAnZGVmYXVsdCc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgY29tcGFyZVdpdGg6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFjdGl2ZU9wdGlvbih2YWx1ZTogTnpPcHRpb25Db21wb25lbnQpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5jb21wYXJlV2l0aCh2YWx1ZS5uelZhbHVlLCB0aGlzLm56T3B0aW9uLm56VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZUxpc3Q6IGFueVtdKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGlzTm90TmlsKHZhbHVlTGlzdC5maW5kKHYgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCB0aGlzLm56T3B0aW9uLm56VmFsdWUpKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxufVxuIl19