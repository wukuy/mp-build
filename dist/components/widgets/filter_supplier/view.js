'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Component({
    data: {
        name: 'supplier',
        key: '供应商',
        allCheck: {
            value: '全部供应商',
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
            value: [{
                value: '蔬菜王小强',
                key: 1,
                _checked: false
            }, {
                value: '蔬菜李金花小强小强小强小强小强小强',
                key: 2,
                _checked: false
            }, {
                value: '蔬菜李',
                key: 2,
                _checked: false
            }, {
                value: '蔬菜李',
                key: 2,
                _checked: false
            }]
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

            var array = this.data.data.filter(function (item) {
                return item._checked;
            });
            this.data.value = array.map(function (item) {
                return item.key;
            });
        },
        allCheckTap: function allCheckTap() {
            this.data.data.forEach(function (item) {
                return item._checked = false;
            });

            this.setData({
                'allCheck._checked': !this.data.allCheck._checked,
                data: this.data.data
            });
            this.data.value = [this.data.allCheck.key];
        }
    },
    ready: function ready() {
        this.data.value = [this.data.allCheck.key];
    }
});