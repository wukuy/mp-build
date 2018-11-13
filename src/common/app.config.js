const dev = {
    host: 'https://test.xxxxx.cn',
    api: '/applet'
}
const prod = {
    host: 'https://api.xxxx.cn',
    api: '/applet'
}

module.exports =  process.env.NODE_ENV === 'development' ? dev : prod;
