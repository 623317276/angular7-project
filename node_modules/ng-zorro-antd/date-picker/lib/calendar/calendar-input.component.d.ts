import { EventEmitter, OnInit } from '@angular/core';
import { NzCalendarI18nInterface } from '../../../i18n/nz-i18n.interface';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
export declare class CalendarInputComponent implements OnInit {
    private i18n;
    locale: NzCalendarI18nInterface;
    format: string;
    placeholder: string;
    disabledDate: (d: Date) => boolean;
    value: CandyDate;
    valueChange: EventEmitter<CandyDate>;
    prefixCls: string;
    invalidInputClass: string;
    constructor(i18n: NzI18nService);
    ngOnInit(): void;
    onInputKeyup(event: Event): void;
    toReadableInput(value: CandyDate): string;
    private checkValidInputDate;
}
