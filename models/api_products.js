const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const api_product = sequelize.define(
  "api_product",
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

module.exports.log_product = async (email) => {
  const new_row = await api_product.create({user_email:email,access_time : Date.now()});
  console.log(new_row)
}