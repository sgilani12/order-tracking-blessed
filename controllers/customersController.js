const axios = require('axios');
//import axios from 'axios';

//const fetch = require("node-fetch");

var customersController={

  customerHome(req,res){
    res.render('customers')
  },

  customerNew(req,res){
    res.render('newCustomer')
    }
}


/*db.query(sql, function (err, rows) {
  if (err) {

      var message = err.message;
      console.log(message);

      return res.status(500).send(message);

  }else {

      var data = rows;
      res.render('history/search-history', {data: data});

  }
});*/

/*fetch('http://localhost:3000/customers')
.then(data => {
  console.log(data.json());
 return data.json();
}).then(data =>{
  console.log(data);
  return data;
})
.catch(err=>{
  console.log(err);
})*/
axios.get('/customers').then(resp => {

    console.log(resp.data);
});



module.exports = customersController;