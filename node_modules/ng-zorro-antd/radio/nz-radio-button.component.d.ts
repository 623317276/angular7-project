import { OnInit, Renderer2 } from '@angular/core';
import { NzRadioGroupComponent } from './nz-radio-group.component';
import { NzRadioComponent } from './nz-radio.component';
export declare class NzRadioButtonComponent extends NzRadioComponent implements OnInit {
    prefixCls: string;
    constructor(nzRadioGroup: NzRadioGroupComponent, renderer: Renderer2, document: any);
}
