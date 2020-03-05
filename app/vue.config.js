module.exports = {
    devServer: {
        //disableHostCheck: true,
        compress: true,
        public: 'www.fengjijiao.cn',//将localhost:8001重定向到www.fengjijiao.cn
        host: 'localhost',
        port: 8001,
        allowedHosts: [
            'www.fengjijiao.cn'
        ]
    },
    pages: {
        index: {
            entry: 'src/main.js',
            title: "fengjijiao"
        }
    }
}
