const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: process.env.PORT,
    proxy: process.env.BASE_URL,
  },
  transpileDependencies: true
})
