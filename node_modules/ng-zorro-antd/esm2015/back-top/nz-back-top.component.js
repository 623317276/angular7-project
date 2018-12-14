/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
import { toNumber } from '../core/util/convert';
export class NzBackTopComponent {
    /**
     * @param {?} scrollSrv
     * @param {?} cd
     */
    constructor(scrollSrv, cd) {
        this.scrollSrv = scrollSrv;
        this.cd = cd;
        this.scroll$ = null;
        this.target = null;
        this.visible = false;
        this._visibilityHeight = 400;
        this.nzClick = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisibilityHeight(value) {
        this._visibilityHeight = toNumber(value, 400);
    }
    /**
     * @return {?}
     */
    get nzVisibilityHeight() {
        return this._visibilityHeight;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    set nzTarget(el) {
        this.target = el;
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.scroll$) {
            this.registerScrollEvent();
        }
    }
    /**
     * @return {?}
     */
    clickBackTop() {
        this.scrollSrv.scrollTo(this.getTarget(), 0);
        this.nzClick.emit(true);
    }
    /**
     * @return {?}
     */
    getTarget() {
        return this.target || window;
    }
    /**
     * @return {?}
     */
    handleScroll() {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    registerScrollEvent() {
        this.removeListen();
        this.handleScroll();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll').pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(e => this.handleScroll());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeListen();
    }
}
NzBackTopComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-back-top',
                animations: [
                    trigger('enterLeave', [
                        transition(':enter', [
                            style({ opacity: 0 }),
                            animate(300, style({ opacity: 1 }))
                        ]),
                        transition(':leave', [
                            style({ opacity: 1 }),
                            animate(300, style({ opacity: 0 }))
                        ])
                    ])
                ],
                template: "<div class=\"ant-back-top\" (click)=\"clickBackTop()\" [@enterLeave] *ngIf=\"visible\">\n  <ng-template #defaultContent>\n    <div class=\"ant-back-top-content\">\n      <div class=\"ant-back-top-icon\"></div>\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"nzTemplate || defaultContent\"></ng-template>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NzBackTopComponent.ctorParameters = () => [
    { type: NzScrollService },
    { type: ChangeDetectorRef }
];
NzBackTopComponent.propDecorators = {
    nzTemplate: [{ type: Input }],
    nzVisibilityHeight: [{ type: Input }],
    nzTarget: [{ type: Input }],
    nzClick: [{ type: Output }]
};
function NzBackTopComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBackTopComponent.prototype.scroll$;
    /** @type {?} */
    NzBackTopComponent.prototype.target;
    /** @type {?} */
    NzBackTopComponent.prototype.visible;
    /** @type {?} */
    NzBackTopComponent.prototype.nzTemplate;
    /** @type {?} */
    NzBackTopComponent.prototype._visibilityHeight;
    /** @type {?} */
    NzBackTopComponent.prototype.nzClick;
    /** @type {?} */
    NzBackTopComponent.prototype.scrollSrv;
    /** @type {?} */
    NzBackTopComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFjay10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImJhY2stdG9wL256LWJhY2stdG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFvQmhELE1BQU07Ozs7O0lBNEJKLFlBQW9CLFNBQTBCLEVBQVUsRUFBcUI7UUFBekQsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjt1QkExQjdDLElBQUk7c0JBQ04sSUFBSTt1QkFFZixLQUFLO2lDQUlZLEdBQUc7dUJBaUJJLElBQUksWUFBWSxFQUFFO0tBRzVEOzs7OztJQWxCRCxJQUNJLGtCQUFrQixDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0M7Ozs7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUMvQjs7Ozs7SUFFRCxJQUNJLFFBQVEsQ0FBQyxFQUFlO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzVCOzs7O0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0tBQ0Y7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7O0lBRU8sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7Ozs7O0lBR3ZCLFlBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN6RixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDOzs7OztJQUdsQixZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVCOzs7OztJQUdLLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUM7YUFDbEcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Ozs7O0lBR3ZDLFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGFBQWE7Z0JBQ2xDLFVBQVUsRUFBVztvQkFDbkIsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDcEIsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDbkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOzRCQUNyQixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lCQUNwQyxDQUFDO3dCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDckIsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDcEMsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2dCQUNELHNWQUFtRDtnQkFDbkQsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFwQlEsZUFBZTtZQXBCdEIsaUJBQWlCOzs7eUJBZ0RoQixLQUFLO2lDQUlMLEtBQUs7dUJBU0wsS0FBSztzQkFNTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBhbmltYXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL256LXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWJhY2stdG9wJyxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ2VudGVyTGVhdmUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcbiAgICAgICAgYW5pbWF0ZSgzMDAsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoMzAwLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWJhY2stdG9wLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOekJhY2tUb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBzY3JvbGwkOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuICBwcml2YXRlIHRhcmdldDogSFRNTEVsZW1lbnQgPSBudWxsO1xuXG4gIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBuelRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBwcml2YXRlIF92aXNpYmlsaXR5SGVpZ2h0OiBudW1iZXIgPSA0MDA7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmlzaWJpbGl0eUhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmlzaWJpbGl0eUhlaWdodCA9IHRvTnVtYmVyKHZhbHVlLCA0MDApO1xuICB9XG5cbiAgZ2V0IG56VmlzaWJpbGl0eUhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmlsaXR5SGVpZ2h0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGFyZ2V0KGVsOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0ID0gZWw7XG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XG4gIH1cblxuICBAT3V0cHV0KCkgbnpDbGljazogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsJCkge1xuICAgICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tCYWNrVG9wKCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsU3J2LnNjcm9sbFRvKHRoaXMuZ2V0VGFyZ2V0KCksIDApO1xuICAgIHRoaXMubnpDbGljay5lbWl0KHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYXJnZXQoKTogSFRNTEVsZW1lbnQgfCBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLnRhcmdldCB8fCB3aW5kb3c7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aXNpYmxlID09PSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSkgPiB0aGlzLm56VmlzaWJpbGl0eUhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkge1xuICAgICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclNjcm9sbEV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQodGhpcy5nZXRUYXJnZXQoKSwgJ3Njcm9sbCcpLnBpcGUodGhyb3R0bGVUaW1lKDUwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xuICB9XG5cbn1cbiJdfQ==