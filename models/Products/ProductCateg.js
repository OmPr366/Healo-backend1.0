const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCategSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    products: [{ type: ObjectId, ref: "Product" }],
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductCategory", ProductCategSchema);
