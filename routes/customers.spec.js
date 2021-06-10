const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../app');

chai.use(chaiHttp);

describe('/customers', () => {

    describe('ADD REQUEST', () => {
        it("should add customer with session message", (done) => {
            const mockCustomer = {
                first_name:"james",
                middle_name:"tjx",
                last_name:"smith",
                phone:9876543210,
                email:"james@tjx.com",
                customer_notes:"test",
                shipping_address:"100 tjx rd",
                billing_address:"100 tjx rd",
                notes:"test 999"
            }
            chai.request(app)
            .get('/customers/add')
            .send(mockCustomer)
            .end((err, res) => {
                //   res.should.have.status(200);
                //   res.body.should.be.a('object');
                //   res.body.should.have.property('errors');
                //   res.body.errors.should.have.property('pages');
                //   res.body.errors.pages.should.have.property('kind').eql('required');
                // console.log(res);
              done();
            });
        });
    });
});