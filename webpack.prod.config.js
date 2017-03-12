var webpack = require('webpack');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

config.output.publicPath = './dist/';                        // 资源路径,根据需要可改为cdn地址
config.output.filename = '[name].[hash].js';                 // 带hash值的入口js名称
config.output.chunkFilename = '[name].[hash].chunk.js';      // 带hash值的路由js名称

config.module.rules=[
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
    }}
].concat(config.module.rules || []);

config.plugins = (config.plugins || []).concat([
    new ExtractTextPlugin({filename:"[name].[hash].css" allChunks : true}),       // 提取带hash值的css名称
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.[hash].js' }),                     // 提取带hash值的第三方库名称
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({                                                         // 压缩文件
        compress: {
            warnings: false
        },
        sourceMap: true
    }),
    new HtmlWebpackPlugin({                                                                        // 构建html文件
        filename: '../index.html',
        template: './src/template/index.ejs',
        inject: false
    })
]);

// 写入环境变量
fs.open('./src/config/env.js', 'w', function (err, fd) {
    var buf = 'export default "production";';
    fs.write(fd,buf,0,buf.length,0,function(err,written,buffer){});
});

module.exports = config;