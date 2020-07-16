module.export = {
    modules: {
        rules: [
            {
                test: /\,scss$/,
                loader: 'sass-loader', //Compiles to CSS
            },
        ],
    },
};