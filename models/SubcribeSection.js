const mongoose = require("mongoose");

const subscribeSectionSchema = new mongoose.Schema(
  {
    title:{
        type:String
    },
    subtitle:{
        type:String

    },

    photo: {
      type: String,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("SuscribeSection", subscribeSectionSchema);
