const ProductCategory = require("../../models/Products/ProductCateg");

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

// Getting all Category with Products
exports.getAll = async (req, res) => {
  try {
    const response = await ProductCategory.find({}).populate(
      "products",
      "_id name actualPrice sellingPrice desc photo"
    );
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
    const { name, photo } = req.body;
    const newProductCateg = new ProductCategory({
      name,
      photo,
      products: [],
    });

    const response = await newProductCateg.save();

    if (response) {
      res.send(response);
    }
  } catch (error) {
    res.status(402).json({ error });
  }
};

// Adding Product in category
exports.addSingleProductInCateg = async (req,res)=>{
    try {

        const {productId} =  req.body;
            
        
    } catch (error) {
    res.status(402).json({ error });
        
    }
}

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
