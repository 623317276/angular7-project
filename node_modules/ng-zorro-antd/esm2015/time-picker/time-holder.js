/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Subject } from 'rxjs';
import { isNotNil } from '../core/util/check';
export class TimeHolder {
    constructor() {
        this._seconds = undefined;
        this._hours = undefined;
        this._minutes = undefined;
        this._defaultOpenValue = new Date();
        this._changes = new Subject();
    }
    /**
     * @return {?}
     */
    setDefaultValueIfNil() {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    }
    /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    setMinutes(value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.minutes = value;
        return this;
    }
    /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    setHours(value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.hours = value;
        return this;
    }
    /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    setSeconds(value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.seconds = value;
        return this;
    }
    /**
     * @return {?}
     */
    get changes() {
        return this._changes.asObservable();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.value = value;
        return this;
    }
    /**
     * @return {?}
     */
    clear() {
        this._clear();
        this.update();
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
    }
    /**
     * @return {?}
     */
    _clear() {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
    }
    /**
     * @return {?}
     */
    update() {
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
    }
    /**
     * @return {?}
     */
    changed() {
        this._changes.next(this._value);
    }
    /**
     * @return {?}
     */
    get hours() {
        return this._hours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hours(value) {
        if (value !== this._hours) {
            this._hours = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get minutes() {
        return this._minutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minutes(value) {
        if (value !== this._minutes) {
            this._minutes = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get seconds() {
        return this._seconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set seconds(value) {
        if (value !== this._seconds) {
            this._seconds = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get defaultOpenValue() {
        return this._defaultOpenValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultOpenValue(value) {
        if (this._defaultOpenValue !== value) {
            this._defaultOpenValue = value;
            this.update();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDefaultOpenValue(value) {
        this.defaultOpenValue = value;
        return this;
    }
    /**
     * @return {?}
     */
    get defaultHours() {
        return this._defaultOpenValue.getHours();
    }
    /**
     * @return {?}
     */
    get defaultMinutes() {
        return this._defaultOpenValue.getMinutes();
    }
    /**
     * @return {?}
     */
    get defaultSeconds() {
        return this._defaultOpenValue.getSeconds();
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGltZS1waWNrZXIvdGltZS1ob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE1BQU07SUE4S0o7d0JBN0ttQixTQUFTO3NCQUNYLFNBQVM7d0JBQ1AsU0FBUztpQ0FDTSxJQUFJLElBQUksRUFBRTt3QkFFekIsSUFBSSxPQUFPLEVBQVE7S0F5S3JDOzs7O0lBdktELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9DO0tBQ0Y7Ozs7OztJQUVELFVBQVUsQ0FBQyxLQUFhLEVBQUUsUUFBaUI7UUFDekMsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWEsRUFBRSxRQUFpQjtRQUN2QyxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYSxFQUFFLFFBQWlCO1FBQ3pDLElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7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QUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxQzs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUM1Qzs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUM1QztDQUtGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5leHBvcnQgY2xhc3MgVGltZUhvbGRlciB7XG4gIHByaXZhdGUgX3NlY29uZHMgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2hvdXJzID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9taW51dGVzID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9kZWZhdWx0T3BlblZhbHVlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGU7XG4gIHByaXZhdGUgX2NoYW5nZXMgPSBuZXcgU3ViamVjdDxEYXRlPigpO1xuXG4gIHNldERlZmF1bHRWYWx1ZUlmTmlsKCk6IHZvaWQge1xuICAgIGlmICghaXNOb3ROaWwodGhpcy5fdmFsdWUpKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IG5ldyBEYXRlKHRoaXMuZGVmYXVsdE9wZW5WYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0TWludXRlcyh2YWx1ZTogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHRoaXMge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTtcbiAgICB0aGlzLm1pbnV0ZXMgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEhvdXJzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVJZk5pbCgpO1xuICAgIHRoaXMuaG91cnMgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFNlY29uZHModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZUlmTmlsKCk7XG4gICAgdGhpcy5zZWNvbmRzID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgY2hhbmdlcygpOiBPYnNlcnZhYmxlPERhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKGlzTm90TmlsKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgICB0aGlzLl9ob3VycyA9IHRoaXMuX3ZhbHVlLmdldEhvdXJzKCk7XG4gICAgICAgIHRoaXMuX21pbnV0ZXMgPSB0aGlzLl92YWx1ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHRoaXMuX3NlY29uZHMgPSB0aGlzLl92YWx1ZS5nZXRTZWNvbmRzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBEYXRlKTogdGhpcyB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xlYXIoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEoaXNOb3ROaWwodGhpcy5faG91cnMpIHx8IGlzTm90TmlsKHRoaXMuX21pbnV0ZXMpIHx8IGlzTm90TmlsKHRoaXMuX3NlY29uZHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuX2hvdXJzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX21pbnV0ZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWlzTm90TmlsKHRoaXMuX2hvdXJzKSkge1xuICAgICAgICB0aGlzLl9ob3VycyA9IHRoaXMuZGVmYXVsdEhvdXJzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdmFsdWUuc2V0SG91cnModGhpcy5ob3Vycyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fbWludXRlcykpIHtcbiAgICAgICAgdGhpcy5fbWludXRlcyA9IHRoaXMuZGVmYXVsdE1pbnV0ZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl92YWx1ZS5zZXRNaW51dGVzKHRoaXMubWludXRlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fc2Vjb25kcykpIHtcbiAgICAgICAgdGhpcy5fc2Vjb25kcyA9IHRoaXMuZGVmYXVsdFNlY29uZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl92YWx1ZS5zZXRTZWNvbmRzKHRoaXMuc2Vjb25kcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gbmV3IERhdGUodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgfVxuXG4gIGNoYW5nZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KHRoaXMuX3ZhbHVlKTtcbiAgfVxuXG4gIGdldCBob3VycygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9ob3VycztcbiAgfVxuXG4gIHNldCBob3Vycyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9ob3Vycykge1xuICAgICAgdGhpcy5faG91cnMgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1pbnV0ZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWludXRlcztcbiAgfVxuXG4gIHNldCBtaW51dGVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX21pbnV0ZXMpIHtcbiAgICAgIHRoaXMuX21pbnV0ZXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNlY29uZHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kcztcbiAgfVxuXG4gIHNldCBzZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3NlY29uZHMpIHtcbiAgICAgIHRoaXMuX3NlY29uZHMgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRPcGVuVmFsdWUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWU7XG4gIH1cblxuICBzZXQgZGVmYXVsdE9wZW5WYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLl9kZWZhdWx0T3BlblZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBzZXREZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKTogdGhpcyB7XG4gICAgdGhpcy5kZWZhdWx0T3BlblZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgZGVmYXVsdEhvdXJzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0SG91cnMoKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0TWludXRlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0U2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldFNlY29uZHMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbn1cbiJdfQ==