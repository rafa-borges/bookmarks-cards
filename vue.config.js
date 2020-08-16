process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_VERSION_DATE = new Date().toLocaleDateString()

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}
