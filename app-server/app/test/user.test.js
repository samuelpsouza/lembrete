process.env.NODE_ENV = "test";

let User = require("../models/user");

let chai = require("chai");
let chaiHttp = require("chai-http");
const {describe} = require("mocha/lib/cli/run");
const PostIt = require("../models/postit");

chai.use(chaiHttp);

describe("Users", () => {
    beforeEach((done) => {
        User.remove({}, (_) => {
            done();
        });
    });

    describe("/GET Users", () => {
        it("It should get all users", (_) => {
            chai.request({})
                .get("/users")
                .end((err, res) =>{
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    res.body.length.should.be.eql(0);
                });
        });
    });

});