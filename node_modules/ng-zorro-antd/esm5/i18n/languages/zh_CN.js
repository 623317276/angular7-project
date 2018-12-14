/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/zh_CN';
import DatePicker from './date-picker/zh_CN';
import Pagination from './pagination/zh_CN';
import TimePicker from './time-picker/zh_CN';
export default {
    locale: 'zh-cn',
    Pagination: Pagination,
    DatePicker: DatePicker,
    TimePicker: TimePicker,
    Calendar: Calendar,
    Table: {
        filterTitle: '筛选',
        filterConfirm: '确定',
        filterReset: '重置',
        emptyText: '暂无数据',
        selectAll: '全选当页',
        selectInvert: '反选当页',
    },
    Modal: {
        okText: '确定',
        cancelText: '取消',
        justOkText: '知道了',
    },
    Popconfirm: {
        cancelText: '取消',
        okText: '确定',
    },
    Transfer: {
        notFoundContent: '无匹配结果',
        searchPlaceholder: '请输入搜索内容',
        itemUnit: '项',
        itemsUnit: '项',
    },
    Select: {
        notFoundContent: '无匹配结果',
    },
    Upload: {
        uploading: '文件上传中',
        removeFile: '删除文件',
        uploadError: '上传错误',
        previewFile: '预览文件',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhfQ04uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaTE4bi9sYW5ndWFnZXMvemhfQ04udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLGVBQWU7SUFDYixNQUFNLEVBQUUsT0FBTztJQUNmLFVBQVUsWUFBQTtJQUNWLFVBQVUsWUFBQTtJQUNWLFVBQVUsWUFBQTtJQUNWLFFBQVEsVUFBQTtJQUNSLEtBQUssRUFBRTtRQUNMLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFlBQVksRUFBRSxNQUFNO0tBQ3JCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsSUFBSTtRQUNoQixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELFVBQVUsRUFBRTtRQUNWLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE1BQU0sRUFBRSxJQUFJO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUUsT0FBTztRQUN4QixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLFFBQVEsRUFBRSxHQUFHO1FBQ2IsU0FBUyxFQUFFLEdBQUc7S0FDZjtJQUNELE1BQU0sRUFBRTtRQUNOLGVBQWUsRUFBRSxPQUFPO0tBQ3pCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLE9BQU87UUFDbEIsVUFBVSxFQUFFLE1BQU07UUFDbEIsV0FBVyxFQUFFLE1BQU07UUFDbkIsV0FBVyxFQUFFLE1BQU07S0FDcEI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvemhfQ04nO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci96aF9DTic7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vemhfQ04nO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci96aF9DTic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAnemgtY24nLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ+etm+mAiScsXG4gICAgZmlsdGVyQ29uZmlybTogJ+ehruWumicsXG4gICAgZmlsdGVyUmVzZXQ6ICfph43nva4nLFxuICAgIGVtcHR5VGV4dDogJ+aaguaXoOaVsOaNricsXG4gICAgc2VsZWN0QWxsOiAn5YWo6YCJ5b2T6aG1JyxcbiAgICBzZWxlY3RJbnZlcnQ6ICflj43pgInlvZPpobUnLFxuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ+ehruWumicsXG4gICAgY2FuY2VsVGV4dDogJ+WPlua2iCcsXG4gICAganVzdE9rVGV4dDogJ+efpemBk+S6hicsXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJyxcbiAgICBva1RleHQ6ICfnoa7lrponLFxuICB9LFxuICBUcmFuc2Zlcjoge1xuICAgIG5vdEZvdW5kQ29udGVudDogJ+aXoOWMuemFjee7k+aenCcsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICfor7fovpPlhaXmkJzntKLlhoXlrrknLFxuICAgIGl0ZW1Vbml0OiAn6aG5JyxcbiAgICBpdGVtc1VuaXQ6ICfpobknLFxuICB9LFxuICBTZWxlY3Q6IHtcbiAgICBub3RGb3VuZENvbnRlbnQ6ICfml6DljLnphY3nu5PmnpwnLFxuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICfmlofku7bkuIrkvKDkuK0nLFxuICAgIHJlbW92ZUZpbGU6ICfliKDpmaTmlofku7YnLFxuICAgIHVwbG9hZEVycm9yOiAn5LiK5Lyg6ZSZ6K+vJyxcbiAgICBwcmV2aWV3RmlsZTogJ+mihOiniOaWh+S7ticsXG4gIH0sXG59O1xuIl19