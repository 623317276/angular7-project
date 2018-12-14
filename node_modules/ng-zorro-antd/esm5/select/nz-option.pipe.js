/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var NzOptionPipe = /** @class */ (function () {
    function NzOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzOptionPipe.prototype.transform = /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (options, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return options;
        }
        else {
            return (/** @type {?} */ (options)).filter(function (o) { return filterOption(input, o); });
        }
    };
    NzOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzFilterOptionPipe' },] }
    ];
    return NzOptionPipe;
}());
export { NzOptionPipe };
var NzSubOptionPipe = /** @class */ (function () {
    function NzSubOptionPipe() {
    }
    /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzSubOptionPipe.prototype.transform = /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (groups, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return groups;
        }
        else {
            return (/** @type {?} */ (groups)).filter(function (g) {
                return g.listOfNzOptionComponent.some(function (o) { return filterOption(input, o); });
            });
        }
    };
    NzSubOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzSubFilterOptionPipe' },] }
    ];
    return NzSubOptionPipe;
}());
export { NzSubOptionPipe };
/**
 * @param {?} input
 * @param {?} option
 * @return {?}
 */
export function defaultFilterOption(input, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(input.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsSUFBSSxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUFTN0QsZ0NBQVM7Ozs7Ozs7SUFBVCxVQUFVLE9BQTJELEVBQUUsS0FBYSxFQUFFLFlBQTJCLEVBQUUsWUFBcUI7UUFDdEksSUFBSSxZQUFZLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDMUIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sbUJBQUMsT0FBOEIsRUFBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztTQUM3RTtLQUNGOztnQkFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7O3VCQVJwQzs7U0FTYSxZQUFZOzs7Ozs7Ozs7OztJQVl2QixtQ0FBUzs7Ozs7OztJQUFULFVBQVUsTUFBb0UsRUFBRSxLQUFhLEVBQUUsWUFBMkIsRUFBRSxZQUFxQjtRQUMvSSxJQUFJLFlBQVksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLG1CQUFDLE1BQWtDLEVBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO2dCQUNsRCxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7YUFDcEUsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Z0JBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFOzswQkFuQnZDOztTQW9CYSxlQUFlOzs7Ozs7QUFZNUIsTUFBTSw4QkFBOEIsS0FBYSxFQUFFLE1BQXlCO0lBQzFFLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2RTtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBURmlsdGVyT3B0aW9uID0gKGlucHV0Pzogc3RyaW5nLCBvcHRpb24/OiBOek9wdGlvbkNvbXBvbmVudCkgPT4gYm9vbGVhbjtcblxuLy8gVE9ETzogY2FuIG5vdCBkeW5hbWljIGNoYW5nZSBwaXBlIHB1cmUgeWV0XG5AUGlwZSh7IG5hbWU6ICduekZpbHRlck9wdGlvblBpcGUnIH0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShvcHRpb25zOiBOek9wdGlvbkNvbXBvbmVudFtdIHwgUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PiwgaW5wdXQ6IHN0cmluZywgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLCBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW4pOiBOek9wdGlvbkNvbXBvbmVudFtdIHwgUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PiB7XG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhaW5wdXQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9wdGlvbnMgYXMgTnpPcHRpb25Db21wb25lbnRbXSkuZmlsdGVyKG8gPT4gZmlsdGVyT3B0aW9uKGlucHV0LCBvKSk7XG4gICAgfVxuICB9XG59XG5cbkBQaXBlKHsgbmFtZTogJ256U3ViRmlsdGVyT3B0aW9uUGlwZScgfSlcbmV4cG9ydCBjbGFzcyBOelN1Yk9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGdyb3VwczogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdIHwgUXVlcnlMaXN0PE56T3B0aW9uR3JvdXBDb21wb25lbnQ+LCBpbnB1dDogc3RyaW5nLCBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sIHNlcnZlclNlYXJjaDogYm9vbGVhbik6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkdyb3VwQ29tcG9uZW50PiB7XG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhaW5wdXQpIHtcbiAgICAgIHJldHVybiBncm91cHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoZ3JvdXBzIGFzIE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSkuZmlsdGVyKGcgPT4ge1xuICAgICAgICByZXR1cm4gZy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5zb21lKG8gPT4gZmlsdGVyT3B0aW9uKGlucHV0LCBvKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXJPcHRpb24oaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IGJvb2xlYW4ge1xuICBpZiAob3B0aW9uICYmIG9wdGlvbi5uekxhYmVsKSB7XG4gICAgcmV0dXJuIG9wdGlvbi5uekxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19