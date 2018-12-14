/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { NzI18nService } from './nz-i18n.service';
var NzI18nPipe = /** @class */ (function () {
    function NzI18nPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    NzI18nPipe.prototype.transform = /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    function (path, keyValue) {
        return this._locale.translate(path, keyValue);
    };
    NzI18nPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nzI18n'
                },] }
    ];
    /** @nocollapse */
    NzI18nPipe.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    return NzI18nPipe;
}());
export { NzI18nPipe };
function NzI18nPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    NzI18nPipe.prototype._locale;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImkxOG4vbnotaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0lBTWhELG9CQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO0tBQ3pDOzs7Ozs7SUFFRCw4QkFBUzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxRQUFpQjtRQUN2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMvQzs7Z0JBVEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO2lCQUNmOzs7O2dCQUpRLGFBQWE7O3FCQUZ0Qjs7U0FPYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi9uei1pMThuLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICduekkxOG4nXG59KVxuZXhwb3J0IGNsYXNzIE56STE4blBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9jYWxlOiBOekkxOG5TZXJ2aWNlKSB7XG4gIH1cblxuICB0cmFuc2Zvcm0ocGF0aDogc3RyaW5nLCBrZXlWYWx1ZT86IG9iamVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZS50cmFuc2xhdGUocGF0aCwga2V5VmFsdWUpO1xuICB9XG59XG4iXX0=