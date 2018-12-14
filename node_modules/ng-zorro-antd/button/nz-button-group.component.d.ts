import { ElementRef } from '@angular/core';
export declare type NzButtonGroupSize = 'small' | 'large' | 'default';
export declare class NzButtonGroupComponent {
    private _size;
    private prefixCls;
    private sizeMap;
    classMap: {
        [x: string]: any;
    };
    groupWrapper: ElementRef;
    nzSize: NzButtonGroupSize;
}
