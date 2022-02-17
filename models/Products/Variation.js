// variation
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const VariationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    typeItems: [
      {
        name: {
          type: String,
        },
        actualPrice: {
          type: Number,
        },
        sellingPrice: {
          type: Number,
        },
        country: {
          type: String,
        },
        isAvailable: {
          type: Number,
        },
        photo: [
          {
            type: String,
          },
        ],
      },
    ],
    product: { type: ObjectId, ref: "Product" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Variation", VariationSchema);
