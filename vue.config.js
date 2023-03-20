module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    devtool: undefined,
  },
  devServer: {
    port: 1998,
    proxy: {
      '/hbpu': {
        target: 'http://www.hbpu.edu.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/hbpu': '',
        },
      },
      '/api': {
        target: 'http://localhost:3001',  // 代理目标地址
        changeOrigin: true,  // 改变源地址
        pathRewrite: {
          '^/api': ''  // 请求地址重写
        }
      }
    },
  },
  lintOnSave: false, //关闭eslint检查
  publicPath: './'
};
