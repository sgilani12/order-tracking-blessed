const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const Product = sequelize.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
    },
    sku: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports.updateProduct = (productId, product, cb) => {
  Product.update(
    {
      sku: product.sku,
      price: product.price,
      product_name: product.product_name,
      quantity: product.quantity,
      description: product.description,
    },
    { where: { product_id: productId } }
  )
    .then((rowsUpdated) => {
      cb(null, rowsUpdated);
    })
    .catch((error) => {
      cb(error, null);
    });
};

module.exports.getProductList = (cb) => {
  const allProducts = Product.findAll()
    .then((data) => {
      var newData = [];
      data.forEach((element) => newData.push(element.dataValues));
      cb(null, newData);
    })
    .catch((err) => {
      cb(err, null);
    });
};

module.exports.findProduct = (id, cb) => {
  Product.findOne({ where: { product_id: id } })
    .then((found) => {
      cb(null, found);
    })
    .catch((error) => {
      cb(error, null);
    });
};
