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
    data: {
    },
    methods: {
        handleInput({detail}) {
            let value = detail.value;

            this.setData({value});
            this.triggerEvent('change', value);
        },
        handleClear() {
            this.setData({value: ''});
            this.triggerEvent('change', '');
        }
    },
});

  