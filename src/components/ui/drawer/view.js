Component({
    externalClasses: ['c-class'],
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        // bottom、top、left、right
        position: {
            type: String,
            value: 'bottom'
        },
    },
    data: {
    },
    methods: {
        maskTap() {
            this.setData({show: false});
            this.triggerEvent('close');
        },
        catchTap() {}
    },
});

  