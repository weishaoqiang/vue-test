var webpack = require('webpack');
var Htmlwebpackplugin = require('html-webpack-plugin');
var path = require('path');
// 生成整个文件夹的绝对路径
// var ROOT_PATH = path.resolve(__dirname);
// console.log(ROOT_PATH);
// 通过reslve方法求得文件的资源路径src
// const SRC_PATH = path.resolve(ROOT_PATH,'./src');
module.exports = {
	// 入口文件
	entry: './src/main.js',
	// 出口文件配置
	output: {
		path: path.resolve(__dirname, "build/"),
    filename: 'bundle.[chunkhash].js',
		chunkFilename: '[name]-[chunkhash:8].js'
	},
	devtool: "source-map",
	module: {
		rules:[{
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                    // plugins: ['transform-runtime']
                }
				// include: SRC_PATH
			},{
				test: /\.vue$/,
				loader: 'vue-loader'
			},{
				test: /\.css$/,
				use: 'style-loader!css-loader',
				// include: SRC_PATH
			},{
				test: /\.less$/,
				use: 'style-loader!css-loader!less-loader',
				// include: SRC_PATH
			},{
				test: /\.scss$/,
				use: 'style-loader!css-loader!scss-loader',
				// include: SRC_PATH
			},{
				test: /\.(png|jpg|gif|svg)$/,
				use: 'url?limit=40000'
			}
		]
	},
    plugins: [
    	new webpack.LoaderOptionsPlugin({
    		option:{
    // 			babel: {
				// 	presets: ['es2015'],
				// 	plugins: ['transform-runtime']
				// },
				vue: {
			        loaders: {
			            sass: 'vue-style!css!sass?indentedSyntax',
			            scss: 'vue-style!css!sass'
			        }
			    },
    		}
    	}),
        new Htmlwebpackplugin({
            title: "vue小测试",
            hash: true,
            template: './index1.html',
            inject: 'body',
            filename: './index.html',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.[hash].js'
        })
    ]
}

// module.exports = config;
