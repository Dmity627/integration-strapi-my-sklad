'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('mysklad-import')
      .service('myService')
      .getWelcomeMessage();
  },
});
