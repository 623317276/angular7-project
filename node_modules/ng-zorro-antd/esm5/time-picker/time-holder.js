/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Subject } from 'rxjs';
import { isNotNil } from '../core/util/check';
var TimeHolder = /** @class */ (function () {
    function TimeHolder() {
        this._seconds = undefined;
        this._hours = undefined;
        this._minutes = undefined;
        this._defaultOpenValue = new Date();
        this._changes = new Subject();
    }
    /**
     * @return {?}
     */
    TimeHolder.prototype.setDefaultValueIfNil = /**
     * @return {?}
     */
    function () {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    };
    /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    TimeHolder.prototype.setMinutes = /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    function (value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.minutes = value;
        return this;
    };
    /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    TimeHolder.prototype.setHours = /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    function (value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.hours = value;
        return this;
    };
    /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    TimeHolder.prototype.setSeconds = /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    function (value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.seconds = value;
        return this;
    };
    Object.defineProperty(TimeHolder.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._value) {
                this._value = value;
                if (isNotNil(this._value)) {
                    this._hours = this._value.getHours();
                    this._minutes = this._value.getMinutes();
                    this._seconds = this._value.getSeconds();
                }
                else {
                    this._clear();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    TimeHolder.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        return this;
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._clear();
        this.update();
    };
    Object.defineProperty(TimeHolder.prototype, "isEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimeHolder.prototype._clear = /**
     * @return {?}
     */
    function () {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.update = /**
     * @return {?}
     */
    function () {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (!isNotNil(this._hours)) {
                this._hours = this.defaultHours;
            }
            else {
                this._value.setHours(this.hours);
            }
            if (!isNotNil(this._minutes)) {
                this._minutes = this.defaultMinutes;
            }
            else {
                this._value.setMinutes(this.minutes);
            }
            if (!isNotNil(this._seconds)) {
                this._seconds = this.defaultSeconds;
            }
            else {
                this._value.setSeconds(this.seconds);
            }
            this._value = new Date(this._value);
        }
        this.changed();
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.changed = /**
     * @return {?}
     */
    function () {
        this._changes.next(this._value);
    };
    Object.defineProperty(TimeHolder.prototype, "hours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._hours) {
                this._hours = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "minutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._minutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._minutes) {
                this._minutes = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "seconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._seconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._seconds) {
                this._seconds = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultOpenValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._defaultOpenValue !== value) {
                this._defaultOpenValue = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    TimeHolder.prototype.setDefaultOpenValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.defaultOpenValue = value;
        return this;
    };
    Object.defineProperty(TimeHolder.prototype, "defaultHours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getSeconds();
        },
        enumerable: true,
        configurable: true
    });
    return TimeHolder;
}());
export { TimeHolder };
function TimeHolder_tsickle_Closure_declarations() {
    /** @type {?} */
    TimeHolder.prototype._seconds;
    /** @type {?} */
    TimeHolder.prototype._hours;
    /** @type {?} */
    TimeHolder.prototype._minutes;
    /** @type {?} */
    TimeHolder.prototype._defaultOpenValue;
    /** @type {?} */
    TimeHolder.prototype._value;
    /** @type {?} */
    TimeHolder.prototype._changes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGltZS1waWNrZXIvdGltZS1ob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLElBQUE7SUE4S0U7d0JBN0ttQixTQUFTO3NCQUNYLFNBQVM7d0JBQ1AsU0FBUztpQ0FDTSxJQUFJLElBQUksRUFBRTt3QkFFekIsSUFBSSxPQUFPLEVBQVE7S0F5S3JDOzs7O0lBdktELHlDQUFvQjs7O0lBQXBCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvQztLQUNGOzs7Ozs7SUFFRCwrQkFBVTs7Ozs7SUFBVixVQUFXLEtBQWEsRUFBRSxRQUFpQjtRQUN6QyxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7SUFFRCw2QkFBUTs7Ozs7SUFBUixVQUFTLEtBQWEsRUFBRSxRQUFpQjtRQUN2QyxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7SUFFRCwrQkFBVTs7Ozs7SUFBVixVQUFXLEtBQWEsRUFBRSxRQUFpQjtRQUN6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QUssS0FBSyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtTQUNGOzs7T0FQQTs7Ozs7SUFTRCx3Q0FBbUI7Ozs7SUFBbkIsVUFBb0IsS0FBVztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxzQkFBSSxvQ0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDNUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQWM7Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM1Qzs7O09BQUE7cUJBL0tIO0lBb0xDLENBQUE7QUFqTEQsc0JBaUxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5leHBvcnQgY2xhc3MgVGltZUhvbGRlciB7XG4gIHByaXZhdGUgX3NlY29uZHMgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2hvdXJzID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9taW51dGVzID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9kZWZhdWx0T3BlblZhbHVlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGU7XG4gIHByaXZhdGUgX2NoYW5nZXMgPSBuZXcgU3ViamVjdDxEYXRlPigpO1xuXG4gIHNldERlZmF1bHRWYWx1ZUlmTmlsKCk6IHZvaWQge1xuICAgIGlmICghaXNOb3ROaWwodGhpcy5fdmFsdWUpKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IG5ldyBEYXRlKHRoaXMuZGVmYXVsdE9wZW5WYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0TWludXRlcyh2YWx1ZTogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHRoaXMge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTtcbiAgICB0aGlzLm1pbnV0ZXMgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEhvdXJzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVJZk5pbCgpO1xuICAgIHRoaXMuaG91cnMgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFNlY29uZHModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZUlmTmlsKCk7XG4gICAgdGhpcy5zZWNvbmRzID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgY2hhbmdlcygpOiBPYnNlcnZhYmxlPERhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKGlzTm90TmlsKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgICB0aGlzLl9ob3VycyA9IHRoaXMuX3ZhbHVlLmdldEhvdXJzKCk7XG4gICAgICAgIHRoaXMuX21pbnV0ZXMgPSB0aGlzLl92YWx1ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHRoaXMuX3NlY29uZHMgPSB0aGlzLl92YWx1ZS5nZXRTZWNvbmRzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBEYXRlKTogdGhpcyB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEoaXNOb3ROaWwodGhpcy5faG91cnMpIHx8IGlzTm90TmlsKHRoaXMuX21pbnV0ZXMpIHx8IGlzTm90TmlsKHRoaXMuX3NlY29uZHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuX2hvdXJzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX21pbnV0ZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWlzTm90TmlsKHRoaXMuX2hvdXJzKSkge1xuICAgICAgICB0aGlzLl9ob3VycyA9IHRoaXMuZGVmYXVsdEhvdXJzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdmFsdWUuc2V0SG91cnModGhpcy5ob3Vycyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fbWludXRlcykpIHtcbiAgICAgICAgdGhpcy5fbWludXRlcyA9IHRoaXMuZGVmYXVsdE1pbnV0ZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl92YWx1ZS5zZXRNaW51dGVzKHRoaXMubWludXRlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fc2Vjb25kcykpIHtcbiAgICAgICAgdGhpcy5fc2Vjb25kcyA9IHRoaXMuZGVmYXVsdFNlY29uZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl92YWx1ZS5zZXRTZWNvbmRzKHRoaXMuc2Vjb25kcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gbmV3IERhdGUodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgfVxuXG4gIGNoYW5nZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KHRoaXMuX3ZhbHVlKTtcbiAgfVxuXG4gIGdldCBob3VycygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9ob3VycztcbiAgfVxuXG4gIHNldCBob3Vycyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9ob3Vycykge1xuICAgICAgdGhpcy5faG91cnMgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1pbnV0ZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWludXRlcztcbiAgfVxuXG4gIHNldCBtaW51dGVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX21pbnV0ZXMpIHtcbiAgICAgIHRoaXMuX21pbnV0ZXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlY29uZHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kcztcbiAgfVxuXG4gIHNldCBzZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3NlY29uZHMpIHtcbiAgICAgIHRoaXMuX3NlY29uZHMgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRPcGVuVmFsdWUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWU7XG4gIH1cblxuICBzZXQgZGVmYXVsdE9wZW5WYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLl9kZWZhdWx0T3BlblZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBzZXREZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKTogdGhpcyB7XG4gICAgdGhpcy5kZWZhdWx0T3BlblZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgZGVmYXVsdEhvdXJzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0SG91cnMoKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0TWludXRlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldFNlY29uZHMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbn1cbiJdfQ==