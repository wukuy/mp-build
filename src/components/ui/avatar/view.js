Component({
    properties: {
        // 类型，头像(head)或者商品图片(material)
        type: {
            type: String,
            value: 'head'
        },
        src: {
            type: String,
            value: ''
        }
    },
    externalClasses: ['custom-class'],
    methods: {
        clickImg() {
            this.triggerEvent('clickImg')
        }
    }
})