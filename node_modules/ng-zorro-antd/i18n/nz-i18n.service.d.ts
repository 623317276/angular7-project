import { DatePipe } from '@angular/common';
import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggerService } from '../core/util/logger/logger.service';
import { NzI18nInterface } from './nz-i18n.interface';
export declare class NzI18nService {
    private _logger;
    private datePipe;
    private _locale;
    private _change;
    constructor(locale: NzI18nInterface, _logger: LoggerService, datePipe: DatePipe);
    readonly localeChange: Observable<NzI18nInterface>;
    translate(path: string, data?: any): string;
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param locale The translating letters
     */
    setLocale(locale: NzI18nInterface): void;
    getLocale(): NzI18nInterface;
    getLocaleId(): string;
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    getLocaleData(path?: string, defaultValue?: any): any;
    formatDate(date: Date, format?: string, locale?: string): string;
    /**
     * Format date with compatible for the format of moment and others
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     */
    formatDateCompatible(date: Date, format?: string, locale?: string): string;
    parseDate(text: string): Date;
    parseTime(text: string): Date;
    private _getObjectPath;
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/
     * @link https://angular.io/api/common/DatePipe#description
     * @param format input format pattern
     */
    private compatDateFormat;
}
export declare function NZ_LOCALE_SERVICE_PROVIDER_FACTORY(exist: NzI18nService, locale: NzI18nInterface, logger: LoggerService, datePipe: DatePipe): NzI18nService;
export declare const NZ_I18N_SERVICE_PROVIDER: Provider;
