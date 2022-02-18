const Coupon =   require("../../models/Products/Coupons")

exports.getAll =  async (req,res)=>{
    try {
        const response = await  Coupon.find({});
        if(response)
            res.send(response);
    } catch (error) {
        res.status(402).json({error})
    }
}

exports.addOne =  async(req,res)=>{
    try {
        const {name,discount,totalCoupons} =  req.body();
        const newCoupon =  new Coupon({name,discount,totalCoupons})
        const response =  await newCoupon.save();
        if(response)
        {
           res.send(response) 
        }

    } catch (error) {
        res.status(402).json({error})
        
    }
}


exports.deleteOne =  (req,res)=>{
    
}