const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Contact", contactSchema);
