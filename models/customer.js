const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./_key.js");

const Customer = sequelize.define(
  "customer",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue(first_name);
      },
      set(value) {
        this.setDataValue("first_name", value);
      },
    },
    middle_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    customer_notes: {
      type: DataTypes.STRING,
    },
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    billing_address: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false
  }
);

module.exports.findCustomer = (customer, cb)=>{
  Customer.findOne({ where: {email: customer.email}})
    .then(found => {
      cb(null, found);
    })
};

module.exports.addCustomer = (customer, cb)=>{
  Customer.create({ 
    first_name: customer.first_name,
    middle_name: customer.middle_name,
    last_name: customer.last_name,
    phone: customer.phone,
    email: customer.email,
    customer_notes: customer.customer_notes,
    shipping_address: customer.shipping_address,
    billing_address: customer.billing_address
   })
    .then(created => {
      cb(null, created);
    })
    .catch(error => {
      cb(error, null);
    })
};

module.exports.deleteCustomer = (id, cb) => {
  Customer.destroy({ where: { customer_id: id } })
  .then((created) => {
    cb(null, created);
  })
};

module.exports.getCustomerList= (cb)=>{
  const allCustomers =  Customer.findAll()
  .then((data)=> {
    var newData = [];
    data.forEach( (element)=> newData.push(element.dataValues) );
    cb(null, newData);
  });
  
}
