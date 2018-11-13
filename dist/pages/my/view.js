'use strict';

var _getApp = getApp(),
    model = _getApp.model,
    regeneratorRuntime = _getApp.regeneratorRuntime,
    globalData = _getApp.globalData,
    setParams = _getApp.setParams,
    ShopCartUtils = _getApp.ShopCartUtils;

//Page Object


Page({
    data: {
        list: [{
            name: '组件示例',
            path: '/components/examples/view',
            detail: true
        }]
    },
    goPage: function goPage(_ref) {
        var currentTarget = _ref.currentTarget;
        var _currentTarget$datase = currentTarget.dataset,
            path = _currentTarget$datase.path,
            text = _currentTarget$datase.text;


        wx.navigateTo({ url: path });
    }
});