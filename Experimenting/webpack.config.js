const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
            /*{
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' }, // creates style nodes from JS strings
                    { loader: 'css-loader' } // translates CSS into CommonJS
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },*/
            {
                test: /\.(scss|css)$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            }
        ]
    },
    plugins: [new UglifyJSPlugin({sourceMap: true}), 
        new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({ 
        template: './public/index.html', 
        filename: './index.html' 
  }),]
};