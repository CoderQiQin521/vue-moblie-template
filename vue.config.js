/*
 * @Author: coderqiqin@aliyun.com
 * @Date: 2020-07-04 09:23:45
 * @Last Modified by: CoderQiQin
 * @Last Modified time: 2020-08-31 11:28:43
 * vue-clie文档: https://cli.vuejs.org/zh/
 * postcss-px2rem: px自动转rem
 * CDN: 生产环境使用cdn资源
 * webpack-bundle-analyzer: 资源分析
 * compression-webpack-plugin: 开启gzip
 * uglifyjs-webpack-plugin: 生产环境清除console
 */
const { resolve } = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

let cdn = {
    css: [],
    js: [
        "https://uufefile.uupt.com/CDN/js/babel-polyfill.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js",
        "https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vuex/3.2.0/vuex.js",
        "https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.js",
    ],
};

module.exports = {
    publicPath: "",
    css: {
        sourceMap: true, // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
        loaderOptions: {
            // 向 CSS 相关的 loader 传递选项(css-loader,postcss-loader,sass-loader,less-loader,stylus-loader)
            css: {},
            postcss: {
                plugins: [
                    require("postcss-px2rem-exclude")({
                        // todo: 排除UI框架可以使用postcss-px2rem-exclude
                        exclude: /node_modules/,
                        remUnit: 75, // 不需要转换rem的单位Px或者PX
                    }),
                ],
            },
        },
    },
    // pages: {
    //   index: {
    //     entry: "src/main.js"
    //     // template: "public/index.html", // 模板来源
    //     // filename: "index.html",
    //     // title: "vue-template",
    //     // cdn: {}
    //   }
    // },
    lintOnSave: false,
    filenameHashing: true, //文件名中包含了 hash 以便更好的控制缓存,默认true
    outputDir: process.env.VUE_APP_OUTPUT_DIR,
    productionSourceMap: false,
    devServer: {
        // disableHostCheck: true,
        proxy: {
            "/": {
                target: process.env.VUE_APP_PROXY,
                ws: true,
                changeOrigin: true,
            },
        },
    },
    chainWebpack: (config) => {
        // Webpack配置另一种写法—— webpack-chain（链式操作）

        // 配置别名(弊端:无法直接定位到文件内)
        config.resolve.alias.set("@", resolve("src")).set("common", resolve("src/common"));

        // 参考链接https://cli.vuejs.org/zh/guide/webpack.html#修改插件选项
        if (isProduction) {
            config.plugin("html").tap((args) => {
                args[0].cdn = cdn;
                return args;
            });
        }

        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        types.forEach((type) => addStyleResource(config.module.rule("scss").oneOf(type)));
    },
    configureWebpack: (config) => {
        if (isProduction) {
            // 排除打包文件
            Object.assign(config, {
                externals: {
                    vue: "Vue",
                    "vue-router": "VueRouter",
                    vuex: "Vuex",
                    moment: "momoent",
                    axios: "axios",
                    jquery: "jquery",
                },
            });
            if (process.env.npm_config_report) {
                // 打包后模块大小分析  npm run build --report
                const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
                    .BundleAnalyzerPlugin;
                config.plugins.push(new BundleAnalyzerPlugin());
            }

            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: "[path].gz[query]",
                    algorithm: "gzip",
                    test: /\.js$|\.html$|\.css$/,
                    threshold: 10240, // 对超过10k文件进行压缩
                    minRatio: 0.8,
                    deleteOriginalAssets: false, // 是否删除源文件
                }),
                new UglifyjsWebpackPlugin({
                    uglifyOptions: {
                        compress: {
                            // warnings: false,
                            drop_debugger: true,
                            drop_console: true,
                        },
                    },
                    sourceMap: false,
                    parallel: true,
                })
            );
        }
    },
};

function addStyleResource(rule) {
    rule.use("style-resource")
        .loader("style-resources-loader")
        .options({
            patterns: [resolve(__dirname, "./src/assets/style/core.scss")],
        });
}
