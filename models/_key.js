const { Sequelize } = require("sequelize");
require('dotenv').config()

exports.sequelize = new Sequelize("capstone_db", "CapstoneAdmins@capstone-db-server", process.env.DB_PASS, {
  host: "capstone-db-server.mysql.database.azure.com",
  dialect: "mysql",
  freezeTableName: true,
});

/*
exports.sequelize = new Sequelize("capstone_db", "root", "Welcome01", {
  host: "localhost",
  dialect: "mysql",
  freezeTableName: true,
});
*/