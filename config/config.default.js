'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    root: [
      path.join(appInfo.baseDir, 'app/view'),
      path.join(appInfo.baseDir, 'app/web'),
    ].join(','),
    cache: appInfo.env !== 'local',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.cluster = {
    listen: {
      path: '',
      port: 8001,
      hostname: '0.0.0.0',
    },
  };

  config.development = {
    reloadPattern: [ '**', '!**/web/**/*.*' ],
  };

  config.devServer = appInfo.env === 'local' && {
    port: 8002,
  };

  config.vue = {
    webPath: '/web',
    outputDir: 'dist',
  };

  config.proxy = appInfo.env === 'local' ? {
    prefix: [ config.vue.webPath, '/sockjs-node' ],
    target: `http://localhost:${config.devServer.port}`,
  } : {};

  config.static = appInfo.env === 'local' ? {} : {
    prefix: config.vue.webPath,
    dir: path.join(appInfo.baseDir, `app/web/${config.vue.outputDir}`),
  };

  return config;
};
