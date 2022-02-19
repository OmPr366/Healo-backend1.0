const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema

const homeListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      require: true,
      max: 300,
      unique: true,
    },
    items: [
      {
       type : ObjectId,
       ref :'Product',
      
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("HomeList", homeListSchema);
