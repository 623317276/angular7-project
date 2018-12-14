/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export class NzUploadListComponent {
    /**
     * @param {?} el
     * @param {?} updateHostClassService
     */
    constructor(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        // region: fields
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.prefixCls = 'ant-upload-list';
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.listType}`]: true
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    handlePreview(file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    }
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    handleRemove(file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClassMap();
    }
}
NzUploadListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-upload-list',
                template: "<div *ngFor=\"let file of items\" class=\"ant-upload-list-item ant-upload-list-item-{{file.status}}\" @itemState>\n  <ng-template #icon>\n    <ng-container *ngIf=\"listType === 'picture' || listType === 'picture-card'; else defIcon\">\n      <ng-container *ngIf=\"file.status === 'uploading' || (!file.thumbUrl && !file.url); else thumbIcon\">\n        <div *ngIf=\"listType === 'picture-card'\" class=\"ant-upload-list-item-uploading-text\">{{ locale.uploading }}</div>\n        <i *ngIf=\"listType !== 'picture-card'\" class=\"anticon anticon-picture ant-upload-list-item-thumbnail\"></i>\n      </ng-container>\n    </ng-container>\n    <ng-template #defIcon>\n      <i nz-icon [type]=\"file.status === 'uploading' ? 'loading' : 'paper-clip'\"></i>\n    </ng-template>\n    <ng-template #thumbIcon>\n      <a class=\"ant-upload-list-item-thumbnail\" target=\"_blank\" rel=\"noopener noreferrer\"\n        [href]=\"file.thumbUrl || file.url\"\n        (click)=\"handlePreview(file, $event)\">\n        <img [src]=\"file.thumbUrl || file.url\" [attr.alt]=\"file.name\" />\n      </a>\n    </ng-template>\n  </ng-template>\n  <ng-template #preview>\n    <ng-container *ngIf=\"file.url; else prevText\">\n      <a [href]=\"file.thumbUrl || file.url\" target=\"_blank\" rel=\"noopener noreferrer\"\n        (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</a>\n    </ng-container>\n    <ng-template #prevText>\n      <span (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</span>\n    </ng-template>\n  </ng-template>\n  <div class=\"ant-upload-list-item-info\">\n    <nz-tooltip *ngIf=\"file.status === 'error'\" [nzTitle]=\"file.message\">\n        <span nz-tooltip>\n          <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n          <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n        </span>\n    </nz-tooltip>\n    <span *ngIf=\"file.status !== 'error'\">\n        <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n      </span>\n  </div>\n  <ng-container *ngIf=\"listType === 'picture-card' && file.status !== 'uploading'; else close\">\n      <span class=\"ant-upload-list-item-actions\">\n        <a *ngIf=\"icons.showPreviewIcon\" [href]=\"file.thumbUrl || file.url\"\n          target=\"_blank\" rel=\"noopener noreferrer\"\n          title=\"{{ locale.previewFile }}\"\n          [ngStyle]=\"!(file.url || file.thumbUrl) && {'opacity': .5, 'pointer-events': 'none'}\"\n          (click)=\"handlePreview(file, $event)\">\n            <i nz-icon type=\"eye-o\"></i>\n        </a>\n        <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" class=\"anticon anticon-delete\" title=\"{{ locale.removeFile }}\"></i>\n      </span>\n  </ng-container>\n  <ng-template #close>\n    <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" nz-icon type=\"close\" title=\"{{ locale.removeFile }}\"></i>\n  </ng-template>\n  <div *ngIf=\"file.status === 'uploading'\" class=\"ant-upload-list-item-progress\">\n    <nz-progress [nzPercent]=\"file.percent\" [nzShowInfo]=\"false\" [nzStrokeWidth]=\"2\"></nz-progress>\n  </div>\n</div>",
                providers: [NzUpdateHostClassService],
                animations: [
                    trigger('itemState', [
                        transition(':enter', [
                            style({ height: '0', width: '0', opacity: 0 }),
                            animate(150, style({ height: '*', width: '*', opacity: 1 }))
                        ]),
                        transition(':leave', [
                            animate(150, style({ height: '0', width: '0', opacity: 0 }))
                        ])
                    ])
                ],
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NzUploadListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
NzUploadListComponent.propDecorators = {
    locale: [{ type: Input }],
    listType: [{ type: Input }],
    items: [{ type: Input }],
    icons: [{ type: Input }],
    onPreview: [{ type: Input }],
    onRemove: [{ type: Input }]
};
function NzUploadListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzUploadListComponent.prototype.locale;
    /** @type {?} */
    NzUploadListComponent.prototype.listType;
    /** @type {?} */
    NzUploadListComponent.prototype.items;
    /** @type {?} */
    NzUploadListComponent.prototype.icons;
    /** @type {?} */
    NzUploadListComponent.prototype.onPreview;
    /** @type {?} */
    NzUploadListComponent.prototype.onRemove;
    /** @type {?} */
    NzUploadListComponent.prototype.prefixCls;
    /** @type {?} */
    NzUploadListComponent.prototype.el;
    /** @type {?} */
    NzUploadListComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInVwbG9hZC9uei11cGxvYWQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQTBDLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBcUJ0RixNQUFNOzs7OztJQTJDSixZQUFvQixFQUFjLEVBQVUsc0JBQWdEO1FBQXhFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCOzs7c0JBeENyRSxFQUFFO3lCQVNMLGlCQUFpQjtLQWdDcEM7Ozs7SUE5QkQsV0FBVzs7UUFDVCxNQUFNLFFBQVEsR0FBRztZQUNmLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxFQUF3QixJQUFJO1lBQzlDLENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBRSxFQUFFLElBQUk7U0FDL0MsQ0FBQztRQUNGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDOUU7Ozs7OztJQUtELGFBQWEsQ0FBQyxJQUFnQixFQUFFLENBQVE7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qjs7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWdCLEVBQUUsQ0FBUTtRQUNyQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckI7UUFDRCxPQUFPO0tBQ1I7Ozs7O0lBTUQsV0FBVyxDQUFDLE9BQTZEO1FBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsZ0JBQWdCO2dCQUNyQyx1dkdBQXNEO2dCQUN0RCxTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtnQkFDakQsVUFBVSxFQUFXO29CQUNuQixPQUFPLENBQUMsV0FBVyxFQUFFO3dCQUNuQixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOzRCQUM5QyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDN0QsQ0FBQzt3QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDN0QsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUF0Qm1CLFVBQVU7WUFFckIsd0JBQXdCOzs7cUJBd0I5QixLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTaG93VXBsb2FkTGlzdEludGVyZmFjZSwgVXBsb2FkRmlsZSwgVXBsb2FkTGlzdFR5cGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdXBsb2FkLWxpc3QnLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei11cGxvYWQtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdpdGVtU3RhdGUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIHdpZHRoOiAnMCcsIG9wYWNpdHk6IDAgfSksXG4gICAgICAgIGFuaW1hdGUoMTUwLCBzdHlsZSh7IGhlaWdodDogJyonLCB3aWR0aDogJyonLCBvcGFjaXR5OiAxIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMTUwLCBzdHlsZSh7IGhlaWdodDogJzAnLCB3aWR0aDogJzAnLCBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOelVwbG9hZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvLyByZWdpb246IGZpZWxkc1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGxvY2FsZTogYW55ID0ge307XG4gIEBJbnB1dCgpIGxpc3RUeXBlOiBVcGxvYWRMaXN0VHlwZTtcbiAgQElucHV0KCkgaXRlbXM6IFVwbG9hZEZpbGVbXTtcbiAgQElucHV0KCkgaWNvbnM6IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlO1xuICBASW5wdXQoKSBvblByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xuICBASW5wdXQoKSBvblJlbW92ZTogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XG5cbiAgLy8gZW5kcmVnaW9uXG4gIC8vIHJlZ2lvbjogc3R5bGVzXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQtbGlzdCc7XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmxpc3RUeXBlfWAgXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuICAvLyByZWdpb246IHJlbmRlclxuXG4gIGhhbmRsZVByZXZpZXcoZmlsZTogVXBsb2FkRmlsZSwgZTogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub25QcmV2aWV3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiB0aGlzLm9uUHJldmlldyhmaWxlKTtcbiAgfVxuXG4gIGhhbmRsZVJlbW92ZShmaWxlOiBVcGxvYWRGaWxlLCBlOiBFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5vblJlbW92ZSkge1xuICAgICAgdGhpcy5vblJlbW92ZShmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG59XG4iXX0=