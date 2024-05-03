const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "dist"),
  },
};
