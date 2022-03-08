const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema

const allOrdersSchema = new mongoose.Schema(
  {
    
    items: [
      {
       type : ObjectId,
       ref :'Product',
      
      },
    ],
    user:{
       type : ObjectId,
       ref:'User'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("AllOrder", allOrdersSchema);
