const mongoose = require("mongoose");
const crypto = require("crypto");

const phoneUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true,
      default: "guest",
    },
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      default: "Guest",
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
    },
    number: {
      type: Number,
      required: true,
    },
    isVerified: {
      type: Boolean,
    },
    profile: {
      type: String,
      required: true,
    },

    salt: String,
    about: {
      type: String,
    },
    role: {
      type: Number,

      default: 0,
    },
    gtoken: {
      type: String,
    },

    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

googleUserSchema.methods = {
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random) + "";
  },
};

module.exports = mongoose.model("PhoneUser", googleUserSchema);
