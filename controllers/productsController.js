var productModel = require("../models/product");

var messages = new Array();

var productsController = {
  productHome(req, res) {
    // get products from db as list of objects
    productModel.getProductList((err, data) => {
      try {
        if (err) {
          messages = getErrors(err);
        }
        res.render("products", { products: data, messages: messages });
        messages = [];
      } catch (error) {
        messages = error;
        res.render("products", { messages: messages });
        messages = [];
      }
    });
  },

  updateProduct(req, res) {
    try {
      const product = {
        sku: req.body.sku,
        price: req.body.price,
        product_name: req.body.product_name,
        quantity: req.body.quantity,
        description: req.body.description,
      };
      const id = req.params["id"];
      productModel.updateProduct(id, product, (err, success) => {
        if (err) {
          messages = getErrors(err);
          res.redirect("/products"); // whichever page the update form is on
        } else if (success == 1) {
          messages = ["Product successfully updated"];
          res.redirect("/products");
        } else {
          messages = ["An Error Has Occured"];
          res.redirect("/products");
        }
      });
    } catch (error) {
      messages = error;
      res.redirect("/products");
    }
  },
};

function getErrors(err) {
  var errorArray = err.errors;
  var messageArray = new Array();
  errorArray.forEach((e) => {
    messageArray.push(e.message);
  });
  return messageArray;
}

module.exports = productsController;
