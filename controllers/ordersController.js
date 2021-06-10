var orderModel = require('../models/order');

var ordersController={
  orderHome(req, res) {
    orderModel.getOrderList((err,data)=>{
        try {
            if(err) {
            } else {
               res.render('orders', {orders:data});
            }
        }
        catch (error) {
        }
    });
},
}

module.exports = ordersController;
