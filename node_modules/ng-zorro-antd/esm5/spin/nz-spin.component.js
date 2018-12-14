/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isEmpty, isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var NzSpinComponent = /** @class */ (function () {
    function NzSpinComponent(elementRef, renderer, zone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        this._delay = 0;
        this.el = this.elementRef.nativeElement;
        this.baseSpinning$ = new BehaviorSubject(true);
        this.resultSpinning$ = this.baseSpinning$.asObservable().pipe(debounceTime(this.nzDelay));
        this.nzSize = 'default';
    }
    Object.defineProperty(NzSpinComponent.prototype, "nzDelay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._delay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._delay = value;
                this.resultSpinning$ = this.baseSpinning$.asObservable().pipe(debounceTime(this.nzDelay));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSpinComponent.prototype, "nzTip", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tip;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSpinComponent.prototype, "nzSpinning", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.baseSpinning$.next(toBoolean(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.checkNested = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var containerElement = this.containerElement.nativeElement;
        /** @type {?} */
        var nestedElement = this.nestedElement.nativeElement;
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
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.checkNested();
    };
    NzSpinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-spin',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template #defaultIndicatorTemplate>\n  <span\n    class=\"ant-spin-dot\"\n    [class.ant-spin-dot-spin]=\"resultSpinning$|async\">\n    <i></i><i></i><i></i><i></i>\n  </span>\n</ng-template>\n<div #nestedElement>\n  <div [hidden]=\"!(resultSpinning$|async)\">\n    <div\n      class=\"ant-spin\"\n      [class.ant-spin-spinning]=\"resultSpinning$|async\"\n      [class.ant-spin-lg]=\"nzSize=='large'\"\n      [class.ant-spin-sm]=\"nzSize=='small'\"\n      [class.ant-spin-show-text]=\"nzTip\">\n      <ng-template [ngTemplateOutlet]=\"nzIndicator||defaultIndicatorTemplate\"></ng-template>\n      <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\n    </div>\n  </div>\n  <div\n    #containerElement\n    class=\"ant-spin-container\"\n    [class.ant-spin-blur]=\"resultSpinning$|async\"\n    (cdkObserveContent)=\"checkNested()\">\n    <ng-content></ng-content>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzSpinComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    NzSpinComponent.propDecorators = {
        containerElement: [{ type: ViewChild, args: ['containerElement',] }],
        nestedElement: [{ type: ViewChild, args: ['nestedElement',] }],
        nzIndicator: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzDelay: [{ type: Input }],
        nzTip: [{ type: Input }],
        nzSpinning: [{ type: Input }]
    };
    return NzSpinComponent;
}());
export { NzSpinComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3Bpbi9uei1zcGluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBOEQvQyx5QkFBb0IsVUFBc0IsRUFBVSxRQUFtQixFQUFVLElBQVk7UUFBekUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO3NCQXBENUUsQ0FBQztrQkFDQSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7NkJBRS9CLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQzsrQkFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3NCQUl2RixTQUFTO0tBNkMxQjtJQTNDRCxzQkFDSSxvQ0FBTzs7OztRQU9YO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVZELFVBQ1ksS0FBYTtZQUN2QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQzNGO1NBQ0Y7OztPQUFBO0lBTUQsc0JBQ0ksa0NBQUs7Ozs7UUFJVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjs7Ozs7UUFQRCxVQUNVLEtBQWE7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkI7OztPQUFBO0lBTUQsc0JBQ0ksdUNBQVU7Ozs7O1FBRGQsVUFDZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNDOzs7T0FBQTs7OztJQUVELHFDQUFXOzs7SUFBWDs7UUFDRSxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7O1FBQzdELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDOzs7UUFHdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNyRTtLQUNGOzs7O0lBS0QseUNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOztnQkFqRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxTQUFTO29CQUM5QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsNjRCQUErQztpQkFDaEQ7Ozs7Z0JBbEJDLFVBQVU7Z0JBR1YsU0FBUztnQkFEVCxNQUFNOzs7bUNBd0JMLFNBQVMsU0FBQyxrQkFBa0I7Z0NBQzVCLFNBQVMsU0FBQyxlQUFlOzhCQUN6QixLQUFLO3lCQUNMLEtBQUs7MEJBRUwsS0FBSzt3QkFZTCxLQUFLOzZCQVNMLEtBQUs7OzBCQXhEUjs7U0F1QmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc0VtcHR5LCBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc3BpbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNwaW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U3BpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF90aXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVsYXkgPSAwO1xuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICBiYXNlU3Bpbm5pbmckID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcbiAgcmVzdWx0U3Bpbm5pbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5iYXNlU3Bpbm5pbmckLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMubnpEZWxheSkpO1xuICBAVmlld0NoaWxkKCdjb250YWluZXJFbGVtZW50JykgY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbmVzdGVkRWxlbWVudCcpIG5lc3RlZEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG56SW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTaXplID0gJ2RlZmF1bHQnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlbGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kZWxheSA9IHZhbHVlO1xuICAgICAgdGhpcy5yZXN1bHRTcGlubmluZyQgPSB0aGlzLmJhc2VTcGlubmluZyQuYXNPYnNlcnZhYmxlKCkucGlwZShkZWJvdW5jZVRpbWUodGhpcy5uekRlbGF5KSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGVsYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUaXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpcCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VGlwKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RpcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNwaW5uaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5iYXNlU3Bpbm5pbmckLm5leHQodG9Cb29sZWFuKHZhbHVlKSk7XG4gIH1cblxuICBjaGVja05lc3RlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgbmVzdGVkRWxlbWVudCA9IHRoaXMubmVzdGVkRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIC8qKiBubyB3YXkgdG8gZGV0ZWN0IGVtcHR5IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyNTMwICoqL1xuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvaXNzdWVzLzExMjgwICoqL1xuICAgIGlmICghaXNFbXB0eShjb250YWluZXJFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShjb250YWluZXJFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhuZXN0ZWRFbGVtZW50LCAnYW50LXNwaW4tbmVzdGVkLWxvYWRpbmcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250YWluZXJFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdkaXNwbGF5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5lc3RlZEVsZW1lbnQsICdhbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tOZXN0ZWQoKTtcbiAgfVxufVxuIl19