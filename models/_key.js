const { Sequelize } = require("sequelize");
exports.sequelize = new Sequelize("capstone_db", "CapstoneAdmins@capstone-db-server", "qwertyTJX321", {
  host: "capstone-db-server.mysql.database.azure.com",
  dialect: "mysql",
  freezeTableName: true,
});