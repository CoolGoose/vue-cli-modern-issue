let assetsDir = "assets";

module.exports = {
  assetsDir: assetsDir,

  configureWebpack: {
    output: {
      filename: assetsDir + "/[name].js",
      chunkFilename: assetsDir + "/[name].js"
    }
  },

  chainWebpack: config => {
    if (config.plugins.has("extract-css")) {
      const extractCSSPlugin = config.plugin("extract-css");
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: assetsDir + "/[name].css",
            chunkFilename: assetsDir + "/[name].css"
          }
        ]);
    }

    // config.plugins
    //   .delete("html")
    //   .delete("prefetch")
    //   .delete("preload");
  }
};
