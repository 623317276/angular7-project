import { QueryList, TemplateRef } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
export declare class NzOptionGroupComponent {
    _label: string | TemplateRef<void>;
    isLabelString: boolean;
    listOfNzOptionComponent: QueryList<NzOptionComponent>;
    nzLabel: string | TemplateRef<void>;
}
