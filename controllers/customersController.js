var customerModel = require("../models/customer");

var customersController={
    customerHome(req, res) {
        // get customers from db as list of objects
        customerModel.getCustomerList((err,data)=>{
            try {
                if(err) {
                    console.log(err)
                } else {
                   res.render('customers', {customers:data, messages: req.session['message']});
                   req.session.destroy();
                  } else {
                   res.render('customers', {customers:data});
                }
            }
            catch (error) {
            }
        });
    },
  
    customerNew(req,res){
      res.render('newCustomer', {messages: req.session['message']})
      req.session.destroy();
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
                var errorArray = err.errors;
                var messageArray = new Array();
                errorArray.forEach(e => {
                  messageArray.push(e.message);
                });
                req.session['message'] = messageArray;
                res.redirect('/customers/add');
              } else {
                  if (found) {
                    req.session['message'] = ["Customer already exists"];
                    console.log(req.session['message']);
                    res.redirect('/customers/add');
                  } else {
                    customerModel.addCustomer(customer, (err, created) => {
                      if (err) { // get error messages from promise
                        var errorArray = err.errors;
                        var messageArray = new Array();
                        errorArray.forEach(e => {
                          messageArray.push(e.message);
                        });
                        req.session['message'] = messageArray;
                        console.log(req.session['message']);
                        res.redirect('/customers/add');
                      } else {
                        if (created) {
                          res.redirect('/customers');
                        } else {
                          // attach some general session error
                          res.redirect('/customers/add');
                        }
                      }
                    })
                  }
              }
        }
       catch (error) {
      }
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
