Component({
    properties: {
        unit: {
            type: String,
            value: '',
        },
        value: {
            type: [String, Number],
            value: 0
        }
    },
    data: {},
    methods: {
        // 减
        _reduce() {
            let obj = this.calcDecimal()
            if(parseFloat(this.data.value) - obj.increase >= 0){
                let newVal = parseFloat(this.data.value) - obj.increase
                this.data.value = obj.decimal ? newVal.toFixed(obj.decimal) : newVal
            }
            else{
                this.data.value = 0;
            }
            this.setData({
                value: this.data.value
            })
            this.triggerEvent('change', this.data.value)
        },
        // 加
        _plus() {
            if (this.data.value === undefined || this.data.value === '') this.data.value = 0;
            let obj = this.calcDecimal()
            let newVal = parseFloat(this.data.value) + obj.increase
            this.data.value = obj.decimal ? newVal.toFixed(obj.decimal) : newVal
            if (this.data.value >= 100000) {
                this.data.value = 0
            }
            this.setData({
                value: this.data.value
            })
            this.triggerEvent('change', this.data.value)
        },
        calcDecimal(){
            let increase = 1
            let num = 0
            this.data.value = this.data.value.toString()
            if(/\./.test(this.data.value)){
                num = this.data.value.split('.')[1].length
                increase = (num == 1) ? 0.1 : 0.01
            }
            return {
                increase,
                decimal: num,
            }
        },
        //处理整数位数超过5位，小数位超过2位
        formatValue(param) {
            if (!param) return 0
            if (this.data.value == 0) return Number(param)
            param = param.match(/^\d+(?:\.\d{0,2})?/)[0]
            if (+param > 99999) {
                param = param.split('')[param.length - 1]
            }
            return param
        },
        changKeyboard({ detail }) {
            this.data.value = this.formatValue(detail.value)

            this.setData({
                value: this.data.value
            })
            this.triggerEvent('change', this.data.value)
        }
    }
})