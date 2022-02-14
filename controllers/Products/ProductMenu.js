const ProductMenu = require("../../models/Products/ProductMenu");
const slugify = require("slugify");

// Getting all Product Menu
exports.getAll = async (req, res) => {
  try {
    const response = await ProductMenu.find({});
    if (response) {
      return res.send(response);
    }
  } catch (error) {
    res.status(402).json({ error });
  }
};

// Adding Single Menu
exports.addOne = async (req, res) => {
  try {
    const { name } = req.body;
    let slug = slugify(name).toLowerCase();
    const newProductCateg = new ProductMenu({
      name,
      slug,
    });

    const response = await newProductCateg.save();

    if (response) {
      res.send(response);
    }
  } catch (error) {
    res.status(402).json({ error });
  }
};

// Deleting Single Product Menu
exports.deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await ProductMenu.findByIdAndRemove(id, { new: true });
    if (response) {
      return res.send(response);
    }
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
