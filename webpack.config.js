var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");

module.exports = {

    entry: {
        polyfills: './src/polyfills.ts',
        app: "./src/app/main.ts",
        vendor: "./src/vendor.ts"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loader: "style!css?sourceMap!sass?sourceMap"
            }
        ],
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ]
};