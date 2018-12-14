/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/cs_CZ';
import DatePicker from './date-picker/cs_CZ';
import Pagination from './pagination/cs_CZ';
import TimePicker from './time-picker/cs_CZ';
export default {
    locale: 'cs',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Filtr',
        filterConfirm: 'Potvrdit',
        filterReset: 'Obnovit',
        emptyText: 'Žádná data',
    },
    Modal: {
        okText: 'Ok',
        cancelText: 'Storno',
        justOkText: 'Ok',
    },
    Popconfirm: {
        okText: 'Ok',
        cancelText: 'Storno',
    },
    Transfer: {
        notFoundContent: 'Nenalezeno',
        searchPlaceholder: 'Vyhledávání',
        itemUnit: 'položka',
        itemsUnit: 'položek',
    },
    Select: {
        notFoundContent: 'Nenalezeno',
    },
    Upload: {
        uploading: 'Nahrávání...',
        removeFile: 'Odstranit soubor',
        uploadError: 'Chyba při nahrávání',
        previewFile: 'Zobrazit soubor',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NfQ1ouanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaTE4bi9sYW5ndWFnZXMvY3NfQ1oudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLGVBQWU7SUFDYixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7SUFDUixLQUFLLEVBQUU7UUFDTCxXQUFXLEVBQUUsT0FBTztRQUNwQixhQUFhLEVBQUUsVUFBVTtRQUN6QixXQUFXLEVBQUUsU0FBUztRQUN0QixTQUFTLEVBQUUsWUFBWTtLQUN4QjtJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLFFBQVE7UUFDcEIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsZUFBZSxFQUFFLFlBQVk7UUFDN0IsaUJBQWlCLEVBQUUsYUFBYTtRQUNoQyxRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsU0FBUztLQUNyQjtJQUNELE1BQU0sRUFBRTtRQUNOLGVBQWUsRUFBRSxZQUFZO0tBQzlCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLGNBQWM7UUFDekIsVUFBVSxFQUFFLGtCQUFrQjtRQUM5QixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFdBQVcsRUFBRSxpQkFBaUI7S0FDL0I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvY3NfQ1onO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci9jc19DWic7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vY3NfQ1onO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci9jc19DWic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAnY3MnLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRyJyxcbiAgICBmaWx0ZXJDb25maXJtOiAnUG90dnJkaXQnLFxuICAgIGZpbHRlclJlc2V0OiAnT2Jub3ZpdCcsXG4gICAgZW1wdHlUZXh0OiAnxb3DoWRuw6EgZGF0YScsXG4gIH0sXG4gIE1vZGFsOiB7XG4gICAgb2tUZXh0OiAnT2snLFxuICAgIGNhbmNlbFRleHQ6ICdTdG9ybm8nLFxuICAgIGp1c3RPa1RleHQ6ICdPaycsXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdPaycsXG4gICAgY2FuY2VsVGV4dDogJ1N0b3JubycsXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgbm90Rm91bmRDb250ZW50OiAnTmVuYWxlemVubycsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdWeWhsZWTDoXbDoW7DrScsXG4gICAgaXRlbVVuaXQ6ICdwb2xvxb5rYScsXG4gICAgaXRlbXNVbml0OiAncG9sb8W+ZWsnLFxuICB9LFxuICBTZWxlY3Q6IHtcbiAgICBub3RGb3VuZENvbnRlbnQ6ICdOZW5hbGV6ZW5vJyxcbiAgfSxcbiAgVXBsb2FkOiB7XG4gICAgdXBsb2FkaW5nOiAnTmFocsOhdsOhbsOtLi4uJyxcbiAgICByZW1vdmVGaWxlOiAnT2RzdHJhbml0IHNvdWJvcicsXG4gICAgdXBsb2FkRXJyb3I6ICdDaHliYSBwxZlpIG5haHLDoXbDoW7DrScsXG4gICAgcHJldmlld0ZpbGU6ICdab2JyYXppdCBzb3Vib3InLFxuICB9LFxufTtcbiJdfQ==