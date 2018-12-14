import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { AfterViewInit, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzOptionContainerComponent } from './nz-option-container.component';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { TFilterOption } from './nz-option.pipe';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
export declare class NzSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    private renderer;
    private _disabled;
    private _allowClear;
    private _showSearch;
    private _open;
    private _placeholder;
    private _autoFocus;
    private _dropdownClassName;
    onChange: (value: string | string[]) => void;
    onTouched: () => void;
    dropDownPosition: 'top' | 'center' | 'bottom';
    listOfSelectedValue: any[];
    listOfTemplateOption: NzOptionComponent[];
    value: any | any[];
    overlayWidth: number;
    overlayMinWidth: number;
    searchValue: string;
    isDestroy: boolean;
    isInit: boolean;
    dropDownClassMap: any;
    cdkOverlayOrigin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    nzSelectTopControlComponent: NzSelectTopControlComponent;
    nzOptionContainerComponent: NzOptionContainerComponent;
    /** should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved **/
    listOfNzOptionComponent: QueryList<NzOptionComponent>;
    listOfNzOptionGroupComponent: QueryList<NzOptionGroupComponent>;
    nzOnSearch: EventEmitter<string>;
    nzScrollToBottom: EventEmitter<void>;
    nzOpenChange: EventEmitter<boolean>;
    nzSize: string;
    nzServerSearch: boolean;
    nzMode: 'default' | 'multiple' | 'tags';
    nzDropdownMatchSelectWidth: boolean;
    nzFilterOption: TFilterOption;
    nzMaxMultipleCount: number;
    nzDropdownStyle: {
        [key: string]: string;
    };
    nzNotFoundContent: string;
    /** https://github.com/angular/angular/pull/13349/files **/
    compareWith: (o1: any, o2: any) => boolean;
    nzDropdownClassName: string;
    nzAutoFocus: boolean;
    nzOpen: boolean;
    nzDisabled: boolean;
    nzAllowClear: boolean;
    nzShowSearch: boolean;
    nzPlaceHolder: string;
    onClick(): void;
    _handleKeydown(event: KeyboardEvent): void;
    updateAutoFocus(): void;
    focus(): void;
    blur(): void;
    /** overlay can not be always open , reopen overlay after press esc **/
    handleEscBug(): void;
    onKeyDownCdkOverlayOrigin(e: KeyboardEvent): void;
    closeDropDown(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    onClickOptionFromOptionContainer(): void;
    updateCdkConnectedOverlayStatus(): void;
    updateCdkConnectedOverlayPositions(): void;
    readonly isSingleMode: boolean;
    readonly isMultipleOrTags: boolean;
    /** option container nzListOfSelectedValueChange -> update ngModel **/
    updateListOfSelectedValueFromOptionContainer(value: any[]): void;
    /** option container nzListOfSelectedValueChange -> update ngModel **/
    updateListOfSelectedValueFromTopControl(value: any[]): void;
    updateFromSelectedList(value: any[]): void;
    onSearch(value: string, emit: boolean): void;
    clearNgModel(): void;
    updateNgModel(list: any[], value: string | string[]): void;
    listOfTemplateOptionChange(value: NzOptionComponent[]): void;
    updateDropDownClassMap(): void;
    onClearSelection(e: MouseEvent): void;
    clearSearchValue(): void;
    constructor(renderer: Renderer2);
    /** update ngModel -> update listOfSelectedValue **/
    writeValue(value: any | any[]): void;
    registerOnChange(fn: (value: string | string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
