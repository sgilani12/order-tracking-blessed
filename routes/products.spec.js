let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');

chai.use(chaiHttp);

describe('products page', () => {
    it('should grab the products page', (done) => {
        chai.request(app)
        .get('/products')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});