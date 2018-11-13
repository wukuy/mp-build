'use strict';

Component({
    properties: {
        value: {
            type: [String, Number],
            value: ''
        },
        placeholder: {
            type: String,
            value: '搜索商品名称'
        }
    },
    data: {
        // 节流阀
        time: null
    },
    methods: {
        changKeyboard: function changKeyboard(_ref) {
            var _this = this;

            var detail = _ref.detail;

            this.data.time && clearInterval(this.data.time);

            this.data.value = detail.value;
            if (!detail) return;

            // 开启节流阀
            this.data.time = setInterval(function () {
                _this.triggerEvent('change', detail.value);
                clearInterval(_this.data.time);
            }, 500);
        },
        voice: function voice() {
            var _this2 = this;

            var recorderManager = wx.getRecorderManager();
            // 录音开始回调
            recorderManager.onStart(function () {
                // console.log('recorder start')
            });
            // 录音暂停回调
            recorderManager.onPause(function () {
                // console.log('recorder pause')
            });
            // 录音结束回调
            recorderManager.onStop(function (res) {
                // console.log('recorder stop', res)
                var tempFilePath = res.tempFilePath;

                _this2.setVoice(tempFilePath);
            });
            // 指定frameSize(指定帧)会有回调
            recorderManager.onFrameRecorded(function (res) {
                // const {frameBuffer} = res
                // console.log('frameBuffer.byteLength', frameBuffer.byteLength)
            });

            /*
            * 参数说明:
            * duration: 录制时长，秒为单位
            * sampleRate: 采样率，官方示例 44100
            * numberOfChannels: 录音通道数， 官方示例 1
            * encodeBitRate: 编码码率
            * format: 音频格式 默认 aac
            * frameSize: 指定帧
            */
            var options = {
                duration: 3000,
                sampleRate: 44100,
                numberOfChannels: 1,
                encodeBitRate: 192000,
                format: 'aac',
                frameSize: 50
                // 启动录音功能
            };recorderManager.start(options);
        },

        // 播放音频
        setVoice: function setVoice(tempFilePath) {
            console.log('进入播放');
            console.log(tempFilePath);
            var innerAudioContext = wx.createInnerAudioContext();
            innerAudioContext.autoplay = true;
            innerAudioContext.src = tempFilePath;
            // 音频开始播放回调函数
            innerAudioContext.onPlay(function () {
                console.log('开始播放');
            });
            // 播放失败回调
            innerAudioContext.onError(function (res) {});
        }
    }
});