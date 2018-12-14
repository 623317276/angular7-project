import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
export declare class NzPopconfirmComponent extends NzToolTipComponent {
    _condition: boolean;
    _prefix: string;
    _trigger: string;
    _hasBackdrop: boolean;
    nzOnCancel: EventEmitter<void>;
    nzOnConfirm: EventEmitter<void>;
    nzOkText: string;
    nzOkType: string;
    nzCancelText: string;
    nzCondition: boolean;
    show(): void;
    onCancel(): void;
    onConfirm(): void;
    constructor(cdr: ChangeDetectorRef);
}
