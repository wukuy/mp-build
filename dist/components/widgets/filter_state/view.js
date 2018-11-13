'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Component({
    data: {
        name: 'state',
        key: '订单状态',
        allCheck: {
            value: '全部',
            key: 0,
            _checked: true
        }
    },
    properties: {
        value: {
            type: Array,
            value: []
        },
        data: {
            type: Array,
            value: [/* {
                    value: '已下单',
                    key: 2,
                    _checked: false
                    }, {
                    value: '已完成',
                    key: 3,
                    _checked: false
                    }, {
                    value: '已取消',
                    key: 4,
                    _checked: false
                    }, {
                    value: '已确定',
                    key: 5,
                    _checked: false
                    } */]
        },
        show: {
            type: Boolean,
            value: true
        }
    },
    relations: {
        '../filter/view': {
            type: 'parent'
        }
    },
    methods: {
        handleTap: function handleTap(_ref) {
            var _setData;

            var currentTarget = _ref.currentTarget;
            var idx = currentTarget.dataset.idx;

            this.setData((_setData = {}, _defineProperty(_setData, 'data[' + idx + ']._checked', !this.data.data[idx]._checked), _defineProperty(_setData, 'allCheck._checked', false), _setData));
            var arr = this.data.data.filter(function (item) {
                return item._checked;
            });
            this.data.value = arr.map(function (item) {
                return item.key;
            });
        },
        allCheckTap: function allCheckTap() {
            this.data.data.forEach(function (item) {
                return item._checked = false;
            });
            this.setData({
                data: this.data.data,
                'allCheck._checked': true
            });
            this.data.value = [this.data.allCheck.key];
        }
    },
    ready: function ready() {
        this.data.value = [this.data.allCheck.key];
    }
});