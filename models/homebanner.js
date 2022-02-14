const mongoose = require("mongoose");


const homebannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      require: true,
      max: 300,
      unique:true
    },
    pretitle: {
      type: String,
    },
    desc: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("HomeBanner", homebannerSchema);
