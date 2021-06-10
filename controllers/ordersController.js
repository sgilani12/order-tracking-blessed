var orderModel = require('../models/order');
var productModel = require('../models/product');
var itemModel = require('../models/item');


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
  addOrder(req, res) {
      try {

        const products = req.body.products;

        const newOrder = {
          customer_id: parseInt(req.body.customer_id),
          order_status_code: "Open",
          order_notes: req.body.order_notes,
          total_order_price: req.body.price //might change dep on front-end 
      };
      orderModel.createOrder(newOrder, (err, created) => {
          if (err) {
              //some error message
              console.log("____ERROR Creating Order___");
              console.log(err);
              res.redirect('/orders/add') 
          } else {
              if (created){
                  const o_id = created.order_id;
                  for (const id in products) {
                    const item = {
                        order_id: o_id,
                        product_id: parseInt(id),
                        quantity: products[id]
                    };
                    itemModel.addItem(item, (err, created) => {
                        if (created) {
                            console.log("____Item Created_____");
                        }
                    });
                  };
                    res.redirect('/orders');
              }
              else {
                  console.log("____Order not created____");//some other error messages
                  res.redirect('/orders/add') 
              }
          }
      })
    }
    catch (error) {
        console.log("_____CAUGHT ERROR____");
        console.log(error);
    }
  }
}

module.exports = ordersController;
