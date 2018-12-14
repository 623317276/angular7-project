import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export declare class NzDividerComponent implements OnChanges, OnInit {
    private el;
    private cd;
    private updateHostClassService;
    isText: boolean;
    textStr: string;
    textTpl: TemplateRef<void>;
    nzText: string | TemplateRef<void>;
    nzType: 'horizontal' | 'vertical';
    nzOrientation: 'left' | 'right' | '';
    private _dashed;
    nzDashed: boolean;
    private setClass;
    constructor(el: ElementRef, cd: ChangeDetectorRef, updateHostClassService: NzUpdateHostClassService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
}
