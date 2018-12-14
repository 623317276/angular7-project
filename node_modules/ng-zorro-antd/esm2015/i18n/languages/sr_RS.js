/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/sr_RS';
import DatePicker from './date-picker/sr_RS';
import Pagination from './pagination/sr_RS';
import TimePicker from './time-picker/sr_RS';
export default {
    locale: 'sr',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'Primeni filter',
        filterReset: 'Resetuj filter',
        emptyText: 'Nema podataka',
        selectAll: 'Obeleži sve na trenutnoj strani',
        selectInvert: 'Obrni selekciju na trenutnoj stranici',
    },
    Modal: {
        okText: 'U redu',
        cancelText: 'Otkaži',
        justOkText: 'U redu',
    },
    Popconfirm: {
        okText: 'U redu',
        cancelText: 'Otkaži',
    },
    Transfer: {
        notFoundContent: 'Nisu pronađeni rezultati pretrage',
        searchPlaceholder: 'Pretražite ovde',
        itemUnit: 'stavka',
        itemsUnit: 'stavki',
    },
    Select: {
        notFoundContent: 'Nije pronađeno',
    },
    Upload: {
        uploading: 'Slanje...',
        removeFile: 'Ukloni fajl',
        uploadError: 'Greška prilikom slanja',
        previewFile: 'Pogledaj fajl',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JfUlMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaTE4bi9sYW5ndWFnZXMvc3JfUlMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLGVBQWU7SUFDYixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7SUFDUixLQUFLLEVBQUU7UUFDTCxXQUFXLEVBQUUsUUFBUTtRQUNyQixhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFLGlDQUFpQztRQUM1QyxZQUFZLEVBQUUsdUNBQXVDO0tBQ3REO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLFFBQVE7UUFDaEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsUUFBUTtRQUNoQixVQUFVLEVBQUUsUUFBUTtLQUNyQjtJQUNELFFBQVEsRUFBRTtRQUNSLGVBQWUsRUFBRSxtQ0FBbUM7UUFDcEQsaUJBQWlCLEVBQUUsaUJBQWlCO1FBQ3BDLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxRQUFRO0tBQ3BCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sZUFBZSxFQUFFLGdCQUFnQjtLQUNsQztJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsV0FBVyxFQUFFLGVBQWU7S0FDN0I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvc3JfUlMnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci9zcl9SUyc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vc3JfUlMnO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci9zcl9SUyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAnc3InLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRlcicsXG4gICAgZmlsdGVyQ29uZmlybTogJ1ByaW1lbmkgZmlsdGVyJyxcbiAgICBmaWx0ZXJSZXNldDogJ1Jlc2V0dWogZmlsdGVyJyxcbiAgICBlbXB0eVRleHQ6ICdOZW1hIHBvZGF0YWthJyxcbiAgICBzZWxlY3RBbGw6ICdPYmVsZcW+aSBzdmUgbmEgdHJlbnV0bm9qIHN0cmFuaScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnT2Jybmkgc2VsZWtjaWp1IG5hIHRyZW51dG5vaiBzdHJhbmljaScsXG4gIH0sXG4gIE1vZGFsOiB7XG4gICAgb2tUZXh0OiAnVSByZWR1JyxcbiAgICBjYW5jZWxUZXh0OiAnT3RrYcW+aScsXG4gICAganVzdE9rVGV4dDogJ1UgcmVkdScsXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdVIHJlZHUnLFxuICAgIGNhbmNlbFRleHQ6ICdPdGthxb5pJyxcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICBub3RGb3VuZENvbnRlbnQ6ICdOaXN1IHByb25hxJFlbmkgcmV6dWx0YXRpIHByZXRyYWdlJyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1ByZXRyYcW+aXRlIG92ZGUnLFxuICAgIGl0ZW1Vbml0OiAnc3RhdmthJyxcbiAgICBpdGVtc1VuaXQ6ICdzdGF2a2knLFxuICB9LFxuICBTZWxlY3Q6IHtcbiAgICBub3RGb3VuZENvbnRlbnQ6ICdOaWplIHByb25hxJFlbm8nLFxuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdTbGFuamUuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdVa2xvbmkgZmFqbCcsXG4gICAgdXBsb2FkRXJyb3I6ICdHcmXFoWthIHByaWxpa29tIHNsYW5qYScsXG4gICAgcHJldmlld0ZpbGU6ICdQb2dsZWRhaiBmYWpsJyxcbiAgfSxcbn07XG4iXX0=