import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export interface NzCheckBoxOptionInterface {
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
export declare class NzCheckboxGroupComponent implements ControlValueAccessor, OnInit {
    private elementRef;
    private renderer;
    private _disabled;
    private el;
    private prefixCls;
    private onChange;
    private onTouched;
    options: NzCheckBoxOptionInterface[];
    nzDisabled: boolean;
    onOptionChange(): void;
    writeValue(value: NzCheckBoxOptionInterface[]): void;
    registerOnChange(fn: (_: NzCheckBoxOptionInterface[]) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
