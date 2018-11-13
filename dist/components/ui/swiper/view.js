'use strict';

Component({
    properties: {
        imgUrls: {
            type: Array,
            value: [],
            observer: function observer(val) {
                this.setData({ count: val.length, idx: 0 });
            }
        },
        height: {
            type: Number,
            value: 400
        },
        indicatorDots: {
            type: Boolean,
            value: true
        }
    },
    data: {
        autoplay: true,
        circular: true,
        indicatorActiveColor: '#00994F',
        interval: 5000,
        duration: 1000,
        idx: 0
    },
    externalClasses: ['c-class'],
    methods: {
        swiperChange: function swiperChange(_ref) {
            var detail = _ref.detail;
            var current = detail.current;

            this.setData({ idx: current });
        }
    },
    ready: function ready() {}
});