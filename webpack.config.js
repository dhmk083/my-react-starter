const {CheckerPlugin} = require('awesome-typescript-loader')

module.exports = () => {
  return {
    mode: 'development',
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
        }
      ]
    },
    plugins: [
      new CheckerPlugin(),
    ],
    devServer: {
      host: '0.0.0.0',
      port: 80,
      historyApiFallback: true,
    }
  }
}