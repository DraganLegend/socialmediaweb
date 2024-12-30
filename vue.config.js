const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081, // 設定前端的開發伺服器端口
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot 後端地址
        changeOrigin: true, // 修改請求的來源，確保符合後端服務器的跨域規則
        /*pathRewrite: { '^/api': '' }, // 可選：將 '/api' 重寫為空，匹配後端路徑*/
      },
    },
  },
});
