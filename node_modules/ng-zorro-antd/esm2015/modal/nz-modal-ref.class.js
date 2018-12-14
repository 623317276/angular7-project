/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 * @abstract
 * @template T, R
 */
export class NzModalRef {
}
function NzModalRef_tsickle_Closure_declarations() {
    /** @type {?} */
    NzModalRef.prototype.afterOpen;
    /** @type {?} */
    NzModalRef.prototype.afterClose;
    /**
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.open = function () { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.close = function (result) { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.destroy = function (result) { };
    /**
     * Trigger the nzOnOk/nzOnCancel by manual
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.triggerOk = function () { };
    /**
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.triggerCancel = function () { };
    /**
     * Return the component instance of nzContent when specify nzContent as a Component
     * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getContentComponent = function () { };
    /**
     * Get the dom element of this Modal
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getElement = function () { };
    /**
     * Get the instance of the Modal itself
     * @abstract
     * @return {?}
     */
    NzModalRef.prototype.getInstance = function () { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1vZGFsL256LW1vZGFsLXJlZi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUEsTUFBTTtDQW1DTCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbnotbW9kYWwuY29tcG9uZW50JztcblxuLyoqXG4gKiBBUEkgY2xhc3MgdGhhdCBwdWJsaWMgdG8gdXNlcnMgdG8gaGFuZGxlIHRoZSBtb2RhbCBpbnN0YW5jZS5cbiAqIE56TW9kYWxSZWYgaXMgYWltIHRvIGF2b2lkIGFjY2Vzc2luZyB0byB0aGUgbW9kYWwgaW5zdGFuY2UgZGlyZWN0bHkgYnkgdXNlcnMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOek1vZGFsUmVmPFQgPSBhbnksIFIgPSBhbnk+IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgYWJzdHJhY3QgYWZ0ZXJPcGVuOiBPYnNlcnZhYmxlPHZvaWQ+O1xuICBhYnN0cmFjdCBhZnRlckNsb3NlOiBPYnNlcnZhYmxlPFI+O1xuXG4gIGFic3RyYWN0IG9wZW4oKTogdm9pZDtcbiAgYWJzdHJhY3QgY2xvc2UocmVzdWx0PzogUik6IHZvaWQ7XG4gIGFic3RyYWN0IGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIG56T25Pay9uek9uQ2FuY2VsIGJ5IG1hbnVhbFxuICAgKi9cbiAgYWJzdHJhY3QgdHJpZ2dlck9rKCk6IHZvaWQ7XG4gIGFic3RyYWN0IHRyaWdnZXJDYW5jZWwoKTogdm9pZDtcblxuICAvLyAvKipcbiAgLy8gICogUmV0dXJuIHRoZSBDb21wb25lbnRSZWYgb2YgbnpDb250ZW50IHdoZW4gc3BlY2lmeSBuekNvbnRlbnQgYXMgYSBDb21wb25lbnRcbiAgLy8gICogTm90ZTogdGhpcyBtZXRob2QgbWF5IHJldHVybiB1bmRlZmluZWQgaWYgdGhlIENvbXBvbmVudCBoYXMgbm90IHJlYWR5IHlldC4gKGl0IG9ubHkgYXZhaWxhYmxlIGFmdGVyIE1vZGFsJ3MgbmdPbkluaXQpXG4gIC8vICAqL1xuICAvLyBhYnN0cmFjdCBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjx7fT47XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY29tcG9uZW50IGluc3RhbmNlIG9mIG56Q29udGVudCB3aGVuIHNwZWNpZnkgbnpDb250ZW50IGFzIGEgQ29tcG9uZW50XG4gICAqIE5vdGU6IHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBDb21wb25lbnQgaGFzIG5vdCByZWFkeSB5ZXQuIChpdCBvbmx5IGF2YWlsYWJsZSBhZnRlciBNb2RhbCdzIG5nT25Jbml0KVxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRvbSBlbGVtZW50IG9mIHRoaXMgTW9kYWxcbiAgICovXG4gIGFic3RyYWN0IGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIE1vZGFsIGl0c2VsZlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0SW5zdGFuY2UoKTogTnpNb2RhbENvbXBvbmVudDtcbn1cbiJdfQ==