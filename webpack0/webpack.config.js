const path = require('path');
const glob = require('glob');
const webpack = require('webpack')
const HtmlPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
    //开发环境配置'production'上线时候用
    mode: 'development',
    entry: {
        //入口相对路径
        index: './src/index.js',
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:9000,
        open:true

    },
    output: {
        //出口文件绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'http://localhost:9000/'//设置图片的绝对路径
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeEmptyAttributes: true
            },
            hash:true,
            template:'./src/index.html'
        }),
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        //清除未使用的css
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname,'./src/*.html'))
        }),
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],
    module:{
        rules: [
            {
                test:/\.css$/,
                // use:['style-loader','css-loader'],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1 }
                    },
                    'postcss-loader'
                ],
            },{
                //针对图片文件的处理规则 用//包着
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath: 'images/',
                        esModule: false,
                    }
                }]
            },{
                test:/\.(html|htm)$/i,
                loader: 'html-withimg-loader'
            }, {
                test: /\.scss$/,
                // use:['style-loader','css-loader','sass-loader'],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },{
                //针对JS文件的处理（s5->es6)
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                         presets: ['@babel/preset-env']
                    }
                }],
                //排除node-moudles里的js文件
                exclude: /node_modules/
            },
        ]
    },

}
