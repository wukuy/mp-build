'use strict';

var dev = {
    host: 'https://test.xxxxx.cn',
    api: '/applet'
};
var prod = {
    host: 'https://api.xxxx.cn',
    api: '/applet'
};

module.exports = "development" === 'development' ? dev : prod;