Component({
    properties: {
        checked: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        value: {
            type: String,
            value: ''
        }
    },
    methods: {
        handleTap() {
            let checked = !this.data.checked;
            this.setData({
                checked: checked
            });
            this.triggerEvent('change', {checked, value: this.data.value});
        }
    },
});

  