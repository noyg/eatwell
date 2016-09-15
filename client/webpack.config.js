const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

const config = {
    entry: [
        'es5-shim/es5-shim',
        'es5-shim/es5-sham',
        'babel-polyfill',
        'bootstrap-loader',
        './app/bundles/EatWell/startup/EatWellApp',
    ],

    output: {
        filename: 'webpack-bundle.js',
        path: '../app/assets/webpack',
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv),
            },
        }),
        new ExtractTextPlugin('[name]-bundle.css', {allChunks: true}),
        new webpack.optimize.DedupePlugin(),
    ],
    module: {
        loaders: [
            {
                test: require.resolve('react'),
                loader: 'imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham',
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?minimize&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]' +
                    '!postcss'
                ),
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?minimize&modules&importLoaders=3&localIdentName=[name]__[local]__[hash:base64:5]' +
                    '!postcss' +
                    '!sass' +
                    '!sass-resources'
                ),
            },
            { test: /\.(ttf|eot)$/, loader: 'file' },

            // Example to confirm that subdirectories workƒ√
            { test: /\.(jpe?g|png|gif|svg|ico|woff2?)$/, loader: 'url?limit=10000&name=images/[hash].[ext]' },
            { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'file' },
        ],
    },
    // Place here all postCSS plugins here, so postcss-loader will apply them
    // postcss: [autoprefixer],
    postcss: [autoprefixer],

    // Place here all SASS files with variables, mixins etc.
    // And sass-resources-loader will load them in every CSS Module (SASS file) for you
    // (so don't need to @import them explicitly)
    // https://github.com/shakacode/sass-resources-loader
    sassResources: [
        './app/assets/styles/app-variables.scss',
        './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss',
    ],
};

module.exports = config;

if (devBuild) {
    console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
    module.exports.devtool = 'eval-source-map';
} else {
    config.plugins.push(
        new webpack.optimize.DedupePlugin()
    );
    console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
