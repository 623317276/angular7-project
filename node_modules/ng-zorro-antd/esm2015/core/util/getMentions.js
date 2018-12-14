/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} prefix
 * @return {?}
 */
export function getRegExp(prefix) {
    /** @type {?} */
    const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    /** @type {?} */
    let prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = `[${prefixToken}]`;
    }
    return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
}
/**
 * @param {?} value
 * @param {?=} prefix
 * @return {?}
 */
export function getMentions(value, prefix = '@') {
    if (typeof value !== 'string') {
        return [];
    }
    /** @type {?} */
    const regex = getRegExp(prefix);
    /** @type {?} */
    const mentions = value.match(regex);
    return mentions !== null ? mentions.map(e => e.trim()) : [];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWVudGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL2dldE1lbnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EsTUFBTSxvQkFBb0IsTUFBeUI7O0lBQ2pELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFDOUQsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRW5FLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUIsV0FBVyxHQUFHLElBQUksV0FBVyxHQUFHLENBQUM7S0FDbEM7SUFFRCxPQUFPLElBQUksTUFBTSxDQUFDLFdBQVcsV0FBVyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDMUQ7Ozs7OztBQUVELE1BQU0sc0JBQXNCLEtBQWEsRUFBRSxTQUE0QixHQUFHO0lBQ3hFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O0lBQ0QsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUNoQyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Q0FDN0QiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWdFeHAocHJlZml4OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFJlZ0V4cCB7XG4gIGNvbnN0IHByZWZpeEFycmF5ID0gQXJyYXkuaXNBcnJheShwcmVmaXgpID8gcHJlZml4IDogW3ByZWZpeF07XG4gIGxldCBwcmVmaXhUb2tlbiA9IHByZWZpeEFycmF5LmpvaW4oJycpLnJlcGxhY2UoLyhcXCR8XFxeKS9nLCAnXFxcXCQxJyk7XG5cbiAgaWYgKHByZWZpeEFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICBwcmVmaXhUb2tlbiA9IGBbJHtwcmVmaXhUb2tlbn1dYDtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKGAoXFxcXHN8XikoJHtwcmVmaXhUb2tlbn0pW15cXFxcc10qYCwgJ2cnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnRpb25zKHZhbHVlOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nIHwgc3RyaW5nW10gPSAnQCcpOiBzdHJpbmdbXSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IHJlZ2V4ID0gZ2V0UmVnRXhwKHByZWZpeCk7XG4gIGNvbnN0IG1lbnRpb25zID0gdmFsdWUubWF0Y2gocmVnZXgpO1xuICByZXR1cm4gbWVudGlvbnMgIT09IG51bGwgPyBtZW50aW9ucy5tYXAoZSA9PiBlLnRyaW0oKSkgOiBbXTtcbn1cbiJdfQ==