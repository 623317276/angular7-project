/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from '@angular/core';
/**
 * @record
 */
export function Position() { }
function Position_tsickle_Closure_declarations() {
    /** @type {?} */
    Position.prototype.x;
    /** @type {?} */
    Position.prototype.y;
}
var NzGlobalMonitorService = /** @class */ (function () {
    function NzGlobalMonitorService() {
        this.counter = 0;
        this.lastClickPos = {
            x: 0,
            y: 0
        };
        this._navItemSource = new EventEmitter();
        this._observeGlobalEvents();
    }
    /**
     * @return {?}
     */
    NzGlobalMonitorService.prototype.getGlobalCount = /**
     * @return {?}
     */
    function () {
        return ++this.counter;
    };
    /**
     * @param {?} status
     * @return {?}
     */
    NzGlobalMonitorService.prototype.setDocumentOverflowHidden = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        document.body.style.overflow = status ? 'hidden' : '';
    };
    /**
     * @return {?}
     */
    NzGlobalMonitorService.prototype._observeGlobalEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // 监听document的点击事件，记录点击坐标，并抛出 documentClick 事件
        document.addEventListener('click', function (e) {
            _this.lastClickPos = {
                x: e.clientX,
                y: e.clientY
            };
            _this._navItemSource.emit('documentClick');
        });
    };
    return NzGlobalMonitorService;
}());
export { NzGlobalMonitorService };
function NzGlobalMonitorService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzGlobalMonitorService.prototype.counter;
    /** @type {?} */
    NzGlobalMonitorService.prototype.lastClickPos;
    /** @type {?} */
    NzGlobalMonitorService.prototype._navItemSource;
}
export default new NzGlobalMonitorService();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZ2xvYmFsLW1vbml0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL256LWdsb2JhbC1tb25pdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQU83QyxJQUFBO0lBNEJFO3VCQTNCVSxDQUFDOzRCQUNjO1lBQ3ZCLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7U0FDTDs4QkFFc0MsSUFBSSxZQUFZLEVBQUU7UUFzQnZELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0tBQzdCOzs7O0lBckJELCtDQUFjOzs7SUFBZDtRQUNFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3ZCOzs7OztJQUVELDBEQUF5Qjs7OztJQUF6QixVQUEwQixNQUFlO1FBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ3ZEOzs7O0lBRUQscURBQW9COzs7SUFBcEI7UUFBQSxpQkFTQzs7UUFQQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsWUFBWSxHQUFHO2dCQUNsQixDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU87Z0JBQ1osQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPO2FBQ2IsQ0FBQztZQUNGLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNDLENBQUMsQ0FBQztLQUNKO2lDQWpDSDtJQXNDQyxDQUFBO0FBL0JELGtDQStCQzs7Ozs7Ozs7O0FBRUQsZUFBZSxJQUFJLHNCQUFzQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTnpHbG9iYWxNb25pdG9yU2VydmljZSB7XG4gIGNvdW50ZXIgPSAwO1xuICBsYXN0Q2xpY2tQb3M6IFBvc2l0aW9uID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIF9uYXZJdGVtU291cmNlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXRHbG9iYWxDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiArK3RoaXMuY291bnRlcjtcbiAgfVxuXG4gIHNldERvY3VtZW50T3ZlcmZsb3dIaWRkZW4oc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IHN0YXR1cyA/ICdoaWRkZW4nIDogJyc7XG4gIH1cblxuICBfb2JzZXJ2ZUdsb2JhbEV2ZW50cygpOiB2b2lkIHtcbiAgICAvLyDnm5HlkKxkb2N1bWVudOeahOeCueWHu+S6i+S7tu+8jOiusOW9leeCueWHu+WdkOagh++8jOW5tuaKm+WHuiBkb2N1bWVudENsaWNrIOS6i+S7tlxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMubGFzdENsaWNrUG9zID0ge1xuICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgIHk6IGUuY2xpZW50WVxuICAgICAgfTtcbiAgICAgIHRoaXMuX25hdkl0ZW1Tb3VyY2UuZW1pdCgnZG9jdW1lbnRDbGljaycpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZUdsb2JhbEV2ZW50cygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOekdsb2JhbE1vbml0b3JTZXJ2aWNlKCk7XG4iXX0=