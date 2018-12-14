/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function matchMediaFunc() {
    if (typeof window === 'undefined') {
        return function () { return null; };
    }
    if (window.matchMedia) {
        return window.matchMedia.bind(window);
    }
    else {
        /** @type {?} */
        var matchMediaPolyfill = function (mediaQuery) {
            return {
                media: mediaQuery,
                matches: false,
                addListener: /**
                 * @return {?}
                 */
                function () {
                },
                removeListener: /**
                 * @return {?}
                 */
                function () {
                },
            };
        };
        return matchMediaPolyfill;
    }
}
/** @type {?} */
export var matchMedia = matchMediaFunc();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9wb2x5ZmlsbC9tYXRjaC1tZWRpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFDRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxPQUFPLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO0tBQ25CO0lBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdkM7U0FBTTs7UUFDTCxJQUFNLGtCQUFrQixHQUFHLFVBQUMsVUFBa0I7WUFDNUMsT0FBTztnQkFDTCxLQUFLLEVBQUksVUFBVTtnQkFDbkIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsV0FBVzs7O2dCQUFYO2lCQUNDO2dCQUNELGNBQWM7OztnQkFBZDtpQkFDQzthQUNGLENBQUM7U0FDSCxDQUFDO1FBQ0YsT0FBTyxrQkFBa0IsQ0FBQztLQUMzQjtDQUNGOztBQUVELFdBQWEsVUFBVSxHQUFHLGNBQWMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWF0Y2hNZWRpYUZ1bmMoKTogKG1lZGlhUXVlcnk6IHN0cmluZykgPT4gTWVkaWFRdWVyeUxpc3Qge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gKCkgPT4gbnVsbDtcbiAgfVxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEuYmluZCh3aW5kb3cpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hdGNoTWVkaWFQb2x5ZmlsbCA9IChtZWRpYVF1ZXJ5OiBzdHJpbmcpOiBNZWRpYVF1ZXJ5TGlzdCA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZWRpYSAgOiBtZWRpYVF1ZXJ5LFxuICAgICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgYWRkTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBtYXRjaE1lZGlhUG9seWZpbGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hdGNoTWVkaWEgPSBtYXRjaE1lZGlhRnVuYygpO1xuIl19