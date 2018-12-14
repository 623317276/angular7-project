/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { toBoolean, toNumber, InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
export class NzUploadComponent {
    /**
     * @param {?} cd
     * @param {?} i18n
     */
    constructor(cd, i18n) {
        this.cd = cd;
        this.i18n = i18n;
        this.locale = {};
        // region: fields
        this.nzType = 'select';
        this._limit = 0;
        this._size = 0;
        this.nzDirectory = false;
        this.nzFilter = [];
        this.nzFileList = [];
        this.nzFileListChange = new EventEmitter();
        this._disabled = false;
        this.nzListType = 'text';
        this._multiple = false;
        this.nzName = 'file';
        this._showUploadList = true;
        this._showBtn = true;
        this._withCredentials = false;
        this.nzChange = new EventEmitter();
        this.onStart = (file) => {
            if (!this.nzFileList) {
                this.nzFileList = [];
            }
            /** @type {?} */
            const targetItem = this.fileToObject(file);
            targetItem.status = 'uploading';
            this.nzFileList.push(targetItem);
            this.genThumb(targetItem);
            this.nzFileListChange.emit(this.nzFileList);
            this.nzChange.emit({ file: targetItem, fileList: this.nzFileList, type: 'start' });
            this.cd.detectChanges();
        };
        this.onProgress = (e, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            this.nzChange.emit({
                event: e,
                file: Object.assign({}, targetItem),
                fileList: this.nzFileList,
                type: 'progress'
            });
            this.cd.detectChanges();
        };
        this.onSuccess = (res, file, xhr) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'success'
            });
            this.cd.detectChanges();
        };
        this.onError = (err, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem["message"] = this.genErr(targetItem);
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'error'
            });
            this.cd.detectChanges();
        };
        // endregion
        // region: list
        this.onRemove = (file) => {
            this.upload.abort(file);
            file.status = 'removed';
            /** @type {?} */
            const fnRes = typeof this.nzRemove === 'function' ?
                this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes))
                .pipe(filter((res) => res))
                .subscribe(() => {
                this.nzFileList = this.removeFileItem(file, this.nzFileList);
                this.nzChange.emit({
                    file,
                    fileList: this.nzFileList,
                    type: 'removed'
                });
                this.nzFileListChange.emit(this.nzFileList);
                this.cd.detectChanges();
            });
        };
        // endregion
        // region: styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLimit(value) {
        this._limit = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    get nzLimit() {
        return this._limit;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMultiple(value) {
        this._multiple = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzMultiple() {
        return this._multiple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowUploadList(value) {
        this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
    }
    /**
     * @return {?}
     */
    get nzShowUploadList() {
        return this._showUploadList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowButton(value) {
        this._showBtn = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowButton() {
        return this._showBtn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzWithCredentials(value) {
        this._withCredentials = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzWithCredentials() {
        return this._withCredentials;
    }
    /**
     * @return {?}
     */
    zipOptions() {
        if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
            this.nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true
            };
        }
        /** @type {?} */
        const filters = this.nzFilter.slice();
        if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(w => w.name === 'limit') === -1) {
            filters.push({
                name: 'limit',
                fn: (fileList) => fileList.slice(-this.nzLimit)
            });
        }
        if (this.nzSize > 0 && filters.findIndex(w => w.name === 'size') === -1) {
            filters.push({
                name: 'size',
                fn: (fileList) => fileList.filter(w => (w.size / 1024) <= this.nzSize)
            });
        }
        if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(w => w.name === 'type') === -1) {
            /** @type {?} */
            const types = this.nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: (fileList) => fileList.filter(w => ~types.indexOf(w.type))
            });
        }
        this._btnOptions = {
            disabled: this.nzDisabled,
            accept: this.nzAccept,
            action: this.nzAction,
            directory: this.nzDirectory,
            beforeUpload: this.nzBeforeUpload,
            customRequest: this.nzCustomRequest,
            data: this.nzData,
            headers: this.nzHeaders,
            name: this.nzName,
            multiple: this.nzMultiple,
            withCredentials: this.nzWithCredentials,
            filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    fileToObject(file) {
        return {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.filename || file.name,
            size: file.size,
            type: file.type,
            uid: file.uid,
            response: file.response,
            error: file.error,
            percent: 0,
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            originFileObj: /** @type {?} */ (file)
        };
    }
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    getFileItem(file, fileList) {
        return fileList.filter(item => item.uid === file.uid)[0];
    }
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    removeFileItem(file, fileList) {
        return fileList.filter(item => item.uid !== file.uid);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    genErr(file) {
        return file.response && typeof file.response === 'string' ?
            file.response :
            (file.error && file.error.statusText) || this.locale.uploadError;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    genThumb(file) {
        if ((this.nzListType !== 'picture' && this.nzListType !== 'picture-card') ||
            typeof document === 'undefined' ||
            typeof window === 'undefined' ||
            !(/** @type {?} */ (window)).FileReader ||
            !(/** @type {?} */ (window)).File ||
            !(file.originFileObj instanceof File) ||
            file.thumbUrl != null) {
            return;
        }
        file.thumbUrl = '';
        /** @type {?} */
        const reader = new FileReader();
        reader.onloadend = () => file.thumbUrl = /** @type {?} */ (reader.result);
        reader.readAsDataURL(file.originFileObj);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    fileDrop(e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const isDrag = this.nzType === 'drag';
        /** @type {?} */
        let subCls = [];
        if (this.nzType === 'drag') {
            subCls = [
                this.nzFileList.some(file => file.status === 'uploading') && `${this.prefixCls}-drag-uploading`,
                this.dragState === 'dragover' && `${this.prefixCls}-drag-hover`
            ];
        }
        else {
            subCls = [
                `${this.prefixCls}-select-${this.nzListType}`
            ];
        }
        this.classList = [
            this.prefixCls,
            `${this.prefixCls}-${this.nzType}`,
            ...subCls,
            this.nzDisabled && `${this.prefixCls}-disabled`
        ].filter(item => !!item);
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.localeChange.subscribe(() => {
            this.locale = this.i18n.getLocaleData('Upload');
            this.cd.detectChanges();
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzFileList) {
            (this.nzFileList || []).forEach(file => file["message"] = this.genErr(file));
        }
        this.zipOptions().setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
NzUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-upload',
                template: "<ng-template #list>\n  <nz-upload-list *ngIf=\"nzShowUploadList\"\n    [locale]=\"locale\"\n    [listType]=\"nzListType\"\n    [items]=\"nzFileList\"\n    [icons]=\"nzShowUploadList\"\n    [onPreview]=\"nzPreview\"\n    [onRemove]=\"onRemove\"></nz-upload-list>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\n    <div nz-upload-btn #upload [options]=\"_btnOptions\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\n  <div [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\">\n    <div nz-upload-btn #upload [options]=\"_btnOptions\" [classes]=\"{'ant-upload-btn': true}\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzUploadComponent.propDecorators = {
    upload: [{ type: ViewChild, args: ['upload',] }],
    nzType: [{ type: Input }],
    nzLimit: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFileType: [{ type: Input }],
    nzAccept: [{ type: Input }],
    nzAction: [{ type: Input }],
    nzDirectory: [{ type: Input }],
    nzBeforeUpload: [{ type: Input }],
    nzCustomRequest: [{ type: Input }],
    nzData: [{ type: Input }],
    nzFilter: [{ type: Input }],
    nzFileList: [{ type: Input }],
    nzFileListChange: [{ type: Output }],
    nzDisabled: [{ type: Input }],
    nzHeaders: [{ type: Input }],
    nzListType: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzName: [{ type: Input }],
    nzShowUploadList: [{ type: Input }],
    nzShowButton: [{ type: Input }],
    nzWithCredentials: [{ type: Input }],
    nzRemove: [{ type: Input }],
    nzPreview: [{ type: Input }],
    nzChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzUploadComponent.prototype, "nzDirectory", void 0);
function NzUploadComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzUploadComponent.prototype.i18n$;
    /** @type {?} */
    NzUploadComponent.prototype.locale;
    /** @type {?} */
    NzUploadComponent.prototype.upload;
    /** @type {?} */
    NzUploadComponent.prototype.nzType;
    /** @type {?} */
    NzUploadComponent.prototype._limit;
    /** @type {?} */
    NzUploadComponent.prototype._size;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileType;
    /** @type {?} */
    NzUploadComponent.prototype.nzAccept;
    /** @type {?} */
    NzUploadComponent.prototype.nzAction;
    /** @type {?} */
    NzUploadComponent.prototype.nzDirectory;
    /** @type {?} */
    NzUploadComponent.prototype.nzBeforeUpload;
    /** @type {?} */
    NzUploadComponent.prototype.nzCustomRequest;
    /** @type {?} */
    NzUploadComponent.prototype.nzData;
    /** @type {?} */
    NzUploadComponent.prototype.nzFilter;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileList;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileListChange;
    /** @type {?} */
    NzUploadComponent.prototype._disabled;
    /** @type {?} */
    NzUploadComponent.prototype.nzHeaders;
    /** @type {?} */
    NzUploadComponent.prototype.nzListType;
    /** @type {?} */
    NzUploadComponent.prototype._multiple;
    /** @type {?} */
    NzUploadComponent.prototype.nzName;
    /** @type {?} */
    NzUploadComponent.prototype._showUploadList;
    /** @type {?} */
    NzUploadComponent.prototype._showBtn;
    /** @type {?} */
    NzUploadComponent.prototype._withCredentials;
    /** @type {?} */
    NzUploadComponent.prototype.nzRemove;
    /** @type {?} */
    NzUploadComponent.prototype.nzPreview;
    /** @type {?} */
    NzUploadComponent.prototype.nzChange;
    /** @type {?} */
    NzUploadComponent.prototype._btnOptions;
    /** @type {?} */
    NzUploadComponent.prototype.onStart;
    /** @type {?} */
    NzUploadComponent.prototype.onProgress;
    /** @type {?} */
    NzUploadComponent.prototype.onSuccess;
    /** @type {?} */
    NzUploadComponent.prototype.onError;
    /** @type {?} */
    NzUploadComponent.prototype.dragState;
    /** @type {?} */
    NzUploadComponent.prototype.onRemove;
    /** @type {?} */
    NzUploadComponent.prototype.prefixCls;
    /** @type {?} */
    NzUploadComponent.prototype.classList;
    /** @type {?} */
    NzUploadComponent.prototype.cd;
    /** @type {?} */
    NzUploadComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ1cGxvYWQvbnotdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFXeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFRakUsTUFBTTs7Ozs7SUE2SkosWUFBb0IsRUFBcUIsRUFBVSxJQUFtQjtRQUFsRCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7c0JBM0p4RCxFQUFFOztzQkFJYyxRQUFRO3NCQUNiLENBQUM7cUJBV0YsQ0FBQzsyQkFjdUIsS0FBSzt3QkFJakIsRUFBRTswQkFDRixFQUFFO2dDQUNtQixJQUFJLFlBQVksRUFBZ0I7eUJBRXJFLEtBQUs7MEJBWWEsTUFBTTt5QkFFeEIsS0FBSztzQkFXUCxNQUFNOytCQUVxQyxJQUFJO3dCQVc5QyxJQUFJO2dDQVdJLEtBQUs7d0JBY3NCLElBQUksWUFBWSxFQUFxQjt1QkE0R3pFLENBQUMsSUFBUyxFQUFRLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcs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QztTQUMzRTtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNqQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzFCOzs7WUE3VkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxXQUFXO2dCQUNoQyx3L0NBQWlEO2dCQUNqRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTthQUNwRDs7OztZQWxDQyxpQkFBaUI7WUFnQlYsYUFBYTs7O3FCQXNCbkIsU0FBUyxTQUFDLFFBQVE7cUJBR2xCLEtBQUs7c0JBR0wsS0FBSztxQkFXTCxLQUFLO3lCQVNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLE1BQU07eUJBSU4sS0FBSzt3QkFTTCxLQUFLO3lCQUNMLEtBQUs7eUJBSUwsS0FBSztxQkFTTCxLQUFLOytCQUlMLEtBQUs7MkJBV0wsS0FBSztnQ0FXTCxLQUFLO3VCQVNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFFTCxNQUFNOzs7SUF2RUcsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IG5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiwgdG9OdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5cbmltcG9ydCB7XG4gIFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlLFxuICBVcGxvYWRDaGFuZ2VQYXJhbSxcbiAgVXBsb2FkRmlsZSxcbiAgVXBsb2FkRmlsdGVyLFxuICBVcGxvYWRMaXN0VHlwZSxcbiAgVXBsb2FkVHlwZSxcbiAgWmlwQnV0dG9uT3B0aW9uc1xufSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelVwbG9hZEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vbnotdXBsb2FkLWJ0bi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBsb2NhbGU6IGFueSA9IHt9O1xuICBAVmlld0NoaWxkKCd1cGxvYWQnKSB1cGxvYWQ6IE56VXBsb2FkQnRuQ29tcG9uZW50O1xuXG4gIC8vIHJlZ2lvbjogZmllbGRzXG4gIEBJbnB1dCgpIG56VHlwZTogVXBsb2FkVHlwZSA9ICdzZWxlY3QnO1xuICBwcml2YXRlIF9saW1pdDogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBzZXQgbnpMaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGltaXQgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XG4gIH1cblxuICBnZXQgbnpMaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9saW1pdDtcbiAgfVxuXG4gIHByaXZhdGUgX3NpemU6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcbiAgfVxuXG4gIGdldCBuelNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIG56RmlsZVR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgbnpBY2NlcHQ6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBuekFjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXJlY3Rvcnk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpCZWZvcmVVcGxvYWQ6IChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxhbnk+O1xuICBASW5wdXQoKSBuekN1c3RvbVJlcXVlc3Q6IChpdGVtOiBhbnkpID0+IFN1YnNjcmlwdGlvbjtcbiAgQElucHV0KCkgbnpEYXRhOiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xuICBASW5wdXQoKSBuekZpbHRlcjogVXBsb2FkRmlsdGVyW10gPSBbXTtcbiAgQElucHV0KCkgbnpGaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XG4gIEBPdXRwdXQoKSBuekZpbGVMaXN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPigpO1xuXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKSBuekhlYWRlcnM6IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XG4gIEBJbnB1dCgpIG56TGlzdFR5cGU6IFVwbG9hZExpc3RUeXBlID0gJ3RleHQnO1xuXG4gIHByaXZhdGUgX211bHRpcGxlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG56TXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpNdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICBASW5wdXQoKSBuek5hbWUgPSAnZmlsZSc7XG5cbiAgcHJpdmF0ZSBfc2hvd1VwbG9hZExpc3Q6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1VwbG9hZExpc3QodmFsdWU6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSkge1xuICAgIHRoaXMuX3Nob3dVcGxvYWRMaXN0ID0gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgPyB0b0Jvb2xlYW4odmFsdWUpIDogdmFsdWU7XG4gIH1cblxuICBnZXQgbnpTaG93VXBsb2FkTGlzdCgpOiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2Uge1xuICAgIHJldHVybiB0aGlzLl9zaG93VXBsb2FkTGlzdDtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dCdG4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dCdXR0b24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93QnRuID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNob3dCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dCdG47XG4gIH1cblxuICBwcml2YXRlIF93aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpXaXRoQ3JlZGVudGlhbHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl93aXRoQ3JlZGVudGlhbHMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56V2l0aENyZWRlbnRpYWxzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ3JlZGVudGlhbHM7XG4gIH1cblxuICBASW5wdXQoKSBuelJlbW92ZTogKGZpbGU6IFVwbG9hZEZpbGUpID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBASW5wdXQoKSBuelByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xuXG4gIEBPdXRwdXQoKSBuekNoYW5nZTogRXZlbnRFbWl0dGVyPFVwbG9hZENoYW5nZVBhcmFtPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkQ2hhbmdlUGFyYW0+KCk7XG5cbiAgX2J0bk9wdGlvbnM6IFppcEJ1dHRvbk9wdGlvbnM7XG5cbiAgcHJpdmF0ZSB6aXBPcHRpb25zKCk6IHRoaXMge1xuICAgIGlmICh0eXBlb2YgdGhpcy5uelNob3dVcGxvYWRMaXN0ID09PSAnYm9vbGVhbicgJiYgdGhpcy5uelNob3dVcGxvYWRMaXN0KSB7XG4gICAgICB0aGlzLm56U2hvd1VwbG9hZExpc3QgPSB7XG4gICAgICAgIHNob3dQcmV2aWV3SWNvbjogdHJ1ZSxcbiAgICAgICAgc2hvd1JlbW92ZUljb24gOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBmaWx0ZXJzXG4gICAgY29uc3QgZmlsdGVyczogVXBsb2FkRmlsdGVyW10gPSB0aGlzLm56RmlsdGVyLnNsaWNlKCk7XG4gICAgaWYgKHRoaXMubnpNdWx0aXBsZSAmJiB0aGlzLm56TGltaXQgPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAnbGltaXQnKSA9PT0gLTEpIHtcbiAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdsaW1pdCcsXG4gICAgICAgIGZuICA6IChmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5zbGljZSgtdGhpcy5uekxpbWl0KVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56U2l6ZSA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICdzaXplJykgPT09IC0xKSB7XG4gICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnc2l6ZScsXG4gICAgICAgIGZuICA6IChmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5maWx0ZXIodyA9PiAody5zaXplIC8gMTAyNCkgPD0gdGhpcy5uelNpemUpXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpGaWxlVHlwZSAmJiB0aGlzLm56RmlsZVR5cGUubGVuZ3RoID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ3R5cGUnKSA9PT0gLTEpIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gdGhpcy5uekZpbGVUeXBlLnNwbGl0KCcsJyk7XG4gICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAndHlwZScsXG4gICAgICAgIGZuICA6IChmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5maWx0ZXIodyA9PiB+dHlwZXMuaW5kZXhPZih3LnR5cGUpKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2J0bk9wdGlvbnMgPSB7XG4gICAgICBkaXNhYmxlZCAgICAgICA6IHRoaXMubnpEaXNhYmxlZCxcbiAgICAgIGFjY2VwdCAgICAgICAgIDogdGhpcy5uekFjY2VwdCxcbiAgICAgIGFjdGlvbiAgICAgICAgIDogdGhpcy5uekFjdGlvbixcbiAgICAgIGRpcmVjdG9yeSAgICAgIDogdGhpcy5uekRpcmVjdG9yeSxcbiAgICAgIGJlZm9yZVVwbG9hZCAgIDogdGhpcy5uekJlZm9yZVVwbG9hZCxcbiAgICAgIGN1c3RvbVJlcXVlc3QgIDogdGhpcy5uekN1c3RvbVJlcXVlc3QsXG4gICAgICBkYXRhICAgICAgICAgICA6IHRoaXMubnpEYXRhLFxuICAgICAgaGVhZGVycyAgICAgICAgOiB0aGlzLm56SGVhZGVycyxcbiAgICAgIG5hbWUgICAgICAgICAgIDogdGhpcy5uek5hbWUsXG4gICAgICBtdWx0aXBsZSAgICAgICA6IHRoaXMubnpNdWx0aXBsZSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5ueldpdGhDcmVkZW50aWFscyxcbiAgICAgIGZpbHRlcnMsXG4gICAgICBvblN0YXJ0ICAgICAgICA6IHRoaXMub25TdGFydCxcbiAgICAgIG9uUHJvZ3Jlc3MgICAgIDogdGhpcy5vblByb2dyZXNzLFxuICAgICAgb25TdWNjZXNzICAgICAgOiB0aGlzLm9uU3VjY2VzcyxcbiAgICAgIG9uRXJyb3IgICAgICAgIDogdGhpcy5vbkVycm9yXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XG4gIH1cblxuICAvLyByZWdpb246IHVwbG9hZFxuICBwcml2YXRlIGZpbGVUb09iamVjdChmaWxlOiBVcGxvYWRGaWxlKTogVXBsb2FkRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhc3RNb2RpZmllZCAgICA6IGZpbGUubGFzdE1vZGlmaWVkLFxuICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWREYXRlLFxuICAgICAgbmFtZSAgICAgICAgICAgIDogZmlsZS5maWxlbmFtZSB8fCBmaWxlLm5hbWUsXG4gICAgICBzaXplICAgICAgICAgICAgOiBmaWxlLnNpemUsXG4gICAgICB0eXBlICAgICAgICAgICAgOiBmaWxlLnR5cGUsXG4gICAgICB1aWQgICAgICAgICAgICAgOiBmaWxlLnVpZCxcbiAgICAgIHJlc3BvbnNlICAgICAgICA6IGZpbGUucmVzcG9uc2UsXG4gICAgICBlcnJvciAgICAgICAgICAgOiBmaWxlLmVycm9yLFxuICAgICAgcGVyY2VudCAgICAgICAgIDogMCxcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbmdsZS1icmFja2V0LXR5cGUtYXNzZXJ0aW9uXG4gICAgICBvcmlnaW5GaWxlT2JqICAgOiA8YW55PiBmaWxlXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmlsZUl0ZW0oZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSk6IFVwbG9hZEZpbGUge1xuICAgIHJldHVybiBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnVpZCA9PT0gZmlsZS51aWQpWyAwIF07XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUZpbGVJdGVtKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pOiBVcGxvYWRGaWxlW10ge1xuICAgIHJldHVybiBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnVpZCAhPT0gZmlsZS51aWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5FcnIoZmlsZTogVXBsb2FkRmlsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZpbGUucmVzcG9uc2UgJiYgdHlwZW9mIGZpbGUucmVzcG9uc2UgPT09ICdzdHJpbmcnID9cbiAgICAgIGZpbGUucmVzcG9uc2UgOlxuICAgICAgKGZpbGUuZXJyb3IgJiYgZmlsZS5lcnJvci5zdGF0dXNUZXh0KSB8fCB0aGlzLmxvY2FsZS51cGxvYWRFcnJvcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVGh1bWIoZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICh0aGlzLm56TGlzdFR5cGUgIT09ICdwaWN0dXJlJyAmJiB0aGlzLm56TGlzdFR5cGUgIT09ICdwaWN0dXJlLWNhcmQnKSB8fFxuICAgICAgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICEod2luZG93IGFzIGFueSkuRmlsZVJlYWRlciB8fFxuICAgICAgISh3aW5kb3cgYXMgYW55KS5GaWxlIHx8XG4gICAgICAhKGZpbGUub3JpZ2luRmlsZU9iaiBpbnN0YW5jZW9mIEZpbGUpIHx8XG4gICAgICBmaWxlLnRodW1iVXJsICE9IG51bGxcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWxlLnRodW1iVXJsID0gJyc7XG5cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiBmaWxlLnRodW1iVXJsID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZS5vcmlnaW5GaWxlT2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgb25TdGFydCA9IChmaWxlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAoIXRoaXMubnpGaWxlTGlzdCkge1xuICAgICAgdGhpcy5uekZpbGVMaXN0ID0gW107XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmZpbGVUb09iamVjdChmaWxlKTtcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICd1cGxvYWRpbmcnO1xuICAgIHRoaXMubnpGaWxlTGlzdC5wdXNoKHRhcmdldEl0ZW0pO1xuICAgIHRoaXMuZ2VuVGh1bWIodGFyZ2V0SXRlbSk7XG4gICAgdGhpcy5uekZpbGVMaXN0Q2hhbmdlLmVtaXQodGhpcy5uekZpbGVMaXN0KTtcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoeyBmaWxlOiB0YXJnZXRJdGVtLCBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LCB0eXBlOiAnc3RhcnQnIH0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblByb2dyZXNzID0gKGU6IHsgcGVyY2VudDogbnVtYmVyIH0sIGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgdGFyZ2V0SXRlbS5wZXJjZW50ID0gZS5wZXJjZW50O1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XG4gICAgICBldmVudCAgIDogZSxcbiAgICAgIGZpbGUgICAgOiB7IC4uLnRhcmdldEl0ZW0gfSxcbiAgICAgIGZpbGVMaXN0OiB0aGlzLm56RmlsZUxpc3QsXG4gICAgICB0eXBlICAgIDogJ3Byb2dyZXNzJ1xuICAgIH0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblN1Y2Nlc3MgPSAocmVzOiBhbnksIGZpbGU6IGFueSwgeGhyPzogYW55KTogdm9pZCA9PiB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2RvbmUnO1xuICAgIHRhcmdldEl0ZW0ucmVzcG9uc2UgPSByZXM7XG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3QsXG4gICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICB9KTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25FcnJvciA9IChlcnI6IGFueSwgZmlsZTogYW55KTogdm9pZCA9PiB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuICAgIHRhcmdldEl0ZW0uZXJyb3IgPSBlcnI7XG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAnZXJyb3InO1xuICAgIHRhcmdldEl0ZW0ubWVzc2FnZSA9IHRoaXMuZ2VuRXJyKHRhcmdldEl0ZW0pO1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcbiAgICAgIGZpbGVMaXN0LFxuICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgIH0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIC8vIHJlZ2lvbjogZHJhZ1xuICBwcml2YXRlIGRyYWdTdGF0ZTogc3RyaW5nO1xuXG4gIGZpbGVEcm9wKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGlmIChlLnR5cGUgPT09IHRoaXMuZHJhZ1N0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHJhZ1N0YXRlID0gZS50eXBlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuICAvLyByZWdpb246IGxpc3RcbiAgb25SZW1vdmUgPSAoZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMudXBsb2FkLmFib3J0KGZpbGUpO1xuICAgIGZpbGUuc3RhdHVzID0gJ3JlbW92ZWQnO1xuICAgIGNvbnN0IGZuUmVzID0gdHlwZW9mIHRoaXMubnpSZW1vdmUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgdGhpcy5uelJlbW92ZShmaWxlKSA6IHRoaXMubnpSZW1vdmUgPT0gbnVsbCA/IHRydWUgOiB0aGlzLm56UmVtb3ZlO1xuICAgIChmblJlcyBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBmblJlcyA6IG9mKGZuUmVzKSlcbiAgICAucGlwZShmaWx0ZXIoKHJlczogYm9vbGVhbikgPT4gcmVzKSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubnpGaWxlTGlzdCA9IHRoaXMucmVtb3ZlRmlsZUl0ZW0oZmlsZSwgdGhpcy5uekZpbGVMaXN0KTtcbiAgICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XG4gICAgICAgIGZpbGUsXG4gICAgICAgIGZpbGVMaXN0OiB0aGlzLm56RmlsZUxpc3QsXG4gICAgICAgIHR5cGUgICAgOiAncmVtb3ZlZCdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5uekZpbGVMaXN0Q2hhbmdlLmVtaXQodGhpcy5uekZpbGVMaXN0KTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIC8vIHJlZ2lvbjogc3R5bGVzXG4gIHByZWZpeENscyA9ICdhbnQtdXBsb2FkJztcbiAgY2xhc3NMaXN0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzRHJhZyA9IHRoaXMubnpUeXBlID09PSAnZHJhZyc7XG4gICAgbGV0IHN1YkNsczogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAodGhpcy5uelR5cGUgPT09ICdkcmFnJykge1xuICAgICAgc3ViQ2xzID0gW1xuICAgICAgICB0aGlzLm56RmlsZUxpc3Quc29tZShmaWxlID0+IGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctdXBsb2FkaW5nYCxcbiAgICAgICAgdGhpcy5kcmFnU3RhdGUgPT09ICdkcmFnb3ZlcicgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctaG92ZXJgXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJDbHMgPSBbXG4gICAgICAgIGAke3RoaXMucHJlZml4Q2xzfS1zZWxlY3QtJHt0aGlzLm56TGlzdFR5cGV9YFxuICAgICAgXTtcbiAgICB9XG5cbiAgICB0aGlzLmNsYXNzTGlzdCA9IFtcbiAgICAgIHRoaXMucHJlZml4Q2xzLFxuICAgICAgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9YCxcbiAgICAgIC4uLnN1YkNscyxcbiAgICAgIHRoaXMubnpEaXNhYmxlZCAmJiBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgXG4gICAgXS5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pO1xuXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1VwbG9hZCcpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpGaWxlTGlzdCkge1xuICAgICAgKHRoaXMubnpGaWxlTGlzdCB8fCBbXSkuZm9yRWFjaChmaWxlID0+IGZpbGUubWVzc2FnZSA9IHRoaXMuZ2VuRXJyKGZpbGUpKTtcbiAgICB9XG4gICAgdGhpcy56aXBPcHRpb25zKCkuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19