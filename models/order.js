const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const Order = sequelize.define(
  "order",
  {
    order_id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
    },
    time_of_order: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
    },
    order_status_code: {
      type: DataTypes.ENUM("one"),
      allowNull: false,
    },
    total_order_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    order_notes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false //could probably use later to populate time_of_order column
  }
);

module.exports.getOrderList= (cb)=>{
  const allOrders =  Order.findAll()
  .then((data)=> {
    var newData = [];
    data.forEach( (element)=> newData.push(element.dataValues) );
    cb(null, newData);
  });
  
}
