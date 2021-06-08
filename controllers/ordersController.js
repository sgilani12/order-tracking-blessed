var orderModel = require('../models/order');

var ordersController={
  orderHome(req, res) {
    orderModel.getOrderList((err,data)=>{
        try {
            if(err) {
                console.log(err)
            } else {
               console.log(data);
               res.render('orders', {orders:data});
            }
        }
        catch (error) {
            console.log(error)
        }
    });
},
}

module.exports = ordersController;
