
module.exports = {
  // 部署应用时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  outputDir: 'dist',

  assetsDir: './',

  indexPath: 'index.html',

  filenameHashing: true,

  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',

      template: 'public/index.html',

      filename: 'index.html',

      title: 'home',

      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },

    subpage: 'src/main.js'
  },

  lintOnSave: process.env.NODE_ENV !== 'production',

  runtimeCompiler: false,

  transpileDependencies: [],

  productionSourceMap: true,

  crossorigin: '',

  integrity: false,

  configureWebpack: {},

  chainWebpack: () => { },

  devServer: {
    open: false,
    port: 8080,
    // 跨域
    proxy: {
        '/api/': {
            target: 'http://3x240443s6.zicp.vip:30301',
            changeOrigin: true
        }
    }
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  pluginOptions: {}
};
