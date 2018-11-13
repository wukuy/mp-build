const config = require('./app.config');
import regeneratorRuntime from './lib/runtime-module.js';

const showLoading = (loading) => {
    loading = loading === undefined ? true : loading;
    loading && wx.showLoading({title: '加载中'});
}

// 设置请求头
const setHeader = (options) => {
    try {
        var user = wx.getStorageSync('user')
        if (user) {
            options.header = {
                'sessionId': user.sessionId,
                'sign': '',
            }
        }
    } catch (e) {}
}

const request = (options) => {
    options.url = config.host + config.api + options.url;

    const promise = new Promise((resolve, reject) => {
        showLoading(options.loading);
        setHeader(options);

        wx.request(Object.assign(
            options,
            {
                complete(req) {
                    // 关闭加载
                    wx.hideLoading();
                    wx.stopPullDownRefresh();

                    let result = req.data;
                    // 返回原始数据
                    if(options.raw) {
                        resolve(result);
                    } else if(result.code === '0') {
                        resolve(result.data);
                    } else if(result.code !== '0') {
                        // 后台异常
                        wx.showModal({
                            title: '提示',
                            content: result.msg,
                            showCancel: false,
                            success() {
                                // 会话失效
                                if(result.code === '10010') {
                                    wx.redirectTo({url: '/pages/my/login/view'});
                                    wx.setStorage({key: 'user', data: ''});
                                }
                            }
                        });
                    }
                },
                fail(req) {
                    // 关闭加载
                    wx.stopPullDownRefresh();
                    wx.hideLoading();

                    wx.showModal({
                        title: '提示',
                        content: '网络出错，请刷新重试',
                        showCancel: false
                    });
                }
            }
        ));
    });

    return promise;
};

module.exports = async (options) => {
    return await request(options);
}
