const chai = require('chai');
// const chaiHttp = require('chai-http');
const should = chai.should();
const expect = require('chai').expect;
const customerModel = require("../models/customer");

describe('customer model', () => {

    let something;
    before((done) => {
        const mockCustomer = {
            first_name:"barry",
            middle_name:"tjx",
            last_name:"smith",
            phone:"7774441131",
            email:"22@tjx.com",
            customer_notes:"please work",
            shipping_address:"100 tjx rd",
            billing_address:"100 tjx rd"
        }
        customerModel.addCustomer(mockCustomer, (err, created) => {
            something = created.dataValues.first_name;
            done();
        });
    });

    describe('GET add', () => {
        it("should add a new customer", () => {
            expect(something).to.eq("henry");
        });
    });
});