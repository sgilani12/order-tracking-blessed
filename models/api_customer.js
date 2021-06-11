const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const api_customer = sequelize.define(
  "api_customer",
  {
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    access_time: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
    },

  },
  {timestamps: false})

module.exports.log_customer = async (email) => {
  const new_row = await api_customer.create({user_email:email, access_time : Date.now()});
  console.log(new_row)
}