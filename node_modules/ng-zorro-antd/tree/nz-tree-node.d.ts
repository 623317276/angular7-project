export interface NzTreeNodeOptions {
    title: string;
    key: string;
    icon?: string;
    isLeaf?: boolean;
    checked?: boolean;
    selected?: boolean;
    selectable?: boolean;
    disabled?: boolean;
    disableCheckbox?: boolean;
    expanded?: boolean;
    children?: NzTreeNodeOptions[];
    [key: string]: any;
}
export declare class NzTreeNode {
    title?: string;
    key?: string;
    level: number;
    children: NzTreeNode[];
    isLeaf: boolean;
    origin: any;
    parentNode: NzTreeNode;
    isChecked: boolean;
    isSelectable: boolean;
    isDisabled: boolean;
    isDisableCheckbox: boolean;
    isExpanded: boolean;
    isHalfChecked: boolean;
    isAllChecked: boolean;
    isSelected: boolean;
    isLoading: boolean;
    isMatched: boolean;
    constructor(option: NzTreeNodeOptions, parent?: NzTreeNode);
    setChecked(checked?: boolean, halfChecked?: boolean): void;
    setExpanded(value: boolean): void;
    setSelected(value: boolean): void;
    getParentNode(): NzTreeNode;
    getChildren(): NzTreeNode[];
    /**
     * 支持按索引位置插入,叶子节点不可添加
     */
    addChildren(children: any[], childPos?: number): void;
    clearChildren(): void;
}
