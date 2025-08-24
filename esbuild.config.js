const build = require("./config/esbuild.defaults.js")

/**
 * @typedef { import("esbuild").BuildOptions } BuildOptions
 * @type {BuildOptions}
 */
const esbuildOptions = {
  plugins: [
    // add new plugins here...
  ],
  globOptions: {
    excludeFilter: /\.(dsd|lit)\.css$/
  },
  entryPoints: [
    "./frontend/javascript/index.js",
    "./frontend/javascript/carousel.js",
  ]
}

build(esbuildOptions)