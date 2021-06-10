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
  orderNew(req, res) {
      try {
        
      const newOrder = {
          customer_id: parseInt(req.body.customer_id),
          order_status_code: "Open",
          order_notes: req.body.order_notes
      }
      console.log("____This is newOrder____");
      console.log(newOrder);
      const products = req.body.products; //might not be req.body likely .Data.products or something
      console.log("___This is productsObj____");
      console.log(products);
      orderModel.createOrder(newOrder, (err, created) => {
          if (err) {
              //some error message
              console.log("____ERROR Creating Order___");
              console.log(err);
              res.redirect('/orders/add') //change when routes updated
          } else {
              if (created){
                  //create items
                  console.log("____Order Created____");
                  console.log(created);
                  const order_id = created.order_id;
                  let total_price = 0.0;
                  for (const id in products) { //might have to tweak dep on products format
                    const item = {
                        order_id: order_id,
                        product_id: parseInt(id),
                        quantity: products[id]
                    }
                    itemModel.createItem(item, (err, created) => {
                        if (created) {
                            console.log("____Item Created_____");
                            const id = created.product_id;
                            console.log(id);
                            productModel.findByPk(id).then(product => {
                                total_price += product.price * created.quantity;
                                console.log(total_price);
                              })
                        }
                    })
                  };
                  console.log("Out of loop");
                  console.log(total_price);
                  //update total_order_price with item quantities and prod pricing
                  //probably will have to add getPrice function to product model that grabs price for certain id
                  res.redirect('/orders')
              }
              else {
                  console.log("____Order not created____");//some other error messages
                  res.redirect('/orders/add') //must change to /orders/add when routes updated
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
