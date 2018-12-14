/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/et_EE';
import DatePicker from './date-picker/et_EE';
import Pagination from './pagination/et_EE';
import TimePicker from './time-picker/et_EE';
export default {
    locale: 'et',
    Pagination: Pagination,
    DatePicker: DatePicker,
    TimePicker: TimePicker,
    Calendar: Calendar,
    Table: {
        filterTitle: 'Filtri menüü',
        filterConfirm: 'OK',
        filterReset: 'Nulli',
        emptyText: 'Andmed puuduvad',
        selectAll: 'Vali kõik',
        selectInvert: 'Inverteeri valik',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Tühista',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Tühista',
    },
    Transfer: {
        notFoundContent: 'Ei leitud',
        searchPlaceholder: 'Otsi siit',
        itemUnit: 'kogus',
        itemsUnit: 'kogus',
    },
    Select: {
        notFoundContent: 'Ei leitud',
    },
    Upload: {
        uploading: 'Üleslaadimine...',
        removeFile: 'Eemalda fail',
        uploadError: 'Üleslaadimise tõrge',
        previewFile: 'Faili eelvaade',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRfRUUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaTE4bi9sYW5ndWFnZXMvZXRfRUUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLGVBQWU7SUFDYixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVUsWUFBQTtJQUNWLFVBQVUsWUFBQTtJQUNWLFVBQVUsWUFBQTtJQUNWLFFBQVEsVUFBQTtJQUNSLEtBQUssRUFBRTtRQUNMLFdBQVcsRUFBRSxjQUFjO1FBQzNCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFNBQVMsRUFBRSxpQkFBaUI7UUFDNUIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsWUFBWSxFQUFFLGtCQUFrQjtLQUNqQztJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLFNBQVM7UUFDckIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxTQUFTO0tBQ3RCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsZUFBZSxFQUFFLFdBQVc7UUFDNUIsaUJBQWlCLEVBQUUsV0FBVztRQUM5QixRQUFRLEVBQUUsT0FBTztRQUNqQixTQUFTLEVBQUUsT0FBTztLQUNuQjtJQUNELE1BQU0sRUFBRTtRQUNOLGVBQWUsRUFBRSxXQUFXO0tBQzdCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLGtCQUFrQjtRQUM3QixVQUFVLEVBQUUsY0FBYztRQUMxQixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFdBQVcsRUFBRSxnQkFBZ0I7S0FDOUI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvZXRfRUUnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci9ldF9FRSc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vZXRfRUUnO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci9ldF9FRSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAnZXQnLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRyaSBtZW7DvMO8JyxcbiAgICBmaWx0ZXJDb25maXJtOiAnT0snLFxuICAgIGZpbHRlclJlc2V0OiAnTnVsbGknLFxuICAgIGVtcHR5VGV4dDogJ0FuZG1lZCBwdXVkdXZhZCcsXG4gICAgc2VsZWN0QWxsOiAnVmFsaSBrw7VpaycsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0ZWVyaSB2YWxpaycsXG4gIH0sXG4gIE1vZGFsOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdUw7xoaXN0YScsXG4gICAganVzdE9rVGV4dDogJ09LJyxcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnVMO8aGlzdGEnLFxuICB9LFxuICBUcmFuc2Zlcjoge1xuICAgIG5vdEZvdW5kQ29udGVudDogJ0VpIGxlaXR1ZCcsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdPdHNpIHNpaXQnLFxuICAgIGl0ZW1Vbml0OiAna29ndXMnLFxuICAgIGl0ZW1zVW5pdDogJ2tvZ3VzJyxcbiAgfSxcbiAgU2VsZWN0OiB7XG4gICAgbm90Rm91bmRDb250ZW50OiAnRWkgbGVpdHVkJyxcbiAgfSxcbiAgVXBsb2FkOiB7XG4gICAgdXBsb2FkaW5nOiAnw5xsZXNsYWFkaW1pbmUuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdFZW1hbGRhIGZhaWwnLFxuICAgIHVwbG9hZEVycm9yOiAnw5xsZXNsYWFkaW1pc2UgdMO1cmdlJyxcbiAgICBwcmV2aWV3RmlsZTogJ0ZhaWxpIGVlbHZhYWRlJyxcbiAgfSxcbn07XG4iXX0=