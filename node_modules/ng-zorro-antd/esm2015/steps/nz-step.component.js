/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export class NzStepComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzUpdateHostClassService
     */
    constructor(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this._status = 'wait';
        this._currentIndex = 0;
        this.el = this.elementRef.nativeElement;
        this.oldAPIIcon = true;
        this.isCustomStatus = false;
        this.isDescriptionString = true;
        this.isTitleString = true;
        this.isIconString = true;
        this.last = false;
        this.showProcessDot = false;
        this.direction = 'horizontal';
        this.outStatus = 'process';
        this.index = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTitle(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
    /**
     * @return {?}
     */
    get nzTitle() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIcon(value) {
        if (!(value instanceof TemplateRef)) {
            this.isIconString = true;
            if (typeof value === 'string') {
                /** @type {?} */
                const str = /** @type {?} */ (value);
                this.oldAPIIcon = str.indexOf('anticon') > -1;
            }
            else {
                this.oldAPIIcon = true;
            }
        }
        else {
            this.isIconString = false;
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
     * @param {?} status
     * @return {?}
     */
    set nzStatus(status) {
        this._status = status;
        this.isCustomStatus = true;
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    get nzStatus() {
        return this._status;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDescription(value) {
        this.isDescriptionString = !(value instanceof TemplateRef);
        this._description = value;
    }
    /**
     * @return {?}
     */
    get nzDescription() {
        return this._description;
    }
    /**
     * @return {?}
     */
    get currentIndex() {
        return this._currentIndex;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            if (current > this.index) {
                this._status = 'finish';
            }
            else if (current === this.index) {
                if (this.outStatus) {
                    this._status = this.outStatus;
                }
            }
            else {
                this._status = 'wait';
            }
        }
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    updateClassMap() {
        /** @type {?} */
        const classMap = {
            ['ant-steps-item']: true,
            [`ant-steps-item-wait`]: this.nzStatus === 'wait',
            [`ant-steps-item-process`]: this.nzStatus === 'process',
            [`ant-steps-item-finish`]: this.nzStatus === 'finish',
            [`ant-steps-item-error`]: this.nzStatus === 'error',
            ['ant-steps-custom']: !!this.nzIcon,
            ['ant-steps-next-error']: (this.outStatus === 'error') && (this.currentIndex === this.index + 1)
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
}
NzStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-step',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                template: "<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n</ng-template>\n<ng-template #descriptionTemplate>\n  <ng-template [ngTemplateOutlet]=\"nzDescription\"></ng-template>\n</ng-template>\n<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\n<div class=\"ant-steps-item-icon\">\n  <ng-template [ngIf]=\"!showProcessDot\">\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\">\n      <i nz-icon type=\"check\"></i>\n    </span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\">\n      <i nz-icon type=\"close\"></i>\n    </span>\n    <span class=\"ant-steps-icon\" *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">\n      {{ index + 1 }}\n    </span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\n        <i nz-icon [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n      </ng-container>\n      <ng-template #iconTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzIcon\"></ng-template>\n    </ng-template>\n    </span>\n  </ng-template>\n  <ng-template [ngIf]=\"showProcessDot\">\n    <span class=\"ant-steps-icon\">\n      <ng-template #processDotTemplate>\n        <span class=\"ant-steps-icon-dot\"></span>\n      </ng-template>\n      <ng-template [ngTemplateOutlet]=\"customProcessTemplate||processDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status:nzStatus, index:index }\"></ng-template>\n    </span>\n  </ng-template>\n</div>\n<div class=\"ant-steps-item-content\">\n  <div class=\"ant-steps-item-title\">\n    <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n  </div>\n  <div class=\"ant-steps-item-description\">\n    <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ nzDescription }}</ng-container>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
NzStepComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
NzStepComponent.propDecorators = {
    processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
    nzTitle: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzDescription: [{ type: Input }]
};
function NzStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzStepComponent.prototype._status;
    /** @type {?} */
    NzStepComponent.prototype._currentIndex;
    /** @type {?} */
    NzStepComponent.prototype._description;
    /** @type {?} */
    NzStepComponent.prototype._icon;
    /** @type {?} */
    NzStepComponent.prototype._title;
    /** @type {?} */
    NzStepComponent.prototype.el;
    /** @type {?} */
    NzStepComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzStepComponent.prototype.isCustomStatus;
    /** @type {?} */
    NzStepComponent.prototype.isDescriptionString;
    /** @type {?} */
    NzStepComponent.prototype.isTitleString;
    /** @type {?} */
    NzStepComponent.prototype.isIconString;
    /** @type {?} */
    NzStepComponent.prototype.last;
    /** @type {?} */
    NzStepComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepComponent.prototype.direction;
    /** @type {?} */
    NzStepComponent.prototype.outStatus;
    /** @type {?} */
    NzStepComponent.prototype.index;
    /** @type {?} */
    NzStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    NzStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    NzStepComponent.prototype.elementRef;
    /** @type {?} */
    NzStepComponent.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3RlcHMvbnotc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBV3RGLE1BQU07Ozs7O0lBd0dKLFlBQW9CLFVBQXNCLEVBQVUsd0JBQWtEO1FBQWxGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO3VCQXZHcEYsTUFBTTs2QkFDQSxDQUFDO2tCQUlDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTswQkFDMUMsSUFBSTs4QkFDQSxLQUFLO21DQUNBLElBQUk7NkJBQ1YsSUFBSTs0QkFDTCxJQUFJO29CQUNaLEtBQUs7OEJBQ0ssS0FBSzt5QkFDVixZQUFZO3lCQUNaLFNBQVM7cUJBQ2IsQ0FBQztLQXlGUjs7Ozs7SUFyRkQsSUFDSSxPQUFPLENBQUMsS0FBaUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3JCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztJQUVELElBQ0ksTUFBTSxDQUFDLEtBQTBDO1FBQ25ELElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTs7Z0JBQzdCLE1BQU0sR0FBRyxx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QkMsVUFBVTtZQU1ILHdCQUF3Qjs7O2lDQTRCOUIsU0FBUyxTQUFDLG9CQUFvQjtzQkFHOUIsS0FBSztxQkFVTCxLQUFLO3VCQW9CTCxLQUFLOzRCQVdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgdHlwZSBTdGVwTmdDbGFzc1R5cGUgPSBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBbIGtsYXNzOiBzdHJpbmcgXTogYW55OyB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXN0ZXAnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc3RlcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTdGVwQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfc3RhdHVzID0gJ3dhaXQnO1xuICBwcml2YXRlIF9jdXJyZW50SW5kZXggPSAwO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX2ljb246IFN0ZXBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIG9sZEFQSUljb24gPSB0cnVlOyAvLyBNYWtlIHRoZSB1c2VyIGRlZmluZWQgaWNvbiBjb21wYXRpYmxlIHRvIG9sZCBBUEkuIFNob3VsZCBiZSByZW1vdmVkIGluIDIuMC5cbiAgaXNDdXN0b21TdGF0dXMgPSBmYWxzZTtcbiAgaXNEZXNjcmlwdGlvblN0cmluZyA9IHRydWU7XG4gIGlzVGl0bGVTdHJpbmcgPSB0cnVlO1xuICBpc0ljb25TdHJpbmcgPSB0cnVlO1xuICBsYXN0ID0gZmFsc2U7XG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XG4gIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgb3V0U3RhdHVzID0gJ3Byb2Nlc3MnO1xuICBpbmRleCA9IDA7XG4gIEBWaWV3Q2hpbGQoJ3Byb2Nlc3NEb3RUZW1wbGF0ZScpIHByb2Nlc3NEb3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIGN1c3RvbVByb2Nlc3NUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+LCBzdGF0dXM6IHN0cmluZywgaW5kZXg6IG51bWJlciB9PjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzVGl0bGVTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SWNvbih2YWx1ZTogU3RlcE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSkge1xuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSB0cnVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3Qgc3RyID0gdmFsdWUgYXMgc3RyaW5nO1xuICAgICAgICB0aGlzLm9sZEFQSUljb24gPSBzdHIuaW5kZXhPZignYW50aWNvbicpID4gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9sZEFQSUljb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpJY29uKCk6IFN0ZXBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmlzQ3VzdG9tU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpTdGF0dXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0Rlc2NyaXB0aW9uU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56RGVzY3JpcHRpb24oKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBjdXJyZW50SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4O1xuICB9XG5cbiAgc2V0IGN1cnJlbnRJbmRleChjdXJyZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBjdXJyZW50O1xuICAgIGlmICghdGhpcy5pc0N1c3RvbVN0YXR1cykge1xuICAgICAgaWYgKGN1cnJlbnQgPiB0aGlzLmluZGV4KSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9ICdmaW5pc2gnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSB0aGlzLmluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLm91dFN0YXR1cykge1xuICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IHRoaXMub3V0U3RhdHVzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSAnd2FpdCc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyAnYW50LXN0ZXBzLWl0ZW0nIF0gICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYGFudC1zdGVwcy1pdGVtLXdhaXRgIF0gICA6IHRoaXMubnpTdGF0dXMgPT09ICd3YWl0JyxcbiAgICAgIFsgYGFudC1zdGVwcy1pdGVtLXByb2Nlc3NgIF06IHRoaXMubnpTdGF0dXMgPT09ICdwcm9jZXNzJyxcbiAgICAgIFsgYGFudC1zdGVwcy1pdGVtLWZpbmlzaGAgXSA6IHRoaXMubnpTdGF0dXMgPT09ICdmaW5pc2gnLFxuICAgICAgWyBgYW50LXN0ZXBzLWl0ZW0tZXJyb3JgIF0gIDogdGhpcy5uelN0YXR1cyA9PT0gJ2Vycm9yJyxcbiAgICAgIFsgJ2FudC1zdGVwcy1jdXN0b20nIF0gICAgICA6ICEhdGhpcy5uekljb24sXG4gICAgICBbICdhbnQtc3RlcHMtbmV4dC1lcnJvcicgXSAgOiAodGhpcy5vdXRTdGF0dXMgPT09ICdlcnJvcicpICYmICh0aGlzLmN1cnJlbnRJbmRleCA9PT0gdGhpcy5pbmRleCArIDEpXG4gICAgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XG4gIH1cbn1cbiJdfQ==