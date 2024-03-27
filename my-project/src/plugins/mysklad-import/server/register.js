/**
 * The middleware is called from 
 * the plugin's register lifecycle function.
 */
'use strict';
const middlewares = require('./middlewares');

module.exports = ({ strapi }) => {
  strapi.server.use(middlewares.checkUserPermission);
};