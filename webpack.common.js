const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: "automatic" }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader': MiniCssExtractPlugin.loader(),
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      inject: true
    })
  ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ]
  }
}