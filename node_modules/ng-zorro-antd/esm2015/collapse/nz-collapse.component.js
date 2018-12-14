/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class NzCollapseComponent {
    constructor() {
        this._accordion = false;
        this._bordered = true;
        this.listOfPanel = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAccordion(value) {
        this._accordion = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAccordion() {
        return this._accordion;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzBordered(value) {
        this._bordered = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzBordered() {
        return this._bordered;
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    click(collapse) {
        if (this.nzAccordion) {
            this.listOfPanel.forEach(item => {
                /** @type {?} */
                const active = collapse === item;
                if (item.nzActive !== active) {
                    item.nzActive = active;
                    item.nzActiveChange.emit(item.nzActive);
                }
            });
        }
        else {
            collapse.nzActive = !collapse.nzActive;
            collapse.nzActiveChange.emit(collapse.nzActive);
        }
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    addCollapse(collapse) {
        this.listOfPanel.push(collapse);
    }
    /**
     * @param {?} collapse
     * @return {?}
     */
    removeCollapse(collapse) {
        this.listOfPanel.splice(this.listOfPanel.indexOf(collapse), 1);
    }
}
NzCollapseComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-collapse',
                template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!nzBordered\">\n  <ng-content></ng-content>\n</div>",
                styles: [`:host {
      display: block;
    }`]
            }] }
];
NzCollapseComponent.propDecorators = {
    nzAccordion: [{ type: Input }],
    nzBordered: [{ type: Input }]
};
function NzCollapseComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCollapseComponent.prototype._accordion;
    /** @type {?} */
    NzCollapseComponent.prototype._bordered;
    /** @type {?} */
    NzCollapseComponent.prototype.listOfPanel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvbGxhcHNlL256LWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBYWpELE1BQU07OzBCQUNpQixLQUFLO3lCQUNOLElBQUk7MkJBQzBCLEVBQUU7Ozs7OztJQUVwRCxJQUNJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsS0FBSyxDQUFDLFFBQWtDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQzlCLE1BQU0sTUFBTSxHQUFHLFFBQVEsS0FBSyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO29CQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqRDtLQUNGOzs7OztJQUVELFdBQVcsQ0FBQyxRQUFrQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNqQzs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBa0M7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEU7OztZQXJERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFLLGFBQWE7Z0JBQzFCLDZIQUEyQzt5QkFFekM7O01BRUU7YUFFTDs7OzBCQU1FLEtBQUs7eUJBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICduei1jb2xsYXBzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgOiBbXG4gICAgYDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDb2xsYXBzZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgX2FjY29yZGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIF9ib3JkZXJlZCA9IHRydWU7XG4gIHByaXZhdGUgbGlzdE9mUGFuZWw6IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudFtdID0gW107XG5cbiAgQElucHV0KClcbiAgc2V0IG56QWNjb3JkaW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWNjb3JkaW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekFjY29yZGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjb3JkaW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Qm9yZGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ib3JkZXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpCb3JkZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYm9yZGVyZWQ7XG4gIH1cblxuICBjbGljayhjb2xsYXBzZTogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBY2NvcmRpb24pIHtcbiAgICAgIHRoaXMubGlzdE9mUGFuZWwuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gY29sbGFwc2UgPT09IGl0ZW07XG4gICAgICAgIGlmIChpdGVtLm56QWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICBpdGVtLm56QWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAgIGl0ZW0ubnpBY3RpdmVDaGFuZ2UuZW1pdChpdGVtLm56QWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbGxhcHNlLm56QWN0aXZlID0gIWNvbGxhcHNlLm56QWN0aXZlO1xuICAgICAgY29sbGFwc2UubnpBY3RpdmVDaGFuZ2UuZW1pdChjb2xsYXBzZS5uekFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ29sbGFwc2UoY29sbGFwc2U6IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mUGFuZWwucHVzaChjb2xsYXBzZSk7XG4gIH1cblxuICByZW1vdmVDb2xsYXBzZShjb2xsYXBzZTogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZQYW5lbC5zcGxpY2UodGhpcy5saXN0T2ZQYW5lbC5pbmRleE9mKGNvbGxhcHNlKSwgMSk7XG4gIH1cbn1cbiJdfQ==