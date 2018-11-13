const {model, regeneratorRuntime, globalData, setParams, ShopCartUtils} = getApp();

//Page Object
Page({
    data: {
        list: [{
            name: '组件示例',
            path: '/components/examples/view',
            detail: true
        }],
    },
    goPage ({currentTarget}) {
        let {path, text} = currentTarget.dataset;

        wx.navigateTo({url: path});
    },
});