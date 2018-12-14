import { AfterViewInit, TemplateRef } from '@angular/core';
import { NzDropdownService } from './nz-dropdown.service';
export declare class NzDropdownContextComponent implements AfterViewInit {
    dropDownPosition: 'top' | 'bottom';
    control: NzDropdownService;
    template: TemplateRef<void>;
    open: boolean;
    setTemplateRef(value: TemplateRef<void>): void;
    setControl(value: NzDropdownService): void;
    setDropDownPosition(value: 'top' | 'bottom'): void;
    close(): void;
    afterAnimation(): void;
    ngAfterViewInit(): void;
}
