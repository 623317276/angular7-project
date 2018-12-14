/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
var NzCheckboxWrapperComponent = /** @class */ (function () {
    function NzCheckboxWrapperComponent() {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.addCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.removeCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.outputValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkedList = this.checkboxList.filter(function (item) { return item.nzChecked; });
        return checkedList.map(function (item) { return item.nzValue; });
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.nzOnChange.emit(this.outputValue());
    };
    NzCheckboxWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-checkbox-wrapper',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>",
                    host: {
                        '[class.ant-checkbox-group]': 'true'
                    }
                }] }
    ];
    NzCheckboxWrapperComponent.propDecorators = {
        nzOnChange: [{ type: Output }]
    };
    return NzCheckboxWrapperComponent;
}());
export { NzCheckboxWrapperComponent };
function NzCheckboxWrapperComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.nzOnChange;
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.checkboxList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2hlY2tib3gvbnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OzBCQWF2QyxJQUFJLFlBQVksRUFBWTs0QkFDTCxFQUFFOzs7Ozs7SUFFaEQsZ0RBQVc7Ozs7SUFBWCxVQUFZLEtBQTBCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9COzs7OztJQUVELG1EQUFjOzs7O0lBQWQsVUFBZSxLQUEwQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMvRDs7OztJQUVELGdEQUFXOzs7SUFBWDs7UUFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDckUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixDQUFZLENBQUMsQ0FBQztLQUM5Qzs7OztJQUVELDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQzFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxxQkFBcUI7b0JBQzFDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHFDQUEyRDtvQkFDM0QsSUFBSSxFQUFpQjt3QkFDbkIsNEJBQTRCLEVBQUUsTUFBTTtxQkFDckM7aUJBQ0Y7Ozs2QkFFRSxNQUFNOztxQ0FiVDs7U0FZYSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL256LWNoZWNrYm94LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY2hlY2tib3gtd3JhcHBlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNoZWNrYm94LWdyb3VwXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIG56T25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBwcml2YXRlIGNoZWNrYm94TGlzdDogTnpDaGVja2JveENvbXBvbmVudFtdID0gW107XG5cbiAgYWRkQ2hlY2tib3godmFsdWU6IE56Q2hlY2tib3hDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrYm94TGlzdC5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUNoZWNrYm94KHZhbHVlOiBOekNoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2JveExpc3Quc3BsaWNlKHRoaXMuY2hlY2tib3hMaXN0LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgfVxuXG4gIG91dHB1dFZhbHVlKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHRoaXMuY2hlY2tib3hMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ubnpDaGVja2VkKTtcbiAgICByZXR1cm4gY2hlY2tlZExpc3QubWFwKGl0ZW0gPT4gaXRlbS5uelZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubnpPbkNoYW5nZS5lbWl0KHRoaXMub3V0cHV0VmFsdWUoKSk7XG4gIH1cbn1cbiJdfQ==