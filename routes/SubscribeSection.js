const express =  require('express');
const {getAll,addOne,updateOne} =  require('../controllers/SubscriberSection')



const route =  express.Router();

route.get("/get-subscriber-section",getAll)
route.post("/add-subscriber-section",addOne)
route.put("/update-subscriber-section",updateOne);

module.exports =  route;