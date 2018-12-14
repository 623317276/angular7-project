/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isEmpty, isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class NzSpinComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} zone
     */
    constructor(elementRef, renderer, zone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        this._delay = 0;
        this.el = this.elementRef.nativeElement;
        this.baseSpinning$ = new BehaviorSubject(true);
        this.resultSpinning$ = this.baseSpinning$.asObservable().pipe(debounceTime(this.nzDelay));
        this.nzSize = 'default';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDelay(value) {
        if (isNotNil(value)) {
            this._delay = value;
            this.resultSpinning$ = this.baseSpinning$.asObservable().pipe(debounceTime(this.nzDelay));
        }
    }
    /**
     * @return {?}
     */
    get nzDelay() {
        return this._delay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTip(value) {
        this._tip = value;
    }
    /**
     * @return {?}
     */
    get nzTip() {
        return this._tip;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSpinning(value) {
        this.baseSpinning$.next(toBoolean(value));
    }
    /**
     * @return {?}
     */
    checkNested() {
        /** @type {?} */
        const containerElement = this.containerElement.nativeElement;
        /** @type {?} */
        const nestedElement = this.nestedElement.nativeElement;
        /** no way to detect empty https://github.com/angular/angular/issues/12530 **/
        /** https://github.com/angular/material2/issues/11280 **/
        if (!isEmpty(containerElement)) {
            this.renderer.removeStyle(containerElement, 'display');
            this.renderer.setStyle(this.el, 'display', 'block');
            this.renderer.addClass(nestedElement, 'ant-spin-nested-loading');
        }
        else {
            this.renderer.setStyle(containerElement, 'display', 'none');
            this.renderer.removeStyle(this.el, 'display');
            this.renderer.removeClass(nestedElement, 'ant-spin-nested-loading');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.checkNested();
    }
}
NzSpinComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-spin',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-template #defaultIndicatorTemplate>\n  <span\n    class=\"ant-spin-dot\"\n    [class.ant-spin-dot-spin]=\"resultSpinning$|async\">\n    <i></i><i></i><i></i><i></i>\n  </span>\n</ng-template>\n<div #nestedElement>\n  <div [hidden]=\"!(resultSpinning$|async)\">\n    <div\n      class=\"ant-spin\"\n      [class.ant-spin-spinning]=\"resultSpinning$|async\"\n      [class.ant-spin-lg]=\"nzSize=='large'\"\n      [class.ant-spin-sm]=\"nzSize=='small'\"\n      [class.ant-spin-show-text]=\"nzTip\">\n      <ng-template [ngTemplateOutlet]=\"nzIndicator||defaultIndicatorTemplate\"></ng-template>\n      <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\n    </div>\n  </div>\n  <div\n    #containerElement\n    class=\"ant-spin-container\"\n    [class.ant-spin-blur]=\"resultSpinning$|async\"\n    (cdkObserveContent)=\"checkNested()\">\n    <ng-content></ng-content>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
NzSpinComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone }
];
NzSpinComponent.propDecorators = {
    containerElement: [{ type: ViewChild, args: ['containerElement',] }],
    nestedElement: [{ type: ViewChild, args: ['nestedElement',] }],
    nzIndicator: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzDelay: [{ type: Input }],
    nzTip: [{ type: Input }],
    nzSpinning: [{ type: Input }]
};
function NzSpinComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSpinComponent.prototype._tip;
    /** @type {?} */
    NzSpinComponent.prototype._delay;
    /** @type {?} */
    NzSpinComponent.prototype.el;
    /** @type {?} */
    NzSpinComponent.prototype.baseSpinning$;
    /** @type {?} */
    NzSpinComponent.prototype.resultSpinning$;
    /** @type {?} */
    NzSpinComponent.prototype.containerElement;
    /** @type {?} */
    NzSpinComponent.prototype.nestedElement;
    /** @type {?} */
    NzSpinComponent.prototype.nzIndicator;
    /** @type {?} */
    NzSpinComponent.prototype.nzSize;
    /** @type {?} */
    NzSpinComponent.prototype.elementRef;
    /** @type {?} */
    NzSpinComponent.prototype.renderer;
    /** @type {?} */
    NzSpinComponent.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3Bpbi9uei1zcGluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFRakQsTUFBTTs7Ozs7O0lBc0RKLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUIsRUFBVSxJQUFZO1FBQXpFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtzQkFwRDVFLENBQUM7a0JBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOzZCQUUvQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUM7K0JBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztzQkFJdkYsU0FBUztLQTZDMUI7Ozs7O0lBM0NELElBQ0ksT0FBTyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDM0Y7S0FDRjs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7SUFFRCxJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0tBQ25COzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCOzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDM0M7Ozs7SUFFRCxXQUFXOztRQUNULE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQzs7UUFDN0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7OztRQUd2RCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLHlCQUF5QixDQUFDLENBQUM7U0FDbEU7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ3JFO0tBQ0Y7Ozs7SUFLRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxTQUFTO2dCQUM5QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtnQkFDbkQsNjRCQUErQzthQUNoRDs7OztZQWxCQyxVQUFVO1lBR1YsU0FBUztZQURULE1BQU07OzsrQkF3QkwsU0FBUyxTQUFDLGtCQUFrQjs0QkFDNUIsU0FBUyxTQUFDLGVBQWU7MEJBQ3pCLEtBQUs7cUJBQ0wsS0FBSztzQkFFTCxLQUFLO29CQVlMLEtBQUs7eUJBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc0VtcHR5LCBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc3BpbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNwaW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U3BpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF90aXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVsYXkgPSAwO1xuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICBiYXNlU3Bpbm5pbmckID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcbiAgcmVzdWx0U3Bpbm5pbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5iYXNlU3Bpbm5pbmckLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMubnpEZWxheSkpO1xuICBAVmlld0NoaWxkKCdjb250YWluZXJFbGVtZW50JykgY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbmVzdGVkRWxlbWVudCcpIG5lc3RlZEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG56SW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTaXplID0gJ2RlZmF1bHQnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlbGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kZWxheSA9IHZhbHVlO1xuICAgICAgdGhpcy5yZXN1bHRTcGlubmluZyQgPSB0aGlzLmJhc2VTcGlubmluZyQuYXNPYnNlcnZhYmxlKCkucGlwZShkZWJvdW5jZVRpbWUodGhpcy5uekRlbGF5KSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGVsYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUaXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpcCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VGlwKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RpcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNwaW5uaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5iYXNlU3Bpbm5pbmckLm5leHQodG9Cb29sZWFuKHZhbHVlKSk7XG4gIH1cblxuICBjaGVja05lc3RlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgbmVzdGVkRWxlbWVudCA9IHRoaXMubmVzdGVkRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIC8qKiBubyB3YXkgdG8gZGV0ZWN0IGVtcHR5IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyNTMwICoqL1xuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvaXNzdWVzLzExMjgwICoqL1xuICAgIGlmICghaXNFbXB0eShjb250YWluZXJFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShjb250YWluZXJFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhuZXN0ZWRFbGVtZW50LCAnYW50LXNwaW4tbmVzdGVkLWxvYWRpbmcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXJFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdkaXNwbGF5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5lc3RlZEVsZW1lbnQsICdhbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tOZXN0ZWQoKTtcbiAgfVxufVxuIl19