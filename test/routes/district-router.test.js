const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../src/app");

const expect = chai.expect;
chai.use(chaiHttp);

describe("District Router Test Functions", () => {
  it("GET : get by district id", (done) => {
    chai
      .request(server)
      .get("/api/v1/districts/5eef567d7e2213196405353f")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Object);
        expect(response.body._id).to.equal("5eef567d7e2213196405353f");
        expect(response.body.name).to.equal("Ödemiş");
        expect(response.body.provinceId).to.equal("5eef530e7e22131964053531");
        done();
      });
  });

  it("GET : get by district id - empty object (district id not exists)", (done) => {
    chai
      .request(server)
      .get("/api/v1/districts/5eef567d7e2213196415352f")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.empty;
        done();
      });
  });

  it("GET : get by district id error 500 (district id not valid)", (done) => {
    chai
      .request(server)
      .get("/api/v1/districts/5eef53")
      .end((error, response) => {
        expect(response.status).to.equal(500);
        done();
      });
  });

  it("GET : get by province id", (done) => {
    chai
      .request(server)
      .get("/api/v1/districts/p/5eef530e7e22131964053531")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Array);
        expect(response.body[0]._id).to.equal("5eef567d7e2213196405353c");
        expect(response.body[0].name).to.equal("Beydağ");
        expect(response.body[0].provinceId).to.equal("5eef530e7e22131964053531");
        expect(response.body[1]._id).to.equal("5eef567d7e2213196405353d");
        expect(response.body[1].name).to.equal("Gaziemir");
        expect(response.body[1].provinceId).to.equal("5eef530e7e22131964053531");
        done();
      });
  });

  it("GET : get by province id - empty array (province id not exists)", (done) => {
    chai
      .request(server)
      .get("/api/v1/districts/p/5eef530e6e28131964044512")
      .end((error, response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.empty;
        done();
      });
  });

  it("GET : get by province id error 500 (province id not valid)", (done) => {
    chai
      .request(server)
      .get("/api/v1/districts/p/5eef53")
      .end((error, response) => {
        expect(response.status).to.equal(500);
        done();
      });
  });
});
