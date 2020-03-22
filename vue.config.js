
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.NODE_ENV !== 'production',

  pwa: {
    workBoxOption: {
      skipWaiting: true,
      clientsClain: true
    },
    themeColor: '#15355E'
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/scss/main.scss";
        `
      }
    }
  }
}
