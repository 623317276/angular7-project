/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
var NzTimelineComponent = /** @class */ (function () {
    function NzTimelineComponent() {
        this.unsubscribe$ = new Subject();
        this.isPendingBoolean = false;
    }
    Object.defineProperty(NzTimelineComponent.prototype, "nzPending", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pending;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isPendingString = !(value instanceof TemplateRef);
            this.isPendingBoolean = value === true;
            this._pending = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTimelineComponent.prototype.updateChildrenTimeLine = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            this.listOfTimeLine.toArray().forEach(function (item, index) { return item.isLast = index === _this.listOfTimeLine.length - 1; });
        }
    };
    /**
     * @return {?}
     */
    NzTimelineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    NzTimelineComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateChildrenTimeLine();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
                _this.updateChildrenTimeLine();
            });
        }
    };
    NzTimelineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-timeline',
                    preserveWhitespaces: false,
                    template: "<ul class=\"ant-timeline\" [class.ant-timeline-pending]=\"nzPending\">\n  <ng-content></ng-content>\n  <li *ngIf=\"nzPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\n    <div class=\"ant-timeline-item-tail\"></div>\n    <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\n      <i nz-icon type=\"spin anticon-loading\"></i>\n    </div>\n    <div class=\"ant-timeline-item-content\">\n      <ng-container *ngIf=\"isPendingString; else pendingTemplate\">{{ isPendingBoolean ? '' : nzPending }}</ng-container>\n      <ng-template #pendingTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzPending\"></ng-template>\n      </ng-template>\n    </div>\n  </li>\n</ul>"
                }] }
    ];
    NzTimelineComponent.propDecorators = {
        nzPending: [{ type: Input }],
        listOfTimeLine: [{ type: ContentChildren, args: [NzTimelineItemComponent,] }],
        _pendingContent: [{ type: ContentChild, args: ['pending',] }]
    };
    return NzTimelineComponent;
}());
export { NzTimelineComponent };
function NzTimelineComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimelineComponent.prototype._pending;
    /** @type {?} */
    NzTimelineComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTimelineComponent.prototype.isPendingString;
    /** @type {?} */
    NzTimelineComponent.prototype.isPendingBoolean;
    /** @type {?} */
    NzTimelineComponent.prototype.listOfTimeLine;
    /** @type {?} */
    NzTimelineComponent.prototype._pendingContent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWVsaW5lL256LXRpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7NEJBUzlDLElBQUksT0FBTyxFQUFRO2dDQUVkLEtBQUs7O0lBRWpDLHNCQUNJLDBDQUFTOzs7O1FBTWI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBVEQsVUFDYyxLQUEyQztZQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssS0FBSyxJQUFJLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7OztPQUFBOzs7O0lBU0Qsb0RBQXNCOzs7SUFBdEI7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssS0FBSyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztTQUNoSDtLQUNGOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsZ0RBQWtCOzs7SUFBbEI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDdkUsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDL0IsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Z0JBM0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsYUFBYTtvQkFDbEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsbXVCQUFtRDtpQkFDcEQ7Ozs0QkFPRSxLQUFLO2lDQVdMLGVBQWUsU0FBQyx1QkFBdUI7a0NBQ3ZDLFlBQVksU0FBQyxTQUFTOzs4QkF2Q3pCOztTQXFCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56VGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aW1lbGluZS1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdGltZWxpbmUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9wZW5kaW5nOiBzdHJpbmcgfCBib29sZWFuIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgaXNQZW5kaW5nU3RyaW5nOiBib29sZWFuO1xuICBpc1BlbmRpbmdCb29sZWFuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGVuZGluZyh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1BlbmRpbmdTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuaXNQZW5kaW5nQm9vbGVhbiA9IHZhbHVlID09PSB0cnVlO1xuICAgIHRoaXMuX3BlbmRpbmcgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuelBlbmRpbmcoKTogc3RyaW5nIHwgYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcGVuZGluZztcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaW1lbGluZUl0ZW1Db21wb25lbnQpIGxpc3RPZlRpbWVMaW5lOiBRdWVyeUxpc3Q8TnpUaW1lbGluZUl0ZW1Db21wb25lbnQ+O1xuICBAQ29udGVudENoaWxkKCdwZW5kaW5nJykgX3BlbmRpbmdDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICB1cGRhdGVDaGlsZHJlblRpbWVMaW5lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZlRpbWVMaW5lICYmIHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpc3RPZlRpbWVMaW5lLnRvQXJyYXkoKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gaXRlbS5pc0xhc3QgPSBpbmRleCA9PT0gdGhpcy5saXN0T2ZUaW1lTGluZS5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVGltZUxpbmUoKTtcbiAgICBpZiAodGhpcy5saXN0T2ZUaW1lTGluZSkge1xuICAgICAgdGhpcy5saXN0T2ZUaW1lTGluZS5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblRpbWVMaW5lKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==