/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
export class NzTimelineComponent {
    constructor() {
        this.unsubscribe$ = new Subject();
        this.isPendingBoolean = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPending(value) {
        this.isPendingString = !(value instanceof TemplateRef);
        this.isPendingBoolean = value === true;
        this._pending = value;
    }
    /**
     * @return {?}
     */
    get nzPending() {
        return this._pending;
    }
    /**
     * @return {?}
     */
    updateChildrenTimeLine() {
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            this.listOfTimeLine.toArray().forEach((item, index) => item.isLast = index === this.listOfTimeLine.length - 1);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenTimeLine();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
                this.updateChildrenTimeLine();
            });
        }
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWVsaW5lL256LXRpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBT3ZFLE1BQU07OzRCQUVtQixJQUFJLE9BQU8sRUFBUTtnQ0FFZCxLQUFLOzs7Ozs7SUFFakMsSUFDSSxTQUFTLENBQUMsS0FBMkM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7O0lBS0Qsc0JBQXNCO1FBQ3BCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hIO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQy9CLENBQUMsQ0FBQztTQUNKO0tBQ0Y7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGFBQWE7Z0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG11QkFBbUQ7YUFDcEQ7Ozt3QkFPRSxLQUFLOzZCQVdMLGVBQWUsU0FBQyx1QkFBdUI7OEJBQ3ZDLFlBQVksU0FBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelRpbWVsaW5lSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRpbWVsaW5lJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRpbWVsaW5lLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcGVuZGluZzogc3RyaW5nIHwgYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGlzUGVuZGluZ1N0cmluZzogYm9vbGVhbjtcbiAgaXNQZW5kaW5nQm9vbGVhbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBlbmRpbmcodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNQZW5kaW5nU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLmlzUGVuZGluZ0Jvb2xlYW4gPSB2YWx1ZSA9PT0gdHJ1ZTtcbiAgICB0aGlzLl9wZW5kaW5nID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpQZW5kaW5nKCk6IHN0cmluZyB8IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BlbmRpbmc7XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKE56VGltZWxpbmVJdGVtQ29tcG9uZW50KSBsaXN0T2ZUaW1lTGluZTogUXVlcnlMaXN0PE56VGltZWxpbmVJdGVtQ29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZCgncGVuZGluZycpIF9wZW5kaW5nQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgdXBkYXRlQ2hpbGRyZW5UaW1lTGluZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZUaW1lTGluZSAmJiB0aGlzLmxpc3RPZlRpbWVMaW5lLmxlbmd0aCkge1xuICAgICAgdGhpcy5saXN0T2ZUaW1lTGluZS50b0FycmF5KCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IGl0ZW0uaXNMYXN0ID0gaW5kZXggPT09IHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblRpbWVMaW5lKCk7XG4gICAgaWYgKHRoaXMubGlzdE9mVGltZUxpbmUpIHtcbiAgICAgIHRoaXMubGlzdE9mVGltZUxpbmUuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5UaW1lTGluZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=