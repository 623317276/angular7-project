/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { coerceBooleanProperty, coerceCssPixelValue, coerceNumberProperty } from '@angular/cdk/coercion';
/**
 * @param {?} value
 * @return {?}
 */
export function toBoolean(value) {
    return coerceBooleanProperty(value);
}
/**
 * @template D
 * @param {?} value
 * @param {?} fallback
 * @return {?}
 */
export function toNumber(value, fallback) {
    return coerceNumberProperty(value, fallback);
}
/**
 * @param {?} value
 * @return {?}
 */
export function toCssPixel(value) {
    return coerceCssPixelValue(value);
}
/**
 * @template T
 * @param {?} prop
 * @param {...?} args
 * @return {?}
 */
export function valueFunctionProp(prop) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // tslint:disable-line: no-any
    return typeof prop === 'function' ? prop.apply(void 0, tslib_1.__spread(args)) : prop;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using \@InputBoolean alone without \@Input? AOT needs \@Input to be visible
 *
 * \@howToUse
 * ```
 * \@Input() \@InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // \@Input()
 * // get visible() { return this.__visibile; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 * @return {?}
 */
export function InputBoolean() {
    // tslint:disable-line:no-any
    return function InputBooleanPropDecorator(target, name) {
        /** @type {?} */
        var privatePropName = "$$__" + name;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by InputBoolean decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, name, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this[privatePropName] = toBoolean(value); // tslint:disable-line:no-invalid-this
            }
        });
        // // Do rest things for input decorator
        // const inputDecorator = Input();
        // inputDecorator(target, name);
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3V0aWwvY29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUd6RyxNQUFNLG9CQUFvQixLQUF1QjtJQUMvQyxPQUFPLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ3JDOzs7Ozs7O0FBRUQsTUFBTSxtQkFBc0IsS0FBc0IsRUFBRSxRQUFXO0lBQzdELE9BQU8sb0JBQW9CLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0NBQzlDOzs7OztBQUVELE1BQU0scUJBQXFCLEtBQXNCO0lBQy9DLE9BQU8sbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDbkM7Ozs7Ozs7QUFHRCxNQUFNLDRCQUErQixJQUFxQjtJQUFFLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQsNkJBQWM7OztJQUN4RSxPQUFPLE9BQU8sSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxnQ0FBSSxJQUFJLEdBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztDQUMxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JELE1BQU07O0lBQ0osT0FBTyxtQ0FBb0MsTUFBYyxFQUFFLElBQVk7O1FBRXJFLElBQU0sZUFBZSxHQUFHLFNBQU8sSUFBTSxDQUFDO1FBRXRDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsRUFBRTtZQUNqRSxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFhLGVBQWUseUVBQXFFLENBQUMsQ0FBQztTQUNqSDtRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRTtZQUM3QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNsQyxHQUFHOzs7WUFBSDtnQkFDRSxPQUFPLElBQUksQ0FBRSxlQUFlLENBQUUsQ0FBQzthQUNoQztZQUNELEdBQUc7Ozs7WUFBSCxVQUFJLEtBQXVCO2dCQUN6QixJQUFJLENBQUUsZUFBZSxDQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVDO1NBQ0YsQ0FBQyxDQUFDOzs7O0tBS0osQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5LCBjb2VyY2VDc3NQaXhlbFZhbHVlLCBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi90eXBlcy9jb21tb24td3JhcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcjxEPih2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBmYWxsYmFjazogRCk6IG51bWJlciB8IEQge1xuICByZXR1cm4gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUsIGZhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQ3NzUGl4ZWwodmFsdWU6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBjb2VyY2VDc3NQaXhlbFZhbHVlKHZhbHVlKTtcbn1cblxuLy8gR2V0IHRoZSBmdW5jaXRvbi1wcm9wZXJ0eSB0eXBlJ3MgdmFsdWVcbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZ1bmN0aW9uUHJvcDxUPihwcm9wOiBGdW5jdGlvblByb3A8VD4sIC4uLmFyZ3M6IGFueVtdKTogVCB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6IG5vLWFueVxuICByZXR1cm4gdHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicgPyBwcm9wKC4uLmFyZ3MpIDogcHJvcDtcbn1cblxuLyoqXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvQm9vbGVhblxuICpcbiAqIFdoeSBub3QgdXNpbmcgQElucHV0Qm9vbGVhbiBhbG9uZSB3aXRob3V0IEBJbnB1dD8gQU9UIG5lZWRzIEBJbnB1dCB0byBiZSB2aXNpYmxlXG4gKlxuICogQGhvd1RvVXNlXG4gKiBgYGBcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gKlxuICogLy8gQWN0IGFzIGJlbG93OlxuICogLy8gQElucHV0KClcbiAqIC8vIGdldCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5fX3Zpc2liaWxlOyB9XG4gKiAvLyBzZXQgdmlzaWJsZSh2YWx1ZSkgeyB0aGlzLl9fdmlzaWJsZSA9IHZhbHVlOyB9XG4gKiAvLyBfX3Zpc2libGUgPSBmYWxzZTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRCb29sZWFuKCk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIHJldHVybiBmdW5jdGlvbiBJbnB1dEJvb2xlYW5Qcm9wRGVjb3JhdG9yICh0YXJnZXQ6IG9iamVjdCwgbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gQWRkIG91ciBvd24gcHJpdmF0ZSBwcm9wXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke25hbWV9YDtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgSW5wdXRCb29sZWFuIGRlY29yYXRvci5gKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICBnZXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF0gPSB0b0Jvb2xlYW4odmFsdWUpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gLy8gRG8gcmVzdCB0aGluZ3MgZm9yIGlucHV0IGRlY29yYXRvclxuICAgIC8vIGNvbnN0IGlucHV0RGVjb3JhdG9yID0gSW5wdXQoKTtcbiAgICAvLyBpbnB1dERlY29yYXRvcih0YXJnZXQsIG5hbWUpO1xuICB9O1xufVxuIl19