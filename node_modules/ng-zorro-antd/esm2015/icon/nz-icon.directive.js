/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isDevMode, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { NzIconService } from './nz-icon.service';
/** @type {?} */
const iconTypeRE = /^anticon\-\w/;
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 */
export class NzIconDirective extends IconDirective {
    /**
     * @param {?} _iconService
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_iconService, _elementRef, _renderer) {
        super(_iconService, _elementRef, _renderer);
        this._iconService = _iconService;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.spin = false;
    }
    /**
     * In order to make this directive compatible to old API, we had do some ugly stuff here.
     * TODO: Should be removed in next major version.
     * @param {?} className
     * @return {?}
     */
    _classChangeHandler(className) {
        if (className) {
            /** @type {?} */
            const iconType = className
                .split(/\s/)
                .filter(cls => cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE))[0];
            if (!iconType) {
                return;
            }
            /** @type {?} */
            let parsedIconType = iconType.replace('anticon-', '');
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
                this._changeIcon().catch(err => {
                    console.warn('[NG-ZORRO]', `You can find more about this error on http://ng.ant.design/components/icon/en\n`, err);
                });
            }
        }
    }
    /**
     * In order to make this directive compatible to old API, we had do some ugly stuff here.
     * TODO: Should be removed in next major version.
     * @param {?} type
     * @return {?}
     */
    _warnAPI(type) {
        if (isDevMode()) {
            if (type === 'old' && !this._iconService.warnedAboutAPI) {
                console.warn('[NG-ZORRO]', `<i class="anticon"></i> would be deprecated soon. Please use <i nz-icon type=""></i> API.`);
                this._iconService.warnedAboutAPI = true;
            }
            if (type === 'cross' && !this._iconService.warnedAboutCross) {
                console.warn('[NG-ZORRO]', `'cross' icon is replaced by 'close' icon.`);
                this._iconService.warnedAboutCross = true;
            }
            if (type === 'vertical' && !this._iconService.warnedAboutVertical) {
                console.warn('[NG-ZORRO]', `'verticle' is misspelled, would be corrected in the next major version.`);
                this._iconService.warnedAboutVertical = true;
            }
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    _toggleSpin(svg) {
        if ((this.spin || this.type === 'loading') && !this._el.classList.contains('anticon-spin')) {
            this._renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this._renderer.removeClass(svg, 'anticon-spin');
        }
    }
    /**
     * @return {?}
     */
    _setClassName() {
        // If there's not an anticon class, usually a new API icon, get the icon class name back.
        // anticon should be added before other class names.
        if (this._el && typeof this.type === 'string') {
            /** @type {?} */
            const iconClassNameArr = this._el.className.split(/\s/);
            /** @type {?} */
            const oldTypeNameIndex = iconClassNameArr.findIndex(cls => cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE));
            if (oldTypeNameIndex !== -1) {
                iconClassNameArr.splice(oldTypeNameIndex, 1, `anticon-${this.type}`);
                this._renderer.setAttribute(this._el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this._renderer.addClass(this._el, `anticon-${this.type}`);
            }
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    _setSVGData(svg) {
        if (typeof this.type === 'string') {
            this._renderer.setAttribute(svg, 'data-icon', this.type);
            this._renderer.setAttribute(svg, 'aria-hidden', 'true');
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    _addExtraModifications(svg) {
        this._toggleSpin(svg);
        this._setSVGData(svg);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.iconfont) {
            // For ant design icons.
            this._setClassName();
            this._changeIcon().then(svg => {
                this._addExtraModifications(svg);
            }).catch((err) => {
                if (err) {
                    console.error(err);
                    console.warn('[NG-ZORRO]', `You can find more about this error on http://ng.ant.design/components/icon/en`);
                }
            });
        }
        else {
            // For iconfont icons.
            this._setSVGElement(this._iconService.createIconfontIcon(`#${this.iconfont}`));
        }
    }
    /**
     * Subscribe to DOM element attribute change events, so when user use ngClass or something the icon changes with it.
     * @return {?}
     */
    ngOnInit() {
        this._el = this._elementRef.nativeElement;
        // Make the component compatible to old class="anticon" API.
        if (this._el && !this.type) {
            this._warnAPI('old');
            this._classChangeHandler(this._el.className);
            this._classNameObserver = new MutationObserver((mutations) => {
                mutations
                    .filter((mutation) => mutation.attributeName === 'class')
                    .forEach((mutation) => this._classChangeHandler((/** @type {?} */ (mutation.target)).className));
            });
            this._classNameObserver.observe(this._elementRef.nativeElement, { attributes: true });
        }
        if (!this._el.classList.contains('anticon')) {
            this._renderer.setAttribute(this._el, 'class', `anticon ${this._el.className}`);
        }
        if (this.type) {
            this._setClassName();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._classNameObserver) {
            this._classNameObserver.disconnect();
        }
    }
    /**
     * If custom content is provided, should try to normalize the svg element.
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const children = (/** @type {?} */ (this._elementRef.nativeElement)).children;
        if (children && children.length && !this.type) {
            this._iconService.normalizeSvgElement(/** @type {?} */ (children[0]));
        }
    }
}
NzIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i.anticon, [nz-icon]'
            },] }
];
/** @nocollapse */
NzIconDirective.ctorParameters = () => [
    { type: NzIconService },
    { type: ElementRef },
    { type: Renderer2 }
];
NzIconDirective.propDecorators = {
    spin: [{ type: Input }],
    iconfont: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaWNvbi9uei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFbEQsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDOzs7Ozs7OztBQVlsQyxNQUFNLHNCQUF1QixTQUFRLGFBQWE7Ozs7OztJQW1HaEQsWUFBbUIsWUFBMkIsRUFBUyxXQUF1QixFQUFTLFNBQW9CO1FBQ3pHLEtBQUssQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRDNCLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO29CQWxHM0YsS0FBSztLQW9HcEI7Ozs7Ozs7SUF6Rk8sbUJBQW1CLENBQUMsU0FBaUI7UUFDM0MsSUFBSSxTQUFTLEVBQUU7O1lBQ2IsTUFBTSxRQUFRLEdBQUcsU0FBUztpQkFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDWCxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxjQUFjLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUUsQ0FBQztZQUU5RixJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNiLE9BQU87YUFDUjs7WUFFRCxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFD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QUMsU0FBUyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDakY7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDdEM7S0FDRjs7Ozs7SUFLRCxxQkFBcUI7O1FBQ25CLE1BQU0sUUFBUSxHQUFHLG1CQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBNEIsRUFBQyxDQUFDLFFBQVEsQ0FBQztRQUMxRSxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixtQkFBQyxRQUFRLENBQUUsQ0FBQyxDQUFnQixFQUFDLENBQUM7U0FDcEU7S0FDRjs7O1lBcktGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7O1lBYlEsYUFBYTtZQVJwQixVQUFVO1lBS1YsU0FBUzs7O21CQWtCUixLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBpc0Rldk1vZGUsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25EaXJlY3RpdmUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcbmltcG9ydCB7IE56SWNvblNlcnZpY2UgfSBmcm9tICcuL256LWljb24uc2VydmljZSc7XG5cbmNvbnN0IGljb25UeXBlUkUgPSAvXmFudGljb25cXC1cXHcvO1xuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSB0byBwcm92aWRlOlxuICpcbiAqIC0gSWNvbkZvbnQgc3VwcG9ydFxuICogLSBzcGlubmluZ1xuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHlcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaS5hbnRpY29uLCBbbnotaWNvbl0nXG59KVxuZXhwb3J0IGNsYXNzIE56SWNvbkRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgc3BpbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uZm9udDogc3RyaW5nO1xuXG4gIC8vIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIHByaXZhdGUgX2NsYXNzTmFtZU9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIF9lbDogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEluIG9yZGVyIHRvIG1ha2UgdGhpcyBkaXJlY3RpdmUgY29tcGF0aWJsZSB0byBvbGQgQVBJLCB3ZSBoYWQgZG8gc29tZSB1Z2x5IHN0dWZmIGhlcmUuXG4gICAqIFRPRE86IFNob3VsZCBiZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbiAgICovXG4gIHByaXZhdGUgX2NsYXNzQ2hhbmdlSGFuZGxlcihjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGNvbnN0IGljb25UeXBlID0gY2xhc3NOYW1lXG4gICAgICAgIC5zcGxpdCgvXFxzLylcbiAgICAgICAgLmZpbHRlcihjbHMgPT4gY2xzICE9PSAnYW50aWNvbicgJiYgY2xzICE9PSAnYW50aWNvbi1zcGluJyAmJiAhIWNscy5tYXRjaChpY29uVHlwZVJFKSlbIDAgXTtcblxuICAgICAgaWYgKCFpY29uVHlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBwYXJzZWRJY29uVHlwZSA9IGljb25UeXBlLnJlcGxhY2UoJ2FudGljb24tJywgJycpO1xuICAgICAgaWYgKHBhcnNlZEljb25UeXBlLmluY2x1ZGVzKCd2ZXJ0aWNsZScpKSB7XG4gICAgICAgIHBhcnNlZEljb25UeXBlID0gcGFyc2VkSWNvblR5cGUucmVwbGFjZSgndmVydGljbGUnLCAndmVydGljYWwnKTtcbiAgICAgICAgdGhpcy5fd2FybkFQSSgnY3Jvc3MnKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJzZWRJY29uVHlwZS5zdGFydHNXaXRoKCdjcm9zcycpKSB7XG4gICAgICAgIHBhcnNlZEljb25UeXBlID0gcGFyc2VkSWNvblR5cGUucmVwbGFjZSgnY3Jvc3MnLCAnY2xvc2UnKTtcbiAgICAgICAgdGhpcy5fd2FybkFQSSgndmVydGljYWwnKTtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBjaGFuZ2UgaWNvbiB3aGVuIGljb24gdHlwZSBkb2VzIGNoYW5nZS5cbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IHBhcnNlZEljb25UeXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHBhcnNlZEljb25UeXBlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VJY29uKCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1tORy1aT1JST10nLCBgWW91IGNhbiBmaW5kIG1vcmUgYWJvdXQgdGhpcyBlcnJvciBvbiBodHRwOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2ljb24vZW5cXG5gLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW4gb3JkZXIgdG8gbWFrZSB0aGlzIGRpcmVjdGl2ZSBjb21wYXRpYmxlIHRvIG9sZCBBUEksIHdlIGhhZCBkbyBzb21lIHVnbHkgc3R1ZmYgaGVyZS5cbiAgICogVE9ETzogU2hvdWxkIGJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfd2FybkFQSSh0eXBlOiAnb2xkJyB8ICdjcm9zcycgfCAndmVydGljYWwnKTogdm9pZCB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBpZiAodHlwZSA9PT0gJ29sZCcgJiYgIXRoaXMuX2ljb25TZXJ2aWNlLndhcm5lZEFib3V0QVBJKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW05HLVpPUlJPXScsIGA8aSBjbGFzcz1cImFudGljb25cIj48L2k+IHdvdWxkIGJlIGRlcHJlY2F0ZWQgc29vbi4gUGxlYXNlIHVzZSA8aSBuei1pY29uIHR5cGU9XCJcIj48L2k+IEFQSS5gKTtcbiAgICAgICAgdGhpcy5faWNvblNlcnZpY2Uud2FybmVkQWJvdXRBUEkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdjcm9zcycgJiYgIXRoaXMuX2ljb25TZXJ2aWNlLndhcm5lZEFib3V0Q3Jvc3MpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbTkctWk9SUk9dJywgYCdjcm9zcycgaWNvbiBpcyByZXBsYWNlZCBieSAnY2xvc2UnIGljb24uYCk7XG4gICAgICAgIHRoaXMuX2ljb25TZXJ2aWNlLndhcm5lZEFib3V0Q3Jvc3MgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICd2ZXJ0aWNhbCcgJiYgIXRoaXMuX2ljb25TZXJ2aWNlLndhcm5lZEFib3V0VmVydGljYWwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbTkctWk9SUk9dJywgYCd2ZXJ0aWNsZScgaXMgbWlzc3BlbGxlZCwgd291bGQgYmUgY29ycmVjdGVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uYCk7XG4gICAgICAgIHRoaXMuX2ljb25TZXJ2aWNlLndhcm5lZEFib3V0VmVydGljYWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZVNwaW4oc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCh0aGlzLnNwaW4gfHwgdGhpcy50eXBlID09PSAnbG9hZGluZycpICYmICF0aGlzLl9lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24tc3BpbicpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Q2xhc3NOYW1lKCk6IHZvaWQge1xuICAgIC8vIElmIHRoZXJlJ3Mgbm90IGFuIGFudGljb24gY2xhc3MsIHVzdWFsbHkgYSBuZXcgQVBJIGljb24sIGdldCB0aGUgaWNvbiBjbGFzcyBuYW1lIGJhY2suXG4gICAgLy8gYW50aWNvbiBzaG91bGQgYmUgYWRkZWQgYmVmb3JlIG90aGVyIGNsYXNzIG5hbWVzLlxuICAgIGlmICh0aGlzLl9lbCAmJiB0eXBlb2YgdGhpcy50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgaWNvbkNsYXNzTmFtZUFyciA9IHRoaXMuX2VsLmNsYXNzTmFtZS5zcGxpdCgvXFxzLyk7XG4gICAgICBjb25zdCBvbGRUeXBlTmFtZUluZGV4ID0gaWNvbkNsYXNzTmFtZUFyci5maW5kSW5kZXgoY2xzID0+IGNscyAhPT0gJ2FudGljb24nICYmIGNscyAhPT0gJ2FudGljb24tc3BpbicgJiYgISFjbHMubWF0Y2goaWNvblR5cGVSRSkpO1xuXG4gICAgICBpZiAob2xkVHlwZU5hbWVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgaWNvbkNsYXNzTmFtZUFyci5zcGxpY2Uob2xkVHlwZU5hbWVJbmRleCwgMSwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbCwgJ2NsYXNzJywgaWNvbkNsYXNzTmFtZUFyci5qb2luKCcgJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFNWR0RhdGEoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZGF0YS1pY29uJywgdGhpcy50eXBlKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRXh0cmFNb2RpZmljYXRpb25zKHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuX3RvZ2dsZVNwaW4oc3ZnKTtcbiAgICB0aGlzLl9zZXRTVkdEYXRhKHN2Zyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2ljb25TZXJ2aWNlOiBOekljb25TZXJ2aWNlLCBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKF9pY29uU2VydmljZSwgX2VsZW1lbnRSZWYsIF9yZW5kZXJlcik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaWNvbmZvbnQpIHtcbiAgICAgIC8vIEZvciBhbnQgZGVzaWduIGljb25zLlxuICAgICAgdGhpcy5fc2V0Q2xhc3NOYW1lKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VJY29uKCkudGhlbihzdmcgPT4ge1xuICAgICAgICB0aGlzLl9hZGRFeHRyYU1vZGlmaWNhdGlvbnMoc3ZnKTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1tORy1aT1JST10nLCBgWW91IGNhbiBmaW5kIG1vcmUgYWJvdXQgdGhpcyBlcnJvciBvbiBodHRwOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2ljb24vZW5gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciBpY29uZm9udCBpY29ucy5cbiAgICAgIHRoaXMuX3NldFNWR0VsZW1lbnQodGhpcy5faWNvblNlcnZpY2UuY3JlYXRlSWNvbmZvbnRJY29uKGAjJHt0aGlzLmljb25mb250fWApKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIERPTSBlbGVtZW50IGF0dHJpYnV0ZSBjaGFuZ2UgZXZlbnRzLCBzbyB3aGVuIHVzZXIgdXNlIG5nQ2xhc3Mgb3Igc29tZXRoaW5nIHRoZSBpY29uIGNoYW5nZXMgd2l0aCBpdC5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2VsID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gTWFrZSB0aGUgY29tcG9uZW50IGNvbXBhdGlibGUgdG8gb2xkIGNsYXNzPVwiYW50aWNvblwiIEFQSS5cbiAgICBpZiAodGhpcy5fZWwgJiYgIXRoaXMudHlwZSkge1xuICAgICAgdGhpcy5fd2FybkFQSSgnb2xkJyk7XG4gICAgICB0aGlzLl9jbGFzc0NoYW5nZUhhbmRsZXIodGhpcy5fZWwuY2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgICBtdXRhdGlvbnNcbiAgICAgICAgICAuZmlsdGVyKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpXG4gICAgICAgICAgLmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gdGhpcy5fY2xhc3NDaGFuZ2VIYW5kbGVyKChtdXRhdGlvbi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZSkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jbGFzc05hbWVPYnNlcnZlci5vYnNlcnZlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbCwgJ2NsYXNzJywgYGFudGljb24gJHt0aGlzLl9lbC5jbGFzc05hbWV9YCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHlwZSkge1xuICAgICAgdGhpcy5fc2V0Q2xhc3NOYW1lKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NsYXNzTmFtZU9ic2VydmVyKSB7XG4gICAgICB0aGlzLl9jbGFzc05hbWVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIElmIGN1c3RvbSBjb250ZW50IGlzIHByb3ZpZGVkLCBzaG91bGQgdHJ5IHRvIG5vcm1hbGl6ZSB0aGUgc3ZnIGVsZW1lbnQuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jaGlsZHJlbjtcbiAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoICYmICF0aGlzLnR5cGUpIHtcbiAgICAgIHRoaXMuX2ljb25TZXJ2aWNlLm5vcm1hbGl6ZVN2Z0VsZW1lbnQoY2hpbGRyZW5bIDAgXSBhcyBTVkdFbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==