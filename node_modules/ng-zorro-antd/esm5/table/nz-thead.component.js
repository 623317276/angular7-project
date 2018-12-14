/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Host, Input, Optional, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzThComponent } from './nz-th.component';
import { NzTableComponent } from './nz-table.component';
var NzTheadComponent = /** @class */ (function () {
    function NzTheadComponent(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
        this._singleSort = false;
        this.unsubscribe$ = new Subject();
        this.nzSortChange = new EventEmitter();
        if (this.nzTableComponent) {
            this.nzTableComponent.nzTheadComponent = this;
        }
    }
    Object.defineProperty(NzTheadComponent.prototype, "nzSingleSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._singleSort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._singleSort = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTheadComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sortChange = new Subject().asObservable();
        /** @type {?} */
        var listOfTh = this.listOfNzThComponent.toArray();
        /** @type {?} */
        var sortChangeArray = listOfTh.map(function (th) { return th.nzSortChangeWithKey; });
        if (sortChangeArray.length) {
            sortChangeArray.forEach(function (sort) {
                sortChange = merge(sort.asObservable(), sortChange);
            });
        }
        sortChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function (data) {
            _this.nzSortChange.emit(data);
            if (_this.nzSingleSort) {
                listOfTh.forEach(function (th) { return th.nzSort = (th.nzSortKey === data.key ? th.nzSort : null); });
            }
        });
    };
    /**
     * @return {?}
     */
    NzTheadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTheadComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'thead:not(.ant-table-thead)',
                    template: "<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n<ng-container *ngIf=\"!nzTableComponent\">\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    NzTheadComponent.ctorParameters = function () { return [
        { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTheadComponent.propDecorators = {
        template: [{ type: ViewChild, args: ['contentTemplate',] }],
        listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
        nzSortChange: [{ type: Output }],
        nzSingleSort: [{ type: Input }]
    };
    return NzTheadComponent;
}());
export { NzTheadComponent };
function NzTheadComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTheadComponent.prototype._singleSort;
    /** @type {?} */
    NzTheadComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTheadComponent.prototype.template;
    /** @type {?} */
    NzTheadComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTheadComponent.prototype.nzSortChange;
    /** @type {?} */
    NzTheadComponent.prototype.nzTableComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRoZWFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUF3QnRELDBCQUF1QyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjsyQkFoQm5ELEtBQUs7NEJBQ0osSUFBSSxPQUFPLEVBQVE7NEJBSWpCLElBQUksWUFBWSxFQUFrQztRQVl6RSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQy9DO0tBQ0Y7SUFiRCxzQkFDSSwwQ0FBWTs7OztRQUloQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6Qjs7Ozs7UUFQRCxVQUNpQixLQUFjO1lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7T0FBQTs7OztJQVlELDZDQUFrQjs7O0lBQWxCO1FBQUEsaUJBZUM7O1FBZEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQWtDLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBQzlFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDcEQsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxtQkFBbUIsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQ25FLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUMxQixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDMUIsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDckQsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQzFELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUExRCxDQUEwRCxDQUFDLENBQUM7YUFDcEY7U0FDRixDQUFDLENBQUM7S0FDSjs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7Z0JBaERGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFLLDZCQUE2QjtvQkFDMUMsME5BQXdDO2lCQUN6Qzs7OztnQkFOUSxnQkFBZ0IsdUJBd0JWLElBQUksWUFBSSxRQUFROzs7MkJBYjVCLFNBQVMsU0FBQyxpQkFBaUI7c0NBQzNCLGVBQWUsU0FBQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOytCQUNwRCxNQUFNOytCQUVOLEtBQUs7OzJCQXBDUjs7U0E0QmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOelRoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvciAgIDogJ3RoZWFkOm5vdCguYW50LXRhYmxlLXRoZWFkKScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aGVhZC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpUaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3NpbmdsZVNvcnQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRUZW1wbGF0ZScpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQENvbnRlbnRDaGlsZHJlbihOelRoQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56VGhDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelRoQ29tcG9uZW50PjtcbiAgQE91dHB1dCgpIG56U29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9PigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpbmdsZVNvcnQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaW5nbGVTb3J0ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNpbmdsZVNvcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbmdsZVNvcnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBuelRhYmxlQ29tcG9uZW50OiBOelRhYmxlQ29tcG9uZW50KSB7XG4gICAgaWYgKHRoaXMubnpUYWJsZUNvbXBvbmVudCkge1xuICAgICAgdGhpcy5uelRhYmxlQ29tcG9uZW50Lm56VGhlYWRDb21wb25lbnQgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgc29ydENoYW5nZSA9IG5ldyBTdWJqZWN0PHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfT4oKS5hc09ic2VydmFibGUoKTtcbiAgICBjb25zdCBsaXN0T2ZUaCA9IHRoaXMubGlzdE9mTnpUaENvbXBvbmVudC50b0FycmF5KCk7XG4gICAgY29uc3Qgc29ydENoYW5nZUFycmF5ID0gbGlzdE9mVGgubWFwKHRoID0+IHRoLm56U29ydENoYW5nZVdpdGhLZXkpO1xuICAgIGlmIChzb3J0Q2hhbmdlQXJyYXkubGVuZ3RoKSB7XG4gICAgICBzb3J0Q2hhbmdlQXJyYXkuZm9yRWFjaChzb3J0ID0+IHtcbiAgICAgICAgc29ydENoYW5nZSA9IG1lcmdlKHNvcnQuYXNPYnNlcnZhYmxlKCksIHNvcnRDaGFuZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHNvcnRDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLm56U29ydENoYW5nZS5lbWl0KGRhdGEpO1xuICAgICAgaWYgKHRoaXMubnpTaW5nbGVTb3J0KSB7XG4gICAgICAgIGxpc3RPZlRoLmZvckVhY2godGggPT4gdGgubnpTb3J0ID0gKHRoLm56U29ydEtleSA9PT0gZGF0YS5rZXkgPyB0aC5uelNvcnQgOiBudWxsKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19