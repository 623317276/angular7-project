import { EventEmitter } from '@angular/core';
import { NzCheckboxComponent } from './nz-checkbox.component';
export declare class NzCheckboxWrapperComponent {
    nzOnChange: EventEmitter<string[]>;
    private checkboxList;
    addCheckbox(value: NzCheckboxComponent): void;
    removeCheckbox(value: NzCheckboxComponent): void;
    outputValue(): string[];
    onChange(): void;
}
