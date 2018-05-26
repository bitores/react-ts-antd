module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: 'dist'
    },

    mode:'development',

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",



    devServer: {
        port: 3000,
        historyApiFallback: true,
        inline: true,
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json","less","css"]
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                  'style-loader',
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  {loader: 'less-loader', options: {javascriptEnabled: true}}
                ]
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};