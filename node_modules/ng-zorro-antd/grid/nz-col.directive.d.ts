import { ElementRef, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzColComponent } from './nz-col.component';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
export declare class NzColDirective extends NzColComponent {
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzRowComponent: NzRowComponent, nzRowDirective: NzRowDirective, renderer: Renderer2);
}
