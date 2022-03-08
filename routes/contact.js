const express = require("express");
// const { requireSignIn,authMiddleware, adminMiddleware} = require('../controllers/auth');
const router = express.Router();
const Contact = require("../models/contact");

//validators
// const {runValidation}= require('../validators');
// const {categoryCreateValidator} = require('../validators/category')

router.post("/add-contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });

    const response =  await newContact.save();
    if(response)
    res.send("Your Messsage has been Saved")
  } catch (error) {
    res.send(error)

  }
});
router.get("/get-all-contacts",async (req, res) => {
     try {
         const response =  await Contact.find();
         if(response)
         res.send(response)
     } catch (error) {
        res.send(error)
         
     }
  
});

module.exports = router;
