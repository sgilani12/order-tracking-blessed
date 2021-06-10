const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const User = sequelize.define(
  "user",
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    user_password: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    user_role: {
      type: DataTypes.ENUM("csr"),
      allowNull: false,
    },
  },

  {}
  
);

module.exports.authenticateUser = (email, password) =>{
    user = User.findByPk(email);
    return user.password === password;
}
    
  