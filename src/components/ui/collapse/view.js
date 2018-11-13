Component({
    data: {
        show: true
    },
    relations: {
        '../collapse_item/view': {
            type: 'child'
        }
    },
    methods: {
        handleTap() {
            let item = this.getRelationNodes('../collapse_item/view');
        }
    },
});

  