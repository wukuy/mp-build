"use strict";

Component({
    data: {
        show: true
    },
    methods: {
        maskTap: function maskTap() {
            this.setData({
                show: false
            });
        }
    }
});