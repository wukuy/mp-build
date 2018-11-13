'use strict';

Component({
    properties: {
        placeholder: {
            type: String,
            value: '请输入'
        },
        value: {
            type: String,
            value: ''
        },
        clearable: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        focus: {
            type: Boolean,
            value: false
        },
        type: {
            type: String,
            value: 'text'
        }
    },
    data: {},
    methods: {
        handleInput: function handleInput(_ref) {
            var detail = _ref.detail;

            var value = detail.value;

            this.setData({ value: value });
            this.triggerEvent('change', value);
        },
        handleClear: function handleClear() {
            this.setData({ value: '' });
            this.triggerEvent('change', '');
        }
    }
});