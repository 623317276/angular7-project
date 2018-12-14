/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
export class NzDividerComponent {
    /**
     * @param {?} el
     * @param {?} cd
     * @param {?} updateHostClassService
     */
    constructor(el, cd, updateHostClassService) {
        this.el = el;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        // region fields
        this.isText = false;
        this.textStr = '';
        this.nzType = 'horizontal';
        this.nzOrientation = '';
        this._dashed = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzText(value) {
        if (value instanceof TemplateRef) {
            this.textStr = null;
            this.textTpl = value;
        }
        else {
            this.textStr = value;
        }
        this.isText = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDashed(value) {
        this._dashed = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDashed() {
        return this._dashed;
    }
    /**
     * @return {?}
     */
    setClass() {
        /** @type {?} */
        const orientationPrefix = (this.nzOrientation.length > 0) ? '-' + this.nzOrientation : this.nzOrientation;
        /** @type {?} */
        const classMap = {
            ['ant-divider']: true,
            [`ant-divider-${this.nzType}`]: true,
            [`ant-divider-with-text${orientationPrefix}`]: this.isText,
            [`ant-divider-dashed`]: this.nzDashed
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        this.cd.detectChanges();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClass();
    }
}
NzDividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-divider',
                template: "<span *ngIf=\"isText\" class=\"ant-divider-inner-text\">\n  <ng-container *ngIf=\"textStr; else textTpl\">{{ textStr }}</ng-container>\n</span>",
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzDividerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzUpdateHostClassService }
];
NzDividerComponent.propDecorators = {
    nzText: [{ type: Input }],
    nzType: [{ type: Input }],
    nzOrientation: [{ type: Input }],
    nzDashed: [{ type: Input }]
};
function NzDividerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDividerComponent.prototype.isText;
    /** @type {?} */
    NzDividerComponent.prototype.textStr;
    /** @type {?} */
    NzDividerComponent.prototype.textTpl;
    /** @type {?} */
    NzDividerComponent.prototype.nzType;
    /** @type {?} */
    NzDividerComponent.prototype.nzOrientation;
    /** @type {?} */
    NzDividerComponent.prototype._dashed;
    /** @type {?} */
    NzDividerComponent.prototype.el;
    /** @type {?} */
    NzDividerComponent.prototype.cd;
    /** @type {?} */
    NzDividerComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGl2aWRlci9uei1kaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVNqRCxNQUFNOzs7Ozs7SUE4Q0osWUFBb0IsRUFBYyxFQUFVLEVBQXFCLEVBQVUsc0JBQWdEO1FBQXZHLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7O3NCQTNDbEgsS0FBSzt1QkFDSixFQUFFO3NCQWNpQyxZQUFZOzZCQUVULEVBQUU7dUJBRWhDLEtBQUs7S0F5QnRCOzs7OztJQXhDRCxJQUNJLE1BQU0sQ0FBQyxLQUFpQztRQUMxQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ3ZCOzs7OztJQVFELElBQ0ksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7SUFHTyxRQUFROztRQUNkLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7O1FBQzFHLE1BQU0sUUFBUSxHQUFHO1lBQ2YsQ0FBRSxhQUFhLENBQUUsRUFBZ0MsSUFBSTtZQUNyRCxDQUFFLGVBQWUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFFLEVBQWlCLElBQUk7WUFDckQsQ0FBRSx3QkFBd0IsaUJBQWlCLEVBQUUsQ0FBRSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQzVELENBQUUsb0JBQW9CLENBQUUsRUFBeUIsSUFBSSxDQUFDLFFBQVE7U0FDL0QsQ0FBQztRQUNGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7O0lBTTFCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7WUE5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxZQUFZO2dCQUNqQywySkFBa0Q7Z0JBQ2xELFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO2dCQUNqRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTthQUNwRDs7OztZQWpCQyxVQUFVO1lBRlYsaUJBQWlCO1lBVVYsd0JBQXdCOzs7cUJBaUI5QixLQUFLO3FCQVdMLEtBQUs7NEJBRUwsS0FBSzt1QkFJTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotZGl2aWRlcicsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWRpdmlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56RGl2aWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLy8gcmVnaW9uIGZpZWxkc1xuXG4gIGlzVGV4dCA9IGZhbHNlO1xuICB0ZXh0U3RyID0gJyc7XG4gIHRleHRUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRleHQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMudGV4dFN0ciA9IG51bGw7XG4gICAgICB0aGlzLnRleHRUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXh0U3RyID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuaXNUZXh0ID0gISF2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIG56VHlwZTogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcblxuICBASW5wdXQoKSBuek9yaWVudGF0aW9uOiAnbGVmdCcgfCAncmlnaHQnIHwgJycgPSAnJztcblxuICBwcml2YXRlIF9kYXNoZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpEYXNoZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kYXNoZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RGFzaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXNoZWQ7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCBvcmllbnRhdGlvblByZWZpeCA9ICh0aGlzLm56T3JpZW50YXRpb24ubGVuZ3RoID4gMCkgPyAnLScgKyB0aGlzLm56T3JpZW50YXRpb24gOiB0aGlzLm56T3JpZW50YXRpb247XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbICdhbnQtZGl2aWRlcicgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYGFudC1kaXZpZGVyLSR7dGhpcy5uelR5cGV9YCBdICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgYW50LWRpdmlkZXItd2l0aC10ZXh0JHtvcmllbnRhdGlvblByZWZpeH1gIF06IHRoaXMuaXNUZXh0LFxuICAgICAgWyBgYW50LWRpdmlkZXItZGFzaGVkYCBdICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubnpEYXNoZWRcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==