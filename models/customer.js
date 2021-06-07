const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const Customer = sequelize.define(
  "customer",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue(first_name);
      },
      set(value) {
        this.setDataValue("first_name", value);
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

module.exports.addCustomer = (newCustomer, cb) => {
  Customer.findOrCreate({
    where: { email: newCustomer.email },
    defaults: {
      first_name: newCustomer.first_name,
      middle_name: newCustomer.middle_name,
      last_name: newCustomer.last_name,
      phone: newCustomer.phone,
      email: newCustomer.email,
      customer_notes: newCustomer.customer_notes,
      shipping_address: newCustomer.address,
      billing_address: newCustomer.address,
    },
  }).then((created) => {
    cb(null, created);
  });
};

module.exports.deleteCustomer = (id, cb) => {
  Customer.destroy({ where: { customer_id: id } })
  .then((created) => {
    cb(null, created);
  });
};
