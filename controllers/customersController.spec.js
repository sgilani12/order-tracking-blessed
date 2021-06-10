const chai = require('chai');
// const chaiHttp = require('chai-http');
const should = chai.should();
const expect = require('chai').expect;
const customerModel = require("../models/customer");

describe('customer model', () => {
  
    let fname;
    before((done) => {
        const mockCustomer = {
            first_name:"barry",
            middle_name:"tjx",
            last_name:"smith",
            phone:"17774441131",
            email:"122@tjx.com",
            customer_notes:"please work",
            shipping_address:"100 tjx rd",
            billing_address:"100 tjx rd"
        }
        customerModel.addCustomer(mockCustomer, (err, created) => {
            fname = created.dataValues.first_name;
            done();
        });
    });

    describe('Add customer', () => {
        it("should ADD a customer correctly", () => {

            const customer = {
                first_name:"charlie",
                middle_name:"leroy",
                last_name:"trainor",
                phone:"9789789978",
                email:"jason_trainor@tjx.com",
                customer_notes:"req.body.notes",
                shipping_address:"req.body.shipaddress",
                billing_address:"req.body.billaddress"
            }

            const customer2 = {
                first_name:"charlie2",
                middle_name:"leroy",
                last_name:"trainor",
                phone:"9789789978",
                email:"jason_trainor@tjx.com",
                customer_notes:"req.body.notes",
                shipping_address:"req.body.shipaddress",
                billing_address:"req.body.billaddress"
            }

            
            customerModel.addCustomer(customer, (err, created)=> {
                if (err) {
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
                    req.session['message'] = ["Customer successfully created"];
                    res.redirect('/customers');
                  } else {
                    req.session['message'] = ["An Error Has Occured"];
                    res.redirect('/customers/add');
                  }
                }
              })

              customerModel.addCustomer(customer, (err, created)=> {
                if (err) {
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
                    req.session['message'] = ["Customer successfully created"];
                    res.redirect('/customers');
                  } else {
                    req.session['message'] = ["An Error Has Occured"];
                    res.redirect('/customers/add');
                  }
                }
              })

            customerModel.getCustomerList((err,data)=> {
                try {
                    if(err) {
                        console.log(err)
                    } else {
                       expect(data).to.be.an('array');
                       expect(data).to.have.length(30)
                    }
                }
                catch (error) {
                    console.log(error)
                }
            });
        });
    });


});