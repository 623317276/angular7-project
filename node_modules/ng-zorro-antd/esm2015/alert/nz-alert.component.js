/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { toBoolean } from '../core/util/convert';
export class NzAlertComponent {
    constructor() {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDescription(value) {
        this.isDescriptionString = !(value instanceof TemplateRef);
        this._description = value;
        this.updateOuterClassMap();
        this.updateIconClassMap();
    }
    /**
     * @return {?}
     */
    get nzDescription() {
        return this._description;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCloseText(value) {
        this.isCloseTextString = !(value instanceof TemplateRef);
        this._closeText = value;
    }
    /**
     * @return {?}
     */
    get nzCloseText() {
        return this._closeText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMessage(value) {
        this.isMessageString = !(value instanceof TemplateRef);
        this._message = value;
    }
    /**
     * @return {?}
     */
    get nzMessage() {
        return this._message;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this._type = value;
        this.isTypeSet = true;
        this.updateOuterClassMap();
        this.updateIconClassMap();
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
    set nzBanner(value) {
        this._banner = toBoolean(value);
        if (!this.isTypeSet) {
            this.nzType = 'warning';
        }
        if (!this.isShowIconSet) {
            this.nzShowIcon = true;
        }
        this.updateOuterClassMap();
    }
    /**
     * @return {?}
     */
    get nzBanner() {
        return this._banner;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCloseable(value) {
        this._closeable = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzCloseable() {
        return this._closeable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowIcon(value) {
        this._showIcon = toBoolean(value);
        this.isShowIconSet = true;
        this.updateOuterClassMap();
    }
    /**
     * @return {?}
     */
    get nzShowIcon() {
        return this._showIcon;
    }
    /**
     * @return {?}
     */
    closeAlert() {
        this.display = false;
    }
    /**
     * @return {?}
     */
    onFadeAnimationDone() {
        if (!this.display) {
            this.nzOnClose.emit(true);
        }
    }
    /**
     * @return {?}
     */
    updateOuterClassMap() {
        this.outerClassMap = {
            [`${this.prefixClass}`]: true,
            [`${this.prefixClass}-${this.nzType}`]: true,
            [`${this.prefixClass}-no-icon`]: !this.nzShowIcon,
            [`${this.prefixClass}-banner`]: this.nzBanner,
            [`${this.prefixClass}-with-description`]: !!this.nzDescription
        };
    }
    /**
     * @return {?}
     */
    updateIconClassMap() {
        /** @type {?} */
        const iconType = {
            'close-circle-o': this.nzDescription && this.nzType === 'error',
            'check-circle-o': this.nzDescription && this.nzType === 'success',
            'info-circle-o': this.nzDescription && this.nzType === 'info',
            'exclamation-circle-o': this.nzDescription && this.nzType === 'warning',
            'close-circle-fill': (!this.nzDescription) && this.nzType === 'error',
            'check-circle-fill': (!this.nzDescription) && this.nzType === 'success',
            'info-circle-fill': (!this.nzDescription) && this.nzType === 'info',
            'exclamation-circle-fill': (!this.nzDescription) && this.nzType === 'warning'
        };
        Object.keys(iconType).forEach(key => {
            if (iconType[key]) {
                this.iconType = key;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateIconClassMap();
        this.updateOuterClassMap();
    }
}
NzAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-alert',
                animations: [fadeAnimation],
                preserveWhitespaces: false,
                template: "<div [ngClass]=\"outerClassMap\" *ngIf=\"display\" [@fadeAnimation] (@fadeAnimation.done)=\"onFadeAnimationDone()\">\n  <ng-container *ngIf=\"nzShowIcon\">\n    <i class=\"ant-alert-icon\" [ngClass]=\"nzIconType\" *ngIf=\"nzIconType; else iconTemplate\"></i>\n    <ng-template #iconTemplate>\n      <i nz-icon class=\"ant-alert-icon\" [type]=\"iconType\"></i>\n    </ng-template>\n  </ng-container>\n  <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\n    <ng-container *ngIf=\"isMessageString; else messageTemplate\">{{ nzMessage }}</ng-container>\n    <ng-template #messageTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzMessage\"></ng-template>\n    </ng-template>\n  </span>\n  <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\n    <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ nzDescription }}</ng-container>\n    <ng-template #descriptionTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzDescription\"></ng-template>\n    </ng-template>\n  </span>\n  <a\n    *ngIf=\"nzCloseable || nzCloseText\"\n    (click)=\"closeAlert()\"\n    class=\"ant-alert-close-icon\">\n    <ng-template #closeDefaultTemplate>\n      <i nz-icon type=\"close\" class=\"anticon-close\"></i>\n    </ng-template>\n    <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\n      <ng-container *ngIf=\"isCloseTextString; else closeTextTemplate\">{{ nzCloseText }}</ng-container>\n      <ng-template #closeTextTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzCloseText\"></ng-template>\n      </ng-template>\n    </ng-container>\n  </a>\n</div>",
                styles: [`:host {
      display: block;
    }`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFsZXJ0L256LWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWFqRCxNQUFNOzt1QkFDYyxLQUFLOzBCQUNGLEtBQUs7eUJBQ04sS0FBSztxQkFDVCxNQUFNO3VCQUlaLElBQUk7eUJBQ0YsS0FBSzs2QkFDRCxLQUFLOzJCQUNQLFdBQVc7eUJBTW9CLElBQUksWUFBWSxFQUFFOzs7Ozs7SUFHL0QsSUFDSSxhQUFhLENBQUMsS0FBaUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDM0I7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7Ozs7O0lBRUQsSUFDSSxXQUFXLENBQUMsS0FBaUM7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7S0FDekI7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBRUQsSUFDSSxTQUFT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TCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCB0eXBlIE5nQ2xhc3NUeXBlID0gc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHsgWyBrbGFzczogc3RyaW5nIF06IGFueTsgfTtcblxuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYWxlcnQnLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbIGZhZGVBbmltYXRpb24gXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWFsZXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgICAgYDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Jhbm5lciA9IGZhbHNlO1xuICBwcml2YXRlIF9jbG9zZWFibGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0ljb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdHlwZSA9ICdpbmZvJztcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfY2xvc2VUZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgZGlzcGxheSA9IHRydWU7XG4gIGlzVHlwZVNldCA9IGZhbHNlO1xuICBpc1Nob3dJY29uU2V0ID0gZmFsc2U7XG4gIHByZWZpeENsYXNzID0gJ2FudC1hbGVydCc7XG4gIGlzRGVzY3JpcHRpb25TdHJpbmc6IGJvb2xlYW47XG4gIGlzTWVzc2FnZVN0cmluZzogYm9vbGVhbjtcbiAgaXNDbG9zZVRleHRTdHJpbmc6IGJvb2xlYW47XG4gIG91dGVyQ2xhc3NNYXA7XG4gIGljb25UeXBlO1xuICBAT3V0cHV0KCkgbnpPbkNsb3NlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG56SWNvblR5cGU6IE5nQ2xhc3NUeXBlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNEZXNjcmlwdGlvblN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZU91dGVyQ2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUljb25DbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56RGVzY3JpcHRpb24oKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekNsb3NlVGV4dCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzQ2xvc2VUZXh0U3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9jbG9zZVRleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuekNsb3NlVGV4dCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3NlVGV4dDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek1lc3NhZ2UodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc01lc3NhZ2VTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuek1lc3NhZ2UoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuaXNUeXBlU2V0ID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZU91dGVyQ2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUljb25DbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QmFubmVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYmFubmVyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAoIXRoaXMuaXNUeXBlU2V0KSB7XG4gICAgICB0aGlzLm56VHlwZSA9ICd3YXJuaW5nJztcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzU2hvd0ljb25TZXQpIHtcbiAgICAgIHRoaXMubnpTaG93SWNvbiA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlT3V0ZXJDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56QmFubmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9iYW5uZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDbG9zZWFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jbG9zZWFibGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56Q2xvc2VhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jbG9zZWFibGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93SWNvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dJY29uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLmlzU2hvd0ljb25TZXQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlT3V0ZXJDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56U2hvd0ljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dJY29uO1xuICB9XG5cbiAgY2xvc2VBbGVydCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgfVxuXG4gIG9uRmFkZUFuaW1hdGlvbkRvbmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc3BsYXkpIHtcbiAgICAgIHRoaXMubnpPbkNsb3NlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT3V0ZXJDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLm91dGVyQ2xhc3NNYXAgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xhc3N9YCBdICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xhc3N9LSR7dGhpcy5uelR5cGV9YCBdICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xhc3N9LW5vLWljb25gIF0gICAgICAgICA6ICF0aGlzLm56U2hvd0ljb24sXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xhc3N9LWJhbm5lcmAgXSAgICAgICAgICA6IHRoaXMubnpCYW5uZXIsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xhc3N9LXdpdGgtZGVzY3JpcHRpb25gIF06ICEhdGhpcy5uekRlc2NyaXB0aW9uXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUljb25DbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBpY29uVHlwZSA9IHtcbiAgICAgICdjbG9zZS1jaXJjbGUtbycgICAgICAgICA6IHRoaXMubnpEZXNjcmlwdGlvbiAmJiB0aGlzLm56VHlwZSA9PT0gJ2Vycm9yJyxcbiAgICAgICdjaGVjay1jaXJjbGUtbycgICAgICAgICA6IHRoaXMubnpEZXNjcmlwdGlvbiAmJiB0aGlzLm56VHlwZSA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgJ2luZm8tY2lyY2xlLW8nICAgICAgICAgIDogdGhpcy5uekRlc2NyaXB0aW9uICYmIHRoaXMubnpUeXBlID09PSAnaW5mbycsXG4gICAgICAnZXhjbGFtYXRpb24tY2lyY2xlLW8nICAgOiB0aGlzLm56RGVzY3JpcHRpb24gJiYgdGhpcy5uelR5cGUgPT09ICd3YXJuaW5nJyxcbiAgICAgICdjbG9zZS1jaXJjbGUtZmlsbCcgICAgICA6ICghdGhpcy5uekRlc2NyaXB0aW9uKSAmJiB0aGlzLm56VHlwZSA9PT0gJ2Vycm9yJyxcbiAgICAgICdjaGVjay1jaXJjbGUtZmlsbCcgICAgICA6ICghdGhpcy5uekRlc2NyaXB0aW9uKSAmJiB0aGlzLm56VHlwZSA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgJ2luZm8tY2lyY2xlLWZpbGwnICAgICAgIDogKCF0aGlzLm56RGVzY3JpcHRpb24pICYmIHRoaXMubnpUeXBlID09PSAnaW5mbycsXG4gICAgICAnZXhjbGFtYXRpb24tY2lyY2xlLWZpbGwnOiAoIXRoaXMubnpEZXNjcmlwdGlvbikgJiYgdGhpcy5uelR5cGUgPT09ICd3YXJuaW5nJ1xuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyhpY29uVHlwZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGljb25UeXBlWyBrZXkgXSkge1xuICAgICAgICB0aGlzLmljb25UeXBlID0ga2V5O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZU91dGVyQ2xhc3NNYXAoKTtcbiAgfVxufVxuIl19