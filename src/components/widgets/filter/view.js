/* 
filter 过滤器
    1. name 做为过滤器唯一标识。
    2. key 做为title内容(近三天、近七天....)
    3. value 传出的数据
*/

Component({
    data: {
        currentFilter: {},
        nodes: [],
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
        getAllFilter() {
            let nodes = this.data.nodes = [];
            nodes.push(...this.getRelationNodes('../filter_date/view'));
            nodes.push(...this.getRelationNodes('../filter_state/view'));
            nodes.push(...this.getRelationNodes('../filter_supplier/view'));

            nodes.forEach((node, idx) => {
                node._idx = idx;
                node._key = node.data.key;
                node._value = node.data._value;
                node._name = node.data.name;
            });

            this.setData({nodes});
        },
        filterChange({currentTarget}) {
            let {__wxExparserNodeId__} = currentTarget.dataset.item;
            let currentFilter;

            this.data.nodes.forEach(node => {
                node.setData({show: false});
                if(node.__wxExparserNodeId__ === __wxExparserNodeId__) {
                    currentFilter = node;
                }
            });
            
            currentFilter.setData({show: true});
            this.setData({show: true, currentFilter});
        },
        cancel() {
            this.hide();
        },
        confirm() {
            this.getAllFilter();
            let {name, value} = this.data.currentFilter.data;

            this.triggerEvent('confirm', {name, value});
            this.hide();

            console.log(name, value);
        },
        hide() {
            this.setData({show: false, currentFilter: {}});
        }
    },
    ready() {
        this.getAllFilter();
    }
});

  