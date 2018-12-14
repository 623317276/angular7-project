/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
export function valueFunctionProp(prop, ...args) {
    // tslint:disable-line: no-any
    return typeof prop === 'function' ? prop(...args) : prop;
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
        const privatePropName = `$$__${name}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputBoolean decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, name, {
            /**
             * @return {?}
             */
            get() {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                this[privatePropName] = toBoolean(value); // tslint:disable-line:no-invalid-this
            }
        });
        // // Do rest things for input decorator
        // const inputDecorator = Input();
        // inputDecorator(target, name);
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3V0aWwvY29udmVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBR3pHLE1BQU0sb0JBQW9CLEtBQXVCO0lBQy9DLE9BQU8scUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDckM7Ozs7Ozs7QUFFRCxNQUFNLG1CQUFzQixLQUFzQixFQUFFLFFBQVc7SUFDN0QsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDOUM7Ozs7O0FBRUQsTUFBTSxxQkFBcUIsS0FBc0I7SUFDL0MsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNuQzs7Ozs7OztBQUdELE1BQU0sNEJBQStCLElBQXFCLEVBQUUsR0FBRyxJQUFXOztJQUN4RSxPQUFPLE9BQU8sSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztDQUMxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JELE1BQU07O0lBQ0osT0FBTyxtQ0FBb0MsTUFBYyxFQUFFLElBQVk7O1FBRXJFLE1BQU0sZUFBZSxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFFdEMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxlQUFlLHFFQUFxRSxDQUFDLENBQUM7U0FDakg7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7WUFDbEMsR0FBRztnQkFDRCxPQUFPLElBQUksQ0FBRSxlQUFlLENBQUUsQ0FBQzthQUNoQzs7Ozs7WUFDRCxHQUFHLENBQUMsS0FBdUI7Z0JBQ3pCLElBQUksQ0FBRSxlQUFlLENBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUM7U0FDRixDQUFDLENBQUM7Ozs7S0FLSixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZUNzc1BpeGVsVmFsdWUsIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJy4uL3R5cGVzL2NvbW1vbi13cmFwJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyPEQ+KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGZhbGxiYWNrOiBEKTogbnVtYmVyIHwgRCB7XG4gIHJldHVybiBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSwgZmFsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3NQaXhlbCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNvZXJjZUNzc1BpeGVsVmFsdWUodmFsdWUpO1xufVxuXG4vLyBHZXQgdGhlIGZ1bmNpdG9uLXByb3BlcnR5IHR5cGUncyB2YWx1ZVxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnVuY3Rpb25Qcm9wPFQ+KHByb3A6IEZ1bmN0aW9uUHJvcDxUPiwgLi4uYXJnczogYW55W10pOiBUIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTogbm8tYW55XG4gIHJldHVybiB0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJyA/IHByb3AoLi4uYXJncykgOiBwcm9wO1xufVxuXG4vKipcbiAqIElucHV0IGRlY29yYXRvciB0aGF0IGhhbmRsZSBhIHByb3AgdG8gZG8gZ2V0L3NldCBhdXRvbWF0aWNhbGx5IHdpdGggdG9Cb29sZWFuXG4gKlxuICogV2h5IG5vdCB1c2luZyBASW5wdXRCb29sZWFuIGFsb25lIHdpdGhvdXQgQElucHV0PyBBT1QgbmVlZHMgQElucHV0IHRvIGJlIHZpc2libGVcbiAqXG4gKiBAaG93VG9Vc2VcbiAqIGBgYFxuICogQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAqXG4gKiAvLyBBY3QgYXMgYmVsb3c6XG4gKiAvLyBASW5wdXQoKVxuICogLy8gZ2V0IHZpc2libGUoKSB7IHJldHVybiB0aGlzLl9fdmlzaWJpbGU7IH1cbiAqIC8vIHNldCB2aXNpYmxlKHZhbHVlKSB7IHRoaXMuX192aXNpYmxlID0gdmFsdWU7IH1cbiAqIC8vIF9fdmlzaWJsZSA9IGZhbHNlO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dEJvb2xlYW4oKTogYW55IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgcmV0dXJuIGZ1bmN0aW9uIElucHV0Qm9vbGVhblByb3BEZWNvcmF0b3IgKHRhcmdldDogb2JqZWN0LCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBBZGQgb3VyIG93biBwcml2YXRlIHByb3BcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfXyR7bmFtZX1gO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVGhlIHByb3AgXCIke3ByaXZhdGVQcm9wTmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0LCBpdCB3aWxsIGJlIG92ZXJyaWRlZCBieSBJbnB1dEJvb2xlYW4gZGVjb3JhdG9yLmApO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgIGdldCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXSA9IHRvQm9vbGVhbih2YWx1ZSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAvLyBEbyByZXN0IHRoaW5ncyBmb3IgaW5wdXQgZGVjb3JhdG9yXG4gICAgLy8gY29uc3QgaW5wdXREZWNvcmF0b3IgPSBJbnB1dCgpO1xuICAgIC8vIGlucHV0RGVjb3JhdG9yKHRhcmdldCwgbmFtZSk7XG4gIH07XG59XG4iXX0=