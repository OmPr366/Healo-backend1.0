const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    prices: [
      {
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
      },
    ],

    photo: [
      {
        type: String,
      },
    ],
    SKU: {
      type: String,
      unique: true,
    },
    quantity: {
      type: Number,
    },
    category: {
      type: ObjectId,
      ref: "ProductCategory",
    },
    variation: [
      {
        type: {
          type: String,
        },
        typeItems: [
          {
            name: {
              type: String,
            },
            prices: [
              {
                actualPrice: {
                  type: Number,
                },
                sellingPrice: {
                  type: Number,
                },
                country: {
                  type: String,
                },
                quantity:{
                  type: Number,
                },
                isAvailable: {
                  type: String,
                },
              },
            ],

            photo: [
              {
                type: String,
              },
            ],
          },
        ],
      },
    ],
    desc: {
      type: String,
      required: true,
      min: 10,
      max: 700,
    },
    slug: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
