import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NzCalendarI18nInterface } from '../../../i18n/nz-i18n.interface';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
export declare class TodayButtonComponent implements OnInit, OnChanges {
    private i18n;
    locale: NzCalendarI18nInterface;
    hasTimePicker: boolean;
    disabledDate: (d: Date) => boolean;
    clickToday: EventEmitter<CandyDate>;
    prefixCls: string;
    isDisabled: boolean;
    readonly title: string;
    private now;
    constructor(i18n: NzI18nService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onClickToday(): void;
}
