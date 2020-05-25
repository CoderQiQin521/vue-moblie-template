module.exports = {
  lintOnSave: false,
  css: {
    sourceMap: true,
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "vue-template",
    },
  },
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
