const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCategSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    slug : {
      type : String,
      unique : true,
      index: true
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductCategory", ProductCategSchema);
