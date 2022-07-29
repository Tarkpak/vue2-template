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
    },
  },
  lintOnSave: false, //关闭eslint检查
  publicPath: './'
};
