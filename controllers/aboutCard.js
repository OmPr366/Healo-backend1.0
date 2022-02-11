const Aboutcard =  require('../models/aboutuscard')


exports.getCard = async (req,res)=>{
    try {
        const response = await  Aboutcard.find({});
        if(response)
            res.send(response);
    } catch (err) {
        res.status(402).json(err)
    }
}

exports.addCard =  async(req,res)=>{
    try {
        const {image,title,desc} =  req.body;

        const newAboutCard =  new Aboutcard({
            image,title,desc
        })

        const response =  await newAboutCard.save();
        if(response) 
            res.send(response);

    } catch (err) {
        res.status(402).json(err)
        
    }
}

exports.updateCard =  async (req,res)=>{
    try {
        const {image,title,desc} =  req.body;
        const id =  req.params.id;
        const response = await  Aboutcard.findByIdAndUpdate(id,{image,title,desc},{new:true})
        if(response) 
            res.send(response)
    } catch (error) {
        res.status(402).json(error)
    }
}

exports.deleteCard =  async (req,res)=>{
    try {
        const id =  req.params.id;
        
        const response = await  Aboutcard.findByIdAndRemove(id,{new:true})
        if(response) 
            res.send(response)
    } catch (error) {
        res.status(402).json(error)
    }
}