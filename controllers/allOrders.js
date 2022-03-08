
const AllOrders = require("../models/allorders");


const { errorHandler } = require("../helpers/dbErrorHandler");

// exports.read = (req, res) => {
//     HomeList.findById("6211e7bcf8abd30b5806ab07")
//   //6211e7bcf8abd30b5806ab07
    // .populate("items", " name prices photo desc")
    // .select("_id  title items  createdAt updatedAt")
    
//     .exec((err, data) => {
//         if (err) {
//           return res.json({
//             error: errorHandler(err),
//           });
//         }
//         res.json(data);
//       });
//   };
  
//   exports.update = (req, res) => {
//     HomeList.findByIdAndUpdate("6211e7bcf8abd30b5806ab07", { new: true }).exec(
//       (err, oldTerms) => {
//         if (err) {
//           return res.status(400).json({
//             error: errorHandler(err),
//           });
//         }
  
//         const { items, title } = req.body;
  
//         oldTerms.items = items;
//         oldTerms.title = title;
//         oldTerms.save((err, result) => {
//           if (err) {
//             return res.status(400).json({
//               err,
//             });
//           }
  
//           res.json(result);
//         });
//       }
//     );
//   };
exports.read =  async(req,res)=>{
    try {
        const response =  await AllOrders.find().populate("items")
        if(response)
        {
            res.send(response);
        }
    } catch (error) {
        
    }
}
exports.getOrdersByUsers =  async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

  exports.add  = async (req,res)=>{

    try {
        const {items,user} =  req.body;
        const newOrders =  await AllOrders({
            items,
            user
        })

        const response  =  await newOrders.save();
        if(response)
        {
            return res.send(response)
        }
    } catch (error) {
        res.status(400).send(error)
    }

  }
  
  