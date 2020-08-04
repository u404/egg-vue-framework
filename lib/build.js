'use strict';

const path = require('path');
const spawn = require('cross-spawn');

const cwd = process.cwd();

const context = path.resolve(cwd, 'app/web');

spawn('vue-cli-service', [ 'build' ], {
  stdio: [ 'inherit', 'pipe', 'inherit' ],
  env: {
    // VUE_CLI_SERVICE_CONFIG_PATH: path.resolve(__dirname, 'vue.config.js'),
    VUE_CLI_CONTEXT: context,
  },
  cwd: context,
});
