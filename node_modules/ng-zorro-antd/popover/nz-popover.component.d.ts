import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
export declare class NzPopoverComponent extends NzToolTipComponent {
    _prefix: string;
    _title: string | TemplateRef<void>;
    _content: string | TemplateRef<void>;
    constructor(cdr: ChangeDetectorRef);
}
