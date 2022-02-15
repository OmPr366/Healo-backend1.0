const Product = require("../../models/Products/Product");
const slugify = require("slugify");

// Getting all Product
exports.getAll = async (req, res) => {
  try {
    const response = await Product.find({});
    if (response) {
      return res.send(response);
    }
  } catch (error) {
    res.status(402).json({ error });
  }
};

// Adding Single Product
exports.addOne = async (req, res) => {
  try {
    const { name, prices, photo, SKU, quantity, category, variation, desc } =
      req.body;
    let slug = slugify(name).toLowerCase();
    const newProduct = new Product({
      name,
      prices,
      photo,
      SKU,
      quantity,
      category,
      variation,
      desc,
      slug,
    });

    const response = await newProduct.save();

    if (response) {
      res.send(response);
    }
  } catch (error) {
    res.status(402).json({ error });
  }
};

// Deleting Single Product
exports.deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    const response = Product.findByIdAndRemove(id, { new: true });
    if (response) {
      return res.send(response);
    }
  } catch (error) {
    res.status(402).json({ error });
  }
};

//  get all product by  Category

exports.getByCategory = async (req, res) => {
  try {
    const categId = req.params.id;
    const response = await ProductCategory.find({ category: categId });
    if (response) res.send(response);
  } catch (error) {
    res.status(402).json({ error });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, prices, photo, SKU, quantity, category, variation, desc } =
      req.body;

    const response = await Product.findByIdAndUpdate(id, {
      name,
      prices,
      photo,
      SKU,
      quantity,
      category,
      variation,
      desc,
    });
  } catch (error) {
    res.status(402).json({ error });
  }
};
