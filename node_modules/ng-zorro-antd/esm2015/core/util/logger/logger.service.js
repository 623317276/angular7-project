/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
export class LoggerService {
    /**
     * @param {?} _loggerState
     */
    constructor(_loggerState) {
        this._loggerState = _loggerState;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (this._loggerState) {
            // console.warn(...args);
            console.warn.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    error(...args) {
        if (this._loggerState) {
            // console.error(...args);
            console.error.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    info(...args) {
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    debug(...args) {
        if (this._loggerState) {
            /** @type {?} */
            const arrs = Array.prototype.slice.call(arguments);
            console.log.apply(console, ['[NG-ZORRO-DEBUG]'].concat(arrs));
        }
    }
}
LoggerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoggerService.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] }] }
];
function LoggerService_tsickle_Closure_declarations() {
    /** @type {?} */
    LoggerService.prototype._loggerState;
}
/** @type {?} */
export const NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
/**
 * @param {?} exist
 * @param {?} loggerState
 * @return {?}
 */
export function LOGGER_SERVICE_PROVIDER_FACTORY(exist, loggerState) { return exist || new LoggerService(loggerState); }
/** @type {?} */
export const LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL2xvZ2dlci9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakcsTUFBTTs7OztJQUNKLFlBQTZDLFlBQXFCO1FBQXJCLGlCQUFZLEdBQVosWUFBWSxDQUFTO0tBQUk7Ozs7O0lBRXRFLEdBQUcsQ0FBQyxHQUFHLElBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBRyxJQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0Y7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQUcsSUFBVztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7O1lBRXJCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN6QztLQUNGOzs7OztJQUVELElBQUksQ0FBQyxHQUFHLElBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBRyxJQUFXO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDL0Q7S0FDRjs7O1lBdENGLFVBQVU7Ozs7MENBRUksTUFBTSxTQUFDLGVBQWU7Ozs7Ozs7QUF1Q3JDLGFBQWEsZUFBZSxHQUFHLElBQUksY0FBYyxDQUFVLGlCQUFpQixDQUFDLENBQUM7Ozs7OztBQUU5RSxNQUFNLDBDQUEwQyxLQUFvQixFQUFFLFdBQW9CLElBQW1CLE9BQU8sS0FBSyxJQUFJLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUU7O0FBRTlKLGFBQWEsdUJBQXVCLEdBQWE7SUFDL0MsT0FBTyxFQUFFLGFBQWE7SUFDdEIsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxJQUFJLEVBQUUsQ0FBRSxDQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUUsRUFBRSxlQUFlLENBQUU7Q0FDN0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTlpfTE9HR0VSX1NUQVRFKSBwcml2YXRlIF9sb2dnZXJTdGF0ZTogYm9vbGVhbikge31cblxuICBsb2coLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICB3YXJuKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBlcnJvciguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xuICAgICAgLy8gY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBpbmZvKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZGVidWcoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdbTkctWk9SUk8tREVCVUddJywgLi4uYXJncyk7XG4gICAgICBjb25zdCBhcnJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFsnW05HLVpPUlJPLURFQlVHXSddLmNvbmNhdChhcnJzKSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBOWl9MT0dHRVJfU1RBVEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4oJ256LWxvZ2dlci1zdGF0ZScpOyAvLyBXaGV0aGVyIHByaW50IHRoZSBsb2dcblxuZXhwb3J0IGZ1bmN0aW9uIExPR0dFUl9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IExvZ2dlclNlcnZpY2UsIGxvZ2dlclN0YXRlOiBib29sZWFuKTogTG9nZ2VyU2VydmljZSB7IHJldHVybiBleGlzdCB8fCBuZXcgTG9nZ2VyU2VydmljZShsb2dnZXJTdGF0ZSk7IH1cblxuZXhwb3J0IGNvbnN0IExPR0dFUl9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTG9nZ2VyU2VydmljZSxcbiAgdXNlRmFjdG9yeTogTE9HR0VSX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcbiAgZGVwczogWyBbIG5ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTG9nZ2VyU2VydmljZSBdLCBOWl9MT0dHRVJfU1RBVEUgXVxufTtcbiJdfQ==