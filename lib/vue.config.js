'use strict';

const path = require('path');

const cwd = process.cwd();

const webDir = path.resolve(cwd, 'app/web');

module.exports = {
  //   baseUrl: './',
  publicPath: 'assets/',

  outputDir: path.resolve(webDir, 'dist'),

  configureWebpack: {
    context: webDir,

    // devServer: {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // },
  },

  // assetsDir: 'static',
  // productionSourceMap: false,
  // devServer: {
  //     proxy: {
  //         '/api':{
  //             target:'http://jsonplaceholder.typicode.com',
  //             changeOrigin:true,
  //             pathRewrite:{
  //                 '/api':''
  //             }
  //         }
  //     }
  // }
};
