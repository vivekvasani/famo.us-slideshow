// Copies remaining files to places other tasks can use
module.exports = {
  generate: {
    options: {
      basePath: "./dist",
      timestamp: true,
      network: ''
    },
    src: "**/*.*",
    dest: "dist/demo.appcache"
  }
};
