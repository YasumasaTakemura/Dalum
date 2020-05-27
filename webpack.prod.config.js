const path = require("path");

module.exports = {
  entry: "./dist/babeled-main.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "dist/bundled-main.js",
    path: path.join(__dirname),
  },
};
