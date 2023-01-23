const { defineConfig } = require('@vue/cli-service')
const path = require('path');

const mock = process.env.API_MOCK == '1'
const apiPath = mock ? 'src/api/mock.js' : 'src/api/api.js'

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '~api': path.resolve(__dirname, apiPath)
      }
    }
  }
})
