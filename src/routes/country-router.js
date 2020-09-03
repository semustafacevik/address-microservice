const express = require("express");
const Country = require("../models/country");

const router = express.Router();

//* getall
router.get("/getall", async (req, res) => {
  try {
    const countries = await Country.find({});
    res
      .status(200)
      .send(countries.sort((a, b) => a.name.localeCompare(b.name)));
  } catch (error) {
    res.status(500).send(error);
  }
});

//* getbyid
router.get("/getbyid/:countryId", async (req, res) => {
  try {
    const country = await Country.findById(req.params.countryId);
    res.status(200).send(country);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
