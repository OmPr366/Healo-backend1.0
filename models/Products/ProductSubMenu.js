const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductSubMenuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    menu: { type: ObjectId, ref: "ProductMenu" },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductSubMenu", ProductSubMenuSchema);
