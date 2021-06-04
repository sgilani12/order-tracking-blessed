var customerModel = require('../models/customer');

var customersController={
    customerHome(req, res) {
        // get customers from db as list of objects
        customerModel.getCustomerList((err,data)=>{
            try {
                if(err) {
                    console.log(err)
                } else {
                    res.render('customers', {data:data});
                }
            }
            catch (error) {
                console.log(error)
            }
        });
    },
    addCustomer(req, res) {
        // how to handle optional fields?
        try {
            // unpack req.body and create customer object
            const customer = {
                first_name:req.body.firstname,
                middle_name:req.body.middlename,
                last_name:req.body.lastname,
                phone:req.body.phone,
                email:req.body.email,
                customer_notes:req.body.customernotes,
                address:req.body.address
            }
            // add/save user to db
            // re-direct to customerHome
    
            // this method calls the function in customerModel.js to save to db
            customerModel.addCustomer(customer, (err,data) => {
                if (err) {
                    console.log("Error occurred", err);
                } else {
                    console.log(data);
                    res.redirect('/customers'); //re-direct to list or /customers/:id?
                }
            });
        }
        catch (err) {
            console.log('Error occurred', err)
        }
    }
}

module.exports = customersController;