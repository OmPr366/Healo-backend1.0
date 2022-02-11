const express = require("express");
const {
  create,
  getAll,
  removeOne,
  getOne,
} = require("../controllers/HomePage/homebanner");

const route = express.Router();

route.post("/addbanner", create);
route.get("/getbanner", getAll);
route.get("/getone/:id", getOne);
route.delete("/removebanner/:id", removeOne);

module.exports = route;
