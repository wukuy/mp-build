import regeneratorRuntime from './common/lib/runtime-module.js';
import moment from './common/lib/moment.min.js';
import model from './models/page.model.js';
import {setParams, getParams, ShopCartUtils} from './common/utils/util.js';

//app.js
App({
	regeneratorRuntime,
	model,
	moment,
	user: '',
	setParams,
	getParams,
	globalData: {
		user: ''
	},
	onLaunch: function () {
		try {
			var user = wx.getStorageSync('user')
			if (user) this.globalData.user = user;
		} catch (e) {}
	}
})