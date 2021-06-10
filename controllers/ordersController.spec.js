const chai = require('chai');
// const chaiHttp = require('chai-http');
const should = chai.should();
const expect = require('chai').expect;
const customerModel = require("../models/order");

describe('customer order', () => {

    describe('GET /orders', () => {
        it("should be a populated array", () => {
            customerModel.getOrderList((err,data)=> {
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