const HomeCateg = require('../../models/HomePage/homeCateg')

exports.addOne =  (req,res)=>{
    const { title,subItems } =  req.body;
    if(!title  ) res.status(402).json({message:"Enter Atleast Title"})

    const homeCateg = new HomeCateg();

    homeCateg.title =  title;
    homeCateg.subItems =  subItems;

    homeCateg.save().then((response,err)=>{
        if(err){
            res.status(422).send({err:"Unable to upload"})
        }else{
            res.status(200).send({message:"Uploaded Successfully"});
        }
    })


}

exports.getAll =  (req,res)=>{
    HomeCateg.find({}).exec((err,data)=>{
        if(err){
            res.status(402).json({error:"Something went wrong"});
        }
        res.json(data);
    })
}

exports.removeOne = (req, res) => {

    const {id} = req.body;
    homeCateg.findOneAndRemove({ id }).exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      res.json(
        res.json({message:"All Deleted Succussfully"})
      );
    });
};

// exports.create = (req,res)=>{
//     const {name,role,photo,body} =  req.body;

//     if(!name,!role){
//         res.status(400).json({message:"Enter all values"})
//     }
//     const doctor =  new Doctor();
//     doctor.name =  name;
//     doctor.role =  role;
//     doctor.photo =  photo;
//     doctor.body = body;
//     doctor.excerpt = smartTrim(body, 320, " ", " ...");
//     doctor.slug = slugify(name).toLowerCase();
//     doctor.save().then((response,err)=>{
//         if(err) {
//             res.send(err);
//         }
//         res.status(200).json({
//         message:"Uploaded Successfully",
//             data: response
//         })
//     })

// }

// exports.list = (req, res) => {
//     Doctor.find({})
//       .populate("postedBy", "_id name username")
//       .sort({ createdAt: -1 })
//       .select(
//         "_id name role body  slug excerpt  photo postedBy createdAt updatedAt"
//       )
//       .exec((err, data) => {
//         if (err) {
//           return res.json({
//             error: errorHandler(err),
//           });
//         }
//         res.json(data);
//       });
//   };
  
  
// exports.read = (req, res) => {
//     const slug = req.params.slug.toLowerCase();
//     Doctor.findOne({ slug })
//       // .select("-photo")
      
  
//       .populate("postedBy", "_id name username")
//       .select(
//         "_id name body slug  photo  postedBy createdAt updatedAt"
//       )
//       .exec((err, data) => {
//         if (err) {
//           return res.json({
//             error: errorHandler(err),
//           });
//         }
//         res.json(data);
//       });
//   };
  
//   exports.remove = (req, res) => {
//     const slug = req.params.slug.toLowerCase();
//     Doctor.findOneAndRemove({ slug }).exec((err, data) => {
//       if (err) {
//         return res.json({
//           error: errorHandler(err),
//         });
//       }
//       res.json({
//         message: "doctor deleted successfully",
//       });
//     });
//   };
  

  
// exports.update = (req, res) => {
//     const slug = req.params.slug.toLowerCase();
//   Doctor.findOne({ slug }).exec((err, oldDoctor) => {
//       if (err) {
//         return res.status(400).json({
//           error: errorHandler(err),
//         });
//       }
  
//       let form = new formidable.IncomingForm();
//       form.keepExtensions = true;
  
//       form.parse(req, (err, fields) => {
//         if (err) {
//           return res.status(400).json({
//             error: "Image could not upload",
//           });
//         }
  
//         let slugBeforeMerge = oldDoctor.slug;
//         oldDoctor = _.merge(oldDoctor, fields);
//         oldDoctor.slug = slugBeforeMerge;
  
//         const { body, name, photo } = fields;
  
//         if (body) {
//           oldDoctor.excerpt = smartTrim(body, 320, " ", " ...");
       
//         }
  
//         if (photo) {
//           oldDoctor.photo = photo;
//         }
  
//         oldDoctor.save((err, result) => {
//           if (err) {
//             return res.status(400).json({
//               error: errorHandler(err),
//             });
//           }
//           // result.photo = undefined;
//           res.json(result);
//         });
//       });
//     });
//   };


  