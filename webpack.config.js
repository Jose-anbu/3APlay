const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        admin: './src/js/admin.js',
        contacto: './src/js/contacto.js',
        login: './src/js/login.js',
        registro: './src/js/registro.js',
        error404: './src/js/error404.js',
        detallePelicula: './src/js/error404.js',
        acercaDeNosotros: './src/js/error404.js',
        volveralfuturo: './src/js/error404.js',
        robinhood: './src/js/error404.js',
        godzilla: './src/js/error404.js',
        guerramundialz: './src/js/error404.js',
        badboysforlife: './src/js/error404.js',
        forrestgump: './src/js/error404.js',
        jurassicparkiii: './src/js/error404.js',
        elhombredeacero: './src/js/error404.js',
        lamomiaii: './src/js/error404.js',
        elexorcismodeemilyrose: './src/js/error404.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]',
                        },
                    },
                ],
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/admin.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['admin'],
            filename: './admin.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/contacto.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['contacto'],
            filename: './contacto.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/login.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['login'],
            filename: './login.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/registro.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['registro'],
            filename: './registro.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/error404.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['error404'],
            filename: './error404.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/detallePelicula.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['error404'],
            filename: './detallePelicula.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/acercaDeNosotros.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['error404'],
            filename: './acercaDeNosotros.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peliculas/volveralfuturo.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['volveralfuturo'],
            filename: './peliculas/volveralfuturo.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peliculas/robinhood.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['robinhood'],
            filename: './peliculas/robinhood.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peliculas/godzilla.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['godzilla'],
            filename: './peliculas/godzilla.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peliculas/guerramundialz.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['guerramundialz'],
            filename: './peliculas/guerramundialz.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peliculas/badboysforlife.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['badboysforlife'],
            filename: './peliculas/badboysforlife.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peliculas/forrestgump.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['forrestgump'],
            filename: './peliculas/forrestgump.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peliculas/jurassicparkiii.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['jurassicparkiii'],
            filename: './peliculas/jurassicparkiii.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peliculas/elhombredeacero.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['elhombredeacero'],
            filename: './peliculas/elhombredeacero.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peliculas/lamomiaii.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['lamomiaii'],
            filename: './peliculas/lamomiaii.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peliculas/elexorcismodeemilyrose.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            inject: true,
            chunks: ['elexorcismodeemilyrose'],
            filename: './peliculas/elexorcismodeemilyrose.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/img',
                    to: 'img',
                },

            ]
        })

    ],



};
