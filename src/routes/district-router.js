const express = require("express");
const District = require("../models/district");

const router = express.Router();

//* getbyid
router.get("/getbyid/:districtId", async (req, res) => {
  try {
    const district = await District.findById(req.params.districtId);
    res.status(200).send(district);
  } catch (error) {
    res.status(500).send(error);
  }
});

//* getbyprovinceid
router.get("/getbyprovinceid/:provinceId", async (req, res) => {
  try {
    const districts = await District.find({
      provinceId: req.params.provinceId,
    });
    res
      .status(200)
      .send(districts.sort((a, b) => a.name.localeCompare(b.name)));
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
