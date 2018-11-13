"use strict";

Component({
    properties: {
        // round, arc
        shape: String,
        type: String,
        disabled: {
            type: Boolean,
            value: false
        },
        ghost: {
            type: Boolean,
            value: false
        },
        long: {
            type: Boolean,
            value: false
        },
        // l(large)、s(small)
        size: String
    },
    methods: {}
});