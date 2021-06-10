var customerModel = require("../models/customer");

var messages = new Array();

var customersController={
  customerHome(req, res) {
      // get customers from db as list of objects
      customerModel.getCustomerList((err,data)=>{
          try {
              if(err) {
                console.log(err);
                } else {
                  res.render('customers', {customers:data, messages: messages});
                  messages = [];
              }
          }
          catch (error) {
          }
      });
  },

  customerNew(req,res){
    res.render('newCustomer', {messages: messages})
    messages = [];
  },
  addCustomer(req, res) {
      // how to handle optional fields?
      try {
          // unpack req.body and create customer object
          const customer = {
              first_name:req.body.fname,
              middle_name:req.body.mname,
              last_name:req.body.lname,
              phone:req.body.phone,
              email:req.body.email,
              customer_notes:req.body.notes,
              shipping_address:req.body.shipaddress,
              billing_address:req.body.billaddress
          }
          
          customerModel.findCustomer(customer, (err, found) => {
            if (err) {
              messages = getErrors(err);
              res.redirect('/customers/add');
            } else {
              if (found) {
                messages = ["Customer already exists"];
                res.redirect('/customers/add');
              } else {
                customerModel.addCustomer(customer, (err, created) => {
                  if (err) {
                    messages = getErrors(err);
                    res.redirect('/customers/add');
                  } else {
                    if (created) {
                      messages = ["Customer successfully created"];
                      res.redirect('/customers');
                    } else {
                      messages = ["An Error Has Occured"];
                      res.redirect('/customers/add');
                    }
                  }
                })
              }
            }
          })
      }
      catch (error) {
    }
  },

  deleteCustomer(req, res) {
    try {
      const id = req.params['id'];
      customerModel.deleteCustomer(id, (err, deleted) => {
        if (err) {
          messages = getErrors(err);
          res.redirect('/customers');
        } else {
          if (deleted) {
            messages = ["Customer successfully deleted"];
            res.redirect('/customers');
          } else {
            messages = ["Customer not found"];
            res.redirect('/customers');
          }
        }
      });
    } catch (err) {
    }
  }
};

function getErrors(err) {
  var errorArray = err.errors;
  var messageArray = new Array();
  errorArray.forEach(e => {
    messageArray.push(e.message);
  });
  return messageArray;
}

module.exports = customersController;
