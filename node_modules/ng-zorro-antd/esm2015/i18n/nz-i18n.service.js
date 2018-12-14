/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DatePipe } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggerService } from '../core/util/logger/logger.service';
import parse from 'date-fns/parse';
import zh_CN from './languages/zh_CN';
import { NZ_I18N } from './nz-i18n.token';
export class NzI18nService {
    /**
     * @param {?} locale
     * @param {?} _logger
     * @param {?} datePipe
     */
    constructor(locale, _logger, datePipe) {
        this._logger = _logger;
        this.datePipe = datePipe;
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
    }
    /**
     * @return {?}
     */
    get localeChange() {
        return this._change.asObservable();
    }
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    translate(path, data) {
        /** @type {?} */
        let content = /** @type {?} */ (this._getObjectPath(this._locale, path));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((key) => content = content.replace(new RegExp(`%${key}%`, 'g'), data[key]));
            }
            return content;
        }
        return path;
    }
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param {?} locale The translating letters
     * @return {?}
     */
    setLocale(locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    }
    /**
     * @return {?}
     */
    getLocale() {
        return this._locale;
    }
    /**
     * @return {?}
     */
    getLocaleId() {
        return this._locale ? this._locale.locale : '';
    }
    /**
     * Get locale data
     * @param {?=} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    getLocaleData(path, defaultValue) {
        /** @type {?} */
        const result = path ? this._getObjectPath(this._locale, path) : this._locale;
        return result || defaultValue;
    }
    /**
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    formatDate(date, format, locale) {
        return date ? this.datePipe.transform(date, format, null, locale || this.getLocale().locale) : '';
    }
    /**
     * Format date with compatible for the format of moment and others
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    formatDateCompatible(date, format, locale) {
        return this.formatDate(date, this.compatDateFormat(format), locale);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseDate(text) {
        if (!text) {
            return;
        }
        return parse(text);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseTime(text) {
        if (!text) {
            return;
        }
        return parse(`1970-01-01 ${text}`);
    }
    /**
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    _getObjectPath(obj, path) {
        /** @type {?} */
        let res = obj;
        /** @type {?} */
        const paths = path.split('.');
        /** @type {?} */
        const depth = paths.length;
        /** @type {?} */
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/
     * @link https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    compatDateFormat(format) {
        return format && format
            .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
            .replace(/D/g, 'd'); // d, dd represent of D, DD for momentjs, others are not support
    }
}
NzI18nService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzI18nService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NZ_I18N,] }] },
    { type: LoggerService },
    { type: DatePipe }
];
function NzI18nService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzI18nService.prototype._locale;
    /** @type {?} */
    NzI18nService.prototype._change;
    /** @type {?} */
    NzI18nService.prototype._logger;
    /** @type {?} */
    NzI18nService.prototype.datePipe;
}
/**
 * @param {?} exist
 * @param {?} locale
 * @param {?} logger
 * @param {?} datePipe
 * @return {?}
 */
export function NZ_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale, logger, datePipe) {
    return exist || new NzI18nService(locale, logger, datePipe);
}
/** @type {?} */
export const NZ_I18N_SERVICE_PROVIDER = {
    provide: NzI18nService,
    useFactory: NZ_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), NzI18nService], NZ_I18N, LoggerService, DatePipe]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImkxOG4vbnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVuRSxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUVuQyxPQUFPLEtBQUssTUFBTSxtQkFBbUIsQ0FBQztBQUV0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHMUMsTUFBTTs7Ozs7O0lBSUosWUFBNkIsTUFBdUIsRUFBVSxPQUFzQixFQUFVLFFBQWtCO1FBQWxELFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO3VCQUY5RixJQUFJLGVBQWUsQ0FBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUdsRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQztLQUNqQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNwQzs7Ozs7O0lBS0QsU0FBUyxDQUFDLElBQVksRUFBRSxJQUFVOztRQUVoQyxJQUFJLE9BQU8scUJBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBVyxFQUFDO1FBQ2hFLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksSUFBSSxFQUFFO2dCQUNSLE1B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QUMsTUFBYztRQUNyQyxPQUFPLE1BQU0sSUFBSSxNQUFNO2FBQ3RCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2FBQ2xCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Ozs7WUE3R3ZCLFVBQVU7Ozs7NENBS0ksTUFBTSxTQUFDLE9BQU87WUFicEIsYUFBYTtZQUpiLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SGpCLE1BQU0sNkNBQTZDLEtBQW9CLEVBQUUsTUFBdUIsRUFBRSxNQUFxQixFQUFFLFFBQWtCO0lBQ3pJLE9BQU8sS0FBSyxJQUFJLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDN0Q7O0FBRUQsYUFBYSx3QkFBd0IsR0FBYTtJQUNoRCxPQUFPLEVBQUssYUFBYTtJQUN6QixVQUFVLEVBQUUsa0NBQWtDO0lBQzlDLElBQUksRUFBUSxDQUFFLENBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFFO0NBQ3BHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBQcm92aWRlciwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS91dGlsL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XG5cbmltcG9ydCBwYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5cbmltcG9ydCB6aF9DTiBmcm9tICcuL2xhbmd1YWdlcy96aF9DTic7XG5pbXBvcnQgeyBOekkxOG5JbnRlcmZhY2UgfSBmcm9tICcuL256LWkxOG4uaW50ZXJmYWNlJztcbmltcG9ydCB7IE5aX0kxOE4gfSBmcm9tICcuL256LWkxOG4udG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpJMThuU2VydmljZSB7XG4gIHByaXZhdGUgX2xvY2FsZTogTnpJMThuSW50ZXJmYWNlO1xuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56STE4bkludGVyZmFjZT4odGhpcy5fbG9jYWxlKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5aX0kxOE4pIGxvY2FsZTogTnpJMThuSW50ZXJmYWNlLCBwcml2YXRlIF9sb2dnZXI6IExvZ2dlclNlcnZpY2UsIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7XG4gICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IHpoX0NOKTtcbiAgfVxuXG4gIGdldCBsb2NhbGVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxOekkxOG5JbnRlcmZhY2U+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLy8gW05PVEVdIFBlcmZvcm1hbmNlIGlzc3VlOiB0aGlzIG1ldGhvZCBtYXkgY2FsbGVkIGJ5IGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb25zXG4gIC8vIFRPRE86IGNhY2hlIG1vcmUgZGVlcGx5IHBhdGhzIGZvciBwZXJmb3JtYW5jZVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHRyYW5zbGF0ZShwYXRoOiBzdHJpbmcsIGRhdGE/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgW056STE4blNlcnZpY2VdIFRyYW5zbGF0aW5nKCR7dGhpcy5fbG9jYWxlLmxvY2FsZX0pOiAke3BhdGh9YCk7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRPYmplY3RQYXRoKHRoaXMuX2xvY2FsZSwgcGF0aCkgYXMgc3RyaW5nO1xuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4gY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShuZXcgUmVnRXhwKGAlJHtrZXl9JWAsICdnJyksIGRhdGFbIGtleSBdKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICAvKipcbiAgICogU2V0L0NoYW5nZSBjdXJyZW50IGxvY2FsZSBnbG9iYWxseSB0aHJvdWdob3V0IHRoZSBXSE9MRSBhcHBsaWNhdGlvblxuICAgKiBbTk9URV0gSWYgY2FsbGVkIGF0IHJ1bnRpbWUsIHJlbmRlcmVkIGludGVyZmFjZSBtYXkgbm90IGNoYW5nZSBhbG9uZyB3aXRoIHRoZSBsb2NhbGUgY2hhbmdlIChiZWNhdXNlIHRoaXMgZG8gbm90IHRyaWdnZXIgYW5vdGhlciByZW5kZXIgc2NoZWR1bGUpXG4gICAqIEBwYXJhbSBsb2NhbGUgVGhlIHRyYW5zbGF0aW5nIGxldHRlcnNcbiAgICovXG4gIHNldExvY2FsZShsb2NhbGU6IE56STE4bkludGVyZmFjZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2NhbGUgJiYgdGhpcy5fbG9jYWxlLmxvY2FsZSA9PT0gbG9jYWxlLmxvY2FsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5fY2hhbmdlLm5leHQobG9jYWxlKTtcbiAgfVxuXG4gIGdldExvY2FsZSgpOiBOekkxOG5JbnRlcmZhY2Uge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBnZXRMb2NhbGVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGUgPyB0aGlzLl9sb2NhbGUubG9jYWxlIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxvY2FsZSBkYXRhXG4gICAqIEBwYXJhbSBwYXRoIGRvdCBwYXRocyBmb3IgZmluZGluZyBleGlzdCB2YWx1ZSBmcm9tIGxvY2FsZSBkYXRhLCBlZy4gXCJhLmIuY1wiXG4gICAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZGVmYXVsdCB2YWx1ZSBpZiB0aGUgcmVzdWx0IGlzIG5vdCBcInRydXRoeVwiXG4gICAqL1xuICBnZXRMb2NhbGVEYXRhKHBhdGg/OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgY29uc3QgcmVzdWx0ID0gcGF0aCA/IHRoaXMuX2dldE9iamVjdFBhdGgodGhpcy5fbG9jYWxlLCBwYXRoKSA6IHRoaXMuX2xvY2FsZTtcbiAgICByZXR1cm4gcmVzdWx0IHx8IGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBkYXRlID8gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZGF0ZSwgZm9ybWF0LCBudWxsLCBsb2NhbGUgfHwgdGhpcy5nZXRMb2NhbGUoKS5sb2NhbGUpIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGRhdGUgd2l0aCBjb21wYXRpYmxlIGZvciB0aGUgZm9ybWF0IG9mIG1vbWVudCBhbmQgb3RoZXJzXG4gICAqIFdoeT8gRm9yIG5vdywgd2UgbmVlZCB0byBzdXBwb3J0IHRoZSBleGlzdGluZyBsYW5ndWFnZSBmb3JtYXRzIGluIEFudEQsIGFuZCBBbnREIHVzZXMgdGhlIGRlZmF1bHQgdGVtcG9yYWwgc3ludGF4LlxuICAgKi9cbiAgZm9ybWF0RGF0ZUNvbXBhdGlibGUoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGUoZGF0ZSwgdGhpcy5jb21wYXREYXRlRm9ybWF0KGZvcm1hdCksIGxvY2FsZSk7XG4gIH1cblxuICBwYXJzZURhdGUodGV4dDogc3RyaW5nKTogRGF0ZSB7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBwYXJzZSh0ZXh0KTtcbiAgfVxuXG4gIHBhcnNlVGltZSh0ZXh0OiBzdHJpbmcpOiBEYXRlIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlKGAxOTcwLTAxLTAxICR7dGV4dH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE9iamVjdFBhdGgob2JqOiBvYmplY3QsIHBhdGg6IHN0cmluZyk6IHN0cmluZyB8IG9iamVjdCB8IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgbGV0IHJlcyA9IG9iajtcbiAgICBjb25zdCBwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICBjb25zdCBkZXB0aCA9IHBhdGhzLmxlbmd0aDtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHdoaWxlIChyZXMgJiYgaW5kZXggPCBkZXB0aCkge1xuICAgICAgcmVzID0gcmVzWyBwYXRoc1sgaW5kZXgrKyBdIF07XG4gICAgfVxuICAgIHJldHVybiBpbmRleCA9PT0gZGVwdGggPyByZXMgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhdGlibGUgdHJhbnNsYXRlIHRoZSBtb21lbnQtbGlrZSBmb3JtYXQgcGF0dGVybiB0byBhbmd1bGFyJ3MgcGF0dGVyblxuICAgKiBXaHk/IEZvciBub3csIHdlIG5lZWQgdG8gc3VwcG9ydCB0aGUgZXhpc3RpbmcgbGFuZ3VhZ2UgZm9ybWF0cyBpbiBBbnRELCBhbmQgQW50RCB1c2VzIHRoZSBkZWZhdWx0IHRlbXBvcmFsIHN5bnRheC5cbiAgICpcbiAgICogVE9ETzogY29tcGFyZSBhbmQgY29tcGxldGUgYWxsIGZvcm1hdCBwYXR0ZXJuc1xuICAgKiBFYWNoIGZvcm1hdCBkb2NzIGFzIGJlbG93OlxuICAgKiBAbGluayBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9mb3JtYXQvXG4gICAqIEBsaW5rIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL0RhdGVQaXBlI2Rlc2NyaXB0aW9uXG4gICAqIEBwYXJhbSBmb3JtYXQgaW5wdXQgZm9ybWF0IHBhdHRlcm5cbiAgICovXG4gIHByaXZhdGUgY29tcGF0RGF0ZUZvcm1hdChmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdCAmJiBmb3JtYXRcbiAgICAucmVwbGFjZSgvWS9nLCAneScpIC8vIG9ubHkgc3VwcG9ydCB5LCB5eSwgeXl5LCB5eXl5XG4gICAgLnJlcGxhY2UoL0QvZywgJ2QnKTsgLy8gZCwgZGQgcmVwcmVzZW50IG9mIEQsIEREIGZvciBtb21lbnRqcywgb3RoZXJzIGFyZSBub3Qgc3VwcG9ydFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOWl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGV4aXN0OiBOekkxOG5TZXJ2aWNlLCBsb2NhbGU6IE56STE4bkludGVyZmFjZSwgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBkYXRlUGlwZTogRGF0ZVBpcGUpOiBOekkxOG5TZXJ2aWNlIHtcbiAgcmV0dXJuIGV4aXN0IHx8IG5ldyBOekkxOG5TZXJ2aWNlKGxvY2FsZSwgbG9nZ2VyLCBkYXRlUGlwZSk7XG59XG5cbmV4cG9ydCBjb25zdCBOWl9JMThOX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlICAgOiBOekkxOG5TZXJ2aWNlLFxuICB1c2VGYWN0b3J5OiBOWl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxuICBkZXBzICAgICAgOiBbIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBOekkxOG5TZXJ2aWNlIF0sIE5aX0kxOE4sIExvZ2dlclNlcnZpY2UsIERhdGVQaXBlIF1cbn07XG4iXX0=