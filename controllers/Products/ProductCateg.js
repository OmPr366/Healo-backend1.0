const ProductCategory = require("../../models/Products/ProductCateg");
const slugify =  require('slugify')

// Getting all Product Category
exports.getAll = async (req, res) => {
  try {
    const response = await ProductCategory.find({});
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
    const { name, photo , submenuId } = req.body;
  let slug = slugify(name).toLowerCase()
    const newProductCateg = new ProductCategory({
      name,
      photo,
      slug,
      submenu: submenuId
    });

    const response = await newProductCateg.save();

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
    if (response) res.send(response);
  } catch (error) {
    res.status(402).json({ error });
  }
};


// Getting All Products in Single categ
// exports.getOneWithProduct = async (req, res) => {
//   try {
//     const response = await ProductCategory.find({}).populate(
//       "products",
//       "_id name actualPrice sellingPrice desc photo"
//     );
//     if (response) {
//       return res.send(response);
//     }
//   } catch (error) {
//     res.status(402).json({ error });
//   }
// };


 
 
 

