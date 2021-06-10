const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const Item = sequelize.define(
  "item",
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false
  }
);

module.exports.addItem = (item, cb)=>{
    Items.create({ 
      order_id: item.order_id,
      product_id: item.product_id,
      quantity: item.quantity,
     })
      .then(created => {
        cb(null, created);
      })
      .catch(error => {
        cb(error, null);
      })
};

module.exports.deleteItem = (o_id, p_id, cb) => {
    Item.destroy({ 
        where: { 
            order_id: o_id,
            p_id:  p_id,
        } })
    .then((created) => {
      cb(null, created);
    })
};

/* Foreign Key shenanigans
to be implemented later

Order.hasMany(Item, {
    foreignKey: {
      name: 'order_id'
    }
  });
Item.belongsTo(Order);

Product.hasOne(Item, {
    foreignKey: {
      name: 'product_id'
    }
  });
Item.belongsTo(Product);
*/

/* Table Definition for reference
CREATE TABLE IF NOT EXISTS items (
    order_id int,
    product_id int,
    quantity int,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
); 
products 1:1 items [order_id]
orders   1:M items [product_id]
*/