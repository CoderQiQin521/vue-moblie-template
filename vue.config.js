const path = require("path");

module.exports = {
  lintOnSave: false,
  css: {
    sourceMap: true
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "vue-template"
    }
  },
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => addStyleResource(config.module.rule("scss").oneOf(type)));
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/style/core.scss")]
    });
}
