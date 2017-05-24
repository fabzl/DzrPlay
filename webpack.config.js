module.exports = {
    entry: {
        filename: './main.js'
    },
    output: {
        filename: 'build/bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015']
              }
            }
        ]
    }
};
