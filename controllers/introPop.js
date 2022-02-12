const IntroPop =  require("../models/intropop");

exports.getData  = async (req,res)=>{
    try {
        const response =  await IntroPop.findById("6205e844cd1e11329da3c2e6");
        if(response)
        {
            res.send(response);
        }
    } catch (error) {
        
    }
}
exports.update = async (req,res)=>{
    try {
        const {title,heading,actualPrice,sellingPrice,link,image} =  req.body;

        const response =  await  IntroPop.findByIdAndUpdate("6205e844cd1e11329da3c2e6",{title,heading,actualPrice,sellingPrice,link,image},
        {new:true})

        if(response)
        {
            res.send(response);
        }
        
    } catch (error) {
        
    }
}

exports.create = async (req,res)=>{
    try {
        const {title,heading,actualPrice,sellingPrice,link,image} =  req.body;

        const newIntro =  new IntroPop({title,heading,actualPrice,sellingPrice,link,image});

        const response =  await newIntro.save();

        if(response)
            {
                res.send(response)
            }
        
    } catch (error) {
        
    }
}


exports.getState =  async (req,res)=>{

    try {
        const response =  await IntroPop.findOne({_id:"6205e844cd1e11329da3c2e6"});
        if(response)
        {
            res.send(response);
        }
    } catch (error) {
        res.status(402).json({error})
        
    }
}

exports.updateState =  async (req,res)=>{
    try {
        const {state} =  req.body;
        const response =  await  IntroPop.findByIdAndUpdate("6205e844cd1e11329da3c2e6",{ state },
        {new:true})

        if(response)
        {
            res.send(response);
        }
    } catch (error) {
        res.status(402).json({error})
    }
}