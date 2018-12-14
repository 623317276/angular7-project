/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 文件对象
 * @record
 */
export function UploadFile() { }
function UploadFile_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadFile.prototype.uid;
    /** @type {?} */
    UploadFile.prototype.size;
    /** @type {?} */
    UploadFile.prototype.name;
    /** @type {?|undefined} */
    UploadFile.prototype.filename;
    /** @type {?|undefined} */
    UploadFile.prototype.lastModified;
    /** @type {?|undefined} */
    UploadFile.prototype.lastModifiedDate;
    /** @type {?|undefined} */
    UploadFile.prototype.url;
    /** @type {?|undefined} */
    UploadFile.prototype.status;
    /** @type {?|undefined} */
    UploadFile.prototype.originFileObj;
    /** @type {?|undefined} */
    UploadFile.prototype.percent;
    /** @type {?|undefined} */
    UploadFile.prototype.thumbUrl;
    /** @type {?|undefined} */
    UploadFile.prototype.response;
    /** @type {?|undefined} */
    UploadFile.prototype.error;
    /** @type {?|undefined} */
    UploadFile.prototype.linkProps;
    /** @type {?} */
    UploadFile.prototype.type;
    /* TODO: handle strange member:
    [ key: string ]: any;
    */
}
/**
 * @record
 */
export function UploadChangeParam() { }
function UploadChangeParam_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadChangeParam.prototype.file;
    /** @type {?} */
    UploadChangeParam.prototype.fileList;
    /** @type {?|undefined} */
    UploadChangeParam.prototype.event;
    /**
     * 回调类型
     * @type {?|undefined}
     */
    UploadChangeParam.prototype.type;
}
/**
 * @record
 */
export function ShowUploadListInterface() { }
function ShowUploadListInterface_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ShowUploadListInterface.prototype.showRemoveIcon;
    /** @type {?|undefined} */
    ShowUploadListInterface.prototype.showPreviewIcon;
}
/**
 * @record
 */
export function ZipButtonOptions() { }
function ZipButtonOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.disabled;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.accept;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.action;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.directory;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.beforeUpload;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.customRequest;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.data;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.headers;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.name;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.multiple;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.withCredentials;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.filters;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.onStart;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.onProgress;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.onSuccess;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.onError;
}
/**
 * @record
 */
export function UploadFilter() { }
function UploadFilter_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadFilter.prototype.name;
    /** @type {?} */
    UploadFilter.prototype.fn;
}
/**
 * @record
 */
export function UploadXHRArgs() { }
function UploadXHRArgs_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.action;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.name;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.headers;
    /** @type {?} */
    UploadXHRArgs.prototype.file;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.data;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.withCredentials;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.onProgress;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.onSuccess;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.onError;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInVwbG9hZC9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueSBwcmVmZXItbWV0aG9kLXNpZ25hdHVyZVxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbi8qKiDnirbmgIEgKi9cbmV4cG9ydCB0eXBlIFVwbG9hZEZpbGVTdGF0dXMgPSAnZXJyb3InIHwgJ3N1Y2Nlc3MnIHwgJ2RvbmUnIHwgJ3VwbG9hZGluZycgfCAncmVtb3ZlZCc7XG5cbi8qKiDkuIrkvKDmlrnlvI8gKi9cbmV4cG9ydCB0eXBlIFVwbG9hZFR5cGUgPSAnc2VsZWN0JyB8ICdkcmFnJztcblxuLyoqIOS4iuS8oOWIl+ihqOeahOWGheW7uuagt+W8jyAqL1xuZXhwb3J0IHR5cGUgVXBsb2FkTGlzdFR5cGUgPSAndGV4dCcgfCAncGljdHVyZScgfCAncGljdHVyZS1jYXJkJztcblxuLyoqIOaWh+S7tuWvueixoSAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRGaWxlIHtcbiAgdWlkOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBmaWxlbmFtZT86IHN0cmluZztcbiAgbGFzdE1vZGlmaWVkPzogc3RyaW5nO1xuICBsYXN0TW9kaWZpZWREYXRlPzogRGF0ZTtcbiAgdXJsPzogc3RyaW5nO1xuICBzdGF0dXM/OiBVcGxvYWRGaWxlU3RhdHVzO1xuICBvcmlnaW5GaWxlT2JqPzogRmlsZTtcbiAgcGVyY2VudD86IG51bWJlcjtcbiAgdGh1bWJVcmw/OiBzdHJpbmc7XG4gIHJlc3BvbnNlPzogYW55O1xuICBlcnJvcj86IGFueTtcbiAgbGlua1Byb3BzPzogYW55O1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgWyBrZXk6IHN0cmluZyBdOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkQ2hhbmdlUGFyYW0ge1xuICBmaWxlOiBVcGxvYWRGaWxlO1xuICBmaWxlTGlzdDogVXBsb2FkRmlsZVtdO1xuICBldmVudD86IHsgcGVyY2VudDogbnVtYmVyIH07XG4gIC8qKiDlm57osIPnsbvlnosgKi9cbiAgdHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaG93VXBsb2FkTGlzdEludGVyZmFjZSB7XG4gIHNob3dSZW1vdmVJY29uPzogYm9vbGVhbjtcbiAgc2hvd1ByZXZpZXdJY29uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaaXBCdXR0b25PcHRpb25zIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBhY2NlcHQ/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgYWN0aW9uPzogc3RyaW5nO1xuICBkaXJlY3Rvcnk/OiBib29sZWFuO1xuICBiZWZvcmVVcGxvYWQ/OiAoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8YW55PjtcbiAgY3VzdG9tUmVxdWVzdD86IChpdGVtOiBhbnkpID0+IFN1YnNjcmlwdGlvbjtcbiAgZGF0YT86IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XG4gIGhlYWRlcnM/OiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xuICBuYW1lPzogc3RyaW5nO1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gIGZpbHRlcnM/OiBVcGxvYWRGaWx0ZXJbXTtcbiAgb25TdGFydD86IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xuICBvblByb2dyZXNzPzogKGU6IGFueSwgZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcbiAgb25TdWNjZXNzPzogKHJldDogYW55LCBmaWxlOiBVcGxvYWRGaWxlLCB4aHI6IGFueSkgPT4gdm9pZDtcbiAgb25FcnJvcj86IChlcnI6IGFueSwgZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRGaWx0ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGZuOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gVXBsb2FkRmlsZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZFhIUkFyZ3Mge1xuICBhY3Rpb24/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGhlYWRlcnM/OiB7fTtcbiAgZmlsZTogVXBsb2FkRmlsZTtcbiAgZGF0YT86IHt9O1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICBvblByb2dyZXNzPzogKGU6IGFueSwgZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcbiAgb25TdWNjZXNzPzogKHJldDogYW55LCBmaWxlOiBVcGxvYWRGaWxlLCB4aHI6IGFueSkgPT4gdm9pZDtcbiAgb25FcnJvcj86IChlcnI6IGFueSwgZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcbn1cbiJdfQ==