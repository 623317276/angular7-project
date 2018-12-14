import { AfterContentInit, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowComponent } from '../grid/nz-row.component';
import { NzRowDirective } from '../grid/nz-row.directive';
export declare class NzFormControlComponent extends NzColComponent implements OnDestroy, OnInit, AfterContentInit {
    private _hasFeedback;
    validateChanges: Subscription;
    validateString: string;
    controlStatus: string;
    controlClassMap: any;
    iconType: string;
    validateControl: FormControl;
    nzHasFeedback: boolean;
    nzValidateStatus: string | FormControl;
    removeSubscribe(): void;
    updateValidateStatus(status: string): void;
    watchControl(): void;
    setControlClassMap(): void;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzRowComponent: NzRowComponent, nzRowDirective: NzRowDirective, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}
