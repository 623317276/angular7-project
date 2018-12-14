/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class NzOptionPipe {
    /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(options, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return options;
        }
        else {
            return (/** @type {?} */ (options)).filter(o => filterOption(input, o));
        }
    }
}
NzOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterOptionPipe' },] }
];
export class NzSubOptionPipe {
    /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(groups, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return groups;
        }
        else {
            return (/** @type {?} */ (groups)).filter(g => {
                return g.listOfNzOptionComponent.some(o => filterOption(input, o));
            });
        }
    }
}
NzSubOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzSubFilterOptionPipe' },] }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsSUFBSSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQVEvRCxNQUFNOzs7Ozs7OztJQUNKLFNBQVMsQ0FBQyxPQUEyRCxFQUFFLEtBQWEsRUFBRSxZQUEyQixFQUFFLFlBQXFCO1FBQ3RJLElBQUksWUFBWSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzFCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLG1CQUFDLE9BQThCLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0U7S0FDRjs7O1lBUkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFOztBQVlwQyxNQUFNOzs7Ozs7OztJQUNKLFNBQVMsQ0FBQyxNQUFvRSxFQUFFLEtBQWEsRUFBRSxZQUEyQixFQUFFLFlBQXFCO1FBQy9JLElBQUksWUFBWSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzFCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQU8sbUJBQUMsTUFBa0MsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckQsT0FBTyxDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFLENBQUMsQ0FBQztTQUNKO0tBQ0Y7OztZQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTs7Ozs7OztBQWF2QyxNQUFNLDhCQUE4QixLQUFhLEVBQUUsTUFBeUI7SUFDMUUsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUM1QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3ZFO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIFRGaWx0ZXJPcHRpb24gPSAoaW5wdXQ/OiBzdHJpbmcsIG9wdGlvbj86IE56T3B0aW9uQ29tcG9uZW50KSA9PiBib29sZWFuO1xuXG4vLyBUT0RPOiBjYW4gbm90IGR5bmFtaWMgY2hhbmdlIHBpcGUgcHVyZSB5ZXRcbkBQaXBlKHsgbmFtZTogJ256RmlsdGVyT3B0aW9uUGlwZScgfSlcbmV4cG9ydCBjbGFzcyBOek9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG9wdGlvbnM6IE56T3B0aW9uQ29tcG9uZW50W10gfCBRdWVyeUxpc3Q8TnpPcHRpb25Db21wb25lbnQ+LCBpbnB1dDogc3RyaW5nLCBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sIHNlcnZlclNlYXJjaDogYm9vbGVhbik6IE56T3B0aW9uQ29tcG9uZW50W10gfCBRdWVyeUxpc3Q8TnpPcHRpb25Db21wb25lbnQ+IHtcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFpbnB1dCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAob3B0aW9ucyBhcyBOek9wdGlvbkNvbXBvbmVudFtdKS5maWx0ZXIobyA9PiBmaWx0ZXJPcHRpb24oaW5wdXQsIG8pKTtcbiAgICB9XG4gIH1cbn1cblxuQFBpcGUoeyBuYW1lOiAnbnpTdWJGaWx0ZXJPcHRpb25QaXBlJyB9KVxuZXhwb3J0IGNsYXNzIE56U3ViT3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZ3JvdXBzOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10gfCBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD4sIGlucHV0OiBzdHJpbmcsIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiwgc2VydmVyU2VhcmNoOiBib29sZWFuKTogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdIHwgUXVlcnlMaXN0PE56T3B0aW9uR3JvdXBDb21wb25lbnQ+IHtcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFpbnB1dCkge1xuICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChncm91cHMgYXMgTnpPcHRpb25Hcm91cENvbXBvbmVudFtdKS5maWx0ZXIoZyA9PiB7XG4gICAgICAgIHJldHVybiBnLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnNvbWUobyA9PiBmaWx0ZXJPcHRpb24oaW5wdXQsIG8pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZpbHRlck9wdGlvbihpbnB1dDogc3RyaW5nLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogYm9vbGVhbiB7XG4gIGlmIChvcHRpb24gJiYgb3B0aW9uLm56TGFiZWwpIHtcbiAgICByZXR1cm4gb3B0aW9uLm56TGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=