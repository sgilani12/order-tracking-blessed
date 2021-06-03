var orderModel = require('../models/order');

var ordersController={
    orderHome(req,res){
      
      /*mock order for now* TEST*/
      orders = [{id:1,cost:500,items:4},{id:2,cost:600,items:5}]
      res.render('ordersHome', orders)
      }
}

module.exports = ordersController;
