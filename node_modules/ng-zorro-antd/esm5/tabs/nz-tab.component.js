/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzTabSetComponent } from './nz-tabset.component';
var NzTabComponent = /** @class */ (function () {
    function NzTabComponent(nzTabSetComponent) {
        this.nzTabSetComponent = nzTabSetComponent;
        this._disabled = false;
        this.position = null;
        this.origin = null;
        this.nzClick = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzDeselect = new EventEmitter();
    }
    Object.defineProperty(NzTabComponent.prototype, "nzDisabled", {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabComponent.prototype, "nzTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isTitleString = !(value instanceof TemplateRef);
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nzTabSetComponent.addTab(this);
    };
    /**
     * @return {?}
     */
    NzTabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzTabSetComponent.removeTab(this);
    };
    NzTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tab',
                    preserveWhitespaces: false,
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    host: {
                        '[class.ant-tabs-tabpane]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTabComponent.ctorParameters = function () { return [
        { type: NzTabSetComponent }
    ]; };
    NzTabComponent.propDecorators = {
        nzDisabled: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzSelect: [{ type: Output }],
        nzDeselect: [{ type: Output }],
        content: [{ type: ViewChild, args: [TemplateRef,] }],
        nzTitle: [{ type: Input }]
    };
    return NzTabComponent;
}());
export { NzTabComponent };
function NzTabComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabComponent.prototype._title;
    /** @type {?} */
    NzTabComponent.prototype._disabled;
    /** @type {?} */
    NzTabComponent.prototype.position;
    /** @type {?} */
    NzTabComponent.prototype.origin;
    /** @type {?} */
    NzTabComponent.prototype.isTitleString;
    /** @type {?} */
    NzTabComponent.prototype.nzClick;
    /** @type {?} */
    NzTabComponent.prototype.nzSelect;
    /** @type {?} */
    NzTabComponent.prototype.nzDeselect;
    /** @type {?} */
    NzTabComponent.prototype.content;
    /** @type {?} */
    NzTabComponent.prototype.nzTabSetComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBeUN4RCx3QkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7eUJBN0JwQyxLQUFLO3dCQUNDLElBQUk7c0JBQ04sSUFBSTt1QkFZUixJQUFJLFlBQVksRUFBUTt3QkFDdkIsSUFBSSxZQUFZLEVBQVE7MEJBQ3RCLElBQUksWUFBWSxFQUFRO0tBYzlDO0lBekJELHNCQUNJLHNDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTtJQVdELHNCQUNJLG1DQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBUkQsVUFDWSxLQUFpQztZQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7OztPQUFBOzs7O0lBU0QsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEM7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFFBQVE7b0JBQzdCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHNFQUE4QztvQkFDOUMsSUFBSSxFQUFpQjt3QkFDbkIsMEJBQTBCLEVBQUUsTUFBTTtxQkFDbkM7aUJBQ0Y7Ozs7Z0JBVFEsaUJBQWlCOzs7NkJBaUJ2QixLQUFLOzBCQVNMLE1BQU07MkJBQ04sTUFBTTs2QkFDTixNQUFNOzBCQUNOLFNBQVMsU0FBQyxXQUFXOzBCQUVyQixLQUFLOzt5QkE1Q1I7O1NBdUJhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpUYWJTZXRDb21wb25lbnQgfSBmcm9tICcuL256LXRhYnNldC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRhYicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFicy10YWJwYW5lXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHBvc2l0aW9uOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgb3JpZ2luOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgaXNUaXRsZVN0cmluZzogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbnpTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBuekRlc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzVGl0bGVTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelRhYlNldENvbXBvbmVudDogTnpUYWJTZXRDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpUYWJTZXRDb21wb25lbnQuYWRkVGFiKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5uelRhYlNldENvbXBvbmVudC5yZW1vdmVUYWIodGhpcyk7XG4gIH1cblxufVxuIl19