Component({
    externalClasses: ['c-class', 'c-content', 'c-title'],
    properties: {
        title: String,
        active: {
            type: Boolean,
            value: false
        },
        activeIcon: {
            type: Boolean,
            value: true
        },
        name: {
            type: String,
            value: ''
        }
    },
    methods: {
        handleTap() {
            let active = !this.data.active;
            this.setData({
                active: active
            });

            this.triggerEvent('activeChange', {active, name: this.data.name});
        }
    },
    options: {
        multipleSlots: true
    }
});

  