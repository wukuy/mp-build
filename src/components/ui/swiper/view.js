Component({
    properties: {
        imgUrls: {
            type: Array,
            value: [],
            observer(val) {
                this.setData({count: val.length, idx: 0});
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
        idx: 0,
    },
    externalClasses: ['c-class'],
    methods: {
        swiperChange({detail}) {
            let {current} = detail;
            this.setData({idx: current});
        }
    },
    ready() {
    }
});

  