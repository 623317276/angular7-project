/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
var LoggerService = /** @class */ (function () {
    function LoggerService(_loggerState) {
        this._loggerState = _loggerState;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.log = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.warn = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.warn(...args);
            console.warn.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.error = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.error(...args);
            console.error.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.info = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.debug = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            /** @type {?} */
            var arrs = Array.prototype.slice.call(arguments);
            console.log.apply(console, ['[NG-ZORRO-DEBUG]'].concat(arrs));
        }
    };
    LoggerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] }] }
    ]; };
    return LoggerService;
}());
export { LoggerService };
function LoggerService_tsickle_Closure_declarations() {
    /** @type {?} */
    LoggerService.prototype._loggerState;
}
/** @type {?} */
export var NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
/**
 * @param {?} exist
 * @param {?} loggerState
 * @return {?}
 */
export function LOGGER_SERVICE_PROVIDER_FACTORY(exist, loggerState) { return exist || new LoggerService(loggerState); }
/** @type {?} */
export var LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL2xvZ2dlci9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBSS9GLHVCQUE2QyxZQUFxQjtRQUFyQixpQkFBWSxHQUFaLFlBQVksQ0FBUztLQUFJOzs7OztJQUV0RSwyQkFBRzs7OztJQUFIO1FBQUksY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFFRCw0QkFBSTs7OztJQUFKO1FBQUssY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDeEM7S0FDRjs7Ozs7SUFFRCw2QkFBSzs7OztJQUFMO1FBQU0sY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDekM7S0FDRjs7Ozs7SUFFRCw0QkFBSTs7OztJQUFKO1FBQUssY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFFRCw2QkFBSzs7OztJQUFMO1FBQU0sY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMvRDtLQUNGOztnQkF0Q0YsVUFBVTs7Ozs4Q0FFSSxNQUFNLFNBQUMsZUFBZTs7d0JBTHJDOztTQUlhLGFBQWE7Ozs7OztBQXdDMUIsV0FBYSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVUsaUJBQWlCLENBQUMsQ0FBQzs7Ozs7O0FBRTlFLE1BQU0sMENBQTBDLEtBQW9CLEVBQUUsV0FBb0IsSUFBbUIsT0FBTyxLQUFLLElBQUksSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRTs7QUFFOUosV0FBYSx1QkFBdUIsR0FBYTtJQUMvQyxPQUFPLEVBQUUsYUFBYTtJQUN0QixVQUFVLEVBQUUsK0JBQStCO0lBQzNDLElBQUksRUFBRSxDQUFFLENBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBRSxFQUFFLGVBQWUsQ0FBRTtDQUM3RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChOWl9MT0dHRVJfU1RBVEUpIHByaXZhdGUgX2xvZ2dlclN0YXRlOiBib29sZWFuKSB7fVxuXG4gIGxvZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHdhcm4oLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcbiAgICAgIC8vIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGVycm9yKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICAvLyBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGluZm8oLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBkZWJ1ZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ1tORy1aT1JSTy1ERUJVR10nLCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IGFycnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydbTkctWk9SUk8tREVCVUddJ10uY29uY2F0KGFycnMpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5aX0xPR0dFUl9TVEFURSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxib29sZWFuPignbnotbG9nZ2VyLXN0YXRlJyk7IC8vIFdoZXRoZXIgcHJpbnQgdGhlIGxvZ1xuXG5leHBvcnQgZnVuY3Rpb24gTE9HR0VSX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogTG9nZ2VyU2VydmljZSwgbG9nZ2VyU3RhdGU6IGJvb2xlYW4pOiBMb2dnZXJTZXJ2aWNlIHsgcmV0dXJuIGV4aXN0IHx8IG5ldyBMb2dnZXJTZXJ2aWNlKGxvZ2dlclN0YXRlKTsgfVxuXG5leHBvcnQgY29uc3QgTE9HR0VSX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBMb2dnZXJTZXJ2aWNlLFxuICB1c2VGYWN0b3J5OiBMT0dHRVJfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxuICBkZXBzOiBbIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMb2dnZXJTZXJ2aWNlIF0sIE5aX0xPR0dFUl9TVEFURSBdXG59O1xuIl19