const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");
const bcrypt = require('bcryptjs');

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
      primaryKey : true,
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

  {
    timestamps:false
  }
);

/*TODO-- Use actual encryption instead of plaintext comparison*/
module.exports.authenticate = async (email, password) => {
  user = await User.findByPk(email);
  if(user === null){
    return false;
  }
  return bcrypt.compare(password, user.dataValues.user_password);
}
