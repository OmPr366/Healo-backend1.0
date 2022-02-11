const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      min: 5,
      max: 150,
      required: true,
    },
    desc: {
      type: {},
      required: true,
      min: 10,
      max: 700,
    },
    message: {
      type: String,
      trim: true,
      min: 5,
      max: 400,
      required: true, 
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", aboutSchema);
