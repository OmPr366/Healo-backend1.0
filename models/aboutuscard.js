const mongoose = require("mongoose");

const aboutCardSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      trim: true,
      min: 5,
      max: 150,
      required: true,
    },
    title:{
        type:String,
        required: true,
        min: 10,
        max: 700,
    },
    desc: {
        type:String,
        required: true,
        min: 10
       
      
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutCard", aboutCardSchema);
