const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const webpackMerge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require("path");

const ROOT_PATH = path.resolve(__dirname, '../');
const APP_PATH = path.resolve(ROOT_PATH, 'myapp/src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        vender: ['babel-polyfill','eventsource-polyfill', 'react', 'react-dom'],
        app: APP_PATH
    },
    output: {
        path: BUILD_PATH,
        publicPath: 'dist/',
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
                // "oneOf" will traverse all following loaders until one will
                // match the requirements. When no loader matches it will fall
                // back to the "file" loader at the end of the loader list.
                oneOf: [
                    // "url" loader works like "file" loader except that it embeds assets
                    // smaller than specified limit in bytes as data URLs to avoid requests.
                    // A missing `test` is equivalent to a match.
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve("url-loader"),
                        options: {
                            limit: 10000,
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    },
                    // Process JS with Babel.
                    {
                        test: /\.(js|jsx|mjs)$/,
                        include: APP_PATH,
                        loader: require.resolve("babel-loader"),
                        options: {
                            // This is a feature of `babel-loader` for webpack (not Babel itself).
                            // It enables caching results in ./node_modules/.cache/babel-loader/
                            // directory for faster rebuilds.
                            cacheDirectory: true
                        }
                    },
                    // "postcss" loader applies autoprefixer to our CSS.
                    // "css" loader resolves paths in CSS and adds assets as dependencies.
                    // "style" loader turns CSS into JS modules that inject <style> tags.
                    // In production, we use a plugin to extract that CSS to a file, but
                    // in development "style" loader enables hot editing of CSS.
                    {
                        test: /\.css$/,
                        use: [
                            require.resolve("style-loader"),
                            {
                                loader: require.resolve("css-loader"),
                                options: {
                                    importLoaders: 1
                                }
                            }
                        ]
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            require.resolve("style-loader"),
                            {
                                loader: require.resolve("css-loader"),
                                options: {
                                    importLoaders: 1
                                    //The query parameter importLoaders allows to configure how many loaders before css-loader should be applied to @imported resources.
                                }
                            },
                            {
                                loader: require.resolve("sass-loader"),
                                options: {
                                    importLoaders: 1
                                    //The query parameter importLoaders allows to configure how many loaders before css-loader should be applied to @imported resources.
                                }
                            }
                        ]
                    },
                    // "file" loader makes sure those assets get served by WebpackDevServer.
                    // When you `import` an asset, you get its (virtual) filename.
                    // In production, they would get copied to the `build` folder.
                    // This loader doesn't use a "test" so it will catch all modules
                    // that fall through the other loaders.
                    {
                        // Exclude `js` files to keep "css" loader working as it injects
                        // it's runtime that would otherwise processed through "file" loader.
                        // Also exclude `html` and `json` extensions so they get processed
                        // by webpacks internal loaders.
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        loader: require.resolve("file-loader"),
                        options: {
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    }
                ]
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
        //publicPath: path.resolve(__dirname, "static/dist"),
        proxy: [{
            context: ["/api", "/"],
            target: "http://localhost:5000",
//            bypass: function (req, res, proxyOptions) {
//                if (req.headers.accept.indexOf("html") !== -1) {
//                    console.log("Skipping proxy for browser request.");
//                }
//            }
        }],
        watchContentBase: true
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            // minimize: true,
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: true,
            }
        }),
        new ExtractTextPlugin({
            filename: "css/app.css"
        }),
        new HtmlWebPackPlugin({
            template: path.resolve(APP_PATH, "index.html"),
            filename: path.resolve(ROOT_PATH, "index.html"),
            alwaysWriteToDisk: true,
        }),
        // new HtmlWebPackPlugin({
        //     title: 'Email Editor',
        //     inject: false,
        //     template: path.resolve(APP_PATH, "email.html"),
        //     filename: path.resolve(ROOT_PATH, "email.html"),
        //     alwaysWriteToDisk: true,
        //     files: {
        //         css: ["resource/test.css"],
        //         js: ["resource/test.js"],
        //         chunks: {
        //             head: {
        //                 entry: "resource/test.js",
        //                 css: ["resource/test.css"]
        //             }
        //         }
        //     }
        // }),
        new HtmlWebpackHarddiskPlugin()
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css', '.scss']
    }
}


