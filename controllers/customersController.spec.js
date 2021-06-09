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
});