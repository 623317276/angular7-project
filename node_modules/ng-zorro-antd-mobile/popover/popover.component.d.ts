import { AfterViewInit, OnInit } from '@angular/core';
import { PopoverComponentOptions } from './popover-component-options.provider';
export declare class PopoverComponent implements OnInit, AfterViewInit {
    options: PopoverComponentOptions;
    defaultProps: any;
    maskCls: any;
    popoverCls: any;
    constructor(options: PopoverComponentOptions);
    setClassMap(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
