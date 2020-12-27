const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // path: './dist',
        path: path.resolve(__dirname, 'dist'),
        // prefix to the assets
        publicPath: 'dist/',
    },
    mode: 'none',
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
        new TerserPlugin(),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
    ],
};
