'use strict';

module.exports = async (ctx, next) => {
  // if(ctx.s.url === '/api/all-products') {
  //   if (ctx.state.user.role !== 'SuperAdmin') {
  //     return ctx.forbiddenRequest('Access denied')
  //   }
  // } 

  await next();
};