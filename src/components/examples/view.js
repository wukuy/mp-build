const {model, moment, regeneratorRuntime} = getApp();

Page({
    data: {
        show: false,
        activeSheetShow: false,
        activeSheetShow1: false,
        activeSheetShow2: false,
        activeSheetShow3: false,
        show: false,
        checked: true,
        treeData: [{
            name: '蔬菜类',
            _active: true,
            childs: [{
                name: '根茎类',
                _active: true,
            }, {
                name: '叶菜类',
                _active: false,
            }, {
                name: '加果类',
                _active: false,
            }]
        }, {
            name: '蔬菜类',
            _active: false,
            childs: [{
                name: '根茎类',
                _active: false,
            }, {
                name: '叶菜类',
                _active: false,
            }, {
                name: '加果类',
                _active: false,
            }]
        }, {
            name: '蔬菜类',
            _active: false,
            childs: [{
                name: '根茎类',
                _active: false,
            }, {
                name: '叶菜类',
                _active: false,
            }, {
                name: '加果类',
                _active: false,
            }]
        }],
        value: 99
    },
    showModal() {
        this.setData({
            show: true
        });
    },
    radioChange({detail}) {
        console.log(detail);
    },
    inputChange({detail}) {
        console.log(detail);
    },
    showToast() {
        wx.showToast({
            title: '提示内容'
        });
    },
    showToastNone() {
        wx.showToast({
            icon: 'none',
            title: '手机号码不能为空'
        });
    },
    activeSheetTap() {
        this.setData({
            activeSheetShow: true
        });
    },
    activeSheetTap1() {
        this.setData({
            activeSheetShow1: true
        });
    },
    activeSheetTap2() {
        this.setData({
            activeSheetShow2: true
        });
    },
    activeSheetTap3() {
        this.setData({
            activeSheetShow3: true
        });
    },
    drawerClose({currentTarget}) {
        let close = currentTarget.dataset.close;
        this.setData({
            [close]: false
        });
    },
    _switchChange({detail}) {
        console.log(detail)
    },
    _clickImg() {
        console.log('点击了图片')
    },
    modifyNoteConfirm({detail}) {
        console.log(detail.value);
    }
});