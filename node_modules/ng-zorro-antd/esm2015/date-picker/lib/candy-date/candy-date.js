/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import endOfMonth from 'date-fns/end_of_month';
import setDay from 'date-fns/set_day';
import setMonth from 'date-fns/set_month';
import { firstDayOfWeek } from './util';
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export class CandyDate {
    /**
     * @param {?=} date
     */
    constructor(date) {
        // if (!(this instanceof CandyDate)) {
        //   return new CandyDate(date);
        // }
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string') {
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" and "string" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    /**
     * @return {?}
     */
    getYear() {
        return this.nativeDate.getFullYear();
    }
    /**
     * @return {?}
     */
    getMonth() {
        return this.nativeDate.getMonth();
    }
    /**
     * @return {?}
     */
    getDay() {
        return this.nativeDate.getDay();
    }
    /**
     * @return {?}
     */
    getTime() {
        return this.nativeDate.getTime();
    }
    /**
     * @return {?}
     */
    getDate() {
        return this.nativeDate.getDate();
    }
    /**
     * @return {?}
     */
    getHours() {
        return this.nativeDate.getHours();
    }
    /**
     * @return {?}
     */
    getMinutes() {
        return this.nativeDate.getMinutes();
    }
    /**
     * @return {?}
     */
    getSeconds() {
        return this.nativeDate.getSeconds();
    }
    /**
     * @return {?}
     */
    getMilliseconds() {
        return this.nativeDate.getMilliseconds();
    }
    /**
     * @return {?}
     */
    clone() {
        return new CandyDate(new Date(this.nativeDate));
    }
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    setHms(hour, minute, second) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setYear(year) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setFullYear(year);
        return new CandyDate(date);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addYears(amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    }
    /**
     * @param {?} month
     * @return {?}
     */
    setMonth(month) {
        // const date = new Date(this.nativeDate);
        // date.setMonth(month);
        // return new CandyDate(date);
        return new CandyDate(setMonth(this.nativeDate, month));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addMonths(amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    }
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    setDay(day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    setDate(amount) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addDays(amount) {
        return this.setDate(this.getDate() + amount);
    }
    /**
     * @param {?} grain
     * @return {?}
     */
    endOf(grain) {
        switch (grain) {
            case 'month': return new CandyDate(endOfMonth(this.nativeDate));
        }
        return null;
    }
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    isSame(date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            const left = this.toNativeDate();
            /** @type {?} */
            const right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() === right.getFullYear();
                case 'month':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth();
                case 'day':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate();
                case 'hour':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate()
                        && left.getHours() === right.getHours();
                case 'minute':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate()
                        && left.getHours() === right.getHours()
                        && left.getMinutes() === right.getMinutes();
                case 'second':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate()
                        && left.getHours() === right.getHours()
                        && left.getMinutes() === right.getMinutes()
                        && left.getSeconds() === right.getSeconds();
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    isAfter(date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            const left = this.toNativeDate();
            /** @type {?} */
            const right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() > right.getFullYear();
                case 'month':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth());
                case 'day':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate());
                case 'hour':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() > right.getHours());
                case 'minute':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() > right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() > right.getMinutes());
                case 'second':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() > right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() > right.getMinutes())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() === right.getMinutes() && left.getSeconds() > right.getSeconds());
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    isBefore(date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            const left = this.toNativeDate();
            /** @type {?} */
            const right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() < right.getFullYear();
                case 'month':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth());
                case 'day':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate());
                case 'hour':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() < right.getHours());
                case 'minute':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() < right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() < right.getMinutes());
                case 'second':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() < right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() < right.getMinutes())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() === right.getMinutes() && left.getSeconds() < right.getSeconds());
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    isToday() {
        return this.isSame(new Date(), 'day');
    }
    /**
     * @return {?}
     */
    isInvalid() {
        return isNaN(this.nativeDate.valueOf());
    }
    /**
     * 0-6 (Sunday to Saturday)
     * @param {?=} locale
     * @return {?}
     */
    firstDayOfWeek(locale) {
        return firstDayOfWeek(locale);
    }
    /**
     * @param {?=} date
     * @return {?}
     */
    toNativeDate(date = this) {
        return date instanceof CandyDate ? date.nativeDate : date;
    }
}
function CandyDate_tsickle_Closure_declarations() {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUN0QyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUUxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0FBUXhDLE1BQU07Ozs7SUFJSixZQUFZLElBQW9COzs7O1FBSzlCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxJQUFJLFlBQVksSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtpQkFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLCtFQUErRSxDQUFDLENBQUM7YUFDbEc7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7Ozs7SUFlRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3RDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNuQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7S0FD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QUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDeEssS0FBSyxRQUFRO29CQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDOzJCQUM1QyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzsyQkFDbEYsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzsyQkFDeEgsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOzJCQUNoSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxD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RUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7MkJBQ2xGLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7MkJBQ3hILENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzsyQkFDaEssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7MkJBQzVNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUNqUTtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDs7OztJQUdELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN2Qzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDekM7Ozs7OztJQUtELGNBQWMsQ0FBQyxNQUFlO1FBQzVCLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9COzs7OztJQUVPLFlBQVksQ0FBQyxPQUF5QixJQUFJO1FBQ2hELE9BQU8sSUFBSSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztDQVM3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkX21vbnRocyc7XG5pbXBvcnQgYWRkWWVhcnMgZnJvbSAnZGF0ZS1mbnMvYWRkX3llYXJzJztcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl9tb250aCc7XG5pbXBvcnQgc2V0RGF5IGZyb20gJ2RhdGUtZm5zL3NldF9kYXknO1xuaW1wb3J0IHNldE1vbnRoIGZyb20gJ2RhdGUtZm5zL3NldF9tb250aCc7XG4vLyBpbXBvcnQgc2V0WWVhciBmcm9tICdkYXRlLWZucy9zZXRfeWVhcic7XG5pbXBvcnQgeyBmaXJzdERheU9mV2VlayB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogV3JhcHBpbmcga2luZCBBUElzIGZvciBkYXRlIG9wZXJhdGluZyBhbmQgdW5pZnlcbiAqIE5PVEU6IGV2ZXJ5IG5ldyBBUEkgcmV0dXJuIG5ldyBDYW5keURhdGUgb2JqZWN0IHdpdGhvdXQgc2lkZSBlZmZlY3RzIHRvIHRoZSBmb3JtZXIgRGF0ZSBvYmplY3RcbiAqIE5PVEU6IG1vc3QgQVBJcyBhcmUgYmFzZWQgb24gbG9jYWwgdGltZSBvdGhlciB0aGFuIGN1c3RvbWl6ZWQgbG9jYWxlIGlkICh0aGlzIG5lZWRzIHRvYmUgc3VwcG9ydCBpbiBmdXR1cmUpXG4gKiBUT0RPOiBzdXBwb3J0IGZvcm1hdCgpIGFnYWluc3QgdG8gYW5ndWxhcidzIGNvcmUgQVBJXG4gKi9cbmV4cG9ydCBjbGFzcyBDYW5keURhdGUge1xuICBuYXRpdmVEYXRlOiBEYXRlO1xuICAvLyBsb2NhbGU6IHN0cmluZzsgLy8gQ3VzdG9tIHNwZWNpZmllZCBsb2NhbGUgSURcblxuICBjb25zdHJ1Y3RvcihkYXRlPzogRGF0ZSB8IHN0cmluZykge1xuICAgIC8vIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDYW5keURhdGUpKSB7XG4gICAgLy8gICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgICAvLyB9XG5cbiAgICBpZiAoZGF0ZSkge1xuICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IGRhdGU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGlucHV0IGRhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIChcIkRhdGVcIiBhbmQgXCJzdHJpbmdcIiBpcyBub3cgcmVjb21tZW5kZWQpJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gIC8vICAgcmV0dXJuIHRoaXMubG9jYWxlO1xuICAvLyB9XG5cbiAgLy8gc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogQ2FuZHlEYXRlIHtcbiAgLy8gICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgLy8gICByZXR1cm4gdGhpcztcbiAgLy8gfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IE5hdGl2ZSBzaG9ydGN1dHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0WWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIGdldE1vbnRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNb250aCgpO1xuICB9XG5cbiAgZ2V0RGF5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXREYXkoKTtcbiAgfVxuXG4gIGdldFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFRpbWUoKTtcbiAgfVxuXG4gIGdldERhdGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldERhdGUoKTtcbiAgfVxuXG4gIGdldEhvdXJzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRIb3VycygpO1xuICB9XG5cbiAgZ2V0TWludXRlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWludXRlcygpO1xuICB9XG5cbiAgZ2V0U2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0U2Vjb25kcygpO1xuICB9XG5cbiAgZ2V0TWlsbGlzZWNvbmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IE5ldyBpbXBsZW1lbnRpbmcgQVBJc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjbG9uZSgpOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSkpO1xuICB9XG5cbiAgc2V0SG1zKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIsIHNlY29uZDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcbiAgICBkYXRlLnNldEhvdXJzKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgfVxuXG4gIHNldFllYXIoeWVhcjogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICAvLyByZXR1cm4gbmV3IENhbmR5RGF0ZShzZXRZZWFyKHRoaXMuZGF0ZSwgeWVhcikpO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpO1xuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XG4gIH1cblxuICBhZGRZZWFycyhhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoYWRkWWVhcnModGhpcy5uYXRpdmVEYXRlLCBhbW91bnQpKTtcbiAgfVxuXG4gIC8vIE5PVEU6IG1vbnRoIHN0YXJ0cyBmcm9tIDBcbiAgLy8gTk9URTogRG9uJ3QgdXNlIHRoZSBuYXRpdmUgQVBJIGZvciBtb250aCBtYW5pcHVsYXRpb24gYXMgaXQgbm90IHJlc3RyaWN0IHRoZSBkYXRlIHdoZW4gaXQgb3ZlcmZsb3dzLCBlZy4gKG5ldyBEYXRlKCcyMDE4LTctMzEnKSkuc2V0TW9udGgoMSkgd2lsbCBiZSBkYXRlIG9mIDIwMTgtMy0wMyBpbnN0ZWFkIG9mIDIwMTgtMi0yOFxuICBzZXRNb250aChtb250aDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICAvLyBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcbiAgICAvLyBkYXRlLnNldE1vbnRoKG1vbnRoKTtcbiAgICAvLyByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzZXRNb250aCh0aGlzLm5hdGl2ZURhdGUsIG1vbnRoKSk7XG4gIH1cblxuICBhZGRNb250aHMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZE1vbnRocyh0aGlzLm5hdGl2ZURhdGUsIGFtb3VudCkpO1xuICB9XG5cbiAgc2V0RGF5KGRheTogbnVtYmVyLCBvcHRpb25zPzogeyB3ZWVrU3RhcnRzT246IG51bWJlciB9KTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzZXREYXkodGhpcy5uYXRpdmVEYXRlLCBkYXksIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHNldERhdGUoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpO1xuICAgIGRhdGUuc2V0RGF0ZShhbW91bnQpO1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xuICB9XG5cbiAgYWRkRGF5cyhhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSArIGFtb3VudCk7XG4gIH1cblxuICBlbmRPZihncmFpbjogJ21vbnRoJyk6IENhbmR5RGF0ZSB7XG4gICAgc3dpdGNoIChncmFpbikge1xuICAgICAgY2FzZSAnbW9udGgnOiByZXR1cm4gbmV3IENhbmR5RGF0ZShlbmRPZk1vbnRoKHRoaXMubmF0aXZlRGF0ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlzU2FtZShkYXRlOiBDYW5keURhdGUgfCBEYXRlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluKTogYm9vbGVhbiB7IC8vIFRPRE86IFByZWNpcGl0YXRlIGludG8gYSBmdW5jdGlvbiBcImNvbXBhcmUoKVwiXG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnRvTmF0aXZlRGF0ZSgpO1xuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKTtcbiAgICAgIHN3aXRjaCAoZ3JhaW4pIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHJldHVybiBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKTtcbiAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICByZXR1cm4gbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKClcbiAgICAgICAgICAgICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCk7XG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgIHJldHVybiBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKVxuICAgICAgICAgICAgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKVxuICAgICAgICAgICAgJiYgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpO1xuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgIHJldHVybiBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKVxuICAgICAgICAgICAgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKVxuICAgICAgICAgICAgJiYgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpXG4gICAgICAgICAgICAmJiBsZWZ0LmdldE1pbnV0ZXMoKSA9PT0gcmlnaHQuZ2V0TWludXRlcygpO1xuICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgIHJldHVybiBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKVxuICAgICAgICAgICAgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKVxuICAgICAgICAgICAgJiYgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpXG4gICAgICAgICAgICAmJiBsZWZ0LmdldE1pbnV0ZXMoKSA9PT0gcmlnaHQuZ2V0TWludXRlcygpXG4gICAgICAgICAgICAmJiBsZWZ0LmdldFNlY29uZHMoKSA9PT0gcmlnaHQuZ2V0U2Vjb25kcygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0FmdGVyKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4pOiBib29sZWFuIHsgLy8gVE9ETzogUHJlY2lwaXRhdGUgaW50byBhIGZ1bmN0aW9uIFwiY29tcGFyZSgpXCJcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgY29uc3QgbGVmdCA9IHRoaXMudG9OYXRpdmVEYXRlKCk7XG4gICAgICBjb25zdCByaWdodCA9IHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpO1xuICAgICAgc3dpdGNoIChncmFpbikge1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICByZXR1cm4gbGVmdC5nZXRGdWxsWWVhcigpID4gcmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHJldHVybiAobGVmdC5nZXRGdWxsWWVhcigpID4gcmlnaHQuZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID4gcmlnaHQuZ2V0TW9udGgoKSk7XG4gICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgcmV0dXJuIChsZWZ0LmdldEZ1bGxZZWFyKCkgPiByaWdodC5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPiByaWdodC5nZXRNb250aCgpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPiByaWdodC5nZXREYXRlKCkpO1xuICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICByZXR1cm4gKGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA+IHJpZ2h0LmdldE1vbnRoKCkpXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJiBsZWZ0LmdldERhdGUoKSA+IHJpZ2h0LmdldERhdGUoKSlcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiYgbGVmdC5nZXRIb3VycygpID4gcmlnaHQuZ2V0SG91cnMoKSk7XG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgcmV0dXJuIChsZWZ0LmdldEZ1bGxZZWFyKCkgPiByaWdodC5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPiByaWdodC5nZXRNb250aCgpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPiByaWdodC5nZXREYXRlKCkpXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJiBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmIGxlZnQuZ2V0SG91cnMoKSA+IHJpZ2h0LmdldEhvdXJzKCkpXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJiBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJiBsZWZ0LmdldE1pbnV0ZXMoKSA+IHJpZ2h0LmdldE1pbnV0ZXMoKSk7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgcmV0dXJuIChsZWZ0LmdldEZ1bGxZZWFyKCkgPiByaWdodC5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPiByaWdodC5nZXRNb250aCgpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPiByaWdodC5nZXREYXRlKCkpXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJiBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmIGxlZnQuZ2V0SG91cnMoKSA+IHJpZ2h0LmdldEhvdXJzKCkpXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJiBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJiBsZWZ0LmdldE1pbnV0ZXMoKSA+IHJpZ2h0LmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiYgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpICYmIGxlZnQuZ2V0TWludXRlcygpID09PSByaWdodC5nZXRNaW51dGVzKCkgJiYgbGVmdC5nZXRTZWNvbmRzKCkgPiByaWdodC5nZXRTZWNvbmRzKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0JlZm9yZShkYXRlOiBDYW5keURhdGUgfCBEYXRlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluKTogYm9vbGVhbiB7IC8vIFRPRE86IFByZWNpcGl0YXRlIGludG8gYSBmdW5jdGlvbiBcImNvbXBhcmUoKVwiXG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnRvTmF0aXZlRGF0ZSgpO1xuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKTtcbiAgICAgIHN3aXRjaCAoZ3JhaW4pIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICByZXR1cm4gKGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA8IHJpZ2h0LmdldE1vbnRoKCkpO1xuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgIHJldHVybiAobGVmdC5nZXRGdWxsWWVhcigpIDwgcmlnaHQuZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpIDwgcmlnaHQuZ2V0TW9udGgoKSlcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpIDwgcmlnaHQuZ2V0RGF0ZSgpKTtcbiAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgcmV0dXJuIChsZWZ0LmdldEZ1bGxZZWFyKCkgPCByaWdodC5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPCByaWdodC5nZXRNb250aCgpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPCByaWdodC5nZXREYXRlKCkpXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJiBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmIGxlZnQuZ2V0SG91cnMoKSA8IHJpZ2h0LmdldEhvdXJzKCkpO1xuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgIHJldHVybiAobGVmdC5nZXRGdWxsWWVhcigpIDwgcmlnaHQuZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpIDwgcmlnaHQuZ2V0TW9udGgoKSlcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpIDwgcmlnaHQuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJiBsZWZ0LmdldEhvdXJzKCkgPCByaWdodC5nZXRIb3VycygpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJiBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiYgbGVmdC5nZXRNaW51dGVzKCkgPCByaWdodC5nZXRNaW51dGVzKCkpO1xuICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgIHJldHVybiAobGVmdC5nZXRGdWxsWWVhcigpIDwgcmlnaHQuZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpIDwgcmlnaHQuZ2V0TW9udGgoKSlcbiAgICAgICAgICAgIHx8IChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmIGxlZnQuZ2V0RGF0ZSgpIDwgcmlnaHQuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJiBsZWZ0LmdldEhvdXJzKCkgPCByaWdodC5nZXRIb3VycygpKVxuICAgICAgICAgICAgfHwgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiYgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJiBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiYgbGVmdC5nZXRNaW51dGVzKCkgPCByaWdodC5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICB8fCAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJiBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJiBsZWZ0LmdldE1pbnV0ZXMoKSA9PT0gcmlnaHQuZ2V0TWludXRlcygpICYmIGxlZnQuZ2V0U2Vjb25kcygpIDwgcmlnaHQuZ2V0U2Vjb25kcygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1YWwgdG8gdG9kYXkgYWNjdXJhdGUgdG8gXCJkYXlcIlxuICBpc1RvZGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShuZXcgRGF0ZSgpLCAnZGF5Jyk7XG4gIH1cblxuICBpc0ludmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzTmFOKHRoaXMubmF0aXZlRGF0ZS52YWx1ZU9mKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIDAtNiAoU3VuZGF5IHRvIFNhdHVyZGF5KVxuICAgKi9cbiAgZmlyc3REYXlPZldlZWsobG9jYWxlPzogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZmlyc3REYXlPZldlZWsobG9jYWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9OYXRpdmVEYXRlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUgPSB0aGlzKTogRGF0ZSB7XG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlLm5hdGl2ZURhdGUgOiBkYXRlO1xuICB9XG5cbiAgLy8gY29tcGFyZShkYXRlOiBDYW5keURhdGUsIERhdGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnbWlsbGlzZWNvbmQnKTogbnVtYmVyIHtcbiAgLy8gICBjb25zdCBsZXZlbCA9IHsgJ21pbGxpc2Vjb25kJzogMSwgJ3NlY29uZCc6IDEwMDAsICdtaW51dGUnOiAxMDAwICogNjAsICdob3VyJzogMTAwMCAqIDYwICogNjAsICdkYXknOiAxMDAwICogNjAgKiA2MCAqIDI0IH1bIGdyYWluIF07XG4gIC8vICAgY29uc3QgbGVmdCA9IHRoaXMubmF0aXZlRGF0ZS5nZXRUaW1lKCkgLyBsZXZlbDtcbiAgLy8gICBjb25zdCByaWdodCA9IChkYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gZGF0ZS5uYXRpdmVEYXRlIDogZGF0ZSkuZ2V0VGltZSgpIC8gbGV2ZWw7XG4gIC8vICAgcmV0dXJuIE1hdGguZmxvb3IobGVmdCkgLSBNYXRoLmZsb29yKHJpZ2h0KTtcbiAgLy8gfVxufVxuXG5leHBvcnQgdHlwZSBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAneWVhcicgfCAnbW9udGgnIHwgJ2RheScgfCAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnO1xuXG5leHBvcnQgdHlwZSBDYW5keURhdGVDb21wYXJlVHlwZSA9ICdlcScgfCAnZ3QnIHwgJ2x0JztcbiJdfQ==