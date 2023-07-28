const path = require("path");

module.exports = {
  entry: "./index.js", // The entry point of your package's source code
  output: {
    path: path.resolve(__dirname, "dist"), // The output directory for the build files
    filename: "index-built.js", // The name of the built package file
    library: "MyPackage", // The name of the library exported by the package
    libraryTarget: "umd", // The target module format (supports both Node.js and browser)
    umdNamedDefine: true, // Name the UMD module for AMD/RequireJS compatibility
    globalObject: "this", // Set the global object (window in the browser, global in Node.js)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // Additional configuration for optimization, external libraries, etc.
};