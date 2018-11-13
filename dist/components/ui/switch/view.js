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
        }
    },
    data: {},
    methods: {
        switchChange: function switchChange(e) {
            this.triggerEvent('switchChange', e.detail.value);
        }
    }
});