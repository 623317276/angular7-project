import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, TemplateRef } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { NzFormatBeforeDropEvent, NzFormatEmitEvent } from '../tree/interface';
import { NzTreeNode } from './nz-tree-node';
import { NzTreeService } from './nz-tree.service';
export declare class NzTreeComponent implements OnInit, OnChanges, OnDestroy {
    nzTreeService: NzTreeService;
    nzShowIcon: boolean;
    nzShowLine: boolean;
    nzCheckStrictly: boolean;
    nzCheckable: boolean;
    nzShowExpand: boolean;
    nzAsyncData: boolean;
    nzDraggable: boolean;
    nzMultiple: boolean;
    nzExpandAll: boolean;
    nzHideUnMatched: boolean;
    /**
     * @deprecated use
     * nzExpandAll instead
     */
    nzDefaultExpandAll: boolean;
    nzBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    nzData: any[];
    /**
     * @deprecated use
     * nzExpandedKeys instead
     */
    nzDefaultExpandedKeys: string[];
    /**
     * @deprecated use
     * nzSelectedKeys instead
     */
    nzDefaultSelectedKeys: string[];
    /**
     * @deprecated use
     * nzCheckedKeys instead
     */
    nzDefaultCheckedKeys: string[];
    nzExpandedKeys: string[];
    nzSelectedKeys: string[];
    nzCheckedKeys: string[];
    nzSearchValue: string;
    nzExpandedKeysChange: EventEmitter<string[]>;
    nzSelectedKeysChange: EventEmitter<string[]>;
    nzCheckedKeysChange: EventEmitter<string[]>;
    nzSearchValueChange: EventEmitter<NzFormatEmitEvent>;
    /**
     * @deprecated use
     * nzSearchValueChange instead
     */
    nzOnSearchNode: EventEmitter<NzFormatEmitEvent>;
    nzClick: EventEmitter<NzFormatEmitEvent>;
    nzDblClick: EventEmitter<NzFormatEmitEvent>;
    nzContextMenu: EventEmitter<NzFormatEmitEvent>;
    nzCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    nzExpandChange: EventEmitter<NzFormatEmitEvent>;
    nzOnDragStart: EventEmitter<NzFormatEmitEvent>;
    nzOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    nzOnDragOver: EventEmitter<NzFormatEmitEvent>;
    nzOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    nzOnDrop: EventEmitter<NzFormatEmitEvent>;
    nzOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    nzTreeTemplate: TemplateRef<any>;
    _searchValue: any;
    nzDefaultSubject: ReplaySubject<{}>;
    nzDefaultSubscription: Subscription;
    nzNodes: NzTreeNode[];
    prefixCls: string;
    nzTreeClass: {};
    onChange: (value: NzTreeNode[]) => void;
    onTouched: () => void;
    getTreeNodes(): NzTreeNode[];
    /**
     * public function
     */
    getCheckedNodeList(): NzTreeNode[];
    getSelectedNodeList(): NzTreeNode[];
    getHalfCheckedNodeList(): NzTreeNode[];
    getExpandedNodeList(): NzTreeNode[];
    getMatchedNodeList(): NzTreeNode[];
    setClassMap(): void;
    writeValue(value: NzTreeNode[]): void;
    registerOnChange(fn: (_: NzTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    constructor(nzTreeService: NzTreeService);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
}
