import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
export declare class NzOptionSelectionChange {
    source: NzAutocompleteOptionComponent;
    isUserInput: boolean;
    constructor(source: NzAutocompleteOptionComponent, isUserInput?: boolean);
}
export declare class NzAutocompleteOptionComponent {
    private changeDetectorRef;
    private element;
    private disabled;
    active: boolean;
    selected: boolean;
    nzValue: any;
    nzLabel: string;
    nzDisabled: boolean;
    selectionChange: EventEmitter<NzOptionSelectionChange>;
    constructor(changeDetectorRef: ChangeDetectorRef, element: ElementRef);
    /** 选择 */
    select(): void;
    /** 取消选择 */
    deselect(): void;
    /** 获取用于显示的 label */
    getLabel(): string;
    /** 设置激活样式 (仅限样式) */
    setActiveStyles(): void;
    /** 设置非激活样式 (仅限样式) */
    setInactiveStyles(): void;
    scrollIntoViewIfNeeded(): void;
    private emitSelectionChangeEvent;
    selectViaInteraction(): void;
}
