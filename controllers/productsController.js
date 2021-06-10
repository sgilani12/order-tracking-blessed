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
        res.render('products', {products: data, messages: messages});
        messages = [];
      } 
      
      catch (error) {
        messages = error;
        res.render('products', {messages: messages});
        messages = [];
      }
    });
  },
};

function getErrors(err) {
  var errorArray = err.errors;
  var messageArray = new Array();
  errorArray.forEach(e => {
    messageArray.push(e.message);
  });
  return messageArray;
}

module.exports = productsController;
