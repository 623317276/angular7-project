/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { toBoolean } from '../core/util/convert';
var NzAlertComponent = /** @class */ (function () {
    function NzAlertComponent() {
        this._banner = false;
        this._closeable = false;
        this._showIcon = false;
        this._type = 'info';
        this.display = true;
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.prefixClass = 'ant-alert';
        this.nzOnClose = new EventEmitter();
    }
    Object.defineProperty(NzAlertComponent.prototype, "nzDescription", {
        get: /**
         * @return {?}
         */
        function () {
            return this._description;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isDescriptionString = !(value instanceof TemplateRef);
            this._description = value;
            this.updateOuterClassMap();
            this.updateIconClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAlertComponent.prototype, "nzCloseText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._closeText;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isCloseTextString = !(value instanceof TemplateRef);
            this._closeText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAlertComponent.prototype, "nzMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._message;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isMessageString = !(value instanceof TemplateRef);
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAlertComponent.prototype, "nzType", {
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
            this.isTypeSet = true;
            this.updateOuterClassMap();
            this.updateIconClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAlertComponent.prototype, "nzBanner", {
        get: /**
         * @return {?}
         */
        function () {
            return this._banner;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._banner = toBoolean(value);
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
            this.updateOuterClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAlertComponent.prototype, "nzCloseable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._closeable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._closeable = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAlertComponent.prototype, "nzShowIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showIcon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showIcon = toBoolean(value);
            this.isShowIconSet = true;
            this.updateOuterClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.display = false;
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.onFadeAnimationDone = /**
     * @return {?}
     */
    function () {
        if (!this.display) {
            this.nzOnClose.emit(true);
        }
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.updateOuterClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.outerClassMap = (_a = {},
            _a["" + this.prefixClass] = true,
            _a[this.prefixClass + "-" + this.nzType] = true,
            _a[this.prefixClass + "-no-icon"] = !this.nzShowIcon,
            _a[this.prefixClass + "-banner"] = this.nzBanner,
            _a[this.prefixClass + "-with-description"] = !!this.nzDescription,
            _a);
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.updateIconClassMap = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var iconType = {
            'close-circle-o': this.nzDescription && this.nzType === 'error',
            'check-circle-o': this.nzDescription && this.nzType === 'success',
            'info-circle-o': this.nzDescription && this.nzType === 'info',
            'exclamation-circle-o': this.nzDescription && this.nzType === 'warning',
            'close-circle-fill': (!this.nzDescription) && this.nzType === 'error',
            'check-circle-fill': (!this.nzDescription) && this.nzType === 'success',
            'info-circle-fill': (!this.nzDescription) && this.nzType === 'info',
            'exclamation-circle-fill': (!this.nzDescription) && this.nzType === 'warning'
        };
        Object.keys(iconType).forEach(function (key) {
            if (iconType[key]) {
                _this.iconType = key;
            }
        });
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateIconClassMap();
        this.updateOuterClassMap();
    };
    NzAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-alert',
                    animations: [fadeAnimation],
                    preserveWhitespaces: false,
                    template: "<div [ngClass]=\"outerClassMap\" *ngIf=\"display\" [@fadeAnimation] (@fadeAnimation.done)=\"onFadeAnimationDone()\">\n  <ng-container *ngIf=\"nzShowIcon\">\n    <i class=\"ant-alert-icon\" [ngClass]=\"nzIconType\" *ngIf=\"nzIconType; else iconTemplate\"></i>\n    <ng-template #iconTemplate>\n      <i nz-icon class=\"ant-alert-icon\" [type]=\"iconType\"></i>\n    </ng-template>\n  </ng-container>\n  <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\n    <ng-container *ngIf=\"isMessageString; else messageTemplate\">{{ nzMessage }}</ng-container>\n    <ng-template #messageTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzMessage\"></ng-template>\n    </ng-template>\n  </span>\n  <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\n    <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ nzDescription }}</ng-container>\n    <ng-template #descriptionTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzDescription\"></ng-template>\n    </ng-template>\n  </span>\n  <a\n    *ngIf=\"nzCloseable || nzCloseText\"\n    (click)=\"closeAlert()\"\n    class=\"ant-alert-close-icon\">\n    <ng-template #closeDefaultTemplate>\n      <i nz-icon type=\"close\" class=\"anticon-close\"></i>\n    </ng-template>\n    <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\n      <ng-container *ngIf=\"isCloseTextString; else closeTextTemplate\">{{ nzCloseText }}</ng-container>\n      <ng-template #closeTextTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzCloseText\"></ng-template>\n      </ng-template>\n    </ng-container>\n  </a>\n</div>",
                    styles: [":host {\n      display: block;\n    }"]
                }] }
    ];
    NzAlertComponent.propDecorators = {
        nzOnClose: [{ type: Output }],
        nzIconType: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzCloseText: [{ type: Input }],
        nzMessage: [{ type: Input }],
        nzType: [{ type: Input }],
        nzBanner: [{ type: Input }],
        nzCloseable: [{ type: Input }],
        nzShowIcon: [{ type: Input }]
    };
    return NzAlertComponent;
}());
export { NzAlertComponent };
function NzAlertComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAlertComponent.prototype._banner;
    /** @type {?} */
    NzAlertComponent.prototype._closeable;
    /** @type {?} */
    NzAlertComponent.prototype._showIcon;
    /** @type {?} */
    NzAlertComponent.prototype._type;
    /** @type {?} */
    NzAlertComponent.prototype._description;
    /** @type {?} */
    NzAlertComponent.prototype._message;
    /** @type {?} */
    NzAlertComponent.prototype._closeText;
    /** @type {?} */
    NzAlertComponent.prototype.display;
    /** @type {?} */
    NzAlertComponent.prototype.isTypeSet;
    /** @type {?} */
    NzAlertComponent.prototype.isShowIconSet;
    /** @type {?} */
    NzAlertComponent.prototype.prefixClass;
    /** @type {?} */
    NzAlertComponent.prototype.isDescriptionString;
    /** @type {?} */
    NzAlertComponent.prototype.isMessageString;
    /** @type {?} */
    NzAlertComponent.prototype.isCloseTextString;
    /** @type {?} */
    NzAlertComponent.prototype.outerClassMap;
    /** @type {?} */
    NzAlertComponent.prototype.iconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzOnClose;
    /** @type {?} */
    NzAlertComponent.prototype.nzIconType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFsZXJ0L256LWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O3VCQWM3QixLQUFLOzBCQUNGLEtBQUs7eUJBQ04sS0FBSztxQkFDVCxNQUFNO3VCQUlaLElBQUk7eUJBQ0YsS0FBSzs2QkFDRCxLQUFLOzJCQUNQLFdBQVc7eUJBTW9CLElBQUksWUFBWSxFQUFFOztJQUcvRCxzQkFDSSwyQ0FBYTs7OztRQU9qQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjs7Ozs7UUFWRCxVQUNrQixLQUFpQztZQUNqRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjs7O09BQUE7SUFNRCxzQkFDSSx5Q0FBVzs7OztRQUtmO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQVJELFVBQ2dCLEtBQWlDO1lBQy9DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCOzs7T0FBQTtJQU1ELHNCQUNJLHVDQUFT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QkwsS0FBSzs2QkFTTCxLQUFLOzsyQkFuSFI7O1NBMEJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgdHlwZSBOZ0NsYXNzVHlwZSA9IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFsga2xhc3M6IHN0cmluZyBdOiBhbnk7IH07XG5cbmltcG9ydCB7IGZhZGVBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9mYWRlLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWFsZXJ0JyxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBmYWRlQW5pbWF0aW9uIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICAgIGA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9iYW5uZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2xvc2VhYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dJY29uID0gZmFsc2U7XG4gIHByaXZhdGUgX3R5cGUgPSAnaW5mbyc7XG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfbWVzc2FnZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX2Nsb3NlVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIGRpc3BsYXkgPSB0cnVlO1xuICBpc1R5cGVTZXQgPSBmYWxzZTtcbiAgaXNTaG93SWNvblNldCA9IGZhbHNlO1xuICBwcmVmaXhDbGFzcyA9ICdhbnQtYWxlcnQnO1xuICBpc0Rlc2NyaXB0aW9uU3RyaW5nOiBib29sZWFuO1xuICBpc01lc3NhZ2VTdHJpbmc6IGJvb2xlYW47XG4gIGlzQ2xvc2VUZXh0U3RyaW5nOiBib29sZWFuO1xuICBvdXRlckNsYXNzTWFwO1xuICBpY29uVHlwZTtcbiAgQE91dHB1dCgpIG56T25DbG9zZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBuekljb25UeXBlOiBOZ0NsYXNzVHlwZTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpEZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzRGVzY3JpcHRpb25TdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVPdXRlckNsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuekRlc2NyaXB0aW9uKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDbG9zZVRleHQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0Nsb3NlVGV4dFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fY2xvc2VUZXh0ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpDbG9zZVRleHQoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jbG9zZVRleHQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpNZXNzYWdlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNNZXNzYWdlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpNZXNzYWdlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLmlzVHlwZVNldCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVPdXRlckNsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuelR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekJhbm5lcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Jhbm5lciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKCF0aGlzLmlzVHlwZVNldCkge1xuICAgICAgdGhpcy5uelR5cGUgPSAnd2FybmluZyc7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc1Nob3dJY29uU2V0KSB7XG4gICAgICB0aGlzLm56U2hvd0ljb24gPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU91dGVyQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuekJhbm5lcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYmFubmVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2xvc2VhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2xvc2VhYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekNsb3NlYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvc2VhYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0ljb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93SWNvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5pc1Nob3dJY29uU2V0ID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZU91dGVyQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuelNob3dJY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93SWNvbjtcbiAgfVxuXG4gIGNsb3NlQWxlcnQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5ID0gZmFsc2U7XG4gIH1cblxuICBvbkZhZGVBbmltYXRpb25Eb25lKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNwbGF5KSB7XG4gICAgICB0aGlzLm56T25DbG9zZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU91dGVyQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5vdXRlckNsYXNzTWFwID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsYXNzfWAgXSAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsYXNzfS0ke3RoaXMubnpUeXBlfWAgXSAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsYXNzfS1uby1pY29uYCBdICAgICAgICAgOiAhdGhpcy5uelNob3dJY29uLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsYXNzfS1iYW5uZXJgIF0gICAgICAgICAgOiB0aGlzLm56QmFubmVyLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsYXNzfS13aXRoLWRlc2NyaXB0aW9uYCBdOiAhIXRoaXMubnpEZXNjcmlwdGlvblxuICAgIH07XG4gIH1cblxuICB1cGRhdGVJY29uQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgaWNvblR5cGUgPSB7XG4gICAgICAnY2xvc2UtY2lyY2xlLW8nICAgICAgICAgOiB0aGlzLm56RGVzY3JpcHRpb24gJiYgdGhpcy5uelR5cGUgPT09ICdlcnJvcicsXG4gICAgICAnY2hlY2stY2lyY2xlLW8nICAgICAgICAgOiB0aGlzLm56RGVzY3JpcHRpb24gJiYgdGhpcy5uelR5cGUgPT09ICdzdWNjZXNzJyxcbiAgICAgICdpbmZvLWNpcmNsZS1vJyAgICAgICAgICA6IHRoaXMubnpEZXNjcmlwdGlvbiAmJiB0aGlzLm56VHlwZSA9PT0gJ2luZm8nLFxuICAgICAgJ2V4Y2xhbWF0aW9uLWNpcmNsZS1vJyAgIDogdGhpcy5uekRlc2NyaXB0aW9uICYmIHRoaXMubnpUeXBlID09PSAnd2FybmluZycsXG4gICAgICAnY2xvc2UtY2lyY2xlLWZpbGwnICAgICAgOiAoIXRoaXMubnpEZXNjcmlwdGlvbikgJiYgdGhpcy5uelR5cGUgPT09ICdlcnJvcicsXG4gICAgICAnY2hlY2stY2lyY2xlLWZpbGwnICAgICAgOiAoIXRoaXMubnpEZXNjcmlwdGlvbikgJiYgdGhpcy5uelR5cGUgPT09ICdzdWNjZXNzJyxcbiAgICAgICdpbmZvLWNpcmNsZS1maWxsJyAgICAgICA6ICghdGhpcy5uekRlc2NyaXB0aW9uKSAmJiB0aGlzLm56VHlwZSA9PT0gJ2luZm8nLFxuICAgICAgJ2V4Y2xhbWF0aW9uLWNpcmNsZS1maWxsJzogKCF0aGlzLm56RGVzY3JpcHRpb24pICYmIHRoaXMubnpUeXBlID09PSAnd2FybmluZydcbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMoaWNvblR5cGUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChpY29uVHlwZVsga2V5IF0pIHtcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9IGtleTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlSWNvbkNsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVPdXRlckNsYXNzTWFwKCk7XG4gIH1cbn1cbiJdfQ==