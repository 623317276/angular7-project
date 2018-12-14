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
export class NzGlobalMonitorService {
    constructor() {
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
    getGlobalCount() {
        return ++this.counter;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setDocumentOverflowHidden(status) {
        document.body.style.overflow = status ? 'hidden' : '';
    }
    /**
     * @return {?}
     */
    _observeGlobalEvents() {
        // 监听document的点击事件，记录点击坐标，并抛出 documentClick 事件
        document.addEventListener('click', (e) => {
            this.lastClickPos = {
                x: e.clientX,
                y: e.clientY
            };
            this._navItemSource.emit('documentClick');
        });
    }
}
function NzGlobalMonitorService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzGlobalMonitorService.prototype.counter;
    /** @type {?} */
    NzGlobalMonitorService.prototype.lastClickPos;
    /** @type {?} */
    NzGlobalMonitorService.prototype._navItemSource;
}
export default new NzGlobalMonitorService();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZ2xvYmFsLW1vbml0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL256LWdsb2JhbC1tb25pdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQU83QyxNQUFNO0lBNEJKO3VCQTNCVSxDQUFDOzRCQUNjO1lBQ3ZCLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7U0FDTDs4QkFFc0MsSUFBSSxZQUFZLEVBQUU7UUFzQnZELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0tBQzdCOzs7O0lBckJELGNBQWM7UUFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUN2Qjs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxNQUFlO1FBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ3ZEOzs7O0lBRUQsb0JBQW9COztRQUVsQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRztnQkFDbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPO2dCQUNaLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTzthQUNiLENBQUM7WUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMzQyxDQUFDLENBQUM7S0FDSjtDQUtGOzs7Ozs7Ozs7QUFFRCxlQUFlLElBQUksc0JBQXNCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOekdsb2JhbE1vbml0b3JTZXJ2aWNlIHtcbiAgY291bnRlciA9IDA7XG4gIGxhc3RDbGlja1BvczogUG9zaXRpb24gPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgX25hdkl0ZW1Tb3VyY2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldEdsb2JhbENvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuICsrdGhpcy5jb3VudGVyO1xuICB9XG5cbiAgc2V0RG9jdW1lbnRPdmVyZmxvd0hpZGRlbihzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gc3RhdHVzID8gJ2hpZGRlbicgOiAnJztcbiAgfVxuXG4gIF9vYnNlcnZlR2xvYmFsRXZlbnRzKCk6IHZvaWQge1xuICAgIC8vIOebkeWQrGRvY3VtZW5055qE54K55Ye75LqL5Lu277yM6K6w5b2V54K55Ye75Z2Q5qCH77yM5bm25oqb5Ye6IGRvY3VtZW50Q2xpY2sg5LqL5Lu2XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgdGhpcy5sYXN0Q2xpY2tQb3MgPSB7XG4gICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgeTogZS5jbGllbnRZXG4gICAgICB9O1xuICAgICAgdGhpcy5fbmF2SXRlbVNvdXJjZS5lbWl0KCdkb2N1bWVudENsaWNrJyk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9vYnNlcnZlR2xvYmFsRXZlbnRzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE56R2xvYmFsTW9uaXRvclNlcnZpY2UoKTtcbiJdfQ==