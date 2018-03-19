// 生成环境配置
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //根据模板自动生成首页
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");//清除多余的文件
const moduleConfig = require("module.config");

module.exports = {
    devtool: 'null',//不生成map

    entry: __dirname + "/index.js",//唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle-[hash].js"//打包后输出文件的文件名
    },


    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true,
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /(\.css|\.scss)$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.UglifyJsPlugin(),//js压缩
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("style.css"),//分离CSS和JS文件

        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],

}
