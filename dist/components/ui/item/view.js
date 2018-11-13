"use strict";

Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        leftText: String,
        rightText: String,
        detail: {
            type: Boolean,
            value: false
        }
    },
    data: {},
    methods: {}
});