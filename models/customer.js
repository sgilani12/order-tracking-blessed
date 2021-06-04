const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const Customer = sequelize.define(
  "customer",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue(first_name);
      },
      set(value) {
        this.setDataValue('first_name', value);
      },
    },
    middle_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    customer_notes: {
      type: DataTypes.STRING,
    },
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    billing_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // options
  }
);
