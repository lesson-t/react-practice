const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
  entry: "./src/js/index.tsx",
  output: {
    path: `${__dirname}/dist/`,
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        // 拡張子 css のファイル（正規表現）;
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // 拡張子.ts .tsx の場合
        test: /(\.ts|\.tsx)$/,
        // TypeScriptをコンパイルする
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // テンプレートに使用するhtmlファイルを指定
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    // 拡張子を配列で指定
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
}
