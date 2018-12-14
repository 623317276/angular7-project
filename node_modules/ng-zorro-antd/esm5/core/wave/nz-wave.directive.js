/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone } from '@angular/core';
import { NzWaveRenderer } from './nz-wave-renderer';
var NzWaveDirective = /** @class */ (function () {
    function NzWaveDirective(ngZone, elementRef) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.nzWaveExtraNode = false;
    }
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    };
    NzWaveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-wave]'
                },] }
    ];
    /** @nocollapse */
    NzWaveDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef }
    ]; };
    NzWaveDirective.propDecorators = {
        nzWaveExtraNode: [{ type: Input }]
    };
    return NzWaveDirective;
}());
export { NzWaveDirective };
function NzWaveDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzWaveDirective.prototype.waveRenderer;
    /** @type {?} */
    NzWaveDirective.prototype.nzWaveExtraNode;
    /** @type {?} */
    NzWaveDirective.prototype.ngZone;
    /** @type {?} */
    NzWaveDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS93YXZlL256LXdhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBV2xELHlCQUFvQixNQUFjLEVBQVUsVUFBc0I7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7K0JBRnZDLEtBQUs7S0FHL0I7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtLQUNGOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzFHO0tBQ0Y7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCOzs7O2dCQUxzQyxNQUFNO2dCQUF6QixVQUFVOzs7a0NBVTNCLEtBQUs7OzBCQVZSOztTQU1hLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOeldhdmVSZW5kZXJlciB9IGZyb20gJy4vbnotd2F2ZS1yZW5kZXJlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei13YXZlXSdcbn0pXG5leHBvcnQgY2xhc3MgTnpXYXZlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgd2F2ZVJlbmRlcmVyOiBOeldhdmVSZW5kZXJlcjtcblxuICBASW5wdXQoKSBueldhdmVFeHRyYU5vZGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLndhdmVSZW5kZXJlcikge1xuICAgICAgdGhpcy53YXZlUmVuZGVyZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy53YXZlUmVuZGVyZXIgPSBuZXcgTnpXYXZlUmVuZGVyZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubmdab25lLCB0aGlzLm56V2F2ZUV4dHJhTm9kZSk7XG4gICAgfVxuICB9XG59XG4iXX0=