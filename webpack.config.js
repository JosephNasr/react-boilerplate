var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        // 'eventsource-polyfill',
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /node-modules/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css/,
            exclude: /node-modules/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }
                }
            ],
        }]
    }
}