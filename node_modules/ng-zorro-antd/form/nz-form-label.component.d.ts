import { ElementRef, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowComponent } from '../grid/nz-row.component';
import { NzRowDirective } from '../grid/nz-row.directive';
export declare class NzFormLabelComponent extends NzColComponent {
    nzFor: string;
    private _required;
    nzRequired: boolean;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzRowComponent: NzRowComponent, nzRowDirective: NzRowDirective, renderer: Renderer2);
}
