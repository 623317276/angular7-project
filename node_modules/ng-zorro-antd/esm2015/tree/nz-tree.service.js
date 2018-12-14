/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzTreeNode } from './nz-tree-node';
import { isCheckDisabled, isInArray } from './nz-tree-util';
export class NzTreeService {
    constructor() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.conductOption = {
            isCheckStrictly: false
        };
        this.rootNodes = [];
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
    }
    /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    initTree(nzNodes) {
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.expandedNodeList = [];
        this.matchedNodeList = [];
        setTimeout(() => {
            this.refreshCheckState(this.conductOption.isCheckStrictly);
        });
    }
    /**
     * @return {?}
     */
    getSelectedNode() {
        return this.selectedNode;
    }
    /**
     * get some list
     * @return {?}
     */
    getSelectedNodeList() {
        return this.conductNodeState('select');
    }
    /**
     * return checked nodes
     * @return {?}
     */
    getCheckedNodeList() {
        return this.conductNodeState('check');
    }
    /**
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.conductNodeState('halfCheck');
    }
    /**
     * return expanded nodes
     * @return {?}
     */
    getExpandedNodeList() {
        return this.conductNodeState('expand');
    }
    /**
     * return search matched nodes
     * @return {?}
     */
    getMatchedNodeList() {
        return this.conductNodeState('match');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isArrayOfNzTreeNode(value) {
        return value.every(item => item instanceof NzTreeNode);
    }
    /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    calcSelectedKeys(selectedKeys, nzNodes, isMulti = false) {
        this.selectedNodeList = [];
        /** @type {?} */
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, selectedKeys)) {
                    node.setSelected(true);
                }
                else {
                    node.setSelected(false);
                }
                this.setSelectedNodeList(node, isMulti);
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
    }
    /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    calcExpandedKeys(expandedKeys, nzNodes) {
        this.expandedNodeList = [];
        /** @type {?} */
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, expandedKeys)) {
                    node.setExpanded(true);
                    this.setExpandedNodeList(node);
                }
                else {
                    node.setExpanded(false);
                }
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
    }
    /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    calcCheckedKeys(checkedKeys, nzNodes, isCheckStrictly = false) {
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        /** @type {?} */
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, checkedKeys)) {
                    node.setChecked(true);
                    this.setCheckedNodeList(node);
                }
                else {
                    node.setChecked(false);
                }
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
        // controlled state
        this.refreshCheckState(isCheckStrictly);
    }
    /**
     * set drag node
     * @param {?=} node
     * @return {?}
     */
    setSelectedNode(node) {
        this.selectedNode = null;
        if (node) {
            this.selectedNode = node;
        }
    }
    /**
     * set node selected status
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    setNodeActive(node, isMultiple = false) {
        /** @type {?} */
        const isSelected = node.isSelected;
        if (node.isDisabled) {
            return;
        }
        if (!isMultiple) {
            this.selectedNodeList.forEach(n => {
                n.setSelected(false);
            });
            this.selectedNodeList = [];
        }
        node.setSelected(!isSelected);
        this.setSelectedNodeList(node, isMultiple);
    }
    /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    setSelectedNodeList(node, isMultiple = false) {
        /** @type {?} */
        const index = this.selectedNodeList.findIndex(n => node.key === n.key);
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected && index > -1) {
            this.selectedNodeList.splice(index, 1);
        }
    }
    /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    setHalfCheckedNodeList(node) {
        /** @type {?} */
        const index = this.halfCheckedNodeList.findIndex(n => node.key === n.key);
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList.splice(index, 1);
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    setCheckedNodeList(node) {
        /** @type {?} */
        const index = this.checkedNodeList.findIndex(n => node.key === n.key);
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList.splice(index, 1);
        }
    }
    /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    conductNodeState(type = 'check') {
        /** @type {?} */
        const resultNodesList = [];
        /** @type {?} */
        const loop = (node) => {
            switch (type) {
                case 'check':
                    if (node.isChecked) {
                        resultNodesList.push(node);
                    }
                    if (!this.conductOption.isCheckStrictly) {
                        if (!node.isChecked) {
                            node.getChildren().forEach(child => {
                                loop(child);
                            });
                        }
                    }
                    else {
                        node.getChildren().forEach(child => {
                            loop(child);
                        });
                    }
                    break;
                case 'halfCheck':
                    if (!this.conductOption.isCheckStrictly) {
                        if (node.isHalfChecked) {
                            resultNodesList.push(node);
                            node.getChildren().forEach(child => {
                                loop(child);
                            });
                        }
                    }
                    break;
                case 'select':
                    if (node.isSelected) {
                        resultNodesList.push(node);
                    }
                    node.getChildren().forEach(child => {
                        loop(child);
                    });
                    break;
                case 'expand':
                    if (node.isExpanded) {
                        resultNodesList.push(node);
                    }
                    node.getChildren().forEach(child => {
                        loop(child);
                    });
                    break;
                case 'match':
                    if (node.isMatched) {
                        resultNodesList.push(node);
                    }
                    node.getChildren().forEach(child => {
                        loop(child);
                    });
                    break;
            }
        };
        this.rootNodes.forEach(node => {
            loop(node);
        });
        return resultNodesList;
    }
    /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    setExpandedNodeList(node) {
        if (node.isLeaf) {
            return;
        }
        /** @type {?} */
        const index = this.expandedNodeList.findIndex(n => node.key === n.key);
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList.splice(index, 1);
        }
    }
    /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    refreshCheckState(isCheckStrictly = false) {
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach(node => {
            this.conduct(node);
        });
    }
    /**
     * @param {?} node
     * @return {?}
     */
    conduct(node) {
        /** @type {?} */
        const isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    }
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    conductUp(node) {
        /** @type {?} */
        const parentNode = node.getParentNode();
        // 全禁用节点不选中
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.getChildren().every(child => isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked))) {
                    parentNode.setChecked(true);
                }
                else if (parentNode.getChildren().some(child => child.isHalfChecked || child.isChecked)) {
                    parentNode.setChecked(false, true);
                }
                else {
                    parentNode.setChecked(false);
                }
            }
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    }
    /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    conductDown(node, value) {
        if (!isCheckDisabled(node)) {
            node.setChecked(value);
            node.children.forEach(n => {
                this.conductDown(n, value);
            });
        }
    }
    /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    searchExpand(value) {
        this.matchedNodeList = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        this.expandedNodeList = [];
        /** @type {?} */
        const expandParent = (p) => {
            // expand parent node
            if (p.getParentNode()) {
                p.getParentNode().setExpanded(true);
                this.setExpandedNodeList(p.getParentNode());
                expandParent(p.getParentNode());
            }
        };
        /** @type {?} */
        const searchChild = (n) => {
            if (value && n.title.includes(value)) {
                // match the node
                n.isMatched = true;
                this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
                n.setExpanded(false);
                this.setExpandedNodeList(n);
            }
            n.children.forEach(g => {
                searchChild(g);
            });
        };
        this.rootNodes.forEach(child => {
            searchChild(child);
        });
    }
    /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    refreshDragNode(node) {
        if (node.getChildren().length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach((child) => {
                this.refreshDragNode(child);
            });
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    resetNodeLevel(node) {
        if (node.getParentNode()) {
            node.level = node.getParentNode().level + 1;
        }
        else {
            node.level = 0;
        }
        for (const child of node.getChildren()) {
            this.resetNodeLevel(child);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    calcDropPosition(event) {
        const { clientY } = event;
        const { top, bottom, height } = event.srcElement ? event.srcElement.getBoundingClientRect() : (/** @type {?} */ (event.target)).getBoundingClientRect();
        /** @type {?} */
        const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    }
    /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    dropAndApply(targetNode, dragPos = -1) {
        if (!targetNode || dragPos > 1) {
            return;
        }
        /** @type {?} */
        const targetParent = targetNode.getParentNode();
        /** @type {?} */
        const isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.getChildren().splice(isSelectedRootNode.getChildren().indexOf(this.selectedNode), 1);
        }
        else {
            this.rootNodes.splice(this.rootNodes.indexOf(this.selectedNode), 1);
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                /** @type {?} */
                const tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    if (this.selectedNode.getParentNode()) {
                        this.resetNodeLevel(this.selectedNode.getParentNode());
                    }
                }
                else {
                    /** @type {?} */
                    const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // 根节点插入
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach((child) => {
            this.refreshDragNode(child);
        });
    }
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    formatEvent(eventName, node, event) {
        /** @type {?} */
        const emitStructure = {
            'eventName': eventName,
            'node': node,
            'event': event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { 'dragNode': this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { 'selectedKeys': this.getSelectedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getSelectedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getSelectedNodeList().map(n => n.key) });
                break;
            case 'check':
                Object.assign(emitStructure, { 'checkedKeys': this.getCheckedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getCheckedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getCheckedNodeList().map(n => n.key) });
                break;
            case 'search':
                Object.assign(emitStructure, { 'matchedKeys': this.getMatchedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getMatchedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getMatchedNodeList().map(n => n.key) });
                break;
            case 'expand':
                Object.assign(emitStructure, { 'nodes': this.getExpandedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getExpandedNodeList().map(n => n.key) });
                break;
        }
        return emitStructure;
    }
}
NzTreeService.decorators = [
    { type: Injectable }
];
function NzTreeService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeService.prototype.DRAG_SIDE_RANGE;
    /** @type {?} */
    NzTreeService.prototype.DRAG_MIN_GAP;
    /** @type {?} */
    NzTreeService.prototype.conductOption;
    /** @type {?} */
    NzTreeService.prototype.selectedNode;
    /** @type {?} */
    NzTreeService.prototype.targetNode;
    /** @type {?} */
    NzTreeService.prototype.rootNodes;
    /** @type {?} */
    NzTreeService.prototype.selectedNodeList;
    /** @type {?} */
    NzTreeService.prototype.expandedNodeList;
    /** @type {?} */
    NzTreeService.prototype.checkedNodeList;
    /** @type {?} */
    NzTreeService.prototype.halfCheckedNodeList;
    /** @type {?} */
    NzTreeService.prototype.matchedNodeList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUvbnotdHJlZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1RCxNQUFNOzsrQkFDYyxJQUFJOzRCQUNQLENBQUM7NkJBSVo7WUFDRixlQUFlLEVBQUUsS0FBSztTQUN2Qjt5QkFHeUIsRUFBRTtnQ0FDSyxFQUFFO2dDQUNGLEVBQUU7K0JBQ0gsRUFBRTttQ0FDRSxFQUFFOytCQUNOLEVBQUU7Ozs7Ozs7SUFLbEMsUUFBUSxDQUFDLE9BQXFCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzVELENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7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QU8sYUFBYSxDQUFDO0tBQ3RCOzs7WUFwZ0JGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL256LXRyZWUtbm9kZSc7XG5pbXBvcnQgeyBpc0NoZWNrRGlzYWJsZWQsIGlzSW5BcnJheSB9IGZyb20gJy4vbnotdHJlZS11dGlsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56VHJlZVNlcnZpY2Uge1xuICBEUkFHX1NJREVfUkFOR0UgPSAwLjI1O1xuICBEUkFHX01JTl9HQVAgPSAyO1xuXG4gIGNvbmR1Y3RPcHRpb246IHtcbiAgICBpc0NoZWNrU3RyaWN0bHk6IGJvb2xlYW5cbiAgfSA9IHtcbiAgICBpc0NoZWNrU3RyaWN0bHk6IGZhbHNlXG4gIH07XG4gIHNlbGVjdGVkTm9kZTogTnpUcmVlTm9kZTtcbiAgdGFyZ2V0Tm9kZTogTnpUcmVlTm9kZTtcbiAgcm9vdE5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcbiAgc2VsZWN0ZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG4gIGV4cGFuZGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBjaGVja2VkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBoYWxmQ2hlY2tlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcbiAgbWF0Y2hlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcblxuICAvKipcbiAgICogcmVzZXQgdHJlZSBub2RlcyB3aWxsIGNsZWFyIGRlZmF1bHQgbm9kZSBsaXN0XG4gICAqL1xuICBpbml0VHJlZShuek5vZGVzOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcbiAgICB0aGlzLnJvb3ROb2RlcyA9IG56Tm9kZXM7XG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLm1hdGNoZWROb2RlTGlzdCA9IFtdO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hlY2tTdGF0ZSh0aGlzLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkTm9kZSgpOiBOelRyZWVOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWROb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBzb21lIGxpc3RcbiAgICovXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdzZWxlY3QnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gY2hlY2tlZCBub2Rlc1xuICAgKi9cbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdE5vZGVTdGF0ZSgnY2hlY2snKTtcbiAgfVxuXG4gIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdoYWxmQ2hlY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gZXhwYW5kZWQgbm9kZXNcbiAgICovXG4gIGdldEV4cGFuZGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdleHBhbmQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gc2VhcmNoIG1hdGNoZWQgbm9kZXNcbiAgICovXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ21hdGNoJyk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGlzQXJyYXlPZk56VHJlZU5vZGUodmFsdWU6IGFueVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGl0ZW0gPT4gaXRlbSBpbnN0YW5jZW9mIE56VHJlZU5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0IHNlbGVjdGVkTm9kZUxpc3RcbiAgICovXG4gIGNhbGNTZWxlY3RlZEtleXMoc2VsZWN0ZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdLCBpc011bHRpOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSBbXTtcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcbiAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChpc0luQXJyYXkobm9kZS5rZXksIHNlbGVjdGVkS2V5cykpIHtcbiAgICAgICAgICBub2RlLnNldFNlbGVjdGVkKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUuc2V0U2VsZWN0ZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCBpc011bHRpKTtcbiAgICAgICAgaWYgKG5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY2FsYyhub2RlLmdldENoaWxkcmVuKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNhbGMobnpOb2Rlcyk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgZXhwYW5kZWROb2RlTGlzdFxuICAgKi9cbiAgY2FsY0V4cGFuZGVkS2V5cyhleHBhbmRlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgPSBbXTtcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcbiAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChpc0luQXJyYXkobm9kZS5rZXksIGV4cGFuZGVkS2V5cykpIHtcbiAgICAgICAgICBub2RlLnNldEV4cGFuZGVkKHRydWUpO1xuICAgICAgICAgIHRoaXMuc2V0RXhwYW5kZWROb2RlTGlzdChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnNldEV4cGFuZGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjYWxjKG5vZGUuZ2V0Q2hpbGRyZW4oKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY2FsYyhuek5vZGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldCBjaGVja2VkTm9kZUxpc3RcbiAgICovXG4gIGNhbGNDaGVja2VkS2V5cyhjaGVja2VkS2V5czogc3RyaW5nW10sIG56Tm9kZXM6IE56VHJlZU5vZGVbXSwgaXNDaGVja1N0cmljdGx5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdCA9IFtdO1xuICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IFtdO1xuICAgIGNvbnN0IGNhbGMgPSAobm9kZXM6IE56VHJlZU5vZGVbXSkgPT4ge1xuICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKGlzSW5BcnJheShub2RlLmtleSwgY2hlY2tlZEtleXMpKSB7XG4gICAgICAgICAgbm9kZS5zZXRDaGVja2VkKHRydWUpO1xuICAgICAgICAgIHRoaXMuc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUuc2V0Q2hlY2tlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY2FsYyhub2RlLmdldENoaWxkcmVuKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNhbGMobnpOb2Rlcyk7XG4gICAgLy8gY29udHJvbGxlZCBzdGF0ZVxuICAgIHRoaXMucmVmcmVzaENoZWNrU3RhdGUoaXNDaGVja1N0cmljdGx5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgZHJhZyBub2RlXG4gICAqL1xuICBzZXRTZWxlY3RlZE5vZGUobm9kZT86IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTm9kZSA9IG51bGw7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlID0gbm9kZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogc2V0IG5vZGUgc2VsZWN0ZWQgc3RhdHVzXG4gICAqL1xuICBzZXROb2RlQWN0aXZlKG5vZGU6IE56VHJlZU5vZGUsIGlzTXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBub2RlLmlzU2VsZWN0ZWQ7XG4gICAgaWYgKG5vZGUuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzTXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5mb3JFYWNoKG4gPT4ge1xuICAgICAgICBuLnNldFNlbGVjdGVkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW107XG4gICAgfVxuICAgIG5vZGUuc2V0U2VsZWN0ZWQoIWlzU2VsZWN0ZWQpO1xuICAgIHRoaXMuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCBpc011bHRpcGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgb3IgcmVtb3ZlIG5vZGUgdG8gc2VsZWN0ZWROb2RlTGlzdFxuICAgKi9cbiAgc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlLCBpc011bHRpcGxlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5maW5kSW5kZXgobiA9PiBub2RlLmtleSA9PT0gbi5rZXkpO1xuICAgIGlmIChpc011bHRpcGxlKSB7XG4gICAgICBpZiAobm9kZS5pc1NlbGVjdGVkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5vZGUuaXNTZWxlY3RlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gWyBub2RlIF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbm9kZS5pc1NlbGVjdGVkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZSBjaGVja2VkIG5vZGVzXG4gICAqL1xuICBzZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdC5maW5kSW5kZXgobiA9PiBub2RlLmtleSA9PT0gbi5rZXkpO1xuICAgIGlmIChub2RlLmlzSGFsZkNoZWNrZWQgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QucHVzaChub2RlKTtcbiAgICB9IGVsc2UgaWYgKCFub2RlLmlzSGFsZkNoZWNrZWQgJiYgaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG5vZGUua2V5ID09PSBuLmtleSk7XG4gICAgaWYgKG5vZGUuaXNDaGVja2VkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3QucHVzaChub2RlKTtcbiAgICB9IGVsc2UgaWYgKCFub2RlLmlzQ2hlY2tlZCAmJiBpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmNoZWNrZWROb2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjb25kdWN0IGNoZWNrZWQvc2VsZWN0ZWQvZXhwYW5kZWQga2V5c1xuICAgKi9cbiAgY29uZHVjdE5vZGVTdGF0ZSh0eXBlOiBzdHJpbmcgPSAnY2hlY2snKTogTnpUcmVlTm9kZVtdIHtcbiAgICBjb25zdCByZXN1bHROb2Rlc0xpc3QgPSBbXTtcbiAgICBjb25zdCBsb29wID0gKG5vZGU6IE56VHJlZU5vZGUpID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgICAgaWYgKG5vZGUuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICByZXN1bHROb2Rlc0xpc3QucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBsb29wKGNoaWxkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgbG9vcChjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2hhbGZDaGVjayc6XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgICBpZiAobm9kZS5pc0hhbGZDaGVja2VkKSB7XG4gICAgICAgICAgICAgIHJlc3VsdE5vZGVzTGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICBub2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgbG9vcChjaGlsZCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICBpZiAobm9kZS5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICByZXN1bHROb2Rlc0xpc3QucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgbG9vcChjaGlsZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V4cGFuZCc6XG4gICAgICAgICAgaWYgKG5vZGUuaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgcmVzdWx0Tm9kZXNMaXN0LnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGxvb3AoY2hpbGQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYXRjaCc6XG4gICAgICAgICAgaWYgKG5vZGUuaXNNYXRjaGVkKSB7XG4gICAgICAgICAgICByZXN1bHROb2Rlc0xpc3QucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgbG9vcChjaGlsZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnJvb3ROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgbG9vcChub2RlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0Tm9kZXNMaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBleHBhbmRlZCBub2Rlc1xuICAgKi9cbiAgc2V0RXhwYW5kZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgaWYgKG5vZGUuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5leHBhbmRlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG5vZGUua2V5ID09PSBuLmtleSk7XG4gICAgaWYgKG5vZGUuaXNFeHBhbmRlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNFeHBhbmRlZCAmJiBpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgc3RhdGVcbiAgICogQHBhcmFtIG5vZGVcbiAgICovXG4gIHJlZnJlc2hDaGVja1N0YXRlKGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKGlzQ2hlY2tTdHJpY3RseSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICB0aGlzLmNvbmR1Y3Qobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25kdWN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSBub2RlLmlzQ2hlY2tlZDtcbiAgICBpZiAobm9kZSkge1xuICAgICAgdGhpcy5jb25kdWN0VXAobm9kZSk7XG4gICAgICB0aGlzLmNvbmR1Y3REb3duKG5vZGUsIGlzQ2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIDHjgIFjaGlsZHJlbiBoYWxmIGNoZWNrZWRcbiAgICogMuOAgWNoaWxkcmVuIGFsbCBjaGVja2VkLCBwYXJlbnQgY2hlY2tlZFxuICAgKiAz44CBbm8gY2hpbGRyZW4gY2hlY2tlZFxuICAgKi9cbiAgY29uZHVjdFVwKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgLy8g5YWo56aB55So6IqC54K55LiN6YCJ5LitXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmICghaXNDaGVja0Rpc2FibGVkKHBhcmVudE5vZGUpKSB7XG4gICAgICAgIGlmIChwYXJlbnROb2RlLmdldENoaWxkcmVuKCkuZXZlcnkoY2hpbGQgPT4gaXNDaGVja0Rpc2FibGVkKGNoaWxkKSB8fCAoIWNoaWxkLmlzSGFsZkNoZWNrZWQgJiYgY2hpbGQuaXNDaGVja2VkKSkpIHtcbiAgICAgICAgICBwYXJlbnROb2RlLnNldENoZWNrZWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Tm9kZS5nZXRDaGlsZHJlbigpLnNvbWUoY2hpbGQgPT4gY2hpbGQuaXNIYWxmQ2hlY2tlZCB8fCBjaGlsZC5pc0NoZWNrZWQpKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZS5zZXRDaGVja2VkKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnROb2RlLnNldENoZWNrZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldEhhbGZDaGVja2VkTm9kZUxpc3QocGFyZW50Tm9kZSk7XG4gICAgICB0aGlzLmNvbmR1Y3RVcChwYXJlbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgY2hpbGQgY2hlY2sgc3RhdGVcbiAgICovXG4gIGNvbmR1Y3REb3duKG5vZGU6IE56VHJlZU5vZGUsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFpc0NoZWNrRGlzYWJsZWQobm9kZSkpIHtcbiAgICAgIG5vZGUuc2V0Q2hlY2tlZCh2YWx1ZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2gobiA9PiB7XG4gICAgICAgIHRoaXMuY29uZHVjdERvd24obiwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHNlYXJjaCB2YWx1ZSAmIGV4cGFuZCBub2RlXG4gICAqIHNob3VsZCBhZGQgZXhwYW5kbGlzdFxuICAgKi9cbiAgc2VhcmNoRXhwYW5kKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm1hdGNoZWROb2RlTGlzdCA9IFtdO1xuICAgIGlmICghaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRvIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcbiAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgPSBbXTtcbiAgICBjb25zdCBleHBhbmRQYXJlbnQgPSAocDogTnpUcmVlTm9kZSkgPT4ge1xuICAgICAgLy8gZXhwYW5kIHBhcmVudCBub2RlXG4gICAgICBpZiAocC5nZXRQYXJlbnROb2RlKCkpIHtcbiAgICAgICAgcC5nZXRQYXJlbnROb2RlKCkuc2V0RXhwYW5kZWQodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0RXhwYW5kZWROb2RlTGlzdChwLmdldFBhcmVudE5vZGUoKSk7XG4gICAgICAgIGV4cGFuZFBhcmVudChwLmdldFBhcmVudE5vZGUoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBzZWFyY2hDaGlsZCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XG4gICAgICBpZiAodmFsdWUgJiYgbi50aXRsZS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgLy8gbWF0Y2ggdGhlIG5vZGVcbiAgICAgICAgbi5pc01hdGNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1hdGNoZWROb2RlTGlzdC5wdXNoKG4pO1xuICAgICAgICAvLyBleHBhbmQgcGFyZW50Tm9kZVxuICAgICAgICBleHBhbmRQYXJlbnQobik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuLmlzTWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICBuLnNldEV4cGFuZGVkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRFeHBhbmRlZE5vZGVMaXN0KG4pO1xuICAgICAgfVxuICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKGcgPT4ge1xuICAgICAgICBzZWFyY2hDaGlsZChnKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZHJhZyBldmVudFxuICAgKi9cbiAgcmVmcmVzaERyYWdOb2RlKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gdW50aWwgcm9vdFxuICAgICAgdGhpcy5jb25kdWN0VXAobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoRHJhZ05vZGUoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzZXQgbm9kZSBsZXZlbFxuICByZXNldE5vZGVMZXZlbChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgaWYgKG5vZGUuZ2V0UGFyZW50Tm9kZSgpKSB7XG4gICAgICBub2RlLmxldmVsID0gbm9kZS5nZXRQYXJlbnROb2RlKCkubGV2ZWwgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmxldmVsID0gMDtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmdldENoaWxkcmVuKCkpIHtcbiAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwoY2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNEcm9wUG9zaXRpb24oZXZlbnQ6IERyYWdFdmVudCk6IG51bWJlciB7XG4gICAgY29uc3QgeyBjbGllbnRZIH0gPSBldmVudDtcbiAgICAvLyB0byBmaXggZmlyZWZveCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHRvcCwgYm90dG9tLCBoZWlnaHQgfSA9IGV2ZW50LnNyY0VsZW1lbnQgPyBldmVudC5zcmNFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXMgPSBNYXRoLm1heChoZWlnaHQgKiB0aGlzLkRSQUdfU0lERV9SQU5HRSwgdGhpcy5EUkFHX01JTl9HQVApO1xuXG4gICAgaWYgKGNsaWVudFkgPD0gdG9wICsgZGVzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChjbGllbnRZID49IGJvdHRvbSAtIGRlcykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogZHJvcFxuICAgKiAwOiBpbm5lciAtMTogcHJlIDE6IG5leHRcbiAgICovXG4gIGRyb3BBbmRBcHBseSh0YXJnZXROb2RlOiBOelRyZWVOb2RlLCBkcmFnUG9zOiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICghdGFyZ2V0Tm9kZSB8fCBkcmFnUG9zID4gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRQYXJlbnQgPSB0YXJnZXROb2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICBjb25zdCBpc1NlbGVjdGVkUm9vdE5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgLy8gcmVtb3ZlIHRoZSBkcmFnTm9kZVxuICAgIGlmIChpc1NlbGVjdGVkUm9vdE5vZGUpIHtcbiAgICAgIGlzU2VsZWN0ZWRSb290Tm9kZS5nZXRDaGlsZHJlbigpLnNwbGljZShpc1NlbGVjdGVkUm9vdE5vZGUuZ2V0Q2hpbGRyZW4oKS5pbmRleE9mKHRoaXMuc2VsZWN0ZWROb2RlKSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm9vdE5vZGVzLnNwbGljZSh0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWROb2RlKSwgMSk7XG4gICAgfVxuICAgIHN3aXRjaCAoZHJhZ1Bvcykge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkcmVuKFsgdGhpcy5zZWxlY3RlZE5vZGUgXSk7XG4gICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGFyZ2V0Tm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMTpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY29uc3QgdEluZGV4ID0gZHJhZ1BvcyA9PT0gMSA/IDEgOiAwO1xuICAgICAgICBpZiAodGFyZ2V0UGFyZW50KSB7XG4gICAgICAgICAgdGFyZ2V0UGFyZW50LmFkZENoaWxkcmVuKFsgdGhpcy5zZWxlY3RlZE5vZGUgXSwgdGFyZ2V0UGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGFyZ2V0Tm9kZSkgKyB0SW5kZXgpO1xuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZS5nZXRQYXJlbnROb2RlKCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGhpcy5zZWxlY3RlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKHRhcmdldE5vZGUpICsgdEluZGV4O1xuICAgICAgICAgIC8vIOagueiKgueCueaPkuWFpVxuICAgICAgICAgIHRoaXMucm9vdE5vZGVzLnNwbGljZSh0YXJnZXRJbmRleCwgMCwgdGhpcy5zZWxlY3RlZE5vZGUpO1xuICAgICAgICAgIHRoaXMucm9vdE5vZGVzWyB0YXJnZXRJbmRleCBdLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMucm9vdE5vZGVzWyB0YXJnZXRJbmRleCBdLmxldmVsID0gMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gZmx1c2ggYWxsIG5vZGVzXG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaERyYWdOb2RlKGNoaWxkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0IFN0cnVjdHVyZVxuICAgKiBldmVudE5hbWVcbiAgICogbm9kZVxuICAgKiBldmVudDogTW91c2VFdmVudCAvIERyYWdFdmVudFxuICAgKiBkcmFnTm9kZVxuICAgKi9cbiAgZm9ybWF0RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIG5vZGU6IE56VHJlZU5vZGUsIGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50KTogTnpGb3JtYXRFbWl0RXZlbnQge1xuICAgIGNvbnN0IGVtaXRTdHJ1Y3R1cmUgPSB7XG4gICAgICAnZXZlbnROYW1lJzogZXZlbnROYW1lLFxuICAgICAgJ25vZGUnICAgICA6IG5vZGUsXG4gICAgICAnZXZlbnQnICAgIDogZXZlbnRcbiAgICB9O1xuICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICBjYXNlICdkcmFnc3RhcnQnOlxuICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcbiAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XG4gICAgICBjYXNlICdkcm9wJzpcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2RyYWdOb2RlJzogdGhpcy5nZXRTZWxlY3RlZE5vZGUoKSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGljayc6XG4gICAgICBjYXNlICdkYmxjbGljayc6XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAnc2VsZWN0ZWRLZXlzJzogdGhpcy5nZXRTZWxlY3RlZE5vZGVMaXN0KCkgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAnbm9kZXMnOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdrZXlzJzogdGhpcy5nZXRTZWxlY3RlZE5vZGVMaXN0KCkubWFwKG4gPT4gbi5rZXkpIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdjaGVja2VkS2V5cyc6IHRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCkgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAnbm9kZXMnOiB0aGlzLmdldENoZWNrZWROb2RlTGlzdCgpIH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2tleXMnOiB0aGlzLmdldENoZWNrZWROb2RlTGlzdCgpLm1hcChuID0+IG4ua2V5KSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ21hdGNoZWRLZXlzJzogdGhpcy5nZXRNYXRjaGVkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdub2Rlcyc6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAna2V5cyc6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkubWFwKG4gPT4gbi5rZXkpIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4cGFuZCc6XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAnbm9kZXMnOiB0aGlzLmdldEV4cGFuZGVkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdrZXlzJzogdGhpcy5nZXRFeHBhbmRlZE5vZGVMaXN0KCkubWFwKG4gPT4gbi5rZXkpIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGVtaXRTdHJ1Y3R1cmU7XG4gIH1cblxufVxuIl19