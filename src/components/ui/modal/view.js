Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        buttons: {
            type: Array,
            value: [{
                text: '取消',
                long: true,
                ghost: true
            }, {
                text: '确定',
                long: true
            }]
        },
        title: {
            type: String,
            value: ''
        },
        zIndex: {
            type: Number,
            value: 98
        }
    },
    methods: {
        maskTap() {
            this.setData({
                show: false
            });
        },
        catchtap:() => {},
        handleTap({currentTarget}) {
            let idx = currentTarget.dataset.idx;
            let item = this.data.buttons[idx];

            if(item.callback && item.callback()) return;

            this.maskTap();
            this.triggerEvent('tap', item);
        }
    },
});

  