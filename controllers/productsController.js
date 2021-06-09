var productModel = require("../models/product");

var productsController = {
  productHome(req, res) {
    // get products from db as list of objects
    productModel.getProductList((err, data) => {
      try {
        if (err) {
          console.log(err);
        } else {
          res.render("products", { products: data });
        }
      } catch (error) {
        console.log(error);
      }
    });
  },
};

module.exports = productsController;
