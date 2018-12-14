import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NzCalendarI18nInterface } from '../../../i18n/nz-i18n.interface';
import { CandyDate } from '../candy-date';
export declare class YearPanelComponent implements OnChanges {
    locale: NzCalendarI18nInterface;
    value: CandyDate;
    valueChange: EventEmitter<CandyDate>;
    decadePanelShow: EventEmitter<void>;
    readonly currentYear: number;
    readonly startYear: number;
    readonly endYear: number;
    prefixCls: string;
    panelYears: PanelYearData[][];
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    previousDecade(): void;
    nextDecade(): void;
    trackPanelYear(index: number, yearData: PanelYearData): string;
    private render;
    private gotoYear;
    private chooseYear;
    private makePanelYears;
}
export interface PanelYearData {
    content: string;
    year: number;
    title: string;
    isCurrent: boolean;
    isLowerThanStart: boolean;
    isBiggerThanEnd: boolean;
    classMap: object;
    onClick(): void;
}
