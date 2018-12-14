/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { matchMedia } from '../core/polyfill/match-media';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
/**
 * @record
 */
export function BreakpointMap() { }
function BreakpointMap_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BreakpointMap.prototype.xs;
    /** @type {?|undefined} */
    BreakpointMap.prototype.sm;
    /** @type {?|undefined} */
    BreakpointMap.prototype.md;
    /** @type {?|undefined} */
    BreakpointMap.prototype.lg;
    /** @type {?|undefined} */
    BreakpointMap.prototype.xl;
    /** @type {?|undefined} */
    BreakpointMap.prototype.xxl;
}
/** @type {?} */
const responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
export class NzRowComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     */
    constructor(elementRef, renderer, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this._align = 'top';
        this._justify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this._type = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get nzType() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAlign(value) {
        this._align = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get nzAlign() {
        return this._align;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzJustify(value) {
        this._justify = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get nzJustify() {
        return this._justify;
    }
    /**
     * @return {?}
     */
    get nzGutter() {
        return this._gutter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzGutter(value) {
        this._gutter = value;
        this.updateGutter();
        this.setStyle();
    }
    /**
     * @return {?}
     */
    setStyle() {
        this.renderer.setStyle(this.el, 'margin-left', `-${this.actualGutter / 2}px`);
        this.renderer.setStyle(this.el, 'margin-right', `-${this.actualGutter / 2}px`);
    }
    /**
     * @return {?}
     */
    calculateGutter() {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return;
        }
    }
    /**
     * @return {?}
     */
    updateGutter() {
        this.actualGutter = this.calculateGutter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onWindowResize(e) {
        this.watchMedia();
    }
    /**
     * @return {?}
     */
    watchMedia() {
        Object.keys(responsiveMap).map((screen) => {
            /** @type {?} */
            const matchBelow = matchMedia(responsiveMap[screen]).matches;
            if (matchBelow) {
                this.breakPoint = screen;
            }
        });
        this.updateGutter();
        this.setStyle();
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [`${this.prefixCls}`]: !this.nzType,
            [`${this.prefixCls}-${this.nzType}`]: this.nzType,
            [`${this.prefixCls}-${this.nzType}-${this.nzAlign}`]: this.nzType && this.nzAlign,
            [`${this.prefixCls}-${this.nzType}-${this.nzJustify}`]: this.nzType && this.nzJustify
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.watchMedia();
    }
}
NzRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-row',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService }
];
NzRowComponent.propDecorators = {
    nzType: [{ type: Input }],
    nzAlign: [{ type: Input }],
    nzJustify: [{ type: Input }],
    nzGutter: [{ type: Input }],
    onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
function NzRowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRowComponent.prototype._gutter;
    /** @type {?} */
    NzRowComponent.prototype._type;
    /** @type {?} */
    NzRowComponent.prototype._align;
    /** @type {?} */
    NzRowComponent.prototype._justify;
    /** @type {?} */
    NzRowComponent.prototype.el;
    /** @type {?} */
    NzRowComponent.prototype.prefixCls;
    /** @type {?} */
    NzRowComponent.prototype.breakPoint;
    /** @type {?} */
    NzRowComponent.prototype.actualGutter;
    /** @type {?} */
    NzRowComponent.prototype.elementRef;
    /** @type {?} */
    NzRowComponent.prototype.renderer;
    /** @type {?} */
    NzRowComponent.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnRGLE1BQU0sYUFBYSxHQUFrQjtJQUNuQyxFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxxQkFBcUI7SUFDMUIsR0FBRyxFQUFFLHFCQUFxQjtDQUMzQixDQUFDO0FBUUYsTUFBTTs7Ozs7O0lBa0dKLFlBQW1CLFVBQXNCLEVBQVMsUUFBbUIsRUFBUyx3QkFBa0Q7UUFBN0csZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO3NCQTlGdEcsS0FBSzt3QkFDRCxPQUFPO2tCQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTt5QkFDbkMsU0FBUztLQTRGNUI7Ozs7O0lBeEZELElBQ0ksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQUVELElBQ0ksT0FBTyxDQUFDLEtBQWM7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TUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTO1NBQ3hGLENBQUM7UUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDbEU7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNuQjs7O1lBOUdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsUUFBUTtnQkFDN0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7Z0JBQ2pELHFDQUE4QzthQUMvQzs7OztZQXRDQyxVQUFVO1lBSVYsU0FBUztZQUlGLHdCQUF3Qjs7O3FCQTBDOUIsS0FBSztzQkFVTCxLQUFLO3dCQVVMLEtBQUs7dUJBVUwsS0FBSzs2QkE4QkwsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IG1hdGNoTWVkaWEgfSBmcm9tICcuLi9jb3JlL3BvbHlmaWxsL21hdGNoLW1lZGlhJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIE56SnVzdGlmeSA9ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ3NwYWNlLWFyb3VuZCcgfCAnc3BhY2UtYmV0d2Vlbic7XG5leHBvcnQgdHlwZSBOekFsaWduID0gJ3RvcCcgfCAnbWlkZGxlJyB8ICdib3R0b20nO1xuZXhwb3J0IHR5cGUgTnpUeXBlID0gJ2ZsZXgnIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnQgPSAneHhsJyB8ICd4bCcgfCAnbGcnIHwgJ21kJyB8ICdzbScgfCAneHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFrcG9pbnRNYXAge1xuICB4cz86IHN0cmluZztcbiAgc20/OiBzdHJpbmc7XG4gIG1kPzogc3RyaW5nO1xuICBsZz86IHN0cmluZztcbiAgeGw/OiBzdHJpbmc7XG4gIHh4bD86IHN0cmluZztcbn1cblxuY29uc3QgcmVzcG9uc2l2ZU1hcDogQnJlYWtwb2ludE1hcCA9IHtcbiAgeHMgOiAnKG1heC13aWR0aDogNTc1cHgpJyxcbiAgc20gOiAnKG1pbi13aWR0aDogNTc2cHgpJyxcbiAgbWQgOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgbGcgOiAnKG1pbi13aWR0aDogOTkycHgpJyxcbiAgeGwgOiAnKG1pbi13aWR0aDogMTIwMHB4KScsXG4gIHh4bDogJyhtaW4td2lkdGg6IDE2MDBweCknXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXJvdycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1yb3cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56Um93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIF9ndXR0ZXI6IG51bWJlciB8IG9iamVjdDtcbiAgcHJpdmF0ZSBfdHlwZTogTnpUeXBlO1xuICBwcml2YXRlIF9hbGlnbjogTnpBbGlnbiA9ICd0b3AnO1xuICBwcml2YXRlIF9qdXN0aWZ5OiBOekp1c3RpZnkgPSAnc3RhcnQnO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtcm93JztcbiAgcHJpdmF0ZSBicmVha1BvaW50OiBCcmVha3BvaW50O1xuICBhY3R1YWxHdXR0ZXI6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpUeXBlKHZhbHVlOiBOelR5cGUpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56VHlwZSgpOiBOelR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QWxpZ24odmFsdWU6IE56QWxpZ24pIHtcbiAgICB0aGlzLl9hbGlnbiA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuekFsaWduKCk6IE56QWxpZ24ge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekp1c3RpZnkodmFsdWU6IE56SnVzdGlmeSkge1xuICAgIHRoaXMuX2p1c3RpZnkgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpKdXN0aWZ5KCk6IE56SnVzdGlmeSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgbnpHdXR0ZXIoKTogbnVtYmVyIHwgb2JqZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyO1xuICB9XG5cbiAgc2V0IG56R3V0dGVyKHZhbHVlOiBudW1iZXIgfCBvYmplY3QpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUd1dHRlcigpO1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIHNldFN0eWxlKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ21hcmdpbi1sZWZ0JywgYC0ke3RoaXMuYWN0dWFsR3V0dGVyIC8gMn1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ21hcmdpbi1yaWdodCcsIGAtJHt0aGlzLmFjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUd1dHRlcigpOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgdGhpcy5uekd1dHRlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm56R3V0dGVyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmVha1BvaW50ICYmIHRoaXMubnpHdXR0ZXJbIHRoaXMuYnJlYWtQb2ludCBdKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekd1dHRlclsgdGhpcy5icmVha1BvaW50IF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVHdXR0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hY3R1YWxHdXR0ZXIgPSB0aGlzLmNhbGN1bGF0ZUd1dHRlcigpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsgJyRldmVudCcgXSlcbiAgb25XaW5kb3dSZXNpemUoZTogVUlFdmVudCk6IHZvaWQge1xuICAgIHRoaXMud2F0Y2hNZWRpYSgpO1xuICB9XG5cbiAgd2F0Y2hNZWRpYSgpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoKHNjcmVlbjogQnJlYWtwb2ludCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IG1hdGNoTWVkaWEocmVzcG9uc2l2ZU1hcFsgc2NyZWVuIF0pLm1hdGNoZXM7XG4gICAgICBpZiAobWF0Y2hCZWxvdykge1xuICAgICAgICB0aGlzLmJyZWFrUG9pbnQgPSBzY3JlZW47XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc31gIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICF0aGlzLm56VHlwZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9YCBdICAgICAgICAgICAgICAgICAgOiB0aGlzLm56VHlwZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9LSR7dGhpcy5uekFsaWdufWAgXSAgOiB0aGlzLm56VHlwZSAmJiB0aGlzLm56QWxpZ24sXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfS0ke3RoaXMubnpKdXN0aWZ5fWAgXTogdGhpcy5uelR5cGUgJiYgdGhpcy5uekp1c3RpZnlcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMud2F0Y2hNZWRpYSgpO1xuICB9XG59XG4iXX0=