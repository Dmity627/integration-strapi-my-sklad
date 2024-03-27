'use strict';

/**
 * product controller
 */
const axios = require('axios');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async getProductsMySklad(ctx) {
    try {
      const response = await axios.get(
        'https://api.moysklad.ru/api/remap/1.2/entity/product',
        {
          headers: {
            'Authorization': 'f4aa49d916001608bc21e330945f49ac2d9bfb8b',
          },
        }
      );

      const products = response.data.rows;

      for (const product of products) {
        try {
          const findedProduct = await strapi.db.query("api::product.product").findOne({
            where: { mySkladId: product.id }
          });

          const data = {
            name: product.name,
            description: product.description,
            price: product.minPrice.value,
            amount: product.minimumBalance,
            mySkladId: product.id,
          };

          if (!findedProduct) {
            await strapi.db.query("api::product.product").create({ data });
          } else {
            await strapi.db.query("api::product.product").update({
              where: { id: findedProduct.id },
              data
            });
          }
        } catch (error) {
          throw new Error(`Error processing product ${product.id}: ${error.message}`);
        }
      }
    } catch (error) {
      throw new Error(`Error fetching products from MySklad API: ${error.message}`);
    }
  }
}));
