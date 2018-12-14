/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { NzI18nService } from './nz-i18n.service';
export class NzI18nPipe {
    /**
     * @param {?} _locale
     */
    constructor(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    transform(path, keyValue) {
        return this._locale.translate(path, keyValue);
    }
}
NzI18nPipe.decorators = [
    { type: Pipe, args: [{
                name: 'nzI18n'
            },] }
];
/** @nocollapse */
NzI18nPipe.ctorParameters = () => [
    { type: NzI18nService }
];
function NzI18nPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    NzI18nPipe.prototype._locale;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImkxOG4vbnotaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLbEQsTUFBTTs7OztJQUNKLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7S0FDekM7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFZLEVBQUUsUUFBaUI7UUFDdkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDL0M7OztZQVRGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsUUFBUTthQUNmOzs7O1lBSlEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4vbnotaTE4bi5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbnpJMThuJ1xufSlcbmV4cG9ydCBjbGFzcyBOekkxOG5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2FsZTogTnpJMThuU2VydmljZSkge1xuICB9XG5cbiAgdHJhbnNmb3JtKHBhdGg6IHN0cmluZywga2V5VmFsdWU/OiBvYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGUudHJhbnNsYXRlKHBhdGgsIGtleVZhbHVlKTtcbiAgfVxufVxuIl19