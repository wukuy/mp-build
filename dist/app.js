'use strict';

var _runtimeModule = require('./common/lib/runtime-module.js');

var _runtimeModule2 = _interopRequireDefault(_runtimeModule);

var _momentMin = require('./common/lib/moment.min.js');

var _momentMin2 = _interopRequireDefault(_momentMin);

var _pageModel = require('./models/page.model.js');

var _pageModel2 = _interopRequireDefault(_pageModel);

var _util = require('./common/utils/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//app.js
App({
	regeneratorRuntime: _runtimeModule2.default,
	model: _pageModel2.default,
	moment: _momentMin2.default,
	user: '',
	setParams: _util.setParams,
	getParams: _util.getParams,
	globalData: {
		user: ''
	},
	onLaunch: function onLaunch() {
		try {
			var user = wx.getStorageSync('user');
			if (user) this.globalData.user = user;
		} catch (e) {}
	}
});