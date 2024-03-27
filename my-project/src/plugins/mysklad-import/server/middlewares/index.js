/**
 * The middleware function previously created
 * is imported from its file and
 * exported by the middlewares index.
 */
'use strict';
const checkUserPermission = require('./check-user-permission');

module.exports = {
  checkUserPermission
};