'use strict';

var moment = require('../../../common/lib/moment.min.js');

Component({
    properties: {
        value: {
            type: Object,
            value: { days: 3, beginDate: '', endDate: '' }
        },
        show: {
            type: Boolean,
            value: true
        }
    },
    data: {
        key: '近3日',
        name: 'date',
        daysList: [{
            key: 0,
            value: '当日'
        }, {
            key: 3,
            value: '近3日'
        }, {
            key: 7,
            value: '近7日'
        }, {
            key: 15,
            value: '近15日'
        }, {
            key: 30,
            value: '近一月'
        }, {
            key: '',
            value: '自定义'
        }],
        minStart: '',
        maxEnd: '',
        start: '',
        end: ''
    },
    relations: {
        '../filter/view': {
            type: 'parent'
        }
    },
    methods: {
        handleTap: function handleTap(_ref) {
            var currentTarget = _ref.currentTarget;
            var _currentTarget$datase = currentTarget.dataset.item,
                value = _currentTarget$datase.value,
                key = _currentTarget$datase.key;


            this.setData({
                key: value,
                value: { days: key }
            });

            this.setCustomDate();
        },
        startDateChange: function startDateChange(e) {
            this.setData({
                start: e.detail.value,
                'value.beginDate': e.detail.value + ' 00:00:00',
                minStart: moment(this.data.endDate).subtract(90, 'days')
            });
        },
        endDateChange: function endDateChange(e) {
            this.setData({
                end: e.detail.value,
                'value.endDate': e.detail.value + ' 23:59:59',
                maxEnd: moment(this.data.beginDate).add(90, 'days')
            });
        },
        setCustomDate: function setCustomDate() {
            var _data = this.data,
                start = _data.start,
                end = _data.end;

            var days = this.data.value.days;
            var beginDate = void 0,
                endDate = void 0;

            if (days === '') {
                start = start ? start : moment(moment().subtract(10, 'days')).format('YYYY-MM-DD');
                end = end ? end : moment().format('YYYY-MM-DD');
                beginDate = start + ' 00:00:00';
                endDate = end + ' 23:59:59';
            } else {
                beginDate = endDate = '';
            }
            this.setData({
                start: start,
                end: end,
                'value.beginDate': beginDate,
                'value.endDate': endDate
            });
        }
    },

    ready: function ready() {
        this.setCustomDate();
    }
});