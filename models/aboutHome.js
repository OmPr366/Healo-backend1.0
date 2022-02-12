const mongoose = require("mongoose");

const aboutHomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      min: 5,
      max: 150,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      min: 10,
      max: 700,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Abouthome", aboutHomeSchema);
