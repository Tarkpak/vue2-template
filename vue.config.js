module.exports = {
    devServer: {
        port: 1998,
        proxy: {
            '/hbpu': {
                target: 'http://www.hbpu.edu.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/hbpu': ''
                }
            },
        }
    }
}
