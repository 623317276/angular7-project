/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/fi_FI';
import DatePicker from './date-picker/fi_FI';
import Pagination from './pagination/fi_FI';
import TimePicker from './time-picker/fi_FI';
export default {
    locale: 'fi',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Suodatus valikko',
        filterConfirm: 'OK',
        filterReset: 'Tyhjennä',
        emptyText: 'Ei kohteita',
        selectAll: 'Valitse kaikki',
        selectInvert: 'Valitse päinvastoin',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Peruuta',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Peruuta',
    },
    Transfer: {
        notFoundContent: 'Ei löytynyt',
        searchPlaceholder: 'Etsi täältä',
        itemUnit: 'kohde',
        itemsUnit: 'kohdetta',
    },
    Select: {
        notFoundContent: 'Ei löytynyt',
    },
    Upload: {
        uploading: 'Lähetetään...',
        removeFile: 'Poista tiedosto',
        uploadError: 'Virhe lähetyksessä',
        previewFile: 'Esikatsele tiedostoa',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlfRkkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaTE4bi9sYW5ndWFnZXMvZmlfRkkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLGVBQWU7SUFDYixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7SUFDUixLQUFLLEVBQUU7UUFDTCxXQUFXLEVBQUUsa0JBQWtCO1FBQy9CLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFdBQVcsRUFBRSxVQUFVO1FBQ3ZCLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsWUFBWSxFQUFFLHFCQUFxQjtLQUNwQztJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLFNBQVM7UUFDckIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxTQUFTO0tBQ3RCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsZUFBZSxFQUFFLGFBQWE7UUFDOUIsaUJBQWlCLEVBQUUsYUFBYTtRQUNoQyxRQUFRLEVBQUUsT0FBTztRQUNqQixTQUFTLEVBQUUsVUFBVTtLQUN0QjtJQUNELE1BQU0sRUFBRTtRQUNOLGVBQWUsRUFBRSxhQUFhO0tBQy9CO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLGVBQWU7UUFDMUIsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLFdBQVcsRUFBRSxzQkFBc0I7S0FDcEM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvZmlfRkknO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci9maV9GSSc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vZmlfRkknO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci9maV9GSSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAnZmknLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ1N1b2RhdHVzIHZhbGlra28nLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdUeWhqZW5uw6QnLFxuICAgIGVtcHR5VGV4dDogJ0VpIGtvaHRlaXRhJyxcbiAgICBzZWxlY3RBbGw6ICdWYWxpdHNlIGthaWtraScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnVmFsaXRzZSBww6RpbnZhc3RvaW4nLFxuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnUGVydXV0YScsXG4gICAganVzdE9rVGV4dDogJ09LJyxcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnUGVydXV0YScsXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgbm90Rm91bmRDb250ZW50OiAnRWkgbMO2eXR5bnl0JyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ0V0c2kgdMOkw6RsdMOkJyxcbiAgICBpdGVtVW5pdDogJ2tvaGRlJyxcbiAgICBpdGVtc1VuaXQ6ICdrb2hkZXR0YScsXG4gIH0sXG4gIFNlbGVjdDoge1xuICAgIG5vdEZvdW5kQ29udGVudDogJ0VpIGzDtnl0eW55dCcsXG4gIH0sXG4gIFVwbG9hZDoge1xuICAgIHVwbG9hZGluZzogJ0zDpGhldGV0w6TDpG4uLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdQb2lzdGEgdGllZG9zdG8nLFxuICAgIHVwbG9hZEVycm9yOiAnVmlyaGUgbMOkaGV0eWtzZXNzw6QnLFxuICAgIHByZXZpZXdGaWxlOiAnRXNpa2F0c2VsZSB0aWVkb3N0b2EnLFxuICB9LFxufTtcbiJdfQ==