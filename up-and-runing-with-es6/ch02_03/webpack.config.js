var webpack = require('webpack');
module.exports = {
    entry: './script.js',
    entry: ["babel-polyfill", "./script.js"],
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['env']
            }
        }]
    }
};