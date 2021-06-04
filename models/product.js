const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const Product = sequelize.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    sku: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    // toDo: add methods for use in products controller
  }
);
