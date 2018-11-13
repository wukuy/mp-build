Component({
    properties: {
        data: {
            type: Array,
            value: [],
            observer(newVal, oldVal, changedPath) {
                // 初始化状态
                this.forEachTree(newVal, (item) => {
                    item._active === undefined ? false : item._active
                });

                this.setData({
                    classList: newVal
                })
            }
        }
    },
    data: {
        classList: []
    },
    methods: {
        maskTap() {
            this.setData({
                show: active
            });
        },
        activeChange({detail}) {
            console.log(detail);
        },
        handleTap({currentTarget}) {
            let {oneIdx, twoIdx, item} = currentTarget.dataset;
            
            // clear all active to false
            this.forEachTree(this.data.data, (item, parent) => item._active = false);
            this.setData({
                classList: this.data.data
            });

            // update active
            this.setData({
                [`classList[${oneIdx}]._active`]: true
            });
            if(twoIdx !== undefined) {
                this.setData({
                    [`classList[${oneIdx}].childs[${twoIdx}]._active`]: true
                });
            }

            this.triggerEvent('change', item);
        },
        forEachTree(tree, callBack, parent) {
            tree && tree.forEach(item => {
                callBack && callBack(item, parent);
                this.forEachTree(item.childs, callBack, item);
            });
        }
    },
});

  