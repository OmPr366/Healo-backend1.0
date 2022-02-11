const mongoose = require("mongoose");

const introSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      min: 5,
      max: 150,
      required: true,
    },
    heading:{
        type: String,
    },
    actualPrice:{
        type: Number
    },
    sellingPrice:{
        type: Number
    },
    link:{
        type:String

    },
    image:{
        type:String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Intro", introSchema);
