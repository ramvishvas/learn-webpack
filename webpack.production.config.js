const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        programmer: './src/programmer.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        // path: './dist',
        path: path.resolve(__dirname, 'dist'),
        // prefix to the assets
        publicPath: '',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(scss|sass)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
        }),
    ],
};
