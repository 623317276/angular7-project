/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { isEmpty } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class NzBadgeComponent {
    /**
     * @param {?} zone
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(zone, renderer, elementRef) {
        this.zone = zone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._showDot = false;
        this._showZero = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.nzOverflowCount = 99;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowZero(value) {
        this._showZero = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowZero() {
        return this._showZero;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDot(value) {
        this._showDot = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDot() {
        return this._showDot;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCount(value) {
        if (value < 0) {
            this._count = 0;
        }
        else {
            this._count = value;
        }
        this.countArray = this._count.toString().split('');
    }
    /**
     * @return {?}
     */
    get nzCount() {
        return this._count;
    }
    /**
     * @return {?}
     */
    get showSup() {
        return this.nzDot || this.nzCount > 0 || ((this.nzCount === 0) && this.nzShowZero);
    }
    /**
     * @return {?}
     */
    checkContent() {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.checkContent();
    }
}
NzBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-badge',
                preserveWhitespaces: false,
                animations: [
                    trigger('enterLeave', [
                        transition('void => *', [
                            style({ opacity: 0 }),
                            animate('0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46)')
                        ]),
                        transition('* => void', [
                            style({ opacity: 1 }),
                            animate('0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46)')
                        ])
                    ])
                ],
                template: "<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>\n<span class=\"ant-badge-status-dot ant-badge-status-{{nzStatus}}\" *ngIf=\"nzStatus\" [ngStyle]=\"nzStyle\"></span>\n<span class=\"ant-badge-status-text\" *ngIf=\"nzStatus\">{{ nzText }}</span>\n<sup\n  *ngIf=\"showSup\"\n  [@enterLeave]\n  [ngStyle]=\"nzStyle\"\n  class=\"ant-scroll-number\"\n  [class.ant-badge-count]=\"!nzDot\"\n  [class.ant-badge-dot]=\"nzDot\"\n  [class.ant-badge-multiple-words]=\"countArray.length>=2\">\n  <ng-template\n    ngFor\n    [ngForOf]=\"maxNumberArray\"\n    let-number\n    let-i=\"index\">\n      <span\n        *ngIf=\"nzCount<=nzOverflowCount\"\n        class=\"ant-scroll-number-only\"\n        [style.transform]=\"'translateY('+((-countArray[i]*100))+'%)'\">\n          <ng-template [ngIf]=\"(!nzDot)&&(countArray[i]!=null)\">\n            <p *ngFor=\"let p of countSingleArray\" [class.current]=\"p==countArray[i]\">{{ p }}</p>\n          </ng-template>\n      </span>\n  </ng-template>\n  <ng-template [ngIf]=\"nzCount>nzOverflowCount\">{{ nzOverflowCount }}+</ng-template>\n</sup>",
                host: {
                    '[class.ant-badge]': 'true',
                    '[class.ant-badge-status]': 'nzStatus'
                },
                styles: [`
      :host:not(.ant-badge-not-a-wrapper) .ant-badge-count {
        position: absolute;
        transform: translateX(50%);
        right: 0;
      }

      :host .ant-badge-dot {
        position: absolute;
        transform: translateX(50%);
        right: 0;
      }
    `]
            }] }
];
/** @nocollapse */
NzBadgeComponent.ctorParameters = () => [
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef }
];
NzBadgeComponent.propDecorators = {
    contentElement: [{ type: ViewChild, args: ['contentElement',] }],
    nzOverflowCount: [{ type: Input }],
    nzText: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzShowZero: [{ type: Input }],
    nzDot: [{ type: Input }],
    nzCount: [{ type: Input }]
};
function NzBadgeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBadgeComponent.prototype._showDot;
    /** @type {?} */
    NzBadgeComponent.prototype._showZero;
    /** @type {?} */
    NzBadgeComponent.prototype._count;
    /** @type {?} */
    NzBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    NzBadgeComponent.prototype.contentElement;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOverflowCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzText;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStyle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStatus;
    /** @type {?} */
    NzBadgeComponent.prototype.zone;
    /** @type {?} */
    NzBadgeComponent.prototype.renderer;
    /** @type {?} */
    NzBadgeComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImJhZGdlL256LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBd0NqRCxNQUFNOzs7Ozs7SUF5REosWUFBb0IsSUFBWSxFQUFVLFFBQW1CLEVBQVUsVUFBc0I7UUFBekUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO3dCQXhEMUUsS0FBSzt5QkFDSixLQUFLOzhCQUVSLEVBQUU7MEJBQ04sRUFBRTtnQ0FDSSxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRTsrQkFFeEIsRUFBRTtLQW1ENUI7Ozs7O0lBOUNELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxLQUFLLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUFhO1FBQ3ZCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDcEQ7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3BGOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNsRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNyRjtLQUNGOzs7O0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDakU7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7WUF2R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxVQUFVO2dCQUMvQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixVQUFVLEVBQVc7b0JBQ25CLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0JBQ3BCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDckIsT0FBTyxDQUFDLDBDQUEwQyxDQUFDO3lCQUNwRCxDQUFDO3dCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDckIsT0FBTyxDQUFDLDBDQUEwQyxDQUFDO3lCQUNwRCxDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0QsNG1DQUFnRDtnQkFDaEQsSUFBSSxFQUFpQjtvQkFDbkIsbUJBQW1CLEVBQVMsTUFBTTtvQkFDbEMsMEJBQTBCLEVBQUUsVUFBVTtpQkFDdkM7eUJBRUM7Ozs7Ozs7Ozs7OztLQVlDO2FBRUo7Ozs7WUFyREMsTUFBTTtZQUVOLFNBQVM7WUFKVCxVQUFVOzs7NkJBK0RULFNBQVMsU0FBQyxnQkFBZ0I7OEJBQzFCLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBRUwsS0FBSztvQkFTTCxLQUFLO3NCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuZXhwb3J0IHR5cGUgTnpCYWRnZVN0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAncHJvY2Vzc2luZycgfCAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWJhZGdlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdlbnRlckxlYXZlJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNCwgMC4yOSwgMS40NiknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBjdWJpYy1iZXppZXIoMC4xMiwgMC40LCAwLjI5LCAxLjQ2KScpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWJhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWJhZGdlXScgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtYmFkZ2Utc3RhdHVzXSc6ICduelN0YXR1cydcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgIGBcbiAgICAgIDpob3N0Om5vdCguYW50LWJhZGdlLW5vdC1hLXdyYXBwZXIpIC5hbnQtYmFkZ2UtY291bnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgLmFudC1iYWRnZS1kb3Qge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX3Nob3dEb3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1plcm8gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY291bnQ6IG51bWJlcjtcbiAgbWF4TnVtYmVyQXJyYXkgPSBbXTtcbiAgY291bnRBcnJheSA9IFtdO1xuICBjb3VudFNpbmdsZUFycmF5ID0gWyAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5IF07XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JykgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG56T3ZlcmZsb3dDb3VudCA9IDk5O1xuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBASW5wdXQoKSBuelN0YXR1czogTnpCYWRnZVN0YXR1c1R5cGU7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1plcm8odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93WmVybyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93WmVybygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1plcm87XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEb3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93RG90ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekRvdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0RvdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekNvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuY291bnRBcnJheSA9IHRoaXMuX2NvdW50LnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICB9XG5cbiAgZ2V0IG56Q291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gIH1cblxuICBnZXQgc2hvd1N1cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekRvdCB8fCB0aGlzLm56Q291bnQgPiAwIHx8ICgodGhpcy5uekNvdW50ID09PSAwKSAmJiB0aGlzLm56U2hvd1plcm8pO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2Utbm90LWEtd3JhcHBlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlLW5vdC1hLXdyYXBwZXInKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXhOdW1iZXJBcnJheSA9IHRoaXMubnpPdmVyZmxvd0NvdW50LnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cbn1cbiJdfQ==