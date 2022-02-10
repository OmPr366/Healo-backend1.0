const SubsModel = require("../models/subscriber");
var mongoXlsx = require("mongo-xlsx");
const fs = require("fs");

exports.getAll = async (req, res) => {
  try {
    const responseData = await SubsModel.find({});
    if (responseData) {
      res.send(responseData);
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.addOne = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(422).send("Enter Alteast Email");
    }
    const newSubsModel = new SubsModel({
      email,
    });
    const response = await newSubsModel.save();
    if (response) res.send(response);
  } catch (error) {}
};

exports.downloadExcel = async (req, res) => {
  const responseData = await SubsModel.find({});

  if (responseData) {
    var model = mongoXlsx.buildDynamicModel(responseData);

    mongoXlsx.mongoData2Xlsx(responseData, model, function (err, data) {
      res.download(data.fullPath);
    });
  }
};
