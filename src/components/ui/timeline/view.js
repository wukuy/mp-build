const {moment} = getApp();
Component({
    properties: {
        value: {
            type: Array,
            value: []
        }
    },
    data: {
        propsList: [{date: '2018-12-12 03:32', content: '很多内容呢', operator: 'zhangs', text: '收', bgc: 'red'}],
        list: []
    },
    methods: {
        init() {
            this.data.propsList.forEach(item => {
                item.dateBranch = moment(item.date).format('HH:mm')
                item.dateYear = moment(item.date).format('YYYY-MM-DD')
            })
            this.setData({
                list: this.data.propsList
            })
        }
    },
    ready() {
        this.init()
    },
});

  