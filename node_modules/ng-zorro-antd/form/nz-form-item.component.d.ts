import { ElementRef, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzRowComponent } from '../grid/nz-row.component';
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export declare class NzFormItemComponent extends NzRowComponent {
    private _flex;
    withHelp: number;
    nzFlex: boolean;
    enableHelp(): void;
    disableHelp(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
}
