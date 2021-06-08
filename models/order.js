const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const Order = sequelize.define(
  "order",
  {
    order_id: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    datetime_order_placed: {
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
  {}
);
