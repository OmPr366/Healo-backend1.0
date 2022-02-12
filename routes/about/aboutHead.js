const express = require("express");
const {
  getHead,
  addHead,
  updateHead,
} = require("../../controllers/AboutUs/AboutHead");

const route = express.Router();

const sendSms = (phone, message) => {};

route.get("/get-about-head", getHead);
route.post("/add-about-head", addHead);
route.put("/update-about-head", updateHead);

// Send Message Otp
route.post("/sendmessage", (req, res) => {
  const {number} =  req.body;
    const randomNumber =  Math.floor(1000 + Math.random() * 9000);
  const client = require("twilio")(
    "AC3feb8d85bf8d6522b61a83cdd81a33f7",
    "a9b07913fb64c48ab2e756edc46945f2"
  );
  client.messages
    .create({
      body: `Your Healo verification code is :- ${randomNumber} . Don't share this code with anyone; our employees will never ask for the code `,
      from: +18304452811,
      to: `+91${number}`,
    })
    .then((message, err) => {
        if(err)
        {
            res.send(err)
        }
      res.send({otp:randomNumber , message});
    }).catch((err)=> console.log(err) )
});

// route.put('/update-about-head/:id',updateHead);
// route.delete('/delete-about-card/:id',deleteHead);

module.exports = route;
