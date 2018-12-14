/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function matchMediaFunc() {
    if (typeof window === 'undefined') {
        return () => null;
    }
    if (window.matchMedia) {
        return window.matchMedia.bind(window);
    }
    else {
        /** @type {?} */
        const matchMediaPolyfill = (mediaQuery) => {
            return {
                media: mediaQuery,
                matches: false,
                /**
                 * @return {?}
                 */
                addListener() {
                },
                /**
                 * @return {?}
                 */
                removeListener() {
                },
            };
        };
        return matchMediaPolyfill;
    }
}
/** @type {?} */
export const matchMedia = matchMediaFunc();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9wb2x5ZmlsbC9tYXRjaC1tZWRpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFDRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztLQUNuQjtJQUNELElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUNyQixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3ZDO1NBQU07O1FBQ0wsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLFVBQWtCLEVBQWtCLEVBQUU7WUFDaEUsT0FBTztnQkFDTCxLQUFLLEVBQUksVUFBVTtnQkFDbkIsT0FBTyxFQUFFLEtBQUs7Ozs7Z0JBQ2QsV0FBVztpQkFDVjs7OztnQkFDRCxjQUFjO2lCQUNiO2FBQ0YsQ0FBQztTQUNILENBQUM7UUFDRixPQUFPLGtCQUFrQixDQUFDO0tBQzNCO0NBQ0Y7O0FBRUQsYUFBYSxVQUFVLEdBQUcsY0FBYyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYXRjaE1lZGlhRnVuYygpOiAobWVkaWFRdWVyeTogc3RyaW5nKSA9PiBNZWRpYVF1ZXJ5TGlzdCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAoKSA9PiBudWxsO1xuICB9XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYS5iaW5kKHdpbmRvdyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWF0Y2hNZWRpYVBvbHlmaWxsID0gKG1lZGlhUXVlcnk6IHN0cmluZyk6IE1lZGlhUXVlcnlMaXN0ID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lZGlhICA6IG1lZGlhUXVlcnksXG4gICAgICAgIG1hdGNoZXM6IGZhbHNlLFxuICAgICAgICBhZGRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIG1hdGNoTWVkaWFQb2x5ZmlsbDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWF0Y2hNZWRpYSA9IG1hdGNoTWVkaWFGdW5jKCk7XG4iXX0=