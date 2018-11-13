const {moment} = getApp();

Component({
    properties: {
        date: {
            type: String,
            value: ''
        }
    },
    data: {
        daysCount: 0,
        initWeek: 0,
        value: 0,

        year: 0,
        month: 0,
        days: 0,
        week: 0
    },
    methods: {
        init() {
            let date = moment(this.data.value || this.data.date || moment()).format('YYYY-MM-DD');
            let oneDaysInMonth = moment(date).format('YYYY-MM') + '-01';
            let week = moment(oneDaysInMonth).format('d');

            this.setData({
                daysCount: this.daysInMonth(date),
                initWeek: week,
                value: date,
                year: moment(date).format('YYYY'),
                month: moment(date).format('MM'),
                days: moment(date).format('DD'),
                week: this.getZhWeek(date)
            });
        },
        getZhWeek(date) {
            let week = moment(date).format('d');
            let str = '';
            switch (week) {
                case '0':
                    str += '日'
                    break;
                case '1':
                    str += '一'
                    break;
                case '2':
                    str += '二'
                    break;
                case '3':
                    str += '三'
                    break;
                case '4':
                    str += '四'
                    break;
                case '5':
                    str += '五'
                    break;
                case '6':
                    str += '六'
                    break;
            }
            return str;
        },
        daysInMonth(date) {
            return moment(date).daysInMonth();
        },
        nextMonth() {
            this.data.value = moment(this.data.value).add(1, 'months');

            this.init();
        },
        upMonth() {
            this.data.value = moment(this.data.value).subtract(1, 'months');

            this.init();
        },
        daysSelect({currentTarget}) {
            let days = currentTarget.dataset.days;
            this.data.value = `${moment(this.data.value).format('YYYY-MM')}-${days < 10 ? ('0' + days) : days}`;

            this.init();
        },
        handleTap() {
            this.triggerEvent('tap', this.data.value);
        }
    },
    ready() {
        this.init();
    },
});

  