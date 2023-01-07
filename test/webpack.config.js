const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/test.index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'webpack-bundle.js',
    },
    target: 'web',
    devServer: {
        hot: true,
        open: true,
        port: '3000',
        liveReload: true,
        static: {
            directory: path.join(__dirname, 'public')
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader', 
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
}