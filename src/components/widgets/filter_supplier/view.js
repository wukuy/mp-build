Component({
    data: {
        name: 'supplier',
        key: '供应商',
        allCheck: {
            value: '全部供应商',
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
            value: [{
                value: '蔬菜王小强',
                key: 1,
                _checked: false
            }, {
                value: '蔬菜李金花小强小强小强小强小强小强',
                key: 2,
                _checked: false
            },  {
                value: '蔬菜李',
                key: 2,
                _checked: false
            },  {
                value: '蔬菜李',
                key: 2,
                _checked: false
            }]
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

            let array = this.data.data.filter(item => item._checked);
            this.data.value = array.map(item => item.key);
        },
        allCheckTap() {
            this.data.data.forEach(item => item._checked = false);

            this.setData({
                'allCheck._checked': !this.data.allCheck._checked,
                data: this.data.data
            });
            this.data.value = [this.data.allCheck.key];
        }
    },
    ready() {
        this.data.value = [this.data.allCheck.key];
    }
});

  