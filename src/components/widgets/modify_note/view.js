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
            observer(value) {
                if(value) this.setData({value: ''});
            }
        },
        key: {
            type: [String, Number, Object],
        },
        zIndex: {
            type: Number,
            value: 98
        }
    },
    data: {
    },
    externalClasses: ['c-class'],
    methods: {
        handleInput({detail}) {
            let {value} = detail;
            this.data.value = value;
            this.triggerEvent('change', {value});
        },
        handleTap({detail}) {
            if(detail.text === '确定') {
                let {value, key} = this.data;
                this.triggerEvent('confirm', {value, key});
            }
            
            this.setData({show: false});
        }
    }
});

  