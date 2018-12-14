/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { isEmpty } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var NzBadgeComponent = /** @class */ (function () {
    function NzBadgeComponent(zone, renderer, elementRef) {
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
    Object.defineProperty(NzBadgeComponent.prototype, "nzShowZero", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showZero;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showZero = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzBadgeComponent.prototype, "nzDot", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showDot;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showDot = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzBadgeComponent.prototype, "nzCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._count;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value < 0) {
                this._count = 0;
            }
            else {
                this._count = value;
            }
            this.countArray = this._count.toString().split('');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzBadgeComponent.prototype, "showSup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzDot || this.nzCount > 0 || ((this.nzCount === 0) && this.nzShowZero);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
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
                    styles: ["\n      :host:not(.ant-badge-not-a-wrapper) .ant-badge-count {\n        position: absolute;\n        transform: translateX(50%);\n        right: 0;\n      }\n\n      :host .ant-badge-dot {\n        position: absolute;\n        transform: translateX(50%);\n        right: 0;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzBadgeComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
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
    return NzBadgeComponent;
}());
export { NzBadgeComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImJhZGdlL256LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQWlHL0MsMEJBQW9CLElBQVksRUFBVSxRQUFtQixFQUFVLFVBQXNCO1FBQXpFLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTt3QkF4RDFFLEtBQUs7eUJBQ0osS0FBSzs4QkFFUixFQUFFOzBCQUNOLEVBQUU7Z0NBQ0ksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUU7K0JBRXhCLEVBQUU7S0FtRDVCO0lBOUNELHNCQUNJLHdDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTtJQU1ELHNCQUNJLG1DQUFLOzs7O1FBSVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBUEQsVUFDVSxLQUFjO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDOzs7T0FBQTtJQU1ELHNCQUNJLHFDQUFPOzs7O1FBU1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBWkQsVUFDWSxLQUFhO1lBQ3ZCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEQ7OztPQUFBO0lBTUQsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEY7OztPQUFBOzs7O0lBRUQsdUNBQVk7OztJQUFaO1FBQ0UsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2xGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ3JGO0tBQ0Y7Ozs7SUFNRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pFOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOztnQkF2R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxVQUFVO29CQUMvQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixVQUFVLEVBQVc7d0JBQ25CLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxDQUFDLDBDQUEwQyxDQUFDOzZCQUNwRCxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxDQUFDLDBDQUEwQyxDQUFDOzZCQUNwRCxDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsNG1DQUFnRDtvQkFDaEQsSUFBSSxFQUFpQjt3QkFDbkIsbUJBQW1CLEVBQVMsTUFBTTt3QkFDbEMsMEJBQTBCLEVBQUUsVUFBVTtxQkFDdkM7NkJBRUMsa1NBWUM7aUJBRUo7Ozs7Z0JBckRDLE1BQU07Z0JBRU4sU0FBUztnQkFKVCxVQUFVOzs7aUNBK0RULFNBQVMsU0FBQyxnQkFBZ0I7a0NBQzFCLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBRUwsS0FBSzt3QkFTTCxLQUFLOzBCQVNMLEtBQUs7OzJCQTFGUjs7U0EyRGEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBhbmltYXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmV4cG9ydCB0eXBlIE56QmFkZ2VTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ3Byb2Nlc3NpbmcnIHwgJ2RlZmF1bHQnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1iYWRnZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignZW50ZXJMZWF2ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgICBhbmltYXRlKCcwLjNzIGN1YmljLWJlemllcigwLjEyLCAwLjQsIDAuMjksIDEuNDYpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNCwgMC4yOSwgMS40NiknKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1iYWRnZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1iYWRnZV0nICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWJhZGdlLXN0YXR1c10nOiAnbnpTdGF0dXMnXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICBgXG4gICAgICA6aG9zdDpub3QoLmFudC1iYWRnZS1ub3QtYS13cmFwcGVyKSAuYW50LWJhZGdlLWNvdW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IC5hbnQtYmFkZ2UtZG90IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56QmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9zaG93RG90ID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3daZXJvID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvdW50OiBudW1iZXI7XG4gIG1heE51bWJlckFycmF5ID0gW107XG4gIGNvdW50QXJyYXkgPSBbXTtcbiAgY291bnRTaW5nbGVBcnJheSA9IFsgMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSBdO1xuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcpIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBuek92ZXJmbG93Q291bnQgPSA5OTtcbiAgQElucHV0KCkgbnpUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56QmFkZ2VTdGF0dXNUeXBlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3daZXJvKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1plcm8gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1plcm8oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3daZXJvO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RG90KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0RvdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpEb3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dEb3Q7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgdGhpcy5fY291bnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb3VudCA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmNvdW50QXJyYXkgPSB0aGlzLl9jb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgfVxuXG4gIGdldCBuekNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG5cbiAgZ2V0IHNob3dTdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpEb3QgfHwgdGhpcy5uekNvdW50ID4gMCB8fCAoKHRoaXMubnpDb3VudCA9PT0gMCkgJiYgdGhpcy5uelNob3daZXJvKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlLW5vdC1hLXdyYXBwZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1iYWRnZS1ub3QtYS13cmFwcGVyJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWF4TnVtYmVyQXJyYXkgPSB0aGlzLm56T3ZlcmZsb3dDb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG59XG4iXX0=