const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const api_order = sequelize.define(
  "api_order",
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

module.exports.log_order = async (email) => {
  const new_row = await api_order.create({user_email:email,access_time : Date.now()});
}