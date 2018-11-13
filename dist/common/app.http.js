'use strict';

var _runtimeModule = require('./lib/runtime-module.js');

var _runtimeModule2 = _interopRequireDefault(_runtimeModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var config = require('./app.config');


var showLoading = function showLoading(loading) {
    loading = loading === undefined ? true : loading;
    loading && wx.showLoading({ title: '加载中' });
};

// 设置请求头
var setHeader = function setHeader(options) {
    try {
        var user = wx.getStorageSync('user');
        if (user) {
            options.header = {
                'sessionId': user.sessionId,
                'sign': ''
            };
        }
    } catch (e) {}
};

var request = function request(options) {
    options.url = config.host + config.api + options.url;

    var promise = new Promise(function (resolve, reject) {
        showLoading(options.loading);
        setHeader(options);

        wx.request(Object.assign(options, {
            complete: function complete(req) {
                // 关闭加载
                wx.hideLoading();
                wx.stopPullDownRefresh();

                var result = req.data;
                // 返回原始数据
                if (options.raw) {
                    resolve(result);
                } else if (result.code === '0') {
                    resolve(result.data);
                } else if (result.code !== '0') {
                    // 后台异常
                    wx.showModal({
                        title: '提示',
                        content: result.msg,
                        showCancel: false,
                        success: function success() {
                            // 会话失效
                            if (result.code === '10010') {
                                wx.redirectTo({ url: '/pages/my/login/view' });
                                wx.setStorage({ key: 'user', data: '' });
                            }
                        }
                    });
                }
            },
            fail: function fail(req) {
                // 关闭加载
                wx.stopPullDownRefresh();
                wx.hideLoading();

                wx.showModal({
                    title: '提示',
                    content: '网络出错，请刷新重试',
                    showCancel: false
                });
            }
        }));
    });

    return promise;
};

module.exports = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_runtimeModule2.default.mark(function _callee(options) {
        return _runtimeModule2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return request(options);

                    case 2:
                        return _context.abrupt('return', _context.sent);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();