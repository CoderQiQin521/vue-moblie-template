module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem": {
      // todo: 排除UI框架可以使用postcss-px2rem-exclude
      remUnit: 75 // 不需要转换rem的单位Px或者PX
    }
  }
};
