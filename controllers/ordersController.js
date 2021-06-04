var orderModel = require('../models/order');

var ordersController={
    orderHome(req,res){
      
      /*mock order for now*/
      orders = [{id:1,cost:500,items:4}]
      res.render('ordersHome', orders)
      }
}