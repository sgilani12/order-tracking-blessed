let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');

chai.use(chaiHttp);

describe('orders page', () => {
    it('should grab the orders page', (done) => {
        chai.request(app)
        .get('/orders')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});