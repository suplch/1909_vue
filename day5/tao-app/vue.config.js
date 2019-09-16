module.exports = {
    devServer: {
        // 前端程序猿 配置一个代理服务
        // 当 访问 /Product 打头的请求时 转发给 http://localhost:5000
        proxy: {
            '/Product': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true
            }
        }
    },
    lintOnSave: false // 关闭 eslint 检查
};
