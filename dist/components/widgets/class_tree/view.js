'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Component({
    properties: {
        data: {
            type: Array,
            value: [],
            observer: function observer(newVal, oldVal, changedPath) {
                // 初始化状态
                this.forEachTree(newVal, function (item) {
                    item._active === undefined ? false : item._active;
                });

                this.setData({
                    classList: newVal
                });
            }
        }
    },
    data: {
        classList: []
    },
    methods: {
        maskTap: function maskTap() {
            this.setData({
                show: active
            });
        },
        activeChange: function activeChange(_ref) {
            var detail = _ref.detail;

            console.log(detail);
        },
        handleTap: function handleTap(_ref2) {
            var currentTarget = _ref2.currentTarget;
            var _currentTarget$datase = currentTarget.dataset,
                oneIdx = _currentTarget$datase.oneIdx,
                twoIdx = _currentTarget$datase.twoIdx,
                item = _currentTarget$datase.item;

            // clear all active to false

            this.forEachTree(this.data.data, function (item, parent) {
                return item._active = false;
            });
            this.setData({
                classList: this.data.data
            });

            // update active
            this.setData(_defineProperty({}, 'classList[' + oneIdx + ']._active', true));
            if (twoIdx !== undefined) {
                this.setData(_defineProperty({}, 'classList[' + oneIdx + '].childs[' + twoIdx + ']._active', true));
            }

            this.triggerEvent('change', item);
        },
        forEachTree: function forEachTree(tree, callBack, parent) {
            var _this = this;

            tree && tree.forEach(function (item) {
                callBack && callBack(item, parent);
                _this.forEachTree(item.childs, callBack, item);
            });
        }
    }
});