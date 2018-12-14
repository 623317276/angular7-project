/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export class NzAvatarComponent {
    /**
     * @param {?} elementRef
     * @param {?} cd
     * @param {?} updateHostClassService
     */
    constructor(elementRef, cd, updateHostClassService) {
        this.elementRef = elementRef;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-avatar';
        this.sizeMap = { large: 'lg', small: 'sm' };
        this.oldAPIIcon = true;
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.nzShape = 'circle';
        this.nzSize = 'default';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIcon(value) {
        if (value) {
            this.oldAPIIcon = value.indexOf('anticon') > -1;
        }
        this._icon = value;
    }
    /**
     * @return {?}
     */
    get nzIcon() {
        return this._icon;
    }
    /**
     * @return {?}
     */
    setClass() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.sizeMap[this.nzSize]}`]: this.sizeMap[this.nzSize],
            [`${this.prefixCls}-${this.nzShape}`]: this.nzShape,
            [`${this.prefixCls}-icon`]: this.nzIcon,
            [`${this.prefixCls}-image`]: this.nzSrc
        };
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    }
    /**
     * @return {?}
     */
    imgError() {
        this.hasSrc = false;
        this.hasIcon = false;
        this.hasText = false;
        if (this.nzIcon) {
            this.hasIcon = true;
        }
        else if (this.nzText) {
            this.hasText = true;
        }
        this.setClass().notifyCalc();
    }
    /**
     * @return {?}
     */
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        const childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        const avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        if (scale === 1) {
            this.textStyles = {};
        }
        else {
            this.textStyles = {
                transform: `scale(${scale})`,
                position: 'absolute',
                display: 'inline-block',
                left: `calc(50% - ${Math.round(childrenWidth / 2)}px)`
            };
        }
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        setTimeout(() => {
            this.calcStringSize();
        });
        return this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
    }
}
NzAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-avatar',
                template: "<i nz-icon *ngIf=\"nzIcon && hasIcon\" [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n<img [src]=\"nzSrc\" *ngIf=\"nzSrc && hasSrc\" (error)=\"imgError()\"/>\n<span class=\"ant-avatar-string\" #textEl [ngStyle]=\"textStyles\" *ngIf=\"nzText && hasText\">{{ nzText }}</span>",
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzAvatarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzUpdateHostClassService }
];
NzAvatarComponent.propDecorators = {
    textEl: [{ type: ViewChild, args: ['textEl',] }],
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzText: [{ type: Input }],
    nzSrc: [{ type: Input }],
    nzIcon: [{ type: Input }]
};
function NzAvatarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAvatarComponent.prototype.el;
    /** @type {?} */
    NzAvatarComponent.prototype.prefixCls;
    /** @type {?} */
    NzAvatarComponent.prototype.sizeMap;
    /** @type {?} */
    NzAvatarComponent.prototype._icon;
    /** @type {?} */
    NzAvatarComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.hasText;
    /** @type {?} */
    NzAvatarComponent.prototype.hasSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.hasIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.textStyles;
    /** @type {?} */
    NzAvatarComponent.prototype.textEl;
    /** @type {?} */
    NzAvatarComponent.prototype.nzShape;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSize;
    /** @type {?} */
    NzAvatarComponent.prototype.nzText;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.elementRef;
    /** @type {?} */
    NzAvatarComponent.prototype.cd;
    /** @type {?} */
    NzAvatarComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdmF0YXIvbnotYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBYXRGLE1BQU07Ozs7OztJQXVGSixZQUFvQixVQUFzQixFQUFVLEVBQXFCLEVBQVUsc0JBQWdEO1FBQS9HLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7a0JBdEZ6RyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7eUJBQ25DLFlBQVk7dUJBQ2QsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7MEJBRWpDLElBQUk7dUJBQ0UsS0FBSztzQkFDTixJQUFJO3VCQUNILEtBQUs7dUJBS1UsUUFBUTtzQkFFVixTQUFTO0tBeUV4Qzs7Ozs7SUFuRUQsSUFDSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7O0lBRUQsUUFBUTs7UUFDTixNQUFNLFFBQVEsR0FBRztZQUNmLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxFQUFzQyxJ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RSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQzlCOzs7WUF2R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxXQUFXO2dCQUNoQyx3VEFBaUQ7Z0JBQ2pELFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO2dCQUNqRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTthQUNwRDs7OztZQW5CQyxVQUFVO1lBRlYsaUJBQWlCO1lBU1Ysd0JBQXdCOzs7cUJBd0I5QixTQUFTLFNBQUMsUUFBUTtzQkFFbEIsS0FBSztxQkFFTCxLQUFLO3FCQUVMLEtBQUs7b0JBRUwsS0FBSztxQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBTdGVwTmdDbGFzc1R5cGUgfSBmcm9tICcuLi9zdGVwcyc7XG5cbmV4cG9ydCB0eXBlIE56QXZhdGFyU2hhcGUgPSAnc3F1YXJlJyB8ICdjaXJjbGUnO1xuZXhwb3J0IHR5cGUgTnpBdmF0YXJTaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYXZhdGFyJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekF2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1hdmF0YXInO1xuICBwcml2YXRlIHNpemVNYXAgPSB7IGxhcmdlOiAnbGcnLCBzbWFsbDogJ3NtJyB9O1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG4gIG9sZEFQSUljb24gPSB0cnVlOyAvLyBNYWtlIHRoZSB1c2VyIGRlZmluZWQgaWNvbiBjb21wYXRpYmxlIHRvIG9sZCBBUEkuIFNob3VsZCBiZSByZW1vdmVkIGluIDIuMC5cbiAgaGFzVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBoYXNTcmM6IGJvb2xlYW4gPSB0cnVlO1xuICBoYXNJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIHRleHRTdHlsZXM6IHt9O1xuXG4gIEBWaWV3Q2hpbGQoJ3RleHRFbCcpIHRleHRFbDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBuelNoYXBlOiBOekF2YXRhclNoYXBlID0gJ2NpcmNsZSc7XG5cbiAgQElucHV0KCkgbnpTaXplOiBOekF2YXRhclNpemUgPSAnZGVmYXVsdCc7XG5cbiAgQElucHV0KCkgbnpUZXh0OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbnpTcmM6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbnpJY29uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IHZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xuICAgIH1cbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBzZXRDbGFzcygpOiB0aGlzIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5zaXplTWFwWyB0aGlzLm56U2l6ZSBdfWAgXTogdGhpcy5zaXplTWFwWyB0aGlzLm56U2l6ZSBdLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56U2hhcGV9YCBdICAgICAgICAgICAgICAgOiB0aGlzLm56U2hhcGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pY29uYCBdICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubnpJY29uLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taW1hZ2VgIF0gICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm56U3JjXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGltZ0Vycm9yKCk6IHZvaWQge1xuICAgIHRoaXMuaGFzU3JjID0gZmFsc2U7XG4gICAgdGhpcy5oYXNJY29uID0gZmFsc2U7XG4gICAgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMubnpJY29uKSB7XG4gICAgICB0aGlzLmhhc0ljb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uelRleHQpIHtcbiAgICAgIHRoaXMuaGFzVGV4dCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3MoKS5ub3RpZnlDYWxjKCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGNTdHJpbmdTaXplKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNUZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW5XaWR0aCA9IHRoaXMudGV4dEVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgYXZhdGFyV2lkdGggPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IHNjYWxlID0gYXZhdGFyV2lkdGggLSA4IDwgY2hpbGRyZW5XaWR0aCA/IChhdmF0YXJXaWR0aCAtIDgpIC8gY2hpbGRyZW5XaWR0aCA6IDE7XG4gICAgaWYgKHNjYWxlID09PSAxKSB7XG4gICAgICB0aGlzLnRleHRTdHlsZXMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXh0U3R5bGVzID0ge1xuICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlfSlgLFxuICAgICAgICBwb3NpdGlvbiA6ICdhYnNvbHV0ZScsXG4gICAgICAgIGRpc3BsYXkgIDogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGxlZnQgICAgIDogYGNhbGMoNTAlIC0gJHtNYXRoLnJvdW5kKGNoaWxkcmVuV2lkdGggLyAyKX1weClgXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2FsYygpOiB0aGlzIHtcbiAgICAvLyBJZiB1c2UgbmdBZnRlclZpZXdDaGVja2VkLCBhbHdheXMgZGVtYW5kcyBtb3JlIGNvbXB1dGF0aW9ucywgc28uLi4uLi5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2FsY1N0cmluZ1NpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5oYXNUZXh0ID0gIXRoaXMubnpTcmMgJiYgISF0aGlzLm56VGV4dDtcbiAgICB0aGlzLmhhc0ljb24gPSAhdGhpcy5uelNyYyAmJiAhIXRoaXMubnpJY29uO1xuICAgIHRoaXMuaGFzU3JjID0gISF0aGlzLm56U3JjO1xuXG4gICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcbiAgfVxufVxuIl19