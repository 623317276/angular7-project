import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChange, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NzFormatBeforeDropEvent, NzFormatEmitEvent } from '../tree/interface';
import { NzTreeNode } from './nz-tree-node';
import { NzTreeService } from './nz-tree.service';
export declare class NzTreeNodeComponent implements OnInit, OnChanges, OnDestroy {
    private nzTreeService;
    private ngZone;
    private renderer;
    private elRef;
    dragElement: ElementRef;
    nzShowLine: boolean;
    nzShowExpand: boolean;
    nzMultiple: boolean;
    nzCheckable: boolean;
    nzAsyncData: boolean;
    nzCheckStrictly: boolean;
    nzHideUnMatched: boolean;
    nzTreeTemplate: TemplateRef<void>;
    nzBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    nzTreeNode: NzTreeNode;
    nzDraggable: boolean;
    /**
     * @deprecated use
     * nzExpandAll instead
     */
    nzDefaultExpandAll: boolean;
    nzExpandAll: boolean;
    nzSearchValue: string;
    clickNode: EventEmitter<NzFormatEmitEvent>;
    dblClick: EventEmitter<NzFormatEmitEvent>;
    contextMenu: EventEmitter<NzFormatEmitEvent>;
    clickCheckBox: EventEmitter<NzFormatEmitEvent>;
    clickExpand: EventEmitter<NzFormatEmitEvent>;
    nzDragStart: EventEmitter<NzFormatEmitEvent>;
    nzDragEnter: EventEmitter<NzFormatEmitEvent>;
    nzDragOver: EventEmitter<NzFormatEmitEvent>;
    nzDragLeave: EventEmitter<NzFormatEmitEvent>;
    nzDrop: EventEmitter<NzFormatEmitEvent>;
    nzDragEnd: EventEmitter<NzFormatEmitEvent>;
    prefixCls: string;
    highlightKeys: any[];
    nzNodeClass: {};
    nzNodeSwitcherClass: {};
    nzNodeContentClass: {};
    nzNodeContentIconClass: {};
    nzNodeContentLoadingClass: {};
    nzNodeChildrenClass: {};
    /**
     * drag var
     */
    destory$: Subject<{}>;
    dragPos: number;
    dragPosClass: object;
    /**
     * default set
     */
    _nzTreeNode: NzTreeNode;
    _searchValue: string;
    _nzExpandAll: boolean;
    _nzDraggable: boolean;
    oldAPIIcon: boolean;
    readonly nzIcon: string;
    readonly canDraggable: boolean | null;
    readonly isShowLineIcon: boolean;
    readonly isShowSwitchIcon: boolean;
    readonly isSwitcherOpen: boolean;
    readonly isSwitcherClose: boolean;
    readonly displayStyle: string;
    /**
     * reset node class
     */
    setClassMap(): void;
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event: MouseEvent): void;
    nzDblClick(event: MouseEvent): void;
    /**
     * @param event
     */
    nzContextMenu(event: MouseEvent): void;
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event: MouseEvent): void;
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event: MouseEvent): void;
    /**
     * drag event
     * @param e
     */
    clearDragClass(): void;
    handleDragStart(e: DragEvent): void;
    handleDragEnter(e: DragEvent): void;
    handleDragOver(e: DragEvent): void;
    handleDragLeave(e: DragEvent): void;
    handleDragDrop(e: DragEvent): void;
    handleDragEnd(e: DragEvent): void;
    /**
     * 监听拖拽事件
     */
    handDragEvent(): void;
    constructor(nzTreeService: NzTreeService, ngZone: NgZone, renderer: Renderer2, elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
}
