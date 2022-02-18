const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
    },
    totalCoupons:{
        type:Number
    }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", CouponSchema);
