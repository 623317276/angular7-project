/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isDevMode, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { NzIconService } from './nz-icon.service';
/** @type {?} */
var iconTypeRE = /^anticon\-\w/;
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 */
var NzIconDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconDirective, _super);
    function NzIconDirective(_iconService, _elementRef, _renderer) {
        var _this = _super.call(this, _iconService, _elementRef, _renderer) || this;
        _this._iconService = _iconService;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.spin = false;
        return _this;
    }
    /**
     * In order to make this directive compatible to old API, we had do some ugly stuff here.
     * TODO: Should be removed in next major version.
     * @param {?} className
     * @return {?}
     */
    NzIconDirective.prototype._classChangeHandler = /**
     * In order to make this directive compatible to old API, we had do some ugly stuff here.
     * TODO: Should be removed in next major version.
     * @param {?} className
     * @return {?}
     */
    function (className) {
        if (className) {
            /** @type {?} */
            var iconType = className
                .split(/\s/)
                .filter(function (cls) { return cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE); })[0];
            if (!iconType) {
                return;
            }
            /** @type {?} */
            var parsedIconType = iconType.replace('anticon-', '');
            if (parsedIconType.includes('verticle')) {
                parsedIconType = parsedIconType.replace('verticle', 'vertical');
                this._warnAPI('cross');
            }
            if (parsedIconType.startsWith('cross')) {
                parsedIconType = parsedIconType.replace('cross', 'close');
                this._warnAPI('vertical');
            }
            // Only change icon when icon type does change.
            if (this.type !== parsedIconType) {
                this.type = parsedIconType;
                this._changeIcon().catch(function (err) {
                    console.warn('[NG-ZORRO]', "You can find more about this error on http://ng.ant.design/components/icon/en\n", err);
                });
            }
        }
    };
    /**
     * In order to make this directive compatible to old API, we had do some ugly stuff here.
     * TODO: Should be removed in next major version.
     * @param {?} type
     * @return {?}
     */
    NzIconDirective.prototype._warnAPI = /**
     * In order to make this directive compatible to old API, we had do some ugly stuff here.
     * TODO: Should be removed in next major version.
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (isDevMode()) {
            if (type === 'old' && !this._iconService.warnedAboutAPI) {
                console.warn('[NG-ZORRO]', "<i class=\"anticon\"></i> would be deprecated soon. Please use <i nz-icon type=\"\"></i> API.");
                this._iconService.warnedAboutAPI = true;
            }
            if (type === 'cross' && !this._iconService.warnedAboutCross) {
                console.warn('[NG-ZORRO]', "'cross' icon is replaced by 'close' icon.");
                this._iconService.warnedAboutCross = true;
            }
            if (type === 'vertical' && !this._iconService.warnedAboutVertical) {
                console.warn('[NG-ZORRO]', "'verticle' is misspelled, would be corrected in the next major version.");
                this._iconService.warnedAboutVertical = true;
            }
        }
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype._toggleSpin = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if ((this.spin || this.type === 'loading') && !this._el.classList.contains('anticon-spin')) {
            this._renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this._renderer.removeClass(svg, 'anticon-spin');
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype._setClassName = /**
     * @return {?}
     */
    function () {
        // If there's not an anticon class, usually a new API icon, get the icon class name back.
        // anticon should be added before other class names.
        if (this._el && typeof this.type === 'string') {
            /** @type {?} */
            var iconClassNameArr = this._el.className.split(/\s/);
            /** @type {?} */
            var oldTypeNameIndex = iconClassNameArr.findIndex(function (cls) { return cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE); });
            if (oldTypeNameIndex !== -1) {
                iconClassNameArr.splice(oldTypeNameIndex, 1, "anticon-" + this.type);
                this._renderer.setAttribute(this._el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this._renderer.addClass(this._el, "anticon-" + this.type);
            }
        }
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype._setSVGData = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (typeof this.type === 'string') {
            this._renderer.setAttribute(svg, 'data-icon', this.type);
            this._renderer.setAttribute(svg, 'aria-hidden', 'true');
        }
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype._addExtraModifications = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        this._toggleSpin(svg);
        this._setSVGData(svg);
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.iconfont) {
            // For ant design icons.
            this._setClassName();
            this._changeIcon().then(function (svg) {
                _this._addExtraModifications(svg);
            }).catch(function (err) {
                if (err) {
                    console.error(err);
                    console.warn('[NG-ZORRO]', "You can find more about this error on http://ng.ant.design/components/icon/en");
                }
            });
        }
        else {
            // For iconfont icons.
            this._setSVGElement(this._iconService.createIconfontIcon("#" + this.iconfont));
        }
    };
    /**
     * Subscribe to DOM element attribute change events, so when user use ngClass or something the icon changes with it.
     */
    /**
     * Subscribe to DOM element attribute change events, so when user use ngClass or something the icon changes with it.
     * @return {?}
     */
    NzIconDirective.prototype.ngOnInit = /**
     * Subscribe to DOM element attribute change events, so when user use ngClass or something the icon changes with it.
     * @return {?}
     */
    function () {
        var _this = this;
        this._el = this._elementRef.nativeElement;
        // Make the component compatible to old class="anticon" API.
        if (this._el && !this.type) {
            this._warnAPI('old');
            this._classChangeHandler(this._el.className);
            this._classNameObserver = new MutationObserver(function (mutations) {
                mutations
                    .filter(function (mutation) { return mutation.attributeName === 'class'; })
                    .forEach(function (mutation) { return _this._classChangeHandler((/** @type {?} */ (mutation.target)).className); });
            });
            this._classNameObserver.observe(this._elementRef.nativeElement, { attributes: true });
        }
        if (!this._el.classList.contains('anticon')) {
            this._renderer.setAttribute(this._el, 'class', "anticon " + this._el.className);
        }
        if (this.type) {
            this._setClassName();
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._classNameObserver) {
            this._classNameObserver.disconnect();
        }
    };
    /**
     * If custom content is provided, should try to normalize the svg element.
     */
    /**
     * If custom content is provided, should try to normalize the svg element.
     * @return {?}
     */
    NzIconDirective.prototype.ngAfterContentChecked = /**
     * If custom content is provided, should try to normalize the svg element.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var children = (/** @type {?} */ (this._elementRef.nativeElement)).children;
        if (children && children.length && !this.type) {
            this._iconService.normalizeSvgElement(/** @type {?} */ (children[0]));
        }
    };
    NzIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'i.anticon, [nz-icon]'
                },] }
    ];
    /** @nocollapse */
    NzIconDirective.ctorParameters = function () { return [
        { type: NzIconService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzIconDirective.propDecorators = {
        spin: [{ type: Input }],
        iconfont: [{ type: Input }]
    };
    return NzIconDirective;
}(IconDirective));
export { NzIconDirective };
function NzIconDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzIconDirective.prototype.spin;
    /** @type {?} */
    NzIconDirective.prototype.iconfont;
    /** @type {?} */
    NzIconDirective.prototype._classNameObserver;
    /** @type {?} */
    NzIconDirective.prototype._el;
    /** @type {?} */
    NzIconDirective.prototype._iconService;
    /** @type {?} */
    NzIconDirective.prototype._elementRef;
    /** @type {?} */
    NzIconDirective.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaWNvbi9uei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRWxELElBQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQzs7Ozs7Ozs7O0lBWUcsMkNBQWE7SUFtR2hELHlCQUFtQixZQUEyQixFQUFTLFdBQXVCLEVBQVMsU0FBb0I7UUFBM0csWUFDRSxrQkFBTSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxTQUM1QztRQUZrQixrQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUFTLGlCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsZUFBUyxHQUFULFNBQVMsQ0FBVztxQkFsRzNGLEtBQUs7O0tBb0dwQjs7Ozs7OztJQXpGTyw2Q0FBbUI7Ozs7OztjQUFDLFNBQWlCO1FBQzNDLElBQUksU0FBUyxFQUFFOztZQUNiLElBQU0sUUFBUSxHQUFHLFNBQVM7aUJBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUM7aUJBQ1gsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssY0FBYyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUF0RSxDQUFzRSxDQUFDLENBQUUsQ0FBQyxDQUFFLENBQUM7WUFFOUYsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDYixPQUFPO2FBQ1I7O1lBRUQsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FB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Q3ZGO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxhQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBVyxDQUFDLENBQUM7U0FDakY7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7S0FDRjs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUN0QztLQUNGO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsK0NBQXFCOzs7O0lBQXJCOztRQUNFLElBQU0sUUFBUSxHQUFHLG1CQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBNEIsRUFBQyxDQUFDLFFBQVEsQ0FBQztRQUMxRSxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixtQkFBQyxRQUFRLENBQUUsQ0FBQyxDQUFnQixFQUFDLENBQUM7U0FDcEU7S0FDRjs7Z0JBcktGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2lCQUNqQzs7OztnQkFiUSxhQUFhO2dCQVJwQixVQUFVO2dCQUtWLFNBQVM7Ozt1QkFrQlIsS0FBSzsyQkFDTCxLQUFLOzswQkE1QlI7RUEwQnFDLGFBQWE7U0FBckMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGlzRGV2TW9kZSxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRpcmVjdGl2ZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJy4vbnotaWNvbi5zZXJ2aWNlJztcblxuY29uc3QgaWNvblR5cGVSRSA9IC9eYW50aWNvblxcLVxcdy87XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIHRvIHByb3ZpZGU6XG4gKlxuICogLSBJY29uRm9udCBzdXBwb3J0XG4gKiAtIHNwaW5uaW5nXG4gKiAtIG9sZCBBUEkgY29tcGF0aWJpbGl0eVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpLmFudGljb24sIFtuei1pY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgTnpJY29uRGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBzcGluID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb25mb250OiBzdHJpbmc7XG5cbiAgLy8gcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHByaXZhdGUgX2VsOiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogSW4gb3JkZXIgdG8gbWFrZSB0aGlzIGRpcmVjdGl2ZSBjb21wYXRpYmxlIHRvIG9sZCBBUEksIHdlIGhhZCBkbyBzb21lIHVnbHkgc3R1ZmYgaGVyZS5cbiAgICogVE9ETzogU2hvdWxkIGJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfY2xhc3NDaGFuZ2VIYW5kbGVyKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY29uc3QgaWNvblR5cGUgPSBjbGFzc05hbWVcbiAgICAgICAgLnNwbGl0KC9cXHMvKVxuICAgICAgICAuZmlsdGVyKGNscyA9PiBjbHMgIT09ICdhbnRpY29uJyAmJiBjbHMgIT09ICdhbnRpY29uLXNwaW4nICYmICEhY2xzLm1hdGNoKGljb25UeXBlUkUpKVsgMCBdO1xuXG4gICAgICBpZiAoIWljb25UeXBlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHBhcnNlZEljb25UeXBlID0gaWNvblR5cGUucmVwbGFjZSgnYW50aWNvbi0nLCAnJyk7XG4gICAgICBpZiAocGFyc2VkSWNvblR5cGUuaW5jbHVkZXMoJ3ZlcnRpY2xlJykpIHtcbiAgICAgICAgcGFyc2VkSWNvblR5cGUgPSBwYXJzZWRJY29uVHlwZS5yZXBsYWNlKCd2ZXJ0aWNsZScsICd2ZXJ0aWNhbCcpO1xuICAgICAgICB0aGlzLl93YXJuQVBJKCdjcm9zcycpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcnNlZEljb25UeXBlLnN0YXJ0c1dpdGgoJ2Nyb3NzJykpIHtcbiAgICAgICAgcGFyc2VkSWNvblR5cGUgPSBwYXJzZWRJY29uVHlwZS5yZXBsYWNlKCdjcm9zcycsICdjbG9zZScpO1xuICAgICAgICB0aGlzLl93YXJuQVBJKCd2ZXJ0aWNhbCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGNoYW5nZSBpY29uIHdoZW4gaWNvbiB0eXBlIGRvZXMgY2hhbmdlLlxuICAgICAgaWYgKHRoaXMudHlwZSAhPT0gcGFyc2VkSWNvblR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gcGFyc2VkSWNvblR5cGU7XG4gICAgICAgIHRoaXMuX2NoYW5nZUljb24oKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUud2FybignW05HLVpPUlJPXScsIGBZb3UgY2FuIGZpbmQgbW9yZSBhYm91dCB0aGlzIGVycm9yIG9uIGh0dHA6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvaWNvbi9lblxcbmAsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBvcmRlciB0byBtYWtlIHRoaXMgZGlyZWN0aXZlIGNvbXBhdGlibGUgdG8gb2xkIEFQSSwgd2UgaGFkIGRvIHNvbWUgdWdseSBzdHVmZiBoZXJlLlxuICAgKiBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG4gICAqL1xuICBwcml2YXRlIF93YXJuQVBJKHR5cGU6ICdvbGQnIHwgJ2Nyb3NzJyB8ICd2ZXJ0aWNhbCcpOiB2b2lkIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGlmICh0eXBlID09PSAnb2xkJyAmJiAhdGhpcy5faWNvblNlcnZpY2Uud2FybmVkQWJvdXRBUEkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbTkctWk9SUk9dJywgYDxpIGNsYXNzPVwiYW50aWNvblwiPjwvaT4gd291bGQgYmUgZGVwcmVjYXRlZCBzb29uLiBQbGVhc2UgdXNlIDxpIG56LWljb24gdHlwZT1cIlwiPjwvaT4gQVBJLmApO1xuICAgICAgICB0aGlzLl9pY29uU2VydmljZS53YXJuZWRBYm91dEFQSSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ2Nyb3NzJyAmJiAhdGhpcy5faWNvblNlcnZpY2Uud2FybmVkQWJvdXRDcm9zcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tORy1aT1JST10nLCBgJ2Nyb3NzJyBpY29uIGlzIHJlcGxhY2VkIGJ5ICdjbG9zZScgaWNvbi5gKTtcbiAgICAgICAgdGhpcy5faWNvblNlcnZpY2Uud2FybmVkQWJvdXRDcm9zcyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ3ZlcnRpY2FsJyAmJiAhdGhpcy5faWNvblNlcnZpY2Uud2FybmVkQWJvdXRWZXJ0aWNhbCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tORy1aT1JST10nLCBgJ3ZlcnRpY2xlJyBpcyBtaXNzcGVsbGVkLCB3b3VsZCBiZSBjb3JyZWN0ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5gKTtcbiAgICAgICAgdGhpcy5faWNvblNlcnZpY2Uud2FybmVkQWJvdXRWZXJ0aWNhbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlU3Bpbihzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoKHRoaXMuc3BpbiB8fCB0aGlzLnR5cGUgPT09ICdsb2FkaW5nJykgJiYgIXRoaXMuX2VsLmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbi1zcGluJykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHN2ZywgJ2FudGljb24tc3BpbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRDbGFzc05hbWUoKTogdm9pZCB7XG4gICAgLy8gSWYgdGhlcmUncyBub3QgYW4gYW50aWNvbiBjbGFzcywgdXN1YWxseSBhIG5ldyBBUEkgaWNvbiwgZ2V0IHRoZSBpY29uIGNsYXNzIG5hbWUgYmFjay5cbiAgICAvLyBhbnRpY29uIHNob3VsZCBiZSBhZGRlZCBiZWZvcmUgb3RoZXIgY2xhc3MgbmFtZXMuXG4gICAgaWYgKHRoaXMuX2VsICYmIHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBpY29uQ2xhc3NOYW1lQXJyID0gdGhpcy5fZWwuY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcbiAgICAgIGNvbnN0IG9sZFR5cGVOYW1lSW5kZXggPSBpY29uQ2xhc3NOYW1lQXJyLmZpbmRJbmRleChjbHMgPT4gY2xzICE9PSAnYW50aWNvbicgJiYgY2xzICE9PSAnYW50aWNvbi1zcGluJyAmJiAhIWNscy5tYXRjaChpY29uVHlwZVJFKSk7XG5cbiAgICAgIGlmIChvbGRUeXBlTmFtZUluZGV4ICE9PSAtMSkge1xuICAgICAgICBpY29uQ2xhc3NOYW1lQXJyLnNwbGljZShvbGRUeXBlTmFtZUluZGV4LCAxLCBgYW50aWNvbi0ke3RoaXMudHlwZX1gKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsLCAnY2xhc3MnLCBpY29uQ2xhc3NOYW1lQXJyLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbCwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U1ZHRGF0YShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdkYXRhLWljb24nLCB0aGlzLnR5cGUpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRFeHRyYU1vZGlmaWNhdGlvbnMoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5fdG9nZ2xlU3BpbihzdmcpO1xuICAgIHRoaXMuX3NldFNWR0RhdGEoc3ZnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfaWNvblNlcnZpY2U6IE56SWNvblNlcnZpY2UsIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoX2ljb25TZXJ2aWNlLCBfZWxlbWVudFJlZiwgX3JlbmRlcmVyKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pY29uZm9udCkge1xuICAgICAgLy8gRm9yIGFudCBkZXNpZ24gaWNvbnMuXG4gICAgICB0aGlzLl9zZXRDbGFzc05hbWUoKTtcbiAgICAgIHRoaXMuX2NoYW5nZUljb24oKS50aGVuKHN2ZyA9PiB7XG4gICAgICAgIHRoaXMuX2FkZEV4dHJhTW9kaWZpY2F0aW9ucyhzdmcpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIGNvbnNvbGUud2FybignW05HLVpPUlJPXScsIGBZb3UgY2FuIGZpbmQgbW9yZSBhYm91dCB0aGlzIGVycm9yIG9uIGh0dHA6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvaWNvbi9lbmApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRm9yIGljb25mb250IGljb25zLlxuICAgICAgdGhpcy5fc2V0U1ZHRWxlbWVudCh0aGlzLl9pY29uU2VydmljZS5jcmVhdGVJY29uZm9udEljb24oYCMke3RoaXMuaWNvbmZvbnR9YCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gRE9NIGVsZW1lbnQgYXR0cmlidXRlIGNoYW5nZSBldmVudHMsIHNvIHdoZW4gdXNlciB1c2UgbmdDbGFzcyBvciBzb21ldGhpbmcgdGhlIGljb24gY2hhbmdlcyB3aXRoIGl0LlxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZWwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBNYWtlIHRoZSBjb21wb25lbnQgY29tcGF0aWJsZSB0byBvbGQgY2xhc3M9XCJhbnRpY29uXCIgQVBJLlxuICAgIGlmICh0aGlzLl9lbCAmJiAhdGhpcy50eXBlKSB7XG4gICAgICB0aGlzLl93YXJuQVBJKCdvbGQnKTtcbiAgICAgIHRoaXMuX2NsYXNzQ2hhbmdlSGFuZGxlcih0aGlzLl9lbC5jbGFzc05hbWUpO1xuICAgICAgdGhpcy5fY2xhc3NOYW1lT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgICAgIG11dGF0aW9uc1xuICAgICAgICAgIC5maWx0ZXIoKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJylcbiAgICAgICAgICAuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB0aGlzLl9jbGFzc0NoYW5nZUhhbmRsZXIoKG11dGF0aW9uLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZU9ic2VydmVyLm9ic2VydmUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24nKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsLCAnY2xhc3MnLCBgYW50aWNvbiAke3RoaXMuX2VsLmNsYXNzTmFtZX1gKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlKSB7XG4gICAgICB0aGlzLl9zZXRDbGFzc05hbWUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2xhc3NOYW1lT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgY3VzdG9tIGNvbnRlbnQgaXMgcHJvdmlkZWQsIHNob3VsZCB0cnkgdG8gbm9ybWFsaXplIHRoZSBzdmcgZWxlbWVudC5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9ICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggJiYgIXRoaXMudHlwZSkge1xuICAgICAgdGhpcy5faWNvblNlcnZpY2Uubm9ybWFsaXplU3ZnRWxlbWVudChjaGlsZHJlblsgMCBdIGFzIFNWR0VsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuIl19