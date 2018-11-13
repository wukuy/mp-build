'use strict';

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
        handleTap: function handleTap() {
            var item = this.getRelationNodes('../collapse_item/view');
        }
    }
});