var orderModel = require("../models/order");
var productModel = require("../models/product");
var itemModel = require("../models/item");

var customerModel = require("../models/customer");
var productModel = require("../models/product");

var messages = new Array();
var customers = new Array();
var products = new Array();

var ordersController = {
  orderHome(req, res) {
    orderModel.getOrderList((err, data) => {
      try {
        if (err) {
          messages = getErrors(err);
        }
        res.render("orders", { orders: data, messages: messages });
        messages = [];
      } catch (error) {
        messages = getErrors(error);
        res.render("orders", { messages: messages });
        messages = [];
      }
    });
  },
  addOrder(req, res) {
    try {
      const products = req.body.products;
      const newOrder = {
        customer_id: parseInt(req.body.customer_id),
        order_status_code: req.body.status,
        order_notes: req.body.order_notes,
        total_order_price: req.body.total_price,
      };
      orderModel.createOrder(newOrder, (err, created) => {
        if (err) {
          messages = getErrors(err);
          res.redirect("/orders/add");
        } else {
          if (created) {
            const o_id = created.order_id;
            for (const id in products) {
              const item = {
                order_id: o_id,
                product_id: parseInt(products[id].id),
                quantity: products[id].quantity,
              };
              itemModel.addItem(item, (err, created) => {
                if (created) {
                  console.log("____Item Created_____");
                }
              });
            }
            res.redirect("/orders");
          } else {
            messages = ["An Error Has Occured"];
            res.redirect("/orders/add");
          }
        }
      });
    } catch (error) {
      messages = error;
      res.redirect("/orders/add");
    }
  },
  newOrder(req, res) {
    customerModel.getCustomerList((err, data) => {
      try {
        if (err) {
          messages = getErrors(err);
          res.render("newOrder", { messages: messages });
          messages = [];
        } else {
          customers = data;
          productModel.getProductList((err, data) => {
            try {
              if (err) {
                messages = getErrors(err);
                res.render("newOrder", { messages: messages });
                messages = [];
              } else {
                products = data;
                res.render("newOrder", {
                  customers: customers,
                  products: products,
                  messages: messages,
                });
                messages = [];
              }
            } catch (error) {
              messages = error;
              res.render("newOrder", { messages: messages });
              messages = [];
            }
          });
        }
      } catch (error) {
        messages = error;
        res.render("newOrder", { messages, messages });
        messages = [];
      }
    });
  },

  updateOrder(req, res) {
    try {
      const order = {
        order_status_code: req.body.order_status,
        order_notes: req.body.order_notes,
      };
      const id = req.params["id"];

      orderModel.updateOrder(id, order, (err, success) => {
        if (err) {
          messages = getErrors(err);
          res.redirect("/orders"); // whichever page the update form is on
        } else if (success == 1) {
          messages = ["Order successfully updated"];
          res.redirect("/orders");
        } else {
          messages = ["An Error Has Occured"];
          res.redirect("/orders");
        }
      });
    } catch (error) {
      messages = error;
      res.redirect("/orders");
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

module.exports = ordersController;
