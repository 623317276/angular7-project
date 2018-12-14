/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { isNotNil } from '../util/check';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NzMeasureScrollbarService {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.scrollbarMeasure = {
            position: 'absolute',
            top: '-9999px',
            width: '50px',
            height: '50px',
            overflow: 'scroll'
        };
        this.initScrollBarWidth();
    }
    /**
     * @return {?}
     */
    get scrollBarWidth() {
        if (isNotNil(this._scrollbarWidth)) {
            return this._scrollbarWidth;
        }
        this.initScrollBarWidth();
        return this._scrollbarWidth;
    }
    /**
     * @return {?}
     */
    initScrollBarWidth() {
        /** @type {?} */
        const scrollDiv = this.document.createElement('div');
        for (const scrollProp in this.scrollbarMeasure) {
            if (this.scrollbarMeasure.hasOwnProperty(scrollProp)) {
                scrollDiv.style[scrollProp] = this.scrollbarMeasure[scrollProp];
            }
        }
        this.document.body.appendChild(scrollDiv);
        /** @type {?} */
        const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.document.body.removeChild(scrollDiv);
        this._scrollbarWidth = width;
    }
}
NzMeasureScrollbarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzMeasureScrollbarService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ NzMeasureScrollbarService.ngInjectableDef = i0.defineInjectable({ factory: function NzMeasureScrollbarService_Factory() { return new NzMeasureScrollbarService(i0.inject(i1.DOCUMENT)); }, token: NzMeasureScrollbarService, providedIn: "root" });
function NzMeasureScrollbarService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMeasureScrollbarService.prototype._scrollbarWidth;
    /** @type {?} */
    NzMeasureScrollbarService.prototype.scrollbarMeasure;
    /** @type {?} */
    NzMeasureScrollbarService.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3NlcnZpY2VzL256LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLekMsTUFBTTs7OztJQWdDSixZQUFzQyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztnQ0E5QnhCO1lBQ3pCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBTyxTQUFTO1lBQ25CLEtBQUssRUFBSyxNQUFNO1lBQ2hCLE1BQU0sRUFBSSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxRQUFRO1NBQ25CO1FBeUJDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQzNCOzs7O0lBeEJELElBQUksY0FBYztRQUNoQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0tBQzdCOzs7O0lBRUQsa0JBQWtCOztRQUNoQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxLQUFLLE1BQU0sVUFBVSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BELFNBQVMsQ0FBQyxLQUFLLENBQUUsVUFBVSxDQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLFVBQVUsQ0FBRSxDQUFDO2FBQ3JFO1NBQ0Y7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7O1FBQzFDLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7S0FDOUI7OztZQWhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBaUNjLE1BQU0sU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL3V0aWwvY2hlY2snO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfc2Nyb2xsYmFyV2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBzY3JvbGxiYXJNZWFzdXJlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcCAgICAgOiAnLTk5OTlweCcsXG4gICAgd2lkdGggICA6ICc1MHB4JyxcbiAgICBoZWlnaHQgIDogJzUwcHgnLFxuICAgIG92ZXJmbG93OiAnc2Nyb2xsJ1xuICB9O1xuXG4gIGdldCBzY3JvbGxCYXJXaWR0aCgpOiBudW1iZXIge1xuICAgIGlmIChpc05vdE5pbCh0aGlzLl9zY3JvbGxiYXJXaWR0aCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxiYXJXaWR0aDtcbiAgICB9XG4gICAgdGhpcy5pbml0U2Nyb2xsQmFyV2lkdGgoKTtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYmFyV2lkdGg7XG4gIH1cblxuICBpbml0U2Nyb2xsQmFyV2lkdGgoKTogdm9pZCB7XG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGNvbnN0IHNjcm9sbFByb3AgaW4gdGhpcy5zY3JvbGxiYXJNZWFzdXJlKSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxiYXJNZWFzdXJlLmhhc093blByb3BlcnR5KHNjcm9sbFByb3ApKSB7XG4gICAgICAgIHNjcm9sbERpdi5zdHlsZVsgc2Nyb2xsUHJvcCBdID0gdGhpcy5zY3JvbGxiYXJNZWFzdXJlWyBzY3JvbGxQcm9wIF07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgIGNvbnN0IHdpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gd2lkdGg7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuaW5pdFNjcm9sbEJhcldpZHRoKCk7XG4gIH1cbn1cbiJdfQ==