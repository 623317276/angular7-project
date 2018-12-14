import { PipeTransform } from '@angular/core';
import { LocaleProviderService } from './locale-provider.service';
export declare class LocaleProviderPipe implements PipeTransform {
    private _locale;
    constructor(_locale: LocaleProviderService);
    transform(keyPath: string): string;
}
