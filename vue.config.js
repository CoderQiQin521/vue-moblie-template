module.exports = {
  lintOnSave: false,
  css: {
    sourceMap: true
  },
  pages: {
    index: {
      template: 'public/index.html',
      filename: 'index.html',
      title: 'scaffold-vue'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  }
};
