const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require("path");

const ROOT_PATH = path.resolve(__dirname, '../');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = webpackMerge({}, {
    entry: {
        vender: ['babel-polyfill', 'eventsource-polyfill', 'react', 'react-dom'],
        app: APP_PATH,
    },
    output: {
        path: BUILD_PATH,
        filename: "js/[name].js",
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                modules: true,
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    limit: 10000,
                },
            }
        ]
    },
    devServer: {
        contentBase: ROOT_PATH,
        historyApiFallback: true,
        overlay: {
            warning: true,
            errors: true
        },
        proxy: [{
            context: ["/api", "/"],
            target: "http://localhost:5000",
        }],
        watchContentBase: true
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin({
            filename: "css/app.css"
        }),
        new HtmlWebPackPlugin({
            template: path.resolve(APP_PATH, "index.html"),
            filename: path.resolve(ROOT_PATH, "index.html"),
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin()
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css', '.scss']
    }
})


