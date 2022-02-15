const AboutCard = require("../../models/aboutuscard");

exports.getHead = async (req, res) => {
  try {
    const response = await AboutCard.findOne({_id:"620b6c54ab4f832910c5cba9"})
    if (response) {
      res.send(response);
    }
  } catch (error) {
    res.status(402).send(error);
  }
};

exports.updateHead = async (req, res) => {
  try {
    const { title, desc, image } = req.body;
    const response = await AboutCard.findByIdAndUpdate(
      "620b6c54ab4f832910c5cba9",
      { title, desc, image },
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
    const newAbout = new AboutCard({
      title: "this is title",
      desc: "this is desc",
      image:
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
