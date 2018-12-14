import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
export declare class NzSelectTopControlComponent {
    private renderer;
    private _listOfSelectedValue;
    private _listTemplateOfOption;
    listOfCachedSelectedOption: NzOptionComponent[];
    inputValue: string;
    isComposing: boolean;
    inputElement: ElementRef;
    nzListOfSelectedValueChange: EventEmitter<any[]>;
    nzOnSearch: EventEmitter<{
        value: string;
        emit: boolean;
    }>;
    nzMode: string;
    nzShowSearch: boolean;
    nzDisabled: boolean;
    nzPlaceHolder: string;
    nzOpen: boolean;
    compareWith: (o1: any, o2: any) => boolean;
    nzListOfSelectedValue: any[];
    nzListTemplateOfOption: NzOptionComponent[];
    /** cached selected option list **/
    updateListOfCachedOption(): void;
    setInputValue(value: string, emit: boolean): void;
    readonly isSingleMode: boolean;
    readonly isMultipleOrTags: boolean;
    readonly placeHolderDisplay: string;
    readonly selectedValueDisplay: {
        [key: string]: string;
    };
    readonly singleValueLabel: string;
    focusOnInput(): void;
    getPropertyFromValue(value: any, prop: string): string;
    isOptionDisplay(value: any): boolean;
    removeValueFormSelected(value: any, event?: MouseEvent): void;
    updateWidth(): void;
    onKeyDownInput(e: KeyboardEvent): void;
    constructor(renderer: Renderer2);
}
