const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 70000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                },
            ],
        }),
        new WebpackPwaManifest({
            filename: 'manifest.json',
            name: 'Restaurant Catalogue App',
            short_name: 'Restaurant Catalogue',
            description: 'Find your best resto',
            background_color: '#FFFFFF',
            theme_color: '#E54750',
            start_url: './index.html',
            crossorigin: 'use-credentials',
            publicPath: '/',
            icons: [
                {
                    src: path.resolve('src/public/icons/android-icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                    type: 'image/png',
                    destination: path.join('icons', 'android'),
                    purpose: 'maskable'
                },
                {
                    src: path.resolve('src/public/icons/ios-icon.png'),
                    sizes: [120, 152, 167, 180],
                    type: 'image/png',
                    destination: path.join('icons', 'ios'),
                    ios: true,
                    purpose: 'maskable',
                },
            ],
        }),
    ],
};
