const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const allOrdersSchema = new mongoose.Schema(
  {
    items: [],
    user: {
      type: ObjectId,
      ref: "User",
    },
    delhiveryId:{
      type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("AllOrder", allOrdersSchema);
