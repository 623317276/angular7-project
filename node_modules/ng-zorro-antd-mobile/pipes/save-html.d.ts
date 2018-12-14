import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class SafeHTMLPipe implements PipeTransform {
    private _sanitized;
    constructor(_sanitized: DomSanitizer);
    transform(value: any): any;
}
