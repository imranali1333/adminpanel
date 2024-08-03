const path = require('path');

module.exports = {
    // Other Webpack configurations...
    resolve: {
        fallback: {
            "querystring": false, 
            "path": require.resolve("path-browserify"),
            "buffer": require.resolve("buffer/"),
        },
        alias: {
            '~antd': path.resolve(__dirname, 'node_modules/antd')
        },
        extensions: ['.js', '.jsx', '.less', '.css']
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            }
        ]
    }
};
