/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/ca_ES';
import DatePicker from './date-picker/ca_ES';
import Pagination from './pagination/ca_ES';
import TimePicker from './time-picker/ca_ES';
export default {
    locale: 'ca',
    Pagination: Pagination,
    DatePicker: DatePicker,
    TimePicker: TimePicker,
    Calendar: Calendar,
    Table: {
        filterTitle: 'Filtrar Menu',
        filterConfirm: 'OK',
        filterReset: 'Restablir',
        emptyText: 'Sense dades',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel·lar',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel·lar',
    },
    Transfer: {
        notFoundContent: 'No trobat',
        searchPlaceholder: 'Cercar aquí',
        itemUnit: 'item',
        itemsUnit: 'items',
    },
    Select: {
        notFoundContent: 'No trobat',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FfRVMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaTE4bi9sYW5ndWFnZXMvY2FfRVMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLGVBQWU7SUFDYixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVUsWUFBQTtJQUNWLFVBQVUsWUFBQTtJQUNWLFVBQVUsWUFBQTtJQUNWLFFBQVEsVUFBQTtJQUNSLEtBQUssRUFBRTtRQUNMLFdBQVcsRUFBRSxjQUFjO1FBQzNCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFNBQVMsRUFBRSxhQUFhO0tBQ3pCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsWUFBWTtRQUN4QixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLFlBQVk7S0FDekI7SUFDRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUUsV0FBVztRQUM1QixpQkFBaUIsRUFBRSxhQUFhO1FBQ2hDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0lBQ0QsTUFBTSxFQUFFO1FBQ04sZUFBZSxFQUFFLFdBQVc7S0FDN0I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvY2FfRVMnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci9jYV9FUyc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vY2FfRVMnO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci9jYV9FUyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAnY2EnLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRyYXIgTWVudScsXG4gICAgZmlsdGVyQ29uZmlybTogJ09LJyxcbiAgICBmaWx0ZXJSZXNldDogJ1Jlc3RhYmxpcicsXG4gICAgZW1wdHlUZXh0OiAnU2Vuc2UgZGFkZXMnLFxuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VswrdsYXInLFxuICAgIGp1c3RPa1RleHQ6ICdPSycsXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbMK3bGFyJyxcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICBub3RGb3VuZENvbnRlbnQ6ICdObyB0cm9iYXQnLFxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnQ2VyY2FyIGFxdcOtJyxcbiAgICBpdGVtVW5pdDogJ2l0ZW0nLFxuICAgIGl0ZW1zVW5pdDogJ2l0ZW1zJyxcbiAgfSxcbiAgU2VsZWN0OiB7XG4gICAgbm90Rm91bmRDb250ZW50OiAnTm8gdHJvYmF0JyxcbiAgfSxcbn07XG4iXX0=