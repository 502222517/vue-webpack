var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        main: './src/main',
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path: path.join(__dirname, 'dist')
    },
    // 加载器
    module: {
        rules: [
            { test: /\.vue$/, loader:'vue-loader',options:{
                loaders: {
                    css: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: ["css-loader?sourceMap"],
                            publicPath: "../dist/"
                        }),
                    less: ExtractTextPlugin.extract({
                            fallback:'vue-style-loader',
                            use:['css-loader','less-loader']
                        }),
                    sass: ExtractTextPlugin.extract({
                        fallback:'vue-style-loader',
                        use:['css-loader','sass-loader']
                    })
                }
            }},
            { test: /\.js$/, use: 'babel-loader',exclude: /node_modules/},
            { test: /\.css$/, use:['style-loader','css-loader','autoprefixer-loader']},
            { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader?sourceMap']},
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, use:['url-loader?limit=8192']},
            { test: /\.(html|tpl)$/, use: 'html-loader' }
        ]
    },
    // 转es5
    /*babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },*/
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            vue:'vue/dist/vue.js', // vue.js
            libs: path.join(__dirname, './src/libs'),
            filters: path.join(__dirname, './src/filters'),
            directives: path.join(__dirname, './src/directives'),
            components: path.join(__dirname, './src/components'),
            views: path.join(__dirname, './src/views')
        }
    },
    plugins: [

    ]
};