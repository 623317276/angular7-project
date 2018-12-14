/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Input, NgZone, QueryList, Renderer2, ViewChild } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { filterNotEmptyNode, isEmpty } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzWaveDirective } from '../core/wave/nz-wave.directive';
import { NzIconDirective } from '../icon/nz-icon.directive';
var NzButtonComponent = /** @class */ (function () {
    function NzButtonComponent(elementRef, cdr, renderer, nzUpdateHostClassService, ngZone) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this._ghost = false;
        this._search = false;
        this._loading = false;
        this._block = false;
        this.el = this.elementRef.nativeElement;
        this.iconOnly = false;
        this.prefixCls = 'ant-btn';
        this.sizeMap = { large: 'lg', small: 'sm' };
        this.nzWave = new NzWaveDirective(this.ngZone, this.elementRef);
    }
    Object.defineProperty(NzButtonComponent.prototype, "nzBlock", {
        get: /**
         * @return {?}
         */
        function () {
            return this._block;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._block = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzGhost", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ghost;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ghost = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._search;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._search = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzShape", {
        get: /**
         * @return {?}
         */
        function () {
            return this._shape;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._shape = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzButtonComponent.prototype, "nzLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = toBoolean(value);
            this.setClassMap();
            this.updateIconDisplay(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzButtonComponent.prototype.updateIconDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzButtonComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-" + this.nzShape] = this.nzShape,
            _a[this.prefixCls + "-" + this.sizeMap[this.nzSize]] = this.sizeMap[this.nzSize],
            _a[this.prefixCls + "-loading"] = this.nzLoading,
            _a[this.prefixCls + "-icon-only"] = this.iconOnly,
            _a[this.prefixCls + "-background-ghost"] = this.nzGhost,
            _a[this.prefixCls + "-block"] = this.nzBlock,
            _a["ant-input-search-button"] = this.nzSearch,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.nzLoading);
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.moveIcon = /**
     * @return {?}
     */
    function () {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            /** @type {?} */
            var firstChildElement = this.findFirstNotEmptyNode(this.contentElement.nativeElement);
            /** @type {?} */
            var lastChildElement = this.findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && (firstChildElement === this.listOfIconElement.first.nativeElement)) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = /** @type {?} */ (firstChildElement);
            }
            else if (lastChildElement && (lastChildElement === this.listOfIconElement.last.nativeElement)) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzButtonComponent.prototype.findFirstNotEmptyNode = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var children = element.childNodes;
        for (var i = 0; i < children.length; i++) {
            /** @type {?} */
            var node = children.item(i);
            if (filterNotEmptyNode(node)) {
                return node;
            }
        }
        return null;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzButtonComponent.prototype.findLastNotEmptyNode = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var children = element.childNodes;
        for (var i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            var node = children.item(i);
            if (filterNotEmptyNode(node)) {
                return node;
            }
        }
        return null;
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el, this.prefixCls);
        this.nzWave.ngOnInit();
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzWave.ngOnDestroy();
    };
    NzButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-button]',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    template: "<i nz-icon type=\"loading\" *ngIf=\"nzLoading\"></i>\n<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>"
                }] }
    ];
    /** @nocollapse */
    NzButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: NgZone }
    ]; };
    NzButtonComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement',] }],
        listOfIconElement: [{ type: ContentChildren, args: [NzIconDirective, { read: ElementRef },] }],
        nzBlock: [{ type: Input }],
        nzGhost: [{ type: Input }],
        nzSearch: [{ type: Input }],
        nzType: [{ type: Input }],
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzWave: [{ type: HostBinding, args: ['attr.nz-wave',] }]
    };
    return NzButtonComponent;
}());
export { NzButtonComponent };
function NzButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzButtonComponent.prototype._ghost;
    /** @type {?} */
    NzButtonComponent.prototype._search;
    /** @type {?} */
    NzButtonComponent.prototype._type;
    /** @type {?} */
    NzButtonComponent.prototype._shape;
    /** @type {?} */
    NzButtonComponent.prototype._size;
    /** @type {?} */
    NzButtonComponent.prototype._loading;
    /** @type {?} */
    NzButtonComponent.prototype._block;
    /** @type {?} */
    NzButtonComponent.prototype.el;
    /** @type {?} */
    NzButtonComponent.prototype.iconElement;
    /** @type {?} */
    NzButtonComponent.prototype.iconOnly;
    /** @type {?} */
    NzButtonComponent.prototype.prefixCls;
    /** @type {?} */
    NzButtonComponent.prototype.sizeMap;
    /** @type {?} */
    NzButtonComponent.prototype.contentElement;
    /** @type {?} */
    NzButtonComponent.prototype.listOfIconElement;
    /** @type {?} */
    NzButtonComponent.prototype.nzWave;
    /** @type {?} */
    NzButtonComponent.prototype.elementRef;
    /** @type {?} */
    NzButtonComponent.prototype.cdr;
    /** @type {?} */
    NzButtonComponent.prototype.renderer;
    /** @type {?} */
    NzButtonComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzButtonComponent.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJidXR0b24vbnotYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFHTixTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBZ0wxRCwyQkFBb0IsVUFBc0IsRUFBVSxHQUFzQixFQUFVLFFBQW1CLEVBQVUsd0JBQWtELEVBQVUsTUFBYztRQUF2SyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7c0JBbksxSyxLQUFLO3VCQUNKLEtBQUs7d0JBSUosS0FBSztzQkFDUCxLQUFLO2tCQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTt3QkFFcEMsS0FBSzt5QkFDSixTQUFTO3VCQUNYLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3NCQTJFUixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7S0E4RXRGO0lBckpELHNCQUNJLHNDQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBUkQsVUFDWSxLQUFjO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjs7O09BQUE7SUFNRCxzQkFDSSxzQ0FBTzs7OztRQUtYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVJELFVBQ1ksS0FBYztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7OztPQUFBO0lBTUQsc0JBQ0ksdUNBQVE7Ozs7UUFLWjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFSRCxVQUNhLEtBQWM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCOzs7T0FBQTtJQU1ELHNCQUNJLHFDQUFNOzs7O1FBS1Y7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBUkQsVUFDVyxLQUFtQjtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7OztPQUFBO0lBTUQsc0JBQ0ksc0NBQU87Ozs7UUFLWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFSRCxVQUNZLEtBQW9CO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjs7O09BQUE7SUFNRCxzQkFDSSxxQ0FBTTs7OztRQUtWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQVJELFVBQ1csS0FBbUI7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCOzs7T0FBQTtJQU1ELHNCQUNJLHdDQUFTOzs7O1FBTWI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBVEQsVUFDYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7OztPQUFBOzs7OztJQVFELDZDQUFpQjs7OztJQUFqQixVQUFrQixLQUFjO1FBQzlCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdEY7S0FDRjtJQUVELHdHQUF3Rzs7Ozs7SUFDeEcsdUNBQVc7Ozs7SUFBWDs7O1FBQ0UsSUFBTSxRQUFRO1lBQ1osR0FBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxNQUFRLElBQW9CLElBQUksQ0FBQyxNQUFNO1lBQ25FLEdBQUssSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsT0FBUyxJQUFtQixJQUFJLENBQUMsT0FBTztZQUNwRSxHQUFLLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFO1lBQ25GLEdBQUssSUFBSSxDQUFDLFNBQVMsYUFBVSxJQUEyQixJQUFJLENBQUMsU0FBUztZQUN0RSxHQUFLLElBQUksQ0FBQyxTQUFTLGVBQVksSUFBeUIsSUFBSSxDQUFDLFFBQVE7WUFDckUsR0FBSyxJQUFJLENBQUMsU0FBUyxzQkFBbUIsSUFBa0IsSUFBSSxDQUFDLE9BQU87WUFDcEUsR0FBSyxJQUFJLENBQUMsU0FBUyxXQUFRLElBQTZCLElBQUksQ0FBQyxPQUFPO1lBQ3BFLEdBQUUseUJBQXlCLElBQTZCLElBQUksQ0FBQyxRQUFRO2dCQUNyRTtRQUNGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNsRTs7OztJQUVELHdDQUFZOzs7SUFBWjs7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztRQUN4RSxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztRQUV4RSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMxQjs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7O1lBQzNELElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7O1lBQ3hGLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEYsSUFBSSxpQkFBaUIsSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUYsSUFBSSxDQUFDLFdBQVcscUJBQUcsaUJBQWdDLENBQUEsQ0FBQzthQUNyRDtpQkFBTSxJQUFJLGdCQUFnQixJQUFJLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDL0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3REO1NBQ0Y7S0FDRjs7Ozs7SUFFRCxpREFBcUI7Ozs7SUFBckIsVUFBc0IsT0FBb0I7O1FBQ3hDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBQ3hDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFRCxnREFBb0I7Ozs7SUFBcEIsVUFBcUIsT0FBb0I7O1FBQ3ZDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUM3QyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7SUFLRCw4Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzNCOztnQkF4TEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxhQUFhO29CQUNsQyxTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtvQkFDakQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsK0pBQWlEO2lCQUNsRDs7OztnQkExQkMsVUFBVTtnQkFIVixpQkFBaUI7Z0JBVWpCLFNBQVM7Z0JBSUYsd0JBQXdCO2dCQVIvQixNQUFNOzs7aUNBcUNMLFNBQVMsU0FBQyxnQkFBZ0I7b0NBQzFCLGVBQWUsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOzBCQUVyRCxLQUFLOzBCQVVMLEtBQUs7MkJBVUwsS0FBSzt5QkFVTCxLQUFLOzBCQVVMLEtBQUs7eUJBVUwsS0FBSzs0QkFVTCxLQUFLO3lCQVdMLFdBQVcsU0FBQyxjQUFjOzs0QkF2SDdCOztTQWdDYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IGZpbHRlck5vdEVtcHR5Tm9kZSwgaXNFbXB0eSB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOeldhdmVEaXJlY3RpdmUgfSBmcm9tICcuLi9jb3JlL3dhdmUvbnotd2F2ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIE56QnV0dG9uVHlwZSA9ICdwcmltYXJ5JyB8ICdkYXNoZWQnIHwgJ2Rhbmdlcic7XG5leHBvcnQgdHlwZSBOekJ1dHRvblNoYXBlID0gJ2NpcmNsZScgfCBudWxsIDtcbmV4cG9ydCB0eXBlIE56QnV0dG9uU2l6ZSA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ2RlZmF1bHQnIDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbbnotYnV0dG9uXScsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9naG9zdCA9IGZhbHNlO1xuICBwcml2YXRlIF9zZWFyY2ggPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdHlwZTogTnpCdXR0b25UeXBlO1xuICBwcml2YXRlIF9zaGFwZTogTnpCdXR0b25TaGFwZTtcbiAgcHJpdmF0ZSBfc2l6ZTogTnpCdXR0b25TaXplO1xuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2Jsb2NrID0gZmFsc2U7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgaWNvbkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGljb25Pbmx5ID0gZmFsc2U7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1idG4nO1xuICBwcml2YXRlIHNpemVNYXAgPSB7IGxhcmdlOiAnbGcnLCBzbWFsbDogJ3NtJyB9O1xuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcpIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKE56SWNvbkRpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pIGxpc3RPZkljb25FbGVtZW50OiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQElucHV0KClcbiAgc2V0IG56QmxvY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ibG9jayA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56QmxvY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2NrO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56R2hvc3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9naG9zdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56R2hvc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2dob3N0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpTZWFyY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelR5cGUodmFsdWU6IE56QnV0dG9uVHlwZSkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpUeXBlKCk6IE56QnV0dG9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaGFwZSh2YWx1ZTogTnpCdXR0b25TaGFwZSkge1xuICAgIHRoaXMuX3NoYXBlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56U2hhcGUoKTogTnpCdXR0b25TaGFwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2l6ZSh2YWx1ZTogTnpCdXR0b25TaXplKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuelNpemUoKTogTnpCdXR0b25TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekxvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVJY29uRGlzcGxheSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm56LXdhdmUnKSBueldhdmUgPSBuZXcgTnpXYXZlRGlyZWN0aXZlKHRoaXMubmdab25lLCB0aGlzLmVsZW1lbnRSZWYpO1xuXG4gIHVwZGF0ZUljb25EaXNwbGF5KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaWNvbkVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pY29uRWxlbWVudCwgJ2Rpc3BsYXknLCB2YWx1ZSA/ICdub25lJyA6ICdpbmxpbmUtYmxvY2snKTtcbiAgICB9XG4gIH1cblxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSAqL1xuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9YCBdICAgICAgICAgICAgICAgIDogdGhpcy5uelR5cGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpTaGFwZX1gIF0gICAgICAgICAgICAgICA6IHRoaXMubnpTaGFwZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5zaXplTWFwWyB0aGlzLm56U2l6ZSBdfWAgXTogdGhpcy5zaXplTWFwWyB0aGlzLm56U2l6ZSBdLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbG9hZGluZ2AgXSAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm56TG9hZGluZyxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb24tb25seWAgXSAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pY29uT25seSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWJhY2tncm91bmQtZ2hvc3RgIF0gICAgICAgICAgICAgIDogdGhpcy5uekdob3N0LFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tYmxvY2tgIF0gICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm56QmxvY2ssXG4gICAgICBbIGBhbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbmAgXSAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubnpTZWFyY2hcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGg7XG4gICAgaWYgKGhhc0ljb24pIHtcbiAgICAgIHRoaXMubW92ZUljb24oKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyNTMwICoqL1xuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB0aGlzLmljb25Pbmx5ID0gISFoYXNJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICAgIHRoaXMuaWNvbk9ubHkgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5uekxvYWRpbmcpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG1vdmVJY29uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZkljb25FbGVtZW50ICYmIHRoaXMubGlzdE9mSWNvbkVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkRWxlbWVudCA9IHRoaXMuZmluZEZpcnN0Tm90RW1wdHlOb2RlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICBjb25zdCBsYXN0Q2hpbGRFbGVtZW50ID0gdGhpcy5maW5kTGFzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaWYgKGZpcnN0Q2hpbGRFbGVtZW50ICYmIChmaXJzdENoaWxkRWxlbWVudCA9PT0gdGhpcy5saXN0T2ZJY29uRWxlbWVudC5maXJzdC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCBmaXJzdENoaWxkRWxlbWVudCwgdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy5pY29uRWxlbWVudCA9IGZpcnN0Q2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgfSBlbHNlIGlmIChsYXN0Q2hpbGRFbGVtZW50ICYmIChsYXN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxhc3QubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLCBsYXN0Q2hpbGRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaW5kRmlyc3ROb3RFbXB0eU5vZGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBOb2RlIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgIGlmIChmaWx0ZXJOb3RFbXB0eU5vZGUobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZmluZExhc3ROb3RFbXB0eU5vZGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBOb2RlIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgaWYgKGZpbHRlck5vdEVtcHR5Tm9kZShub2RlKSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgdGhpcy5wcmVmaXhDbHMpO1xuICAgIHRoaXMubnpXYXZlLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm56V2F2ZS5uZ09uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=