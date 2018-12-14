/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean, toNumber } from '../core/util/convert';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
var NzCarouselComponent = /** @class */ (function () {
    function NzCarouselComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._autoPlay = false;
        this._autoPlaySpeed = 3000;
        this._dots = true;
        this._vertical = false;
        this._effect = 'scrollx';
        this.unsubscribe$ = new Subject();
        this.activeIndex = 0;
        this.transform = 'translate3d(0px, 0px, 0px)';
        this.nzAfterChange = new EventEmitter();
        this.nzBeforeChange = new EventEmitter();
        this.nzEnableSwipe = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.onWindowResize = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.renderContent();
    };
    Object.defineProperty(NzCarouselComponent.prototype, "nextIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeIndex < this.slideContents.length - 1 ? (this.activeIndex + 1) : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "prevIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeIndex > 0 ? (this.activeIndex - 1) : (this.slideContents.length - 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzDots", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dots;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dots = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzEffect", {
        get: /**
         * @return {?}
         */
        function () {
            return this._effect;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effect = value;
            this.updateMode();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzAutoPlay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoPlay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoPlay = toBoolean(value);
            this.setUpAutoPlay();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzAutoPlaySpeed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoPlaySpeed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoPlaySpeed = toNumber(value, null);
            this.setUpAutoPlay();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = toBoolean(value);
            this.updateMode();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} content
     * @param {?} i
     * @return {?}
     */
    NzCarouselComponent.prototype.setActive = /**
     * @param {?} content
     * @param {?} i
     * @return {?}
     */
    function (content, i) {
        if (this.slideContents && this.slideContents.length) {
            this.setUpAutoPlay();
            /** @type {?} */
            var beforeIndex = this.slideContents.toArray().findIndex(function (slide) { return slide.isActive; });
            this.nzBeforeChange.emit({ from: beforeIndex, to: i });
            this.activeIndex = i;
            if (this.nzEffect === 'scrollx') {
                if (this.nzVertical) {
                    this.transform = "translate3d(0px, " + -this.activeIndex * this.elementRef.nativeElement.offsetHeight + "px, 0px)";
                }
                else {
                    this.transform = "translate3d(" + -this.activeIndex * this.elementRef.nativeElement.offsetWidth + "px, 0px, 0px)";
                }
            }
            else {
                this.transform = 'translate3d(0px, 0px, 0px)';
            }
            this.slideContents.forEach(function (slide) { return slide.isActive = slide === content; });
            this.nzAfterChange.emit(i);
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.renderContent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.forEach(function (content, i) {
                content.width = _this.elementRef.nativeElement.offsetWidth;
                if (_this.nzEffect === 'fade') {
                    content.fadeMode = true;
                    if (_this.nzVertical) {
                        content.top = -i * _this.elementRef.nativeElement.offsetHeight;
                    }
                    else {
                        content.left = -i * content.width;
                    }
                }
                else {
                    content.fadeMode = false;
                    content.left = null;
                    content.top = null;
                }
            });
            if (this.nzVertical) {
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
                this.renderer.removeStyle(this.slickList.nativeElement, 'width');
                this.renderer.removeStyle(this.slickList.nativeElement, 'height');
                this.renderer.setStyle(this.slickList.nativeElement, 'height', this.slideContents.first.el.offsetHeight + "px");
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
                this.renderer.setStyle(this.slickTrack.nativeElement, 'height', this.slideContents.length * this.elementRef.nativeElement.offsetHeight + "px");
            }
            else {
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
                this.renderer.removeStyle(this.slickList.nativeElement, 'height');
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
                this.renderer.setStyle(this.slickTrack.nativeElement, 'width', this.slideContents.length * this.elementRef.nativeElement.offsetWidth + "px");
            }
            this.setUpAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.setUpAutoPlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearTimeout();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0) {
            this.timeout = setTimeout(function (_) {
                _this.setActive(_this.slideContents.toArray()[_this.nextIndex], _this.nextIndex);
            }, this.nzAutoPlaySpeed);
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.updateMode = /**
     * @return {?}
     */
    function () {
        if (this.slideContents && this.slideContents.length) {
            this.renderContent();
            this.setActive(this.slideContents.first, 0);
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.clearTimeout = /**
     * @return {?}
     */
    function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.setActive(this.slideContents.toArray()[this.nextIndex], this.nextIndex);
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.pre = /**
     * @return {?}
     */
    function () {
        this.setActive(this.slideContents.toArray()[this.prevIndex], this.prevIndex);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCarouselComponent.prototype.goTo = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index >= 0 && index <= this.slideContents.length - 1) {
            this.setActive(this.slideContents.toArray()[index], index);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === 37) { // Left
            // Left
            this.pre();
            e.preventDefault();
        }
        else if (e.keyCode === 39) { // Right
            // Right
            this.next();
            e.preventDefault();
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    NzCarouselComponent.prototype.swipe = /**
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = 'swipeleft'; }
        if (!this.nzEnableSwipe) {
            return;
        }
        if (action === 'swipeleft') {
            this.next();
        }
        if (action === 'swiperight') {
            this.pre();
        }
    };
    /* tslint:disable:no-any */
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.swipeInProgress = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzEffect === 'scrollx') {
            /** @type {?} */
            var final = e.isFinal;
            /** @type {?} */
            var scrollWidth = final ? 0 : e.deltaX * 1.2;
            /** @type {?} */
            var totalWidth = this.elementRef.nativeElement.offsetWidth;
            if (this.nzVertical) {
                /** @type {?} */
                var totalHeight = this.elementRef.nativeElement.offsetHeight;
                /** @type {?} */
                var scrollPercent = scrollWidth / totalWidth;
                /** @type {?} */
                var scrollHeight = scrollPercent * totalHeight;
                this.transform = "translate3d(0px, " + (-this.activeIndex * totalHeight + scrollHeight) + "px, 0px)";
            }
            else {
                this.transform = "translate3d(" + (-this.activeIndex * totalWidth + scrollWidth) + "px, 0px, 0px)";
            }
        }
        if (e.isFinal) {
            this.setUpAutoPlay();
        }
        else {
            this.clearTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.first.isActive = true;
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.slideContents.changes
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(function () {
            _this.renderContent();
        });
        this.renderContent();
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.clearTimeout();
    };
    NzCarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-carousel',
                    preserveWhitespaces: false,
                    template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzVertical\">\n  <div class=\"slick-list\" #slickList tabindex=\"-1\" (keydown)=\"onKeyDown($event)\" \n    (swipeleft)=\"swipe('swipeleft')\" (swiperight)=\"swipe('swiperight')\" (pan)=\"swipeInProgress($event);\">\n    <div class=\"slick-track\" [style.transform]=\"transform\" #slickTrack (mousedown)=\"$event.preventDefault()\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <ul class=\"slick-dots\" *ngIf=\"nzDots\">\n    <li\n      *ngFor=\"let content of slideContents; let i =index\"\n      [class.slick-active]=\"content.isActive\"\n      (click)=\"setActive(content,i)\">\n      <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n    </li>\n  </ul>\n</div>\n\n<ng-template #renderDotTemplate let-index>\n  <button>{{index + 1}}</button>\n</ng-template>",
                    host: {
                        '[class.ant-carousel]': 'true'
                    },
                    styles: ["\n      :host {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n        transition: all 0.5s ease;\n      }\n\n      .slick-slide {\n        transition: opacity 500ms ease;\n      }\n\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCarouselComponent.propDecorators = {
        slideContents: [{ type: ContentChildren, args: [NzCarouselContentDirective,] }],
        slickList: [{ type: ViewChild, args: ['slickList',] }],
        slickTrack: [{ type: ViewChild, args: ['slickTrack',] }],
        nzAfterChange: [{ type: Output }],
        nzBeforeChange: [{ type: Output }],
        nzEnableSwipe: [{ type: Input }],
        onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
        nzDotRender: [{ type: Input }],
        nzDots: [{ type: Input }],
        nzEffect: [{ type: Input }],
        nzAutoPlay: [{ type: Input }],
        nzAutoPlaySpeed: [{ type: Input }],
        nzVertical: [{ type: Input }, { type: HostBinding, args: ['class.ant-carousel-vertical',] }]
    };
    return NzCarouselComponent;
}());
export { NzCarouselComponent };
function NzCarouselComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCarouselComponent.prototype._autoPlay;
    /** @type {?} */
    NzCarouselComponent.prototype._autoPlaySpeed;
    /** @type {?} */
    NzCarouselComponent.prototype._dots;
    /** @type {?} */
    NzCarouselComponent.prototype._vertical;
    /** @type {?} */
    NzCarouselComponent.prototype._effect;
    /** @type {?} */
    NzCarouselComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzCarouselComponent.prototype.activeIndex;
    /** @type {?} */
    NzCarouselComponent.prototype.transform;
    /** @type {?} */
    NzCarouselComponent.prototype.timeout;
    /** @type {?} */
    NzCarouselComponent.prototype.slideContents;
    /** @type {?} */
    NzCarouselComponent.prototype.slickList;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrack;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAfterChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzBeforeChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEnableSwipe;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDotRender;
    /** @type {?} */
    NzCarouselComponent.prototype.elementRef;
    /** @type {?} */
    NzCarouselComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhcm91c2VsL256LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0lBMFAzRSw2QkFBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzt5QkFwTmxELEtBQUs7OEJBQ0EsSUFBSTtxQkFDYixJQUFJO3lCQUNBLEtBQUs7dUJBQ1AsU0FBUzs0QkFDSixJQUFJLE9BQU8sRUFBUTsyQkFFNUIsQ0FBQzt5QkFDSCw0QkFBNEI7NkJBTVEsSUFBSSxZQUFZLEVBQUU7OEJBQ0ssSUFBSSxZQUFZLEVBQUU7NkJBQ2hFLElBQUk7S0FxTTVCOzs7OztJQWxNRCw0Q0FBYzs7OztJQURkLFVBQ2UsQ0FBVTtRQUN2QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7SUFFRCxzQkFBSSwwQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FB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QWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgdHlwZSBTd2lwZURpcmVjdGlvbiA9ICdzd2lwZWxlZnQnIHwgJ3N3aXBlcmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNhcm91c2VsJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNhcm91c2VsXSc6ICd0cnVlJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuc2xpY2stZG90cyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuc2xpY2stdHJhY2sge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAuc2xpY2stc2xpZGUge1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gICAgICB9XG5cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX2F1dG9QbGF5ID0gZmFsc2U7XG4gIHByaXZhdGUgX2F1dG9QbGF5U3BlZWQgPSAzMDAwO1xuICBwcml2YXRlIF9kb3RzID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZWZmZWN0ID0gJ3Njcm9sbHgnO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgYWN0aXZlSW5kZXggPSAwO1xuICB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCknO1xuICB0aW1lb3V0O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUpIHNsaWRlQ29udGVudHM6IFF1ZXJ5TGlzdDxOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGQoJ3NsaWNrTGlzdCcpIHNsaWNrTGlzdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2xpY2tUcmFjaycpIHNsaWNrVHJhY2s6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBuekFmdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG56QmVmb3JlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG56RW5hYmxlU3dpcGUgPSB0cnVlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbICckZXZlbnQnIF0pXG4gIG9uV2luZG93UmVzaXplKGU6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgfVxuXG4gIGdldCBuZXh0SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbmRleCA8IHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggLSAxID8gKHRoaXMuYWN0aXZlSW5kZXggKyAxKSA6IDA7XG4gIH1cblxuICBnZXQgcHJldkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5kZXggPiAwID8gKHRoaXMuYWN0aXZlSW5kZXggLSAxKSA6ICh0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBASW5wdXQoKSBuekRvdFJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlciB9PjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpEb3RzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZG90cyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpEb3RzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kb3RzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RWZmZWN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lZmZlY3QgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZU1vZGUoKTtcbiAgfVxuXG4gIGdldCBuekVmZmVjdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lZmZlY3Q7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBdXRvUGxheSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9QbGF5ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldFVwQXV0b1BsYXkoKTtcbiAgfVxuXG4gIGdldCBuekF1dG9QbGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdXRvUGxheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekF1dG9QbGF5U3BlZWQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2F1dG9QbGF5U3BlZWQgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XG4gICAgdGhpcy5zZXRVcEF1dG9QbGF5KCk7XG4gIH1cblxuICBnZXQgbnpBdXRvUGxheVNwZWVkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9QbGF5U3BlZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jYXJvdXNlbC12ZXJ0aWNhbCcpXG4gIHNldCBuelZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlTW9kZSgpO1xuICB9XG5cbiAgZ2V0IG56VmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgc2V0QWN0aXZlKGNvbnRlbnQ6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlLCBpOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xuICAgICAgY29uc3QgYmVmb3JlSW5kZXggPSB0aGlzLnNsaWRlQ29udGVudHMudG9BcnJheSgpLmZpbmRJbmRleChzbGlkZSA9PiBzbGlkZS5pc0FjdGl2ZSk7XG4gICAgICB0aGlzLm56QmVmb3JlQ2hhbmdlLmVtaXQoeyBmcm9tOiBiZWZvcmVJbmRleCwgdG86IGkgfSk7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaTtcbiAgICAgIGlmICh0aGlzLm56RWZmZWN0ID09PSAnc2Nyb2xseCcpIHtcbiAgICAgICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xuICAgICAgICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDBweCwgJHstdGhpcy5hY3RpdmVJbmRleCAqIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodH1weCwgMHB4KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHstdGhpcy5hY3RpdmVJbmRleCAqIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRofXB4LCAwcHgsIDBweClgO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSc7XG4gICAgICB9XG4gICAgICB0aGlzLnNsaWRlQ29udGVudHMuZm9yRWFjaChzbGlkZSA9PiBzbGlkZS5pc0FjdGl2ZSA9IHNsaWRlID09PSBjb250ZW50KTtcbiAgICAgIHRoaXMubnpBZnRlckNoYW5nZS5lbWl0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVDb250ZW50cyAmJiB0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNsaWRlQ29udGVudHMuZm9yRWFjaCgoY29udGVudCwgaSkgPT4ge1xuICAgICAgICBjb250ZW50LndpZHRoID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmICh0aGlzLm56RWZmZWN0ID09PSAnZmFkZScpIHtcbiAgICAgICAgICBjb250ZW50LmZhZGVNb2RlID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XG4gICAgICAgICAgICBjb250ZW50LnRvcCA9IC1pICogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50LmxlZnQgPSAtaSAqIGNvbnRlbnQud2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRlbnQuZmFkZU1vZGUgPSBmYWxzZTtcbiAgICAgICAgICBjb250ZW50LmxlZnQgPSBudWxsO1xuICAgICAgICAgIGNvbnRlbnQudG9wID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuc2xpY2tMaXN0Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuc2xpY2tMaXN0Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgYCR7dGhpcy5zbGlkZUNvbnRlbnRzLmZpcnN0LmVsLm9mZnNldEhlaWdodH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBgJHt0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoICogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5zbGlja0xpc3QubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAqIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRofXB4YCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFVwQXV0b1BsYXkoKTtcbiAgICB9XG4gIH1cblxuICBzZXRVcEF1dG9QbGF5KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gICAgaWYgKHRoaXMubnpBdXRvUGxheSAmJiB0aGlzLm56QXV0b1BsYXlTcGVlZCA+IDApIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoXyA9PiB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuc2xpZGVDb250ZW50cy50b0FycmF5KClbIHRoaXMubmV4dEluZGV4IF0sIHRoaXMubmV4dEluZGV4KTtcbiAgICAgIH0sIHRoaXMubnpBdXRvUGxheVNwZWVkKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNb2RlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLnNsaWRlQ29udGVudHMuZmlyc3QsIDApO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyVGltZW91dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLnNsaWRlQ29udGVudHMudG9BcnJheSgpWyB0aGlzLm5leHRJbmRleCBdLCB0aGlzLm5leHRJbmRleCk7XG4gIH1cblxuICBwcmUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zbGlkZUNvbnRlbnRzLnRvQXJyYXkoKVsgdGhpcy5wcmV2SW5kZXggXSwgdGhpcy5wcmV2SW5kZXgpO1xuICB9XG5cbiAgZ29UbyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuc2xpZGVDb250ZW50cy50b0FycmF5KClbIGluZGV4IF0sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM3KSB7IC8vIExlZnRcbiAgICAgIHRoaXMucHJlKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7IC8vIFJpZ2h0XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZShhY3Rpb246IFN3aXBlRGlyZWN0aW9uID0gJ3N3aXBlbGVmdCcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpFbmFibGVTd2lwZSkgeyByZXR1cm47IH1cbiAgICBpZiAoYWN0aW9uID09PSAnc3dpcGVsZWZ0JykgeyB0aGlzLm5leHQoKTsgfVxuICAgIGlmIChhY3Rpb24gPT09ICdzd2lwZXJpZ2h0JykgeyB0aGlzLnByZSgpOyB9XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbiAgc3dpcGVJblByb2dyZXNzKGU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RWZmZWN0ID09PSAnc2Nyb2xseCcpIHtcbiAgICAgIGNvbnN0IGZpbmFsID0gZS5pc0ZpbmFsO1xuICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSBmaW5hbCA/IDAgOiBlLmRlbHRhWCAqIDEuMjtcbiAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNjcm9sbFBlcmNlbnQgPSBzY3JvbGxXaWR0aCAvIHRvdGFsV2lkdGg7XG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9ICBzY3JvbGxQZXJjZW50ICogdG90YWxIZWlnaHQ7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDBweCwgJHstdGhpcy5hY3RpdmVJbmRleCAqIHRvdGFsSGVpZ2h0ICsgc2Nyb2xsSGVpZ2h0fXB4LCAwcHgpYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7LXRoaXMuYWN0aXZlSW5kZXggKiB0b3RhbFdpZHRoICsgc2Nyb2xsV2lkdGh9cHgsIDBweCwgMHB4KWA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlLmlzRmluYWwpIHtcbiAgICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2xpZGVDb250ZW50cy5maXJzdC5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2xpZGVDb250ZW50cy5jaGFuZ2VzXG4gICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgfVxuXG59XG4iXX0=