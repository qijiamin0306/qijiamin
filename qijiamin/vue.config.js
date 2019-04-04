module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'qijiamin/dist'
    : '/',
  indexPath: 'index.html',
  pages: {
    index: {
      entry: 'src/main.js',
      filename: 'index.html'
    }
  },
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }

}
