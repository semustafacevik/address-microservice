const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../src/app");

const expect = chai.expect;
chai.use(chaiHttp);

describe("Country Router Test Functions", () => {
  it("GET : get all country", (done) => {
    chai
      .request(server)
      .get("/api/v1/countries")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Array);
        expect(response.body[0]._id).to.equal("5f424b666c32aa27e8d7bb21");
        expect(response.body[1]._id).to.equal("5eef52787e2213196405352e");
        expect(response.body[1].name).to.equal("Türkiye");
        done();
      });
  });

  it("GET : get by country id", (done) => {
    chai
      .request(server)
      .get("/api/v1/countries/5eef52787e2213196405352e")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Object);
        expect(response.body._id).to.equal("5eef52787e2213196405352e");
        expect(response.body.name).to.equal("Türkiye");
        done();
      });
  });

  it("GET : get by country id - empyt object (country id not exists)", (done) => {
    chai
      .request(server)
      .get("/api/v1/countries/5eef52787e2213196405352a")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.empty;
        done();
      });
  });

  it("GET : get by country id error (counrty id not valid)", (done) => {
    chai
      .request(server)
      .get("/api/v1/countries/5eef5")
      .end((error, response) => {
        expect(response.status).to.equal(500);
        done();
      });
  });
});
