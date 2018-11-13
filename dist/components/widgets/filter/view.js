'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* 
filter 过滤器
    1. name 做为过滤器唯一标识。
    2. key 做为title内容(近三天、近七天....)
    3. value 传出的数据
*/

Component({
    data: {
        currentFilter: {},
        nodes: []
    },
    properties: {
        show: {
            type: Boolean,
            value: false
        }
    },
    options: {
        multipleSlots: true
    },
    relations: {
        '../filter_date/view': {
            type: 'child'
        },
        '../filter_state/view': {
            type: 'child'
        },
        '../filter_supplier/view': {
            type: 'child'
        }
    },
    methods: {
        getAllFilter: function getAllFilter() {
            var nodes = this.data.nodes = [];
            nodes.push.apply(nodes, _toConsumableArray(this.getRelationNodes('../filter_date/view')));
            nodes.push.apply(nodes, _toConsumableArray(this.getRelationNodes('../filter_state/view')));
            nodes.push.apply(nodes, _toConsumableArray(this.getRelationNodes('../filter_supplier/view')));

            nodes.forEach(function (node, idx) {
                node._idx = idx;
                node._key = node.data.key;
                node._value = node.data._value;
                node._name = node.data.name;
            });

            this.setData({ nodes: nodes });
        },
        filterChange: function filterChange(_ref) {
            var currentTarget = _ref.currentTarget;
            var __wxExparserNodeId__ = currentTarget.dataset.item.__wxExparserNodeId__;

            var currentFilter = void 0;

            this.data.nodes.forEach(function (node) {
                node.setData({ show: false });
                if (node.__wxExparserNodeId__ === __wxExparserNodeId__) {
                    currentFilter = node;
                }
            });

            currentFilter.setData({ show: true });
            this.setData({ show: true, currentFilter: currentFilter });
        },
        cancel: function cancel() {
            this.hide();
        },
        confirm: function confirm() {
            this.getAllFilter();
            var _data$currentFilter$d = this.data.currentFilter.data,
                name = _data$currentFilter$d.name,
                value = _data$currentFilter$d.value;


            this.triggerEvent('confirm', { name: name, value: value });
            this.hide();

            console.log(name, value);
        },
        hide: function hide() {
            this.setData({ show: false, currentFilter: {} });
        }
    },
    ready: function ready() {
        this.getAllFilter();
    }
});