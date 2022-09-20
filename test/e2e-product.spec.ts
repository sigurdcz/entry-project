import chai, {assert, expect} from 'chai';
import mockData from "./fixtures/mock-data.json";
import app from "../src/mock";
import chaiHttp = require('chai-http');
import mongoUnit from "mongo-unit";

chai.use(chaiHttp);
chai.should();

describe('Products (e2e)', () => {
    before(() => {});
    beforeEach(() => mongoUnit.load(mockData));
    afterEach(() => mongoUnit.drop());

    describe('/api/v1/product', () => {

        it('it should GET all products', (done) => {
            chai.request(app)
                .get('/api/v1/product')
                .end((err, res) => {
                    res.body.length.should.be.eql(2);
                    done();
                });
        });
        it('it should GET one of proudct', (done) => {
            chai.request(app)
                .get('/api/v1/product/632db2d2742e48030585824b')
                .end((err, res) => {
                    console.log({res:res.body})
                    res.should.have.status(200);
                    res.body.should.haveOwnProperty('title').eql('test1');
                    res.body.should.haveOwnProperty('description').eql('dsc1');
                    done();
                });
        });
    });
})