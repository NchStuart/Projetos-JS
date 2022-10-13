const path = require('path'); // CommongJS - Sistema de modulos

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'public','assets','js'),
        filename: 'bunble.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            },
            test: /\.css$/,
            use: ['style-loader','css-loader']

        }]
    },
    devtool: 'source-map'
};

