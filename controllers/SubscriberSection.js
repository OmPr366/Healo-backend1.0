const subscribeSection = require("../models/SubcribeSection");

exports.getAll = async (req, res) => {
  try {

    const responseData =  await subscribeSection.findById("623065d8fdb51bdefd04b2d0")
    if (responseData) {
      res.send(responseData);
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.addOne = async (req, res) => {
  try {
    const { title,subtitle, photo } = req.body;
    
    const newSubsModel = new subscribeSection({
        title,subtitle, photo
    });
    const response = await newSubsModel.save();
    if (response) res.send(response);
  } catch (error) {}
};

exports.updateOne =  async(req,res)=>{

    try {
        const { title,subtitle, photo } = req.body;
        const response =  await subscribeSection.findByIdAndUpdate("623065d8fdb51bdefd04b2d0",{title,subtitle, photo},{new:true})
        if(response)
        {
            res.send(response)
        }
    } catch (error) {
        
    }

}