let path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8080,
    compress: true,
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '网站名称'
      return args
    })
    config.resolve.alias.set("@", resolve("src"));
    config.resolve.alias.set("@api", resolve("src/api"));
    config.resolve.alias.set("@images", resolve("src/assets/images"));
    // key,value自行定义，比如.set('@@', resolve('src/components'))

    // 生产环境配置
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimize(true)
        .minimizer('terser')
        .tap(args => {
          let { terserOptions } = args[0];
          terserOptions.compress.drop_console = true;
          terserOptions.compress.drop_debugger = true;
          return args
        });
    }
  },

}
