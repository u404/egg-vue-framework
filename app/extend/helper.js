
'use strict';

const httpProxy = require('http-proxy');
const PROXYSERVER = Symbol('context#proxyServer');

module.exports = {

  proxyWeb(target, options = {}) {
    const { ctx } = this;

    if (!this[PROXYSERVER]) {
      this[PROXYSERVER] = httpProxy.createProxyServer({});
    }

    const { path } = options;

    if (path) {
      ctx.req.url = path;
    }

    this[PROXYSERVER].web(ctx.req, ctx.res, {
      target,
    });
    ctx.respond = false;
  },

  async renderWebApp() {
    const { ctx } = this;
    const { config } = this.app;
    if (config.env === 'local') {
      ctx.helper.proxyWeb(`http://localhost:${config.devServer.port}`, {
        path: `${config.vue.webPath}/index.html`,
      });
    } else {
      await ctx.render(`${config.vue.outputDir}/index.html`);
    }
  },

};
