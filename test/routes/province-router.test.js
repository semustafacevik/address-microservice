const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../src/app");

const expect = chai.expect;
chai.use(chaiHttp);

describe("Province Router Test Functions", () => {
  it("GET : get by province id", (done) => {
    chai
      .request(server)
      .get("/api/v1/provinces/5eef530e7e22131964053531")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Object);
        expect(response.body._id).to.equal("5eef530e7e22131964053531");
        expect(response.body.name).to.equal("İzmir");
        expect(response.body.countryId).to.equal("5eef52787e2213196405352e");
        done();
      });
  });

  it("GET : get by province id - empty object (province id not exists)", (done) => {
    chai
      .request(server)
      .get("/api/v1/provinces/5eef530e7e22131964053521")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.empty;
        done();
      });
  });

  it("GET : get by province id error 500 (province id not valid)", (done) => {
    chai
      .request(server)
      .get("/api/v1/provinces/5eef53")
      .end((error, response) => {
        expect(response.status).to.equal(500);
        done();
      });
  });

  it("GET : get by country id", (done) => {
    chai
      .request(server)
      .get("/api/v1/provinces/c/5eef52787e2213196405352e")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Array);
        expect(response.body[0]._id).to.equal("5eef530e7e2213196405352f");
        expect(response.body[0].name).to.equal("Ankara");
        expect(response.body[0].countryId).to.equal("5eef52787e2213196405352e");
        expect(response.body[1]._id).to.equal("5eef530e7e22131964053530");
        expect(response.body[1].name).to.equal("İstanbul");
        expect(response.body[1].countryId).to.equal("5eef52787e2213196405352e");
        done();
      });
  });

  it("GET : get by country id - empty array (country id not exists)", (done) => {
    chai
      .request(server)
      .get("/api/v1/provinces/c/5eef530e7e22131964044525")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.empty;
        done();
      });
  });

  it("GET : get by country id error 500 (country id not valid)", (done) => {
    chai
      .request(server)
      .get("/api/v1/provinces/c/5eef53")
      .end((error, response) => {
        expect(response.status).to.equal(500);
        done();
      });
  });
});
