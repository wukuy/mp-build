'use strict';

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
        handleTap: function handleTap() {
            var checked = !this.data.checked;
            this.setData({
                checked: checked
            });
            this.triggerEvent('change', { checked: checked, value: this.data.value });
        }
    }
});