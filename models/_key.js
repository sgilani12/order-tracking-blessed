const { Sequelize } = require("sequelize");
exports.const sequelize = new Sequelize("capstone_db", "root", "Welcome01", {
  host: "localhost",
  dialect: "mysql",
  freezeTableName: true,
});