/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
export class NzCheckboxWrapperComponent {
    constructor() {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    /**
     * @return {?}
     */
    outputValue() {
        /** @type {?} */
        const checkedList = this.checkboxList.filter(item => item.nzChecked);
        return checkedList.map(item => item.nzValue);
    }
    /**
     * @return {?}
     */
    onChange() {
        this.nzOnChange.emit(this.outputValue());
    }
}
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
function NzCheckboxWrapperComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.nzOnChange;
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.checkboxList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2hlY2tib3gvbnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVloRSxNQUFNOzswQkFDbUIsSUFBSSxZQUFZLEVBQVk7NEJBQ0wsRUFBRTs7Ozs7O0lBRWhELFdBQVcsQ0FBQyxLQUEwQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBMEI7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDL0Q7Ozs7SUFFRCxXQUFXOztRQUNULE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5Qzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUMxQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEscUJBQXFCO2dCQUMxQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixxQ0FBMkQ7Z0JBQzNELElBQUksRUFBaUI7b0JBQ25CLDRCQUE0QixFQUFFLE1BQU07aUJBQ3JDO2FBQ0Y7Ozt5QkFFRSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9uei1jaGVja2JveC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNoZWNrYm94LXdyYXBwZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jaGVja2JveC1ncm91cF0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCB7XG4gIEBPdXRwdXQoKSBuek9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgcHJpdmF0ZSBjaGVja2JveExpc3Q6IE56Q2hlY2tib3hDb21wb25lbnRbXSA9IFtdO1xuXG4gIGFkZENoZWNrYm94KHZhbHVlOiBOekNoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2JveExpc3QucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVDaGVja2JveCh2YWx1ZTogTnpDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tib3hMaXN0LnNwbGljZSh0aGlzLmNoZWNrYm94TGlzdC5pbmRleE9mKHZhbHVlKSwgMSk7XG4gIH1cblxuICBvdXRwdXRWYWx1ZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB0aGlzLmNoZWNrYm94TGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm56Q2hlY2tlZCk7XG4gICAgcmV0dXJuIGNoZWNrZWRMaXN0Lm1hcChpdGVtID0+IGl0ZW0ubnpWYWx1ZSk7XG4gIH1cblxuICBvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56T25DaGFuZ2UuZW1pdCh0aGlzLm91dHB1dFZhbHVlKCkpO1xuICB9XG59XG4iXX0=