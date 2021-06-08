var customerModel = require("../models/customer");


var customersController={
    customerHome(req, res) {
        // get customers from db as list of objects
        customerModel.getCustomerList((err,data)=>{
            try {
                if(err) {
                  } else {
                   res.render('customers', {customers:data});
                }
            }
            catch (error) {
            }
        });
    },
  
    customerNew(req,res){
      res.render('newCustomer')
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
            // add/save user to db
            // re-direct to customerHome
    
            // this method calls the function in customerModel.js to save to db
            customerModel.addCustomer(customer, (foundCustomer, created) => {
                if (created) {
                    res.redirect("/customers");
                } else {
                    res.redirect("/customers/add");
                }
            });
        }
       catch (error) {
      }
    },

  customerNew(req, res) {
    res.render("newCustomer");
  },
  customerDelete(req, res) {
    res.render("deleteCustomer");
  },
  deleteCustomer(req, res) {
    try {
      const id = req.body.customerid;
      customerModel.deleteCustomer(id, (err, deleted) => {
        if (err) {
        } else {
          if (deleted) {
            // customer deleted
            res.redirect("/customers");
          } else {
            // customer doesn't exist
            res.redirect("/customers/delete");
          }
        }
      });
    } catch (err) {
    }
  },
  deleteID(req, res) {
    try {
      const id = req.params['id'];
      customerModel.deleteCustomer(id, (err, deleted) => {
        if (err) {
        } else {
          if (deleted) {
            // customer deleted
            res.redirect("/customers");
          } else {
            // customer doesn't exist
            res.redirect("/customers/delete");
          }
        }
      });
    } catch (err) {
    }
  }
};


module.exports = customersController;
