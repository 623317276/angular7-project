import { ElementRef, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export declare type StepNgClassType = string | string[] | Set<string> | {
    [klass: string]: any;
};
export declare class NzStepComponent {
    private elementRef;
    private nzUpdateHostClassService;
    private _status;
    private _currentIndex;
    private _description;
    private _icon;
    private _title;
    private el;
    oldAPIIcon: boolean;
    isCustomStatus: boolean;
    isDescriptionString: boolean;
    isTitleString: boolean;
    isIconString: boolean;
    last: boolean;
    showProcessDot: boolean;
    direction: string;
    outStatus: string;
    index: number;
    processDotTemplate: TemplateRef<void>;
    customProcessTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    nzTitle: string | TemplateRef<void>;
    nzIcon: StepNgClassType | TemplateRef<void>;
    nzStatus: string;
    nzDescription: string | TemplateRef<void>;
    currentIndex: number;
    updateClassMap(): void;
    constructor(elementRef: ElementRef, nzUpdateHostClassService: NzUpdateHostClassService);
}
