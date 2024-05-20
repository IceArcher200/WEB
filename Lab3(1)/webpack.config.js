const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/Slider.html',
    mode: 'development',
    module: {
        rules: [
            { test: /\.html$/i, use: 'html-loader' },
            { test: /\.(png|jpeg|gif)$/i, use: 'file-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'WebpackSlider'),
        filename: 'Slider.js'
      },
    plugins: [
        new HtmlWebpackPlugin(
            {template:'./src/Slider.html',}
            
        )
      ]
}