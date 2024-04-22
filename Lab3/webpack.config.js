const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './Slider.html',
    
    module: {
        rules: [
        {
            test: /\.html$/i,
            use: ["html-loader"],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
        },  
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        hash: true
    }),
    new webpack.DefinePlugin({
        'process.env': {
          APP_API_URL : JSON.stringify(process.env.APP_API_URL)
        },
    }),
],
    output: {
        path: path.resolve(__dirname, 'webpack-slider'),
        filename: 'webpack-slider.js'
    }
    
};