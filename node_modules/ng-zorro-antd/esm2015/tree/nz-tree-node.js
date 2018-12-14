/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function NzTreeNodeOptions() { }
function NzTreeNodeOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeNodeOptions.prototype.title;
    /** @type {?} */
    NzTreeNodeOptions.prototype.key;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.icon;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.isLeaf;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.checked;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selected;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selectable;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disabled;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disableCheckbox;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.expanded;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.children;
    /* TODO: handle strange member:
    [ key: string ]: any;
    */
}
export class NzTreeNode {
    /**
     * @param {?} option
     * @param {?=} parent
     */
    constructor(option, parent = null) {
        this.level = 0;
        this.title = option.title || '---';
        this.key = option.key || null;
        this.isLeaf = option.isLeaf || false;
        this.origin = option;
        this.children = [];
        this.parentNode = parent;
        // option params
        this.isChecked = option.checked || false;
        this.isSelectable = option.disabled || (option.selectable === false ? false : true);
        this.isDisabled = option.disabled || false;
        this.isDisableCheckbox = option.disableCheckbox || false;
        this.isExpanded = option.isLeaf ? false : (option.expanded || false);
        this.isAllChecked = option.checked || false;
        this.isHalfChecked = false;
        this.isSelected = (!option.disabled && option.selected) || false;
        this.isLoading = false;
        this.isMatched = false;
        /**
             * parent's checked status will affect children while initializing
             */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof (option.children) !== 'undefined' && option.children !== null) {
            option.children.forEach((nodeOptions) => {
                if (option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                this.children.push(new NzTreeNode(nodeOptions, this));
            });
        }
    }
    /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    setChecked(checked = false, halfChecked = false) {
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setExpanded(value) {
        this.origin.expanded = value;
        this.isExpanded = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSelected(value) {
        this.origin.selected = value;
        this.isSelected = value;
    }
    /**
     * @return {?}
     */
    getParentNode() {
        return this.parentNode;
    }
    /**
     * @return {?}
     */
    getChildren() {
        return this.children;
    }
    /**
     * 支持按索引位置插入,叶子节点不可添加
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    addChildren(children, childPos = -1) {
        if (!this.isLeaf) {
            children.forEach((node) => {
                /** @type {?} */
                const refreshLevel = (n) => {
                    n.getChildren().forEach(c => {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                /** @type {?} */
                let child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = this;
                }
                else {
                    child = new NzTreeNode(node, this);
                }
                child.level = this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) {
                }
            });
            this.origin.children = this.getChildren().map(v => v.origin);
            // remove loading state
            this.isLoading = false;
        }
    }
    /**
     * @return {?}
     */
    clearChildren() {
        this.children = [];
    }
}
function NzTreeNode_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeNode.prototype.title;
    /** @type {?} */
    NzTreeNode.prototype.key;
    /** @type {?} */
    NzTreeNode.prototype.level;
    /** @type {?} */
    NzTreeNode.prototype.children;
    /** @type {?} */
    NzTreeNode.prototype.isLeaf;
    /** @type {?} */
    NzTreeNode.prototype.origin;
    /** @type {?} */
    NzTreeNode.prototype.parentNode;
    /** @type {?} */
    NzTreeNode.prototype.isChecked;
    /** @type {?} */
    NzTreeNode.prototype.isSelectable;
    /** @type {?} */
    NzTreeNode.prototype.isDisabled;
    /** @type {?} */
    NzTreeNode.prototype.isDisableCheckbox;
    /** @type {?} */
    NzTreeNode.prototype.isExpanded;
    /** @type {?} */
    NzTreeNode.prototype.isHalfChecked;
    /** @type {?} */
    NzTreeNode.prototype.isAllChecked;
    /** @type {?} */
    NzTreeNode.prototype.isSelected;
    /** @type {?} */
    NzTreeNode.prototype.isLoading;
    /** @type {?} */
    NzTreeNode.prototype.isMatched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUvbnotdHJlZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU07Ozs7O0lBcUJKLFlBQVksTUFBeUIsRUFBRSxTQUFxQixJQUFJO3FCQWxCaEQsQ0FBQztRQW1CZixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQzs7UUFFekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJ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QUFFO29CQUMvQixLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDekI7cUJBQU07b0JBQ0wsS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDcEM7Z0JBQ0QsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDakMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQixJQUFJO29CQUNGLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O2lCQUV4RjtnQkFBQyxPQUFPLENBQUMsRUFBRTtpQkFDWDthQUNGLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBRTdELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOzs7OztJQUdJLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7O0NBRXRCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBOelRyZWVOb2RlT3B0aW9ucyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGtleTogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpc0xlYWY/OiBib29sZWFuO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBzZWxlY3RhYmxlPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlQ2hlY2tib3g/OiBib29sZWFuO1xuICBleHBhbmRlZD86IGJvb2xlYW47XG4gIGNoaWxkcmVuPzogTnpUcmVlTm9kZU9wdGlvbnNbXTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIFsga2V5OiBzdHJpbmcgXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBrZXk/OiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXIgPSAwO1xuICBjaGlsZHJlbjogTnpUcmVlTm9kZVtdO1xuICBpc0xlYWY6IGJvb2xlYW47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb3JpZ2luOiBhbnk7XG4gIC8vIFBhcmVudCBOb2RlXG4gIHBhcmVudE5vZGU6IE56VHJlZU5vZGU7XG4gIGlzQ2hlY2tlZDogYm9vbGVhbjtcbiAgaXNTZWxlY3RhYmxlOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICBpc0Rpc2FibGVDaGVja2JveDogYm9vbGVhbjtcbiAgaXNFeHBhbmRlZDogYm9vbGVhbjtcbiAgaXNIYWxmQ2hlY2tlZDogYm9vbGVhbjtcbiAgaXNBbGxDaGVja2VkOiBib29sZWFuO1xuICBpc1NlbGVjdGVkOiBib29sZWFuO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGlzTWF0Y2hlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihvcHRpb246IE56VHJlZU5vZGVPcHRpb25zLCBwYXJlbnQ6IE56VHJlZU5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy50aXRsZSA9IG9wdGlvbi50aXRsZSB8fCAnLS0tJztcbiAgICB0aGlzLmtleSA9IG9wdGlvbi5rZXkgfHwgbnVsbDtcbiAgICB0aGlzLmlzTGVhZiA9IG9wdGlvbi5pc0xlYWYgfHwgZmFsc2U7XG4gICAgdGhpcy5vcmlnaW4gPSBvcHRpb247XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudDtcbiAgICAvLyBvcHRpb24gcGFyYW1zXG4gICAgdGhpcy5pc0NoZWNrZWQgPSBvcHRpb24uY2hlY2tlZCB8fCBmYWxzZTtcbiAgICB0aGlzLmlzU2VsZWN0YWJsZSA9IG9wdGlvbi5kaXNhYmxlZCB8fCAob3B0aW9uLnNlbGVjdGFibGUgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlKTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBvcHRpb24uZGlzYWJsZWQgfHwgZmFsc2U7XG4gICAgdGhpcy5pc0Rpc2FibGVDaGVja2JveCA9IG9wdGlvbi5kaXNhYmxlQ2hlY2tib3ggfHwgZmFsc2U7XG4gICAgdGhpcy5pc0V4cGFuZGVkID0gb3B0aW9uLmlzTGVhZiA/IGZhbHNlIDogKG9wdGlvbi5leHBhbmRlZCB8fCBmYWxzZSk7XG4gICAgdGhpcy5pc0FsbENoZWNrZWQgPSBvcHRpb24uY2hlY2tlZCB8fCBmYWxzZTtcbiAgICB0aGlzLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSAoIW9wdGlvbi5kaXNhYmxlZCAmJiBvcHRpb24uc2VsZWN0ZWQpIHx8IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc01hdGNoZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIHBhcmVudCdzIGNoZWNrZWQgc3RhdHVzIHdpbGwgYWZmZWN0IGNoaWxkcmVuIHdoaWxlIGluaXRpYWxpemluZ1xuICAgICAqL1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSBwYXJlbnQubGV2ZWwgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxldmVsID0gMDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZihvcHRpb24uY2hpbGRyZW4pICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb24uY2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKFxuICAgICAgICAobm9kZU9wdGlvbnMpID0+IHtcbiAgICAgICAgICBpZiAob3B0aW9uLmNoZWNrZWQgJiYgIW9wdGlvbi5kaXNhYmxlZCAmJiAhbm9kZU9wdGlvbnMuZGlzYWJsZWQgJiYgIW5vZGVPcHRpb25zLmRpc2FibGVDaGVja2JveCkge1xuICAgICAgICAgICAgbm9kZU9wdGlvbnMuY2hlY2tlZCA9IG9wdGlvbi5jaGVja2VkO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2gobmV3IE56VHJlZU5vZGUobm9kZU9wdGlvbnMsIHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0Q2hlY2tlZChjaGVja2VkOiBib29sZWFuID0gZmFsc2UsIGhhbGZDaGVja2VkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLm9yaWdpbi5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5pc0FsbENoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuaXNIYWxmQ2hlY2tlZCA9IGhhbGZDaGVja2VkO1xuICB9XG5cbiAgcHVibGljIHNldEV4cGFuZGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcmlnaW4uZXhwYW5kZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3JpZ2luLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyZW50Tm9kZSgpOiBOelRyZWVOb2RlIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICB9XG5cbiAgcHVibGljIGdldENoaWxkcmVuKCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICog5pSv5oyB5oyJ57Si5byV5L2N572u5o+S5YWlLOWPtuWtkOiKgueCueS4jeWPr+a3u+WKoFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwdWJsaWMgYWRkQ2hpbGRyZW4oY2hpbGRyZW46IGFueVtdLCBjaGlsZFBvczogbnVtYmVyID0gLTEpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKFxuICAgICAgICAobm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZnJlc2hMZXZlbCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XG4gICAgICAgICAgICBuLmdldENoaWxkcmVuKCkuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgYy5sZXZlbCA9IGMuZ2V0UGFyZW50Tm9kZSgpLmxldmVsICsgMTtcbiAgICAgICAgICAgICAgLy8gZmx1c2ggb3JpZ2luXG4gICAgICAgICAgICAgIGMub3JpZ2luLmxldmVsID0gYy5sZXZlbDtcbiAgICAgICAgICAgICAgcmVmcmVzaExldmVsKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBsZXQgY2hpbGQgPSBub2RlO1xuICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIE56VHJlZU5vZGUpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZCA9IG5ldyBOelRyZWVOb2RlKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZC5sZXZlbCA9IHRoaXMubGV2ZWwgKyAxO1xuICAgICAgICAgIGNoaWxkLm9yaWdpbi5sZXZlbCA9IGNoaWxkLmxldmVsO1xuICAgICAgICAgIHJlZnJlc2hMZXZlbChjaGlsZCk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkUG9zID09PSAtMSA/IHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCkgOiB0aGlzLmNoaWxkcmVuLnNwbGljZShjaGlsZFBvcywgMCwgY2hpbGQpO1xuICAgICAgICAgICAgLy8gZmx1c2ggb3JpZ2luXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB0aGlzLm9yaWdpbi5jaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKS5tYXAodiA9PiB2Lm9yaWdpbik7XG4gICAgICAvLyByZW1vdmUgbG9hZGluZyBzdGF0ZVxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXJDaGlsZHJlbigpOiB2b2lkIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cbn1cbiJdfQ==