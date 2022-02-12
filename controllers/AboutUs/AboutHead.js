const AboutHead = require("../../models/aboutHead");

exports.getHead = async (req, res) => {
  try {
    const response = await AboutHead.findOne({_id:"62075fedaea454d0db2872c4"})
    if (response) {
      res.send(response);
    }
  } catch (error) {
    res.status(402).send(error);
  }
};

exports.updateHead = async (req, res) => {
  try {
    const { title, desc, photo } = req.body;
    const response = await AboutHead.findByIdAndUpdate(
      "62075fedaea454d0db2872c4",
      { title, desc, photo },
      { new: true }
    );

    if (response) {
      return res.send(response);
    }
  } catch (error) {
    return res.status(402).json(error);
  }
};

exports.addHead = async (req, res) => {
  try {
    const newAbout = new AboutHead({
      title: "this is title",
      desc: "this is desc",
      photo:
        "https://res.cloudinary.com/healo/image/upload/v1644649602/sqho9psp193dcg7i3nnl.jpg",
    });
    const response = await newAbout.save();
    if (response) {
      res.send(response);
    }
  } catch (error) {
    return res.status(402).json(error);
  }
};
