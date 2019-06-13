'use strict'
const path = require('path')
const config = require('./src/config')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = config.title || '天堰大数据v 0.0.1' // page title
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                '@': resolve('src'),
                '@api': resolve('src/api'),
                '@cp': resolve('src/components'),
                '@view': resolve('src/views')
            }
        },
        externals: {
            "BMap": "BMap",
            "BMap_Symbol_SHAPE_POINT": "BMap_Symbol_SHAPE_POINT"
        },
    },
    chainWebpack: config => {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

        // set preserveWhitespace
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end()

        config
            // https://webpack.js.org/configuration/devtool/#development
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-source-map')
            )
    },
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        https: false,
        proxy: {
            '/api': {
                target: '',
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/api-weather': {
                target: 'https://free-api.heweather.net/s6/weather',
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api-weather': ''
                }
            }
        }
    }
}