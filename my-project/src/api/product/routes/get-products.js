module.exports = {
  routes: [
    {
      method: "GET",
      path: "/all-products",
      handler: "product.getProductsMySklad",
      config: {
        // middlewares: ['api::product.check-user-permission']
      }
    },
  ],
};