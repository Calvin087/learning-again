const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: { //babel rules for app
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
    }]
    },
    devtool: 'cheap-module-eval-source-map', // packge that shows me the exact path to errors, not babel files, but mine.
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

