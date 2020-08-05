const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  provinceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Province",
    required: true,
  },
});

module.exports = mongoose.model("District", districtSchema);
