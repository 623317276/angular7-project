import { ElementRef, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzRowComponent } from './nz-row.component';
export declare class NzRowDirective extends NzRowComponent {
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
}
