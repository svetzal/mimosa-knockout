exports.config = {
  "modules": [
    "copy",
    "jshint",
    "csslint",
    "server",
    "require",
    "minify-js",
    "minify-css",
    "live-reload",
    "less",
    "bower"
  ],
  watch: {
    sourceDir: 'src',
    compiledDir: 'www',
    javascriptDir: 'javascripts'
  }
}
