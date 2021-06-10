var orderModel = require('../models/order');
var customerModel = require('../models/customer');
var productModel = require('../models/product');

var messages = new Array();
var customers = new Array();
var products = new Array();

var ordersController={
    orderHome(req, res) {
        orderModel.getOrderList((err,data)=>{
            try {
                if(err) {
                    messages = getErrors(err);
                }
                res.render('orders', {orders:data, messages: messages});
                messages = [];
            }
            catch (error) {
                messages = getErrors(error);
                res.render('orders', {messages: messages});
                messages = [];
            }
        });
    },
    newOrder(req, res) {
        customerModel.getCustomerList((err,data)=>{
            try {
                if(err) {
                    messages = getErrors(err);
                    res.render('newOrder', {messages: messages});
                    messages = [];
                    } else {
                        customers = data;
                        productModel.getProductList((err, data) => {
                            try {
                              if (err) {
                                messages = getErrors(err);
                                res.render('newOrder', {messages: messages});
                                messages = [];
                              } else {
                                products = data;
                                res.render('newOrder', {customers: customers, products: products, messages: messages});
                                messages = [];
                              }
                            } catch (error) {
                              messages = getErrors(error);
                              res.render('newOrder', {messages: messages});
                              messages = [];
                            }
                          });
                }
            }
            catch (error) {
                messages = getErrors(err);
                res.render('newOrder', {messages, messages});
                messages = [];
            }
        });
    }
}

function getErrors(err) {
    var errorArray = err.errors;
    var messageArray = new Array();
    errorArray.forEach(e => {
      messageArray.push(e.message);
    });
    return messageArray;
  }

module.exports = ordersController;
