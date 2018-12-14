import { AfterContentInit, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { NzStepComponent } from './nz-step.component';
export declare type NzDirectionType = 'horizontal' | 'vertical';
export declare type NzStatusType = 'wait' | 'process' | 'finish' | 'error';
export declare type NzSizeType = 'default' | 'small';
export declare class NzStepsComponent implements OnInit, OnDestroy, AfterContentInit {
    private _status;
    private _current;
    private _size;
    private _direction;
    private _startIndex;
    private unsubscribe$;
    stepsClassMap: object;
    showProcessDot: boolean;
    customProcessDotTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    steps: QueryList<NzStepComponent>;
    nzSize: NzSizeType;
    nzStartIndex: number;
    nzDirection: NzDirectionType;
    nzProgressDot: boolean | TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    nzStatus: NzStatusType;
    nzCurrent: number;
    updateClassMap(): void;
    updateChildrenSteps: () => void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}
