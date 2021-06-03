const { Sequelize, DataTypes } = require("sequelize");
const Customer = require('customer')
const sequelize = new Sequelize("database", "username", "password", {
  dialect: "mysql",
});

const Order = sequelize.define(
  "order",
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey = true,
      autoIncrement = true,
    },
    datetime_order_placed: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: 'customers',
      referencesKey: 'customer_id',
    },
    order_status_code: {
      type: DataTypes.ENUM,
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

