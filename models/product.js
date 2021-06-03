const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'mysql'});

const Product = sequelize.define('product', {

  productId: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  productSKU: {
      type: DataTypes.STRING(12),
      allowNull: false
  },
  product_price: {
      type: DataTypes.FLOAT,
      allowNull: false
  },
  product_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  product_description: {
      type: DataTypes.STRING,
  }

}, {
  // options go here
});

