process.env.NODE_ENV = "test";

let PostIt = require("../models/postit");

let chai = require("chai");
let chaiHttp = require("chai-http");
const {describe} = require("mocha/lib/cli/run");

chai.use(chaiHttp);

describe("PostIts", () => {
    beforeEach((done) => {
        PostIt.remove({}, (_) => {
            done();
        });
    });

    describe("/GET postits", () => {
        it("It should get all postits", (_) => {
            chai.request({})
                .get("/postits")
                .end((err, res) =>{
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    res.body.length.should.be.eql(0);
                });
        });
    });
});