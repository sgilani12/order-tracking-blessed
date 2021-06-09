const chai = require('chai');
// const chaiHttp = require('chai-http');
const should = chai.should();
const expect = require('chai').expect;
const customerModel = require("../models/customer");

describe('customer model', () => {

    describe('GET /customers', () => {
        it("should be a populated array", () => {
            customerModel.getCustomerList((err,data)=> {
                try {
                    if(err) {
                        console.log(err)
                    } else {
                       expect(data).to.be.an('array');
                    }
                }
                catch (error) {
                    console.log(error)
                }
            });
        });
    });

    describe('GET add', () => {
        it("should add a new customer", () => {
            const mockCustomer = {
                first_name:"james",
                middle_name:"tjx",
                last_name:"smith",
                phone:9876543210,
                email:"james@tjx.com",
                customer_notes:"test",
                shipping_address:"100 tjx rd",
                billing_address:"100 tjx rd"
            }
            customerModel.addCustomer(mockCustomer, (err, created) => {
                expect(created).to.be.true; 
            });
        });
    });
});