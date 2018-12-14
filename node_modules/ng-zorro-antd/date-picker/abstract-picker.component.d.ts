import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { NzDatePickerI18nInterface } from '../i18n/nz-i18n.interface';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { CandyDate } from './lib/candy-date';
import { NzPickerComponent } from './picker.component';
/**
 * The base picker for all common APIs
 */
export declare abstract class AbstractPickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
    protected i18n: NzI18nService;
    nzAllowClear: boolean;
    nzAutoFocus: boolean;
    nzDisabled: boolean;
    nzOpen: boolean;
    nzClassName: string;
    nzDisabledDate: (d: Date) => boolean;
    nzLocale: NzDatePickerI18nInterface;
    nzPlaceHolder: string | string[];
    nzPopupStyle: object;
    nzDropdownClassName: string;
    nzSize: 'large' | 'small';
    nzStyle: object;
    nzOnOpenChange: EventEmitter<boolean>;
    nzFormat: string;
    nzValue: CompatibleValue;
    protected picker: NzPickerComponent;
    isRange: boolean;
    readonly realOpenState: boolean;
    initValue(): void;
    protected destroyed$: Subject<void>;
    protected isCustomPlaceHolder: boolean;
    constructor(i18n: NzI18nService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    closeOverlay(): void;
    /**
     * Common handle for value changes
     * @param value changed value
     */
    onValueChange(value: CompatibleValue): void;
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open: boolean): void;
    onChangeFn: (val: CompatibleDate) => void;
    onTouchedFn: () => void;
    writeValue(value: CompatibleDate): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    private setLocale;
    private setDefaultPlaceHolder;
    private formatDate;
    private setValue;
}
export declare type CompatibleValue = CandyDate | CandyDate[];
export declare type CompatibleDate = Date | Date[];
