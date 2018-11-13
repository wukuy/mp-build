'use strict';

Component({
    properties: {
        title: {
            type: String,
            value: '输入备注'
        },
        maxlength: {
            type: Number,
            value: 15
        },
        placeholder: {
            type: String,
            value: '请输入'
        },
        value: {
            type: String,
            value: ''
        },
        show: {
            type: Boolean,
            value: false,
            observer: function observer(value) {
                if (value) this.setData({ value: '' });
            }
        },
        key: {
            type: [String, Number, Object]
        },
        zIndex: {
            type: Number,
            value: 98
        }
    },
    data: {},
    externalClasses: ['c-class'],
    methods: {
        handleInput: function handleInput(_ref) {
            var detail = _ref.detail;
            var value = detail.value;

            this.data.value = value;
            this.triggerEvent('change', { value: value });
        },
        handleTap: function handleTap(_ref2) {
            var detail = _ref2.detail;

            if (detail.text === '确定') {
                var _data = this.data,
                    value = _data.value,
                    key = _data.key;

                this.triggerEvent('confirm', { value: value, key: key });
            }

            this.setData({ show: false });
        }
    }
});