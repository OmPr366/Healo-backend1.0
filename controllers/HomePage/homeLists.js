const HomeList = require("../../models/homelist");

exports.addOne = (req, res) => {
  const { title, items } = req.body;
  if (!title) res.status(402).json({ message: "Enter Atleast Title" });

  const homeList = new HomeList();

  homeList.title = title;
  homeList.items = items;

  homeList.save((err, result) => {
    if (err) {
      res.status(402).send({ message: "Something Error happened" });
    }

    res.json(result);
  });
};

exports.editSingle = (req, res) => {
  const id = req.params.id;
  const { productId } = req.body;

  HomeList.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        items: productId,
      },
    }
  ).then((data, err) => {
    if (err) {
      res.json(err);
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const id = req.params.id
  const { name, items } = req.body

  HomeList.findByIdAndUpdate(id).exec(( err,oldHomeList) => {
  
   if(err){
       res.json(err)
   }
    if (items) {
        oldHomeList.items = items;
    }
    if (name) {
        oldHomeList.title = name;
    }

    oldHomeList.save((err, result) => {
      if (err) {
        return res.status(400).json({
          err,
        });
      }
      // result.photo = undefined;
      res.json(result);
    });
  });
};

exports.getAll = (req, res) => {
  HomeList.find({})

    .populate("items", " name prices images")
    .select("_id  title createdAt updatedAt")
    .exec((err, data) => {
      if (err) {
        res.status(402).json({ error: "Something went wrong" });
      }
      res.json(data);
    });
};
exports.read = (req, res) => {
  const id = req.params.id;
  console.log(id);
  HomeList.findById(id)

    .populate("items", " name actualPrice sellingPrice images")
    .select("_id  title createdAt updatedAt")
    .exec((err, data) => {
      if (err) {
        res.status(402).json({ err });
      }
      res.json(data);
    });
};

exports.removefromlist = (req, res) => {
  const id = req.params.id;
  const { productId } = req.body;

  console.log(id);
  HomeList.findByIdAndUpdate(
    {
      _id: id,
    },
    { $pull: { items: productId } }
  ).exec((data) => {
    res.json("deleted successfully");
  });
};

exports.removeOne = (req, res) => {
  const id = req.params.id;
  console.log(id);
  HomeList.findByIdAndRemove(id).exec((err, data) => {
    if (err) {
      return res.json({
        err,
      });
    }
    res.json({ message: " Deleted Succussfully" });
  });
};
