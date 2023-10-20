const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'), 
  output: { 
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: true
    })
  ]
}