const { Sequelize } = require("sequelize");
require('dotenv').config()
exports.sequelize = new Sequelize("capstone_db", "root", "Welcome01", {
  host: "localhost",
  dialect: "mysql",
  freezeTableName: true,
});