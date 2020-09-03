const express = require("express");
const Province = require("../models/province");

const router = express.Router();

//* getbyid
router.get("/getbyid/:provinceId", async (req, res) => {
  try {
    const province = await Province.findById(req.params.provinceId);
    res.status(200).send(province);
  } catch (error) {
    res.status(500).send(error);
  }
});

//* getbycountryid
router.get("/getbycountryid/:countryId", async (req, res) => {
  try {
    const provinces = await Province.find({ countryId: req.params.countryId });
    res
      .status(200)
      .send(provinces.sort((a, b) => a.name.localeCompare(b.name)));
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
