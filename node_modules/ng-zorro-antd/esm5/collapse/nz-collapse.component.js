/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzCollapseComponent = /** @class */ (function () {
    function NzCollapseComponent() {
        this._accordion = false;
        this._bordered = true;
        this.listOfPanel = [];
    }
    Object.defineProperty(NzCollapseComponent.prototype, "nzAccordion", {
        get: /**
         * @return {?}
         */
        function () {
            return this._accordion;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._accordion = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCollapseComponent.prototype, "nzBordered", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bordered;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bordered = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} collapse
     * @return {?}
     */
    NzCollapseComponent.prototype.click = /**
     * @param {?} collapse
     * @return {?}
     */
    function (collapse) {
        if (this.nzAccordion) {
            this.listOfPanel.forEach(function (item) {
                /** @type {?} */
                var active = collapse === item;
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
    };
    /**
     * @param {?} collapse
     * @return {?}
     */
    NzCollapseComponent.prototype.addCollapse = /**
     * @param {?} collapse
     * @return {?}
     */
    function (collapse) {
        this.listOfPanel.push(collapse);
    };
    /**
     * @param {?} collapse
     * @return {?}
     */
    NzCollapseComponent.prototype.removeCollapse = /**
     * @param {?} collapse
     * @return {?}
     */
    function (collapse) {
        this.listOfPanel.splice(this.listOfPanel.indexOf(collapse), 1);
    };
    NzCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-collapse',
                    template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!nzBordered\">\n  <ng-content></ng-content>\n</div>",
                    styles: [":host {\n      display: block;\n    }"]
                }] }
    ];
    NzCollapseComponent.propDecorators = {
        nzAccordion: [{ type: Input }],
        nzBordered: [{ type: Input }]
    };
    return NzCollapseComponent;
}());
export { NzCollapseComponent };
function NzCollapseComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCollapseComponent.prototype._accordion;
    /** @type {?} */
    NzCollapseComponent.prototype._bordered;
    /** @type {?} */
    NzCollapseComponent.prototype.listOfPanel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvbGxhcHNlL256LWNvbGxhcHNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7MEJBYzFCLEtBQUs7eUJBQ04sSUFBSTsyQkFDMEIsRUFBRTs7SUFFcEQsc0JBQ0ksNENBQVc7Ozs7UUFJZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7Ozs7UUFQRCxVQUNnQixLQUFjO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7T0FBQTtJQU1ELHNCQUNJLDJDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTs7Ozs7SUFNRCxtQ0FBSzs7OztJQUFMLFVBQU0sUUFBa0M7UUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs7Z0JBQzNCLElBQU0sTUFBTSxHQUFHLFFBQVEsS0FBSyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO29CQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqRDtLQUNGOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxRQUFrQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNqQzs7Ozs7SUFFRCw0Q0FBYzs7OztJQUFkLFVBQWUsUUFBa0M7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEU7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFLLGFBQWE7b0JBQzFCLDZIQUEyQzs2QkFFekMsdUNBRUU7aUJBRUw7Ozs4QkFNRSxLQUFLOzZCQVNMLEtBQUs7OzhCQWhDUjs7U0FrQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL256LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LWNvbGxhcHNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNvbGxhcHNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICA6IFtcbiAgICBgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfWBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNvbGxhcHNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfYWNjb3JkaW9uID0gZmFsc2U7XG4gIHByaXZhdGUgX2JvcmRlcmVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBsaXN0T2ZQYW5lbDogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpBY2NvcmRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY2NvcmRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56QWNjb3JkaW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY2NvcmRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpCb3JkZXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2JvcmRlcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekJvcmRlcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ib3JkZXJlZDtcbiAgfVxuXG4gIGNsaWNrKGNvbGxhcHNlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekFjY29yZGlvbikge1xuICAgICAgdGhpcy5saXN0T2ZQYW5lbC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBjb2xsYXBzZSA9PT0gaXRlbTtcbiAgICAgICAgaWYgKGl0ZW0ubnpBY3RpdmUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgIGl0ZW0ubnpBY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgICAgaXRlbS5uekFjdGl2ZUNoYW5nZS5lbWl0KGl0ZW0ubnpBY3RpdmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sbGFwc2UubnpBY3RpdmUgPSAhY29sbGFwc2UubnpBY3RpdmU7XG4gICAgICBjb2xsYXBzZS5uekFjdGl2ZUNoYW5nZS5lbWl0KGNvbGxhcHNlLm56QWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICBhZGRDb2xsYXBzZShjb2xsYXBzZTogTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZQYW5lbC5wdXNoKGNvbGxhcHNlKTtcbiAgfVxuXG4gIHJlbW92ZUNvbGxhcHNlKGNvbGxhcHNlOiBOekNvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZlBhbmVsLnNwbGljZSh0aGlzLmxpc3RPZlBhbmVsLmluZGV4T2YoY29sbGFwc2UpLCAxKTtcbiAgfVxufVxuIl19