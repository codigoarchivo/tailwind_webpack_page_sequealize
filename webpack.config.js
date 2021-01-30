const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js'
    },
    output: {
        filename: '[name].build.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }]
                        ]
                    }
                }
            }
        ]
    }
}