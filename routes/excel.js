var mongoXlsx = require("mongo-xlsx");

const Categ = require("../models/category");

const express = require("express");
const fs = require("fs");

const route = express.Router();

route.get("/get-excel", async (req, res) => {
  const responseData = await Categ.find({});

  if (responseData) {
    var model = mongoXlsx.buildDynamicModel(responseData);

    mongoXlsx.mongoData2Xlsx(responseData, model, function (err, data) {
      // res.send(data);
      res.download(data.fullPath);

    });
  }
});

module.exports = route;
