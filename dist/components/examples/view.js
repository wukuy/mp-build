'use strict';

var _data;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _getApp = getApp(),
    model = _getApp.model,
    moment = _getApp.moment,
    regeneratorRuntime = _getApp.regeneratorRuntime;

Page({
    data: (_data = {
        show: false,
        activeSheetShow: false,
        activeSheetShow1: false,
        activeSheetShow2: false,
        activeSheetShow3: false
    }, _defineProperty(_data, 'show', false), _defineProperty(_data, 'checked', true), _defineProperty(_data, 'treeData', [{
        name: '蔬菜类',
        _active: true,
        childs: [{
            name: '根茎类',
            _active: true
        }, {
            name: '叶菜类',
            _active: false
        }, {
            name: '加果类',
            _active: false
        }]
    }, {
        name: '蔬菜类',
        _active: false,
        childs: [{
            name: '根茎类',
            _active: false
        }, {
            name: '叶菜类',
            _active: false
        }, {
            name: '加果类',
            _active: false
        }]
    }, {
        name: '蔬菜类',
        _active: false,
        childs: [{
            name: '根茎类',
            _active: false
        }, {
            name: '叶菜类',
            _active: false
        }, {
            name: '加果类',
            _active: false
        }]
    }]), _defineProperty(_data, 'value', 99), _data),
    showModal: function showModal() {
        this.setData({
            show: true
        });
    },
    radioChange: function radioChange(_ref) {
        var detail = _ref.detail;

        console.log(detail);
    },
    inputChange: function inputChange(_ref2) {
        var detail = _ref2.detail;

        console.log(detail);
    },
    showToast: function showToast() {
        wx.showToast({
            title: '提示内容'
        });
    },
    showToastNone: function showToastNone() {
        wx.showToast({
            icon: 'none',
            title: '手机号码不能为空'
        });
    },
    activeSheetTap: function activeSheetTap() {
        this.setData({
            activeSheetShow: true
        });
    },
    activeSheetTap1: function activeSheetTap1() {
        this.setData({
            activeSheetShow1: true
        });
    },
    activeSheetTap2: function activeSheetTap2() {
        this.setData({
            activeSheetShow2: true
        });
    },
    activeSheetTap3: function activeSheetTap3() {
        this.setData({
            activeSheetShow3: true
        });
    },
    drawerClose: function drawerClose(_ref3) {
        var currentTarget = _ref3.currentTarget;

        var close = currentTarget.dataset.close;
        this.setData(_defineProperty({}, close, false));
    },
    _switchChange: function _switchChange(_ref4) {
        var detail = _ref4.detail;

        console.log(detail);
    },
    _clickImg: function _clickImg() {
        console.log('点击了图片');
    },
    modifyNoteConfirm: function modifyNoteConfirm(_ref5) {
        var detail = _ref5.detail;

        console.log(detail.value);
    }
});