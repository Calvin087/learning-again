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
    }
};

