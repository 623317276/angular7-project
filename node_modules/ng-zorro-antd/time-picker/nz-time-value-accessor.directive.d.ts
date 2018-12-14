import { ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
export declare class NzTimeValueAccessorDirective implements ControlValueAccessor {
    private i18n;
    private elementRef;
    private _onChange;
    private _onTouch;
    nzTime: string;
    keyup(): void;
    blur(): void;
    changed(): void;
    touched(): void;
    setRange(): void;
    constructor(i18n: NzI18nService, elementRef: ElementRef);
    writeValue(value: Date): void;
    registerOnChange(fn: (value: Date) => void): void;
    registerOnTouched(fn: () => void): void;
}
