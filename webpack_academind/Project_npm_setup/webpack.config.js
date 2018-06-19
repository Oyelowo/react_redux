const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.jsx',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    }
};