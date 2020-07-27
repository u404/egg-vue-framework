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

  config.devServer = appInfo.env === 'local' && {
    port: 8002,
  };

  config.httpProxy = appInfo.env === 'local' && {
    '/assets': `http://localhost:${config.devServer.port}`,
    '/sockjs-node': `http://localhost:${config.devServer.port}`,
  };

  config.development = {
    reloadPattern: [ '**', '!**/web/**/*.*' ],
  };

  config.static = appInfo.env === 'prod' ? {
    prefix: '/assets/',
    dir: path.join(appInfo.baseDir, 'app/web/dist'),
  } : {};

  return config;
};
