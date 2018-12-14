/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
var NzAvatarComponent = /** @class */ (function () {
    function NzAvatarComponent(elementRef, cd, updateHostClassService) {
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
    Object.defineProperty(NzAvatarComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.oldAPIIcon = value.indexOf('anticon') > -1;
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.sizeMap[this.nzSize]] = this.sizeMap[this.nzSize],
            _a[this.prefixCls + "-" + this.nzShape] = this.nzShape,
            _a[this.prefixCls + "-icon"] = this.nzIcon,
            _a[this.prefixCls + "-image"] = this.nzSrc,
            _a);
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.imgError = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.calcStringSize = /**
     * @return {?}
     */
    function () {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        var childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        var avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        var scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        if (scale === 1) {
            this.textStyles = {};
        }
        else {
            this.textStyles = {
                transform: "scale(" + scale + ")",
                position: 'absolute',
                display: 'inline-block',
                left: "calc(50% - " + Math.round(childrenWidth / 2) + "px)"
            };
        }
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.notifyCalc = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // If use ngAfterViewChecked, always demands more computations, so......
        setTimeout(function () {
            _this.calcStringSize();
        });
        return this;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAvatarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
    };
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
    NzAvatarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzAvatarComponent.propDecorators = {
        textEl: [{ type: ViewChild, args: ['textEl',] }],
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzText: [{ type: Input }],
        nzSrc: [{ type: Input }],
        nzIcon: [{ type: Input }]
    };
    return NzAvatarComponent;
}());
export { NzAvatarComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdmF0YXIvbnotYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOztJQW9HcEYsMkJBQW9CLFVBQXNCLEVBQVUsRUFBcUIsRUFBVSxzQkFBZ0Q7UUFBL0csZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtrQkF0RnpHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTt5QkFDbkMsWUFBWTt1QkFDZCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTswQkFFakMsSUFBSTt1QkFDRSxLQUFLO3NCQUNOLElBQUk7dUJBQ0gsS0FBSzt1QkFLVSxRQUFRO3NCQUVWLFNBQVM7S0F5RXhDO0lBbkVELHNCQUNJLHFDQUFNOzs7O1FBT1Y7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBVkQsVUFDVyxLQUFhO1lBQ3RCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNqRDtZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCOzs7T0FBQTs7OztJQU1ELG9DQUFROzs7SUFBUjs7O1FBQ0UsSUFBTSxRQUFRO1lBQ1osR0FBRSxJQUFJLENBQUMsU0FBUyxJQUF3QyxJQUFJO1lBQzVE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b0JBQ1QsUUFBUSxFQUFhLFdBQVc7b0JBQ2hDLHdUQUFpRDtvQkFDakQsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7b0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNwRDs7OztnQkFuQkMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBU1Ysd0JBQXdCOzs7eUJBd0I5QixTQUFTLFNBQUMsUUFBUTswQkFFbEIsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLOzs0QkE3Q1I7O1NBd0JhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RlcE5nQ2xhc3NUeXBlIH0gZnJvbSAnLi4vc3RlcHMnO1xuXG5leHBvcnQgdHlwZSBOekF2YXRhclNoYXBlID0gJ3NxdWFyZScgfCAnY2lyY2xlJztcbmV4cG9ydCB0eXBlIE56QXZhdGFyU2l6ZSA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ2RlZmF1bHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWF2YXRhcicsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWF2YXRhci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtYXZhdGFyJztcbiAgcHJpdmF0ZSBzaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICBvbGRBUElJY29uID0gdHJ1ZTsgLy8gTWFrZSB0aGUgdXNlciBkZWZpbmVkIGljb24gY29tcGF0aWJsZSB0byBvbGQgQVBJLiBTaG91bGQgYmUgcmVtb3ZlZCBpbiAyLjAuXG4gIGhhc1RleHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaGFzU3JjOiBib29sZWFuID0gdHJ1ZTtcbiAgaGFzSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xuICB0ZXh0U3R5bGVzOiB7fTtcblxuICBAVmlld0NoaWxkKCd0ZXh0RWwnKSB0ZXh0RWw6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbnpTaGFwZTogTnpBdmF0YXJTaGFwZSA9ICdjaXJjbGUnO1xuXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpBdmF0YXJTaXplID0gJ2RlZmF1bHQnO1xuXG4gIEBJbnB1dCgpIG56VGV4dDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG56U3JjOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IG56SWNvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLm9sZEFQSUljb24gPSB2YWx1ZS5pbmRleE9mKCdhbnRpY29uJykgPiAtMTtcbiAgICB9XG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgc2V0Q2xhc3MoKTogdGhpcyB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuc2l6ZU1hcFsgdGhpcy5uelNpemUgXX1gIF06IHRoaXMuc2l6ZU1hcFsgdGhpcy5uelNpemUgXSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNoYXBlfWAgXSAgICAgICAgICAgICAgIDogdGhpcy5uelNoYXBlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taWNvbmAgXSAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm56SWNvbixcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWltYWdlYCBdICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5uelNyY1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbWdFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhc1NyYyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzSWNvbiA9IGZhbHNlO1xuICAgIHRoaXMuaGFzVGV4dCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm56SWNvbikge1xuICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnpUZXh0KSB7XG4gICAgICB0aGlzLmhhc1RleHQgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNldENsYXNzKCkubm90aWZ5Q2FsYygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjU3RyaW5nU2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzVGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuV2lkdGggPSB0aGlzLnRleHRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGF2YXRhcldpZHRoID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBjb25zdCBzY2FsZSA9IGF2YXRhcldpZHRoIC0gOCA8IGNoaWxkcmVuV2lkdGggPyAoYXZhdGFyV2lkdGggLSA4KSAvIGNoaWxkcmVuV2lkdGggOiAxO1xuICAgIGlmIChzY2FsZSA9PT0gMSkge1xuICAgICAgdGhpcy50ZXh0U3R5bGVzID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGV4dFN0eWxlcyA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZX0pYCxcbiAgICAgICAgcG9zaXRpb24gOiAnYWJzb2x1dGUnLFxuICAgICAgICBkaXNwbGF5ICA6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBsZWZ0ICAgICA6IGBjYWxjKDUwJSAtICR7TWF0aC5yb3VuZChjaGlsZHJlbldpZHRoIC8gMil9cHgpYFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUNhbGMoKTogdGhpcyB7XG4gICAgLy8gSWYgdXNlIG5nQWZ0ZXJWaWV3Q2hlY2tlZCwgYWx3YXlzIGRlbWFuZHMgbW9yZSBjb21wdXRhdGlvbnMsIHNvLi4uLi4uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNTdHJpbmdTaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuaGFzVGV4dCA9ICF0aGlzLm56U3JjICYmICEhdGhpcy5uelRleHQ7XG4gICAgdGhpcy5oYXNJY29uID0gIXRoaXMubnpTcmMgJiYgISF0aGlzLm56SWNvbjtcbiAgICB0aGlzLmhhc1NyYyA9ICEhdGhpcy5uelNyYztcblxuICAgIHRoaXMuc2V0Q2xhc3MoKS5ub3RpZnlDYWxjKCk7XG4gIH1cbn1cbiJdfQ==