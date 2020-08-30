module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "@vue/airbnb", "prettier"],
    plugins: ["prettier"],
    parserOptions: {
        parser: "babel-eslint",
        ecmaFeatures: {
            // 支持装饰器
            legacyDecorators: true,
        },
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
};
