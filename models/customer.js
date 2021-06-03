const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'mysql'});

const Customer = sequelize.define('customer', {
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    middleName: {
        type: DataTypes.STRING
      },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    },
    customerNotes: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, 
    {
      // options
});
