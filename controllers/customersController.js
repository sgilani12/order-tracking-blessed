var customerModel = require("../models/customer");


var customersController={
    customerHome(req, res) {
        // get customers from db as list of objects
        customerModel.getCustomerList((err,data)=>{
            try {
                if(err) {
                    console.log(err)
                } else {
                   res.render('customers', {customers:data});
                }
            }
            catch (error) {
                console.log(error)
            }
        });
    },
  
    customerNew(req,res){
      res.render('newCustomer')
    },
    addCustomer(req, res) {
        // how to handle optional fields?
        console.log(req.body)
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
                    console.log("CUSTOMER EXISTS ", foundCustomer);
                    res.redirect("/customers/add");
                }
            });
        }
       catch (error) {
        console.log(error);
      }
    },

  customerNew(req, res) {
    res.render("newCustomer");
  },
  customerDelete(req, res) {
    res.render("deleteCustomer");
  },
  deleteCustomer(req, res) {
    console.log("---------TEST-----------")
    try {
      const id = req.body.customerid;
      customerModel.deleteCustomer(id, (err, deleted) => {
        if (err) {
          console.log("Error occurred", err);
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
      console.log("Error occurred", err);
    }
  },
  deleteID(req, res) {
    console.log("---------TEST-----------")
    try {
      const id = req.params['id'];
      customerModel.deleteCustomer(id, (err, deleted) => {
        if (err) {
          console.log("Error occurred", err);
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
      console.log("Error occurred", err);
    }
  }
};


module.exports = customersController;
