const express = require("express");
const shortid = require("shortid");

const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_7qp5GXdM4UPlu8",
  key_secret: "4LDxqm8h6RqshiDaw2kwmZc4",
});

const route = express.Router();

// razerPay

route.post("/payment", async (req, res) => {
  const { totalAmount } = req.body;
  const payment_capture = 1;
  const currency = "INR";

  const options = {
    amount: totalAmount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  razorpay.orders.create(options).then((response, err) => {
    // console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  });
  // userCart.findOne({ userId }).then((data, err) => {
  //   if (err) {
  //     res.status(404).json({ error: "Error Happen" });
  //   } else {
  //     // amount =  data.totalPrice;
  //     console.log(data);

  //     const options = {
  //       amount: data.totalPrice * 100,
  //       currency,
  //       receipt: shortid.generate(),
  //       payment_capture,
  //     };

  //     razorpay.orders.create(options).then((response, err) => {
  //       // console.log(response);
  //       res.json({
  //         id: response.id,
  //         currency: response.currency,
  //         amount: response.amount,
  //       });
  //     });
  //   }
  // });

});

route.post("/is-order-complete", (req, res) => {
  razorpay.payments.fetch(req.body.razorpay_payment_id).then((doc, err) => {
    console.log(doc);
    res.send(doc);
  }).catch((err)=>{
	  res.send(err);
  })
});

module.exports = route;
