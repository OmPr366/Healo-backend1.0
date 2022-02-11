const express =  require('express');
const {getAll,addOne} =  require('../controllers/subscriber')
const subsModel = require('../models/subscriber')
var mongoXlsx = require("mongo-xlsx");

const fs = require("fs");


const route =  express.Router();

route.get("/get-all-subscriber",getAll)
route.post("/add-one-subscriber",addOne)
route.get("/download-excel", async (req, res) => {
    const responseData = await subsModel.find({});
  
    if (responseData) {
      var model = mongoXlsx.buildDynamicModel(responseData);
        
      mongoXlsx.mongoData2Xlsx(responseData, model, function (err, data) {
        // res.send(data);
        res.download(data.fullPath);
        // setTimeout(() => {
          
        // }, 4000);
        
      });
    }
  });

module.exports =  route;