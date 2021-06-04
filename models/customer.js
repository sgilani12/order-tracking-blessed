const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'mysql'});

const Customer = sequelize.define('customer', {
    customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    middle_name: {
        type: DataTypes.STRING
      },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    customer_notes: {
        type: DataTypes.STRING
    },
    shipping_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    billing_address: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, 
    {
      // options
});
