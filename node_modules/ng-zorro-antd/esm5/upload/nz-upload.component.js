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
var NzUploadComponent = /** @class */ (function () {
    // endregion
    function NzUploadComponent(cd, i18n) {
        var _this = this;
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
        this.onStart = function (file) {
            if (!_this.nzFileList) {
                _this.nzFileList = [];
            }
            /** @type {?} */
            var targetItem = _this.fileToObject(file);
            targetItem.status = 'uploading';
            _this.nzFileList.push(targetItem);
            _this.genThumb(targetItem);
            _this.nzFileListChange.emit(_this.nzFileList);
            _this.nzChange.emit({ file: targetItem, fileList: _this.nzFileList, type: 'start' });
            _this.cd.detectChanges();
        };
        this.onProgress = function (e, file) {
            /** @type {?} */
            var fileList = _this.nzFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            _this.nzChange.emit({
                event: e,
                file: tslib_1.__assign({}, targetItem),
                fileList: _this.nzFileList,
                type: 'progress'
            });
            _this.cd.detectChanges();
        };
        this.onSuccess = function (res, file, xhr) {
            /** @type {?} */
            var fileList = _this.nzFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            _this.nzChange.emit({
                file: tslib_1.__assign({}, targetItem),
                fileList: fileList,
                type: 'success'
            });
            _this.cd.detectChanges();
        };
        this.onError = function (err, file) {
            /** @type {?} */
            var fileList = _this.nzFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem["message"] = _this.genErr(targetItem);
            _this.nzChange.emit({
                file: tslib_1.__assign({}, targetItem),
                fileList: fileList,
                type: 'error'
            });
            _this.cd.detectChanges();
        };
        // endregion
        // region: list
        this.onRemove = function (file) {
            _this.upload.abort(file);
            file.status = 'removed';
            /** @type {?} */
            var fnRes = typeof _this.nzRemove === 'function' ?
                _this.nzRemove(file) : _this.nzRemove == null ? true : _this.nzRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes))
                .pipe(filter(function (res) { return res; }))
                .subscribe(function () {
                _this.nzFileList = _this.removeFileItem(file, _this.nzFileList);
                _this.nzChange.emit({
                    file: file,
                    fileList: _this.nzFileList,
                    type: 'removed'
                });
                _this.nzFileListChange.emit(_this.nzFileList);
                _this.cd.detectChanges();
            });
        };
        // endregion
        // region: styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    Object.defineProperty(NzUploadComponent.prototype, "nzLimit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._limit;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._limit = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadComponent.prototype, "nzMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._multiple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadComponent.prototype, "nzShowUploadList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showUploadList;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadComponent.prototype, "nzShowButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showBtn;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showBtn = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadComponent.prototype, "nzWithCredentials", {
        get: /**
         * @return {?}
         */
        function () {
            return this._withCredentials;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._withCredentials = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.zipOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
            this.nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true
            };
        }
        /** @type {?} */
        var filters = this.nzFilter.slice();
        if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(function (w) { return w.name === 'limit'; }) === -1) {
            filters.push({
                name: 'limit',
                fn: function (fileList) { return fileList.slice(-_this.nzLimit); }
            });
        }
        if (this.nzSize > 0 && filters.findIndex(function (w) { return w.name === 'size'; }) === -1) {
            filters.push({
                name: 'size',
                fn: function (fileList) { return fileList.filter(function (w) { return (w.size / 1024) <= _this.nzSize; }); }
            });
        }
        if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(function (w) { return w.name === 'type'; }) === -1) {
            /** @type {?} */
            var types_1 = this.nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: function (fileList) { return fileList.filter(function (w) { return ~types_1.indexOf(w.type); }); }
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
            filters: filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadComponent.prototype.fileToObject = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
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
    };
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    NzUploadComponent.prototype.getFileItem = /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        return fileList.filter(function (item) { return item.uid === file.uid; })[0];
    };
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    NzUploadComponent.prototype.removeFileItem = /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        return fileList.filter(function (item) { return item.uid !== file.uid; });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadComponent.prototype.genErr = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return file.response && typeof file.response === 'string' ?
            file.response :
            (file.error && file.error.statusText) || this.locale.uploadError;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadComponent.prototype.genThumb = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
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
        var reader = new FileReader();
        reader.onloadend = function () { return file.thumbUrl = /** @type {?} */ (reader.result); };
        reader.readAsDataURL(file.originFileObj);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadComponent.prototype.fileDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isDrag = this.nzType === 'drag';
        /** @type {?} */
        var subCls = [];
        if (this.nzType === 'drag') {
            subCls = [
                this.nzFileList.some(function (file) { return file.status === 'uploading'; }) && this.prefixCls + "-drag-uploading",
                this.dragState === 'dragover' && this.prefixCls + "-drag-hover"
            ];
        }
        else {
            subCls = [
                this.prefixCls + "-select-" + this.nzListType
            ];
        }
        this.classList = tslib_1.__spread([
            this.prefixCls,
            this.prefixCls + "-" + this.nzType
        ], subCls, [
            this.nzDisabled && this.prefixCls + "-disabled"
        ]).filter(function (item) { return !!item; });
        this.cd.detectChanges();
    };
    // endregion
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n$ = this.i18n.localeChange.subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Upload');
            _this.cd.detectChanges();
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzUploadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.nzFileList) {
            (this.nzFileList || []).forEach(function (file) { return file["message"] = _this.genErr(file); });
        }
        this.zipOptions().setClassMap();
    };
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.i18n$.unsubscribe();
    };
    NzUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-upload',
                    template: "<ng-template #list>\n  <nz-upload-list *ngIf=\"nzShowUploadList\"\n    [locale]=\"locale\"\n    [listType]=\"nzListType\"\n    [items]=\"nzFileList\"\n    [icons]=\"nzShowUploadList\"\n    [onPreview]=\"nzPreview\"\n    [onRemove]=\"onRemove\"></nz-upload-list>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\n    <div nz-upload-btn #upload [options]=\"_btnOptions\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\n  <div [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\">\n    <div nz-upload-btn #upload [options]=\"_btnOptions\" [classes]=\"{'ant-upload-btn': true}\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
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
    return NzUploadComponent;
}());
export { NzUploadComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ1cGxvYWQvbnotdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFXeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBb0svRCxZQUFZO0lBQ1osMkJBQW9CLEVBQXFCLEVBQVUsSUFBbUI7UUFBdEUsaUJBQ0M7UUFEbUIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlO3NCQTNKeEQsRUFBRTs7c0JBSWMsUUFBUTtzQkFDYixDQUFDO3FCQVdGLENBQUM7MkJBY3VCLEtBQUs7d0JBSWpCLEVBQUU7MEJBQ0YsRUFBRTtnQ0FDbUIsSUFBSSxZQUFZLEVBQWdCO3lCQUVyRSxLQUFLOzBCQVlhLE1BQU07eUJBRXhCLEtBQUs7c0JBV1AsTUFBTTsrQkFFcUMsSUFBSTt3QkFXOUMsSUFBSTtnQ0FXSSxLQUFLO3dCQWNzQixJQUFJLFlBQVksRUFBcUI7dUJBNEd6RSxVQUFDLElBQVM7WUFDMUIsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxVQUFVLEdBQUcs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QUFZLE9BQTZEO1FBQXpFLGlCQUtDO1FBSkMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLGNBQVcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ2pDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMxQjs7Z0JBN1ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsV0FBVztvQkFDaEMsdy9DQUFpRDtvQkFDakQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07aUJBQ3BEOzs7O2dCQWxDQyxpQkFBaUI7Z0JBZ0JWLGFBQWE7Ozt5QkFzQm5CLFNBQVMsU0FBQyxRQUFRO3lCQUdsQixLQUFLOzBCQUdMLEtBQUs7eUJBV0wsS0FBSzs2QkFTTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzttQ0FDTCxNQUFNOzZCQUlOLEtBQUs7NEJBU0wsS0FBSzs2QkFDTCxLQUFLOzZCQUlMLEtBQUs7eUJBU0wsS0FBSzttQ0FJTCxLQUFLOytCQVdMLEtBQUs7b0NBV0wsS0FBSzsyQkFTTCxLQUFLOzRCQUNMLEtBQUs7MkJBRUwsTUFBTTs7O1FBdkVHLFlBQVksRUFBRTs7OzRCQXRFMUI7O1NBc0NhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBuby1hbnlcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIHRvTnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBTaG93VXBsb2FkTGlzdEludGVyZmFjZSxcbiAgVXBsb2FkQ2hhbmdlUGFyYW0sXG4gIFVwbG9hZEZpbGUsXG4gIFVwbG9hZEZpbHRlcixcbiAgVXBsb2FkTGlzdFR5cGUsXG4gIFVwbG9hZFR5cGUsXG4gIFppcEJ1dHRvbk9wdGlvbnNcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTnpVcGxvYWRCdG5Db21wb25lbnQgfSBmcm9tICcuL256LXVwbG9hZC1idG4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56VXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgQFZpZXdDaGlsZCgndXBsb2FkJykgdXBsb2FkOiBOelVwbG9hZEJ0bkNvbXBvbmVudDtcblxuICAvLyByZWdpb246IGZpZWxkc1xuICBASW5wdXQoKSBuelR5cGU6IFVwbG9hZFR5cGUgPSAnc2VsZWN0JztcbiAgcHJpdmF0ZSBfbGltaXQ6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IG56TGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xpbWl0ID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICB9XG5cbiAgZ2V0IG56TGltaXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGltaXQ7XG4gIH1cblxuICBwcml2YXRlIF9zaXplOiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NpemUgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XG4gIH1cblxuICBnZXQgbnpTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKSBuekZpbGVUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56QWNjZXB0OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgbnpBY3Rpb246IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlyZWN0b3J5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56QmVmb3JlVXBsb2FkOiAoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8YW55PjtcbiAgQElucHV0KCkgbnpDdXN0b21SZXF1ZXN0OiAoaXRlbTogYW55KSA9PiBTdWJzY3JpcHRpb247XG4gIEBJbnB1dCgpIG56RGF0YToge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcbiAgQElucHV0KCkgbnpGaWx0ZXI6IFVwbG9hZEZpbHRlcltdID0gW107XG4gIEBJbnB1dCgpIG56RmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdO1xuICBAT3V0cHV0KCkgbnpGaWxlTGlzdENoYW5nZTogRXZlbnRFbWl0dGVyPFVwbG9hZEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZEZpbGVbXT4oKTtcblxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KCkgbnpIZWFkZXJzOiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xuICBASW5wdXQoKSBuekxpc3RUeXBlOiBVcGxvYWRMaXN0VHlwZSA9ICd0ZXh0JztcblxuICBwcml2YXRlIF9tdWx0aXBsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuek11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56TXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgQElucHV0KCkgbnpOYW1lID0gJ2ZpbGUnO1xuXG4gIHByaXZhdGUgX3Nob3dVcGxvYWRMaXN0OiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dVcGxvYWRMaXN0KHZhbHVlOiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UpIHtcbiAgICB0aGlzLl9zaG93VXBsb2FkTGlzdCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gdG9Cb29sZWFuKHZhbHVlKSA6IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56U2hvd1VwbG9hZExpc3QoKTogYm9vbGVhbiB8IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1VwbG9hZExpc3Q7XG4gIH1cblxuICBwcml2YXRlIF9zaG93QnRuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93QnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0J0biA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93QnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93QnRuO1xuICB9XG5cbiAgcHJpdmF0ZSBfd2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG56V2l0aENyZWRlbnRpYWxzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBueldpdGhDcmVkZW50aWFscygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENyZWRlbnRpYWxzO1xuICB9XG5cbiAgQElucHV0KCkgbnpSZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQElucHV0KCkgbnpQcmV2aWV3OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcblxuICBAT3V0cHV0KCkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxVcGxvYWRDaGFuZ2VQYXJhbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZENoYW5nZVBhcmFtPigpO1xuXG4gIF9idG5PcHRpb25zOiBaaXBCdXR0b25PcHRpb25zO1xuXG4gIHByaXZhdGUgemlwT3B0aW9ucygpOiB0aGlzIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpTaG93VXBsb2FkTGlzdCA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMubnpTaG93VXBsb2FkTGlzdCkge1xuICAgICAgdGhpcy5uelNob3dVcGxvYWRMaXN0ID0ge1xuICAgICAgICBzaG93UHJldmlld0ljb246IHRydWUsXG4gICAgICAgIHNob3dSZW1vdmVJY29uIDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gZmlsdGVyc1xuICAgIGNvbnN0IGZpbHRlcnM6IFVwbG9hZEZpbHRlcltdID0gdGhpcy5uekZpbHRlci5zbGljZSgpO1xuICAgIGlmICh0aGlzLm56TXVsdGlwbGUgJiYgdGhpcy5uekxpbWl0ID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ2xpbWl0JykgPT09IC0xKSB7XG4gICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnbGltaXQnLFxuICAgICAgICBmbiAgOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3Quc2xpY2UoLXRoaXMubnpMaW1pdClcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelNpemUgPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAnc2l6ZScpID09PSAtMSkge1xuICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3NpemUnLFxuICAgICAgICBmbiAgOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3QuZmlsdGVyKHcgPT4gKHcuc2l6ZSAvIDEwMjQpIDw9IHRoaXMubnpTaXplKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56RmlsZVR5cGUgJiYgdGhpcy5uekZpbGVUeXBlLmxlbmd0aCA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICd0eXBlJykgPT09IC0xKSB7XG4gICAgICBjb25zdCB0eXBlcyA9IHRoaXMubnpGaWxlVHlwZS5zcGxpdCgnLCcpO1xuICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3R5cGUnLFxuICAgICAgICBmbiAgOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3QuZmlsdGVyKHcgPT4gfnR5cGVzLmluZGV4T2Yody50eXBlKSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9idG5PcHRpb25zID0ge1xuICAgICAgZGlzYWJsZWQgICAgICAgOiB0aGlzLm56RGlzYWJsZWQsXG4gICAgICBhY2NlcHQgICAgICAgICA6IHRoaXMubnpBY2NlcHQsXG4gICAgICBhY3Rpb24gICAgICAgICA6IHRoaXMubnpBY3Rpb24sXG4gICAgICBkaXJlY3RvcnkgICAgICA6IHRoaXMubnpEaXJlY3RvcnksXG4gICAgICBiZWZvcmVVcGxvYWQgICA6IHRoaXMubnpCZWZvcmVVcGxvYWQsXG4gICAgICBjdXN0b21SZXF1ZXN0ICA6IHRoaXMubnpDdXN0b21SZXF1ZXN0LFxuICAgICAgZGF0YSAgICAgICAgICAgOiB0aGlzLm56RGF0YSxcbiAgICAgIGhlYWRlcnMgICAgICAgIDogdGhpcy5uekhlYWRlcnMsXG4gICAgICBuYW1lICAgICAgICAgICA6IHRoaXMubnpOYW1lLFxuICAgICAgbXVsdGlwbGUgICAgICAgOiB0aGlzLm56TXVsdGlwbGUsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMubnpXaXRoQ3JlZGVudGlhbHMsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgb25TdGFydCAgICAgICAgOiB0aGlzLm9uU3RhcnQsXG4gICAgICBvblByb2dyZXNzICAgICA6IHRoaXMub25Qcm9ncmVzcyxcbiAgICAgIG9uU3VjY2VzcyAgICAgIDogdGhpcy5vblN1Y2Nlc3MsXG4gICAgICBvbkVycm9yICAgICAgICA6IHRoaXMub25FcnJvclxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge1xuICB9XG5cbiAgLy8gcmVnaW9uOiB1cGxvYWRcbiAgcHJpdmF0ZSBmaWxlVG9PYmplY3QoZmlsZTogVXBsb2FkRmlsZSk6IFVwbG9hZEZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0TW9kaWZpZWQgICAgOiBmaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcbiAgICAgIG5hbWUgICAgICAgICAgICA6IGZpbGUuZmlsZW5hbWUgfHwgZmlsZS5uYW1lLFxuICAgICAgc2l6ZSAgICAgICAgICAgIDogZmlsZS5zaXplLFxuICAgICAgdHlwZSAgICAgICAgICAgIDogZmlsZS50eXBlLFxuICAgICAgdWlkICAgICAgICAgICAgIDogZmlsZS51aWQsXG4gICAgICByZXNwb25zZSAgICAgICAgOiBmaWxlLnJlc3BvbnNlLFxuICAgICAgZXJyb3IgICAgICAgICAgIDogZmlsZS5lcnJvcixcbiAgICAgIHBlcmNlbnQgICAgICAgICA6IDAsXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW5nbGUtYnJhY2tldC10eXBlLWFzc2VydGlvblxuICAgICAgb3JpZ2luRmlsZU9iaiAgIDogPGFueT4gZmlsZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldEZpbGVJdGVtKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pOiBVcGxvYWRGaWxlIHtcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgPT09IGZpbGUudWlkKVsgMCBdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZVtdIHtcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgIT09IGZpbGUudWlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuRXJyKGZpbGU6IFVwbG9hZEZpbGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBmaWxlLnJlc3BvbnNlICYmIHR5cGVvZiBmaWxlLnJlc3BvbnNlID09PSAnc3RyaW5nJyA/XG4gICAgICBmaWxlLnJlc3BvbnNlIDpcbiAgICAgIChmaWxlLmVycm9yICYmIGZpbGUuZXJyb3Iuc3RhdHVzVGV4dCkgfHwgdGhpcy5sb2NhbGUudXBsb2FkRXJyb3I7XG4gIH1cblxuICBwcml2YXRlIGdlblRodW1iKGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAodGhpcy5uekxpc3RUeXBlICE9PSAncGljdHVyZScgJiYgdGhpcy5uekxpc3RUeXBlICE9PSAncGljdHVyZS1jYXJkJykgfHxcbiAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAhKHdpbmRvdyBhcyBhbnkpLkZpbGVSZWFkZXIgfHxcbiAgICAgICEod2luZG93IGFzIGFueSkuRmlsZSB8fFxuICAgICAgIShmaWxlLm9yaWdpbkZpbGVPYmogaW5zdGFuY2VvZiBGaWxlKSB8fFxuICAgICAgZmlsZS50aHVtYlVybCAhPSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsZS50aHVtYlVybCA9ICcnO1xuXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gZmlsZS50aHVtYlVybCA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUub3JpZ2luRmlsZU9iaik7XG4gIH1cblxuICBwcml2YXRlIG9uU3RhcnQgPSAoZmlsZTogYW55KTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLm56RmlsZUxpc3QpIHtcbiAgICAgIHRoaXMubnpGaWxlTGlzdCA9IFtdO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5maWxlVG9PYmplY3QoZmlsZSk7XG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAndXBsb2FkaW5nJztcbiAgICB0aGlzLm56RmlsZUxpc3QucHVzaCh0YXJnZXRJdGVtKTtcbiAgICB0aGlzLmdlblRodW1iKHRhcmdldEl0ZW0pO1xuICAgIHRoaXMubnpGaWxlTGlzdENoYW5nZS5lbWl0KHRoaXMubnpGaWxlTGlzdCk7XG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHsgZmlsZTogdGFyZ2V0SXRlbSwgZmlsZUxpc3Q6IHRoaXMubnpGaWxlTGlzdCwgdHlwZTogJ3N0YXJ0JyB9KTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Qcm9ncmVzcyA9IChlOiB7IHBlcmNlbnQ6IG51bWJlciB9LCBmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuICAgIHRhcmdldEl0ZW0ucGVyY2VudCA9IGUucGVyY2VudDtcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xuICAgICAgZXZlbnQgICA6IGUsXG4gICAgICBmaWxlICAgIDogeyAuLi50YXJnZXRJdGVtIH0sXG4gICAgICBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LFxuICAgICAgdHlwZSAgICA6ICdwcm9ncmVzcydcbiAgICB9KTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25TdWNjZXNzID0gKHJlczogYW55LCBmaWxlOiBhbnksIHhocj86IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0O1xuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdkb25lJztcbiAgICB0YXJnZXRJdGVtLnJlc3BvbnNlID0gcmVzO1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcbiAgICAgIGZpbGVMaXN0LFxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgfSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIG9uRXJyb3IgPSAoZXJyOiBhbnksIGZpbGU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0O1xuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcbiAgICB0YXJnZXRJdGVtLmVycm9yID0gZXJyO1xuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2Vycm9yJztcbiAgICB0YXJnZXRJdGVtLm1lc3NhZ2UgPSB0aGlzLmdlbkVycih0YXJnZXRJdGVtKTtcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xuICAgICAgZmlsZTogeyAuLi50YXJnZXRJdGVtIH0sXG4gICAgICBmaWxlTGlzdCxcbiAgICAgIHR5cGU6ICdlcnJvcidcbiAgICB9KTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuICAvLyByZWdpb246IGRyYWdcbiAgcHJpdmF0ZSBkcmFnU3RhdGU6IHN0cmluZztcblxuICBmaWxlRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS50eXBlID09PSB0aGlzLmRyYWdTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRyYWdTdGF0ZSA9IGUudHlwZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbiAgLy8gcmVnaW9uOiBsaXN0XG4gIG9uUmVtb3ZlID0gKGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLnVwbG9hZC5hYm9ydChmaWxlKTtcbiAgICBmaWxlLnN0YXR1cyA9ICdyZW1vdmVkJztcbiAgICBjb25zdCBmblJlcyA9IHR5cGVvZiB0aGlzLm56UmVtb3ZlID09PSAnZnVuY3Rpb24nID9cbiAgICAgIHRoaXMubnpSZW1vdmUoZmlsZSkgOiB0aGlzLm56UmVtb3ZlID09IG51bGwgPyB0cnVlIDogdGhpcy5uelJlbW92ZTtcbiAgICAoZm5SZXMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZm5SZXMgOiBvZihmblJlcykpXG4gICAgLnBpcGUoZmlsdGVyKChyZXM6IGJvb2xlYW4pID0+IHJlcykpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm56RmlsZUxpc3QgPSB0aGlzLnJlbW92ZUZpbGVJdGVtKGZpbGUsIHRoaXMubnpGaWxlTGlzdCk7XG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xuICAgICAgICBmaWxlLFxuICAgICAgICBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LFxuICAgICAgICB0eXBlICAgIDogJ3JlbW92ZWQnXG4gICAgICB9KTtcbiAgICAgIHRoaXMubnpGaWxlTGlzdENoYW5nZS5lbWl0KHRoaXMubnpGaWxlTGlzdCk7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuICAvLyByZWdpb246IHN0eWxlc1xuICBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZCc7XG4gIGNsYXNzTGlzdDogc3RyaW5nW10gPSBbXTtcblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0RyYWcgPSB0aGlzLm56VHlwZSA9PT0gJ2RyYWcnO1xuICAgIGxldCBzdWJDbHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKHRoaXMubnpUeXBlID09PSAnZHJhZycpIHtcbiAgICAgIHN1YkNscyA9IFtcbiAgICAgICAgdGhpcy5uekZpbGVMaXN0LnNvbWUoZmlsZSA9PiBmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpICYmIGAke3RoaXMucHJlZml4Q2xzfS1kcmFnLXVwbG9hZGluZ2AsXG4gICAgICAgIHRoaXMuZHJhZ1N0YXRlID09PSAnZHJhZ292ZXInICYmIGAke3RoaXMucHJlZml4Q2xzfS1kcmFnLWhvdmVyYFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViQ2xzID0gW1xuICAgICAgICBgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0LSR7dGhpcy5uekxpc3RUeXBlfWBcbiAgICAgIF07XG4gICAgfVxuXG4gICAgdGhpcy5jbGFzc0xpc3QgPSBbXG4gICAgICB0aGlzLnByZWZpeENscyxcbiAgICAgIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWAsXG4gICAgICAuLi5zdWJDbHMsXG4gICAgICB0aGlzLm56RGlzYWJsZWQgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYFxuICAgIF0uZmlsdGVyKGl0ZW0gPT4gISFpdGVtKTtcblxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdVcGxvYWQnKTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56RmlsZUxpc3QpIHtcbiAgICAgICh0aGlzLm56RmlsZUxpc3QgfHwgW10pLmZvckVhY2goZmlsZSA9PiBmaWxlLm1lc3NhZ2UgPSB0aGlzLmdlbkVycihmaWxlKSk7XG4gICAgfVxuICAgIHRoaXMuemlwT3B0aW9ucygpLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==