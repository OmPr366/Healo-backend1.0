const Variation = require("../../models/Products/Variation");
const slugify =  require('slugify')

// Getting all Product Category
exports.getAll = async (req, res) => {
  try {
    const response = await Variation.find({});
    if (response) {
      return res.send(response);
    }
  } catch (error) {
    res.status(402).json({ error });
  }
};



// Adding Single category
exports.addOne = async (req, res) => {
  try {
    const { type, typeItems , product } = req.body;
  let slug = slugify(name).toLowerCase()
    const newVariation = new Variation({
        type,
        typeItems,
        product
    });

    const response = await newVariation.save();

    if (response) {
      res.send(response);
    }
  } catch (error) {
    res.status(402).json({ error });
  }
};



// Deleting Single Product category
exports.deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    const response = ProductCategory.findByIdAndRemove(id, { new: true });
    if (response) {
      return res.send(response);
    }
  } catch (error) {
    res.status(402).json({ error });
  }
};


//  get all product by Product SubMenu

exports.getBySubMenu = async (req, res) => {
  try {
    const subMenuId = req.params.id;
    const response = await ProductCategory.find({ submenu: subMenuId });
    console.log(response);
    if (response) res.send(response);
  } catch (error) {
    res.status(402).json({ error });
  }
};

