const path = require('path');


module.exports = {
    entry: './lib/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "lib")
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.d.ts' ],
    },
    output: {
        filename: 'data-manager-bundle.js',
        path: path.resolve(__dirname, 'out'),
    },
};