var customersController={

  customerHome(req,res){
    res.render('customers')
  },

  customerNew(req,res){
    res.render('newCustomer')
    }
}

module.exports = customersController;