/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/pl_PL';
import DatePicker from './date-picker/pl_PL';
import Pagination from './pagination/pl_PL';
import TimePicker from './time-picker/pl_PL';
export default {
    locale: 'pl',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Menu filtra',
        filterConfirm: 'OK',
        filterReset: 'Wyczyść',
        emptyText: 'Brak danych',
        selectAll: 'Zaznacz bieżącą stronę',
        selectInvert: 'Odwróć zaznaczenie',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Anuluj',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Anuluj',
    },
    Transfer: {
        notFoundContent: 'Nie znaleziono',
        searchPlaceholder: 'Szukaj',
        itemUnit: 'obiekt',
        itemsUnit: 'obiekty',
    },
    Select: {
        notFoundContent: 'Nie znaleziono',
    },
    Upload: {
        uploading: 'Wysyłanie...',
        removeFile: 'Usuń plik',
        uploadError: 'Błąd wysyłania',
        previewFile: 'Podejrzyj plik',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxfUEwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaTE4bi9sYW5ndWFnZXMvcGxfUEwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLGVBQWU7SUFDYixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7SUFDUixLQUFLLEVBQUU7UUFDTCxXQUFXLEVBQUUsYUFBYTtRQUMxQixhQUFhLEVBQUUsSUFBSTtRQUNuQixXQUFXLEVBQUUsU0FBUztRQUN0QixTQUFTLEVBQUUsYUFBYTtRQUN4QixTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLFlBQVksRUFBRSxvQkFBb0I7S0FDbkM7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsUUFBUTtLQUNyQjtJQUNELFFBQVEsRUFBRTtRQUNSLGVBQWUsRUFBRSxnQkFBZ0I7UUFDakMsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsU0FBUztLQUNyQjtJQUNELE1BQU0sRUFBRTtRQUNOLGVBQWUsRUFBRSxnQkFBZ0I7S0FDbEM7SUFDRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsY0FBYztRQUN6QixVQUFVLEVBQUUsV0FBVztRQUN2QixXQUFXLEVBQUUsZ0JBQWdCO1FBQzdCLFdBQVcsRUFBRSxnQkFBZ0I7S0FDOUI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvcGxfUEwnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci9wbF9QTCc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vcGxfUEwnO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci9wbF9QTCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAncGwnLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ01lbnUgZmlsdHJhJyxcbiAgICBmaWx0ZXJDb25maXJtOiAnT0snLFxuICAgIGZpbHRlclJlc2V0OiAnV3ljennFm8SHJyxcbiAgICBlbXB0eVRleHQ6ICdCcmFrIGRhbnljaCcsXG4gICAgc2VsZWN0QWxsOiAnWmF6bmFjeiBiaWXFvMSFY8SFIHN0cm9uxJknLFxuICAgIHNlbGVjdEludmVydDogJ09kd3LDs8SHIHphem5hY3plbmllJyxcbiAgfSxcbiAgTW9kYWw6IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0FudWx1aicsXG4gICAganVzdE9rVGV4dDogJ09LJyxcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQW51bHVqJyxcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICBub3RGb3VuZENvbnRlbnQ6ICdOaWUgem5hbGV6aW9ubycsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTenVrYWonLFxuICAgIGl0ZW1Vbml0OiAnb2JpZWt0JyxcbiAgICBpdGVtc1VuaXQ6ICdvYmlla3R5JyxcbiAgfSxcbiAgU2VsZWN0OiB7XG4gICAgbm90Rm91bmRDb250ZW50OiAnTmllIHpuYWxlemlvbm8nLFxuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdXeXN5xYJhbmllLi4uJyxcbiAgICByZW1vdmVGaWxlOiAnVXN1xYQgcGxpaycsXG4gICAgdXBsb2FkRXJyb3I6ICdCxYLEhWQgd3lzecWCYW5pYScsXG4gICAgcHJldmlld0ZpbGU6ICdQb2RlanJ6eWogcGxpaycsXG4gIH0sXG59O1xuIl19