const express = require('express');
const {getCard,addCard,updateCard,deleteCard} =  require("../controllers/aboutCard")

const route = express.Router()


route.get('/get-about-card',getCard);
route.post('/add-about-card',addCard);
route.put('/update-about-card/:id',updateCard);
route.delete('/delete-about-card/:id',deleteCard);


module.exports =  route;