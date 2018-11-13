'use strict';

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
        maskTap: function maskTap() {
            this.setData({
                show: false
            });
        },

        catchtap: function catchtap() {},
        handleTap: function handleTap(_ref) {
            var currentTarget = _ref.currentTarget;

            var idx = currentTarget.dataset.idx;
            var item = this.data.buttons[idx];

            if (item.callback && item.callback()) return;

            this.maskTap();
            this.triggerEvent('tap', item);
        }
    }
});