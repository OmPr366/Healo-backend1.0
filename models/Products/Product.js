const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    actualPrice: {
      type: Number,
    },
    sellingPrice: {
      type: Number,
    },
    desc: {
      type: String,
      required: true,
      min: 10,
      max: 700,
    },
    photo: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
