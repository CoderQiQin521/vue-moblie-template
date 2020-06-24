module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem": {
      remUnit: 75 // 不需要转换rem的单位Px或者PX
    }
  }
};
