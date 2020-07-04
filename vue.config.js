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
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_URL,
        ws: true,
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => addStyleResource(config.module.rule("scss").oneOf(type)));
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      Object.assign(config, {
        // 排除打包文件
        externals: {
          vue: "Vue",
          moment: "moment"
        }
      });
      if (process.env.npm_config_report) {
        // 打包后模块大小分析  npm run build --report
        const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
        config.plugins.push(new BundleAnalyzerPlugin());
      }
    }
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
