import { EventEmitter, OnInit } from '@angular/core';
import { NzCalendarI18nInterface } from '../../../i18n/nz-i18n.interface';
import { CandyDate } from '../candy-date';
export declare class MonthPanelComponent implements OnInit {
    locale: NzCalendarI18nInterface;
    value: CandyDate;
    valueChange: EventEmitter<CandyDate>;
    disabledDate: (date: Date) => boolean;
    yearPanelShow: EventEmitter<void>;
    prefixCls: string;
    constructor();
    ngOnInit(): void;
    previousYear(): void;
    nextYear(): void;
    private gotoYear;
}
