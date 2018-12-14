/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var defaultDisabledTime = {
    nzDisabledHours: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledMinutes: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledSeconds: /**
     * @return {?}
     */
    function () {
        return [];
    }
};
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function getTimeConfig(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : /** @type {?} */ ({});
    disabledTimeConfig = tslib_1.__assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    var invalidTime = false;
    if (value) {
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minutes = value.getMinutes();
        /** @type {?} */
        var seconds = value.getSeconds();
        /** @type {?} */
        var disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function isTimeValid(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
/**
 * @param {?} value
 * @param {?=} disabledDate
 * @param {?=} disabledTime
 * @return {?}
 */
export function isAllowedDate(value, disabledDate, disabledTime) {
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxJQUFNLG1CQUFtQixHQUF1QjtJQUM5QyxlQUFlOzs7SUFBZjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxpQkFBaUI7OztJQUFqQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxpQkFBaUI7OztJQUFqQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7Q0FDRixDQUFDOzs7Ozs7QUFFRixNQUFNLHdCQUF3QixLQUFnQixFQUFFLFlBQTRCOztJQUMxRSxJQUFJLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxtQkFBQyxFQUF3QixDQUFBLENBQUM7SUFDM0csa0JBQWtCLHdCQUNiLG1CQUFtQixFQUNuQixrQkFBa0IsQ0FDdEIsQ0FBQztJQUNGLE9BQU8sa0JBQWtCLENBQUM7Q0FDM0I7Ozs7OztBQUVELE1BQU0sOEJBQThCLEtBQWdCLEVBQUUsa0JBQXNDOztJQUMxRixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsSUFBSSxLQUFLLEVBQUU7O1FBQ1QsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUM5QixJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ25DLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDbkMsSUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0QsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztZQUN0QyxJQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O2dCQUMzQyxJQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzVFLFdBQVcsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjthQUFNO1lBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNwQjtLQUNGO0lBQ0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztDQUNyQjs7Ozs7O0FBRUQsTUFBTSxzQkFBc0IsS0FBZ0IsRUFBRSxZQUE0Qjs7SUFDeEUsSUFBTSxrQkFBa0IsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzlELE9BQU8sbUJBQW1CLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Q0FDdkQ7Ozs7Ozs7QUFFRCxNQUFNLHdCQUF3QixLQUFnQixFQUFFLFlBQTZCLEVBQUUsWUFBNkI7SUFDMUcsSUFBSSxZQUFZLEVBQUU7UUFDaEIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELElBQUksWUFBWSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0NBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNhYmxlZERhdGVGbiwgRGlzYWJsZWRUaW1lQ29uZmlnLCBEaXNhYmxlZFRpbWVGbiB9IGZyb20gJy4uL3N0YW5kYXJkLXR5cGVzJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vY2FuZHktZGF0ZSc7XG5cbmNvbnN0IGRlZmF1bHREaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUNvbmZpZyA9IHtcbiAgbnpEaXNhYmxlZEhvdXJzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gW107XG4gIH0sXG4gIG56RGlzYWJsZWRNaW51dGVzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gW107XG4gIH0sXG4gIG56RGlzYWJsZWRTZWNvbmRzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lQ29uZmlnKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm4pOiBEaXNhYmxlZFRpbWVDb25maWcge1xuICBsZXQgZGlzYWJsZWRUaW1lQ29uZmlnID0gZGlzYWJsZWRUaW1lID8gZGlzYWJsZWRUaW1lKHZhbHVlICYmIHZhbHVlLm5hdGl2ZURhdGUpIDoge30gYXMgRGlzYWJsZWRUaW1lQ29uZmlnO1xuICBkaXNhYmxlZFRpbWVDb25maWcgPSB7XG4gICAgLi4uZGVmYXVsdERpc2FibGVkVGltZSxcbiAgICAuLi5kaXNhYmxlZFRpbWVDb25maWdcbiAgfTtcbiAgcmV0dXJuIGRpc2FibGVkVGltZUNvbmZpZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGltZVZhbGlkQnlDb25maWcodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWRUaW1lQ29uZmlnOiBEaXNhYmxlZFRpbWVDb25maWcpOiBib29sZWFuIHtcbiAgbGV0IGludmFsaWRUaW1lID0gZmFsc2U7XG4gIGlmICh2YWx1ZSkge1xuICAgIGNvbnN0IGhvdXIgPSB2YWx1ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSB2YWx1ZS5nZXRNaW51dGVzKCk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHZhbHVlLmdldFNlY29uZHMoKTtcbiAgICBjb25zdCBkaXNhYmxlZEhvdXJzID0gZGlzYWJsZWRUaW1lQ29uZmlnLm56RGlzYWJsZWRIb3VycygpO1xuICAgIGlmIChkaXNhYmxlZEhvdXJzLmluZGV4T2YoaG91cikgPT09IC0xKSB7XG4gICAgICBjb25zdCBkaXNhYmxlZE1pbnV0ZXMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZE1pbnV0ZXMoaG91cik7XG4gICAgICBpZiAoZGlzYWJsZWRNaW51dGVzLmluZGV4T2YobWludXRlcykgPT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkU2Vjb25kcyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkU2Vjb25kcyhob3VyLCBtaW51dGVzKTtcbiAgICAgICAgaW52YWxpZFRpbWUgPSBkaXNhYmxlZFNlY29uZHMuaW5kZXhPZihzZWNvbmRzKSAhPT0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZhbGlkVGltZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGludmFsaWRUaW1lID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICFpbnZhbGlkVGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGltZVZhbGlkKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm4pOiBib29sZWFuIHtcbiAgY29uc3QgZGlzYWJsZWRUaW1lQ29uZmlnID0gZ2V0VGltZUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lKTtcbiAgcmV0dXJuIGlzVGltZVZhbGlkQnlDb25maWcodmFsdWUsIGRpc2FibGVkVGltZUNvbmZpZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FsbG93ZWREYXRlKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkRGF0ZT86IERpc2FibGVkRGF0ZUZuLCBkaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbik6IGJvb2xlYW4ge1xuICBpZiAoZGlzYWJsZWREYXRlKSB7XG4gICAgaWYgKGRpc2FibGVkRGF0ZSh2YWx1ZS5uYXRpdmVEYXRlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoZGlzYWJsZWRUaW1lKSB7XG4gICAgaWYgKCFpc1RpbWVWYWxpZCh2YWx1ZSwgZGlzYWJsZWRUaW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==