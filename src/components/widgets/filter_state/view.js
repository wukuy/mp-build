Component({
    data: {
        name: 'state',
        key: '订单状态',
        allCheck: {
            value: '全部',
            key: 0,
            _checked: true
        },
    },
    properties: {
        value: {
            type: Array,
            value: []
        },
        data: {
            type: Array,
            value: [/* {
                value: '已下单',
                key: 2,
                _checked: false
            }, {
                value: '已完成',
                key: 3,
                _checked: false
            }, {
                value: '已取消',
                key: 4,
                _checked: false
            }, {
                value: '已确定',
                key: 5,
                _checked: false
            } */]
        },
        show: {
            type: Boolean,
            value: true
        }
    },
    relations: {
        '../filter/view': {
            type: 'parent'
        }
    },
    methods: {
        handleTap({currentTarget}) {
            let {idx} = currentTarget.dataset;
            this.setData({
                [`data[${idx}]._checked`]: !this.data.data[idx]._checked,
                'allCheck._checked': false
            });
            let arr = this.data.data.filter(item => item._checked);
            this.data.value = arr.map(item => item.key)
        },
        allCheckTap() {
            this.data.data.forEach(item => item._checked = false);
            this.setData({
                data: this.data.data,
                'allCheck._checked': true
            });
            this.data.value = [this.data.allCheck.key];
        }
    },
    ready() {
        this.data.value = [this.data.allCheck.key];
    }
});

  