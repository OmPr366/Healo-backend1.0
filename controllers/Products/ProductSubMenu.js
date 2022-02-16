const ProductSubMenu = require("../../models/Products/ProductSubMenu");
const slugify = require("slugify");

// Getting All Sub Menu
exports.getAll = async (req, res) => {
  
  try {
    const response = await ProductSubMenu.find()
    if (response) res.send(response);
  } catch (error) {
    res.status(402).json({ error });
  }
};

// Adding Single Product Sub Menu
exports.addOne = async (req, res) => {

  try {
    const { name, menu } = req.body;
    console.log(name,menu)
    let slug = slugify(name).toLowerCase();
    const newSubMenu = ProductSubMenu({
      name,
      menu,
      slug,
    });

    const response = await newSubMenu.save();
    if (response) res.send(response);
  } catch (error) {
    res.status(402).json({ error });
  }
};

// deleting Single Product Sub Menu
// Caution:  You have to Delete All Categ related to this too
exports.removeOne = async (req, res) => {
  try {
    const  id  = req.params.id;

    const response = await ProductSubMenu.findByIdAndRemove(id, { new: true });
    if (response) res.send(response);
  } catch (error) {
    res.status(402).json({ error });
  }
};

//  get all product sub menu find Product Menu

exports.getByMenu = async (req, res) => {
  try {
    const menuId = req.params.id;
    const response = await ProductSubMenu.find({ menu: menuId });
    if (response) res.send(response);
  } catch (error) {
    res.status(402).json({ error });
  }
};
