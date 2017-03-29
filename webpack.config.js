module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        publicPath: '/',
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js",".web.js",".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
  externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}