const mongoose = require("mongoose");

const provinceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
});

module.exports = mongoose.model("Province", provinceSchema);
