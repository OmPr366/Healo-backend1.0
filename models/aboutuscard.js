const mongoose = require("mongoose");

const aboutCardSchema = new mongoose.Schema(
  {
    image: {
      type: String
    },
    title:{
        type:String,
    },
    desc: {
        type:String,
      
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutCard", aboutCardSchema);
