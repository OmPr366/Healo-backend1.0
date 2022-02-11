const About = require("../models/aboutModal");
const formidable = require("formidable");
// const { errorHandler } = require("../helpers/dbErrorHandler");

exports.about = (req, res) => {
  const { title, desc, message, photo } = req.body;

  if (!title || !desc || !message || !photo) {
    return res.status(400).json({ error: "Please input all values" });
  }

  let about = new About();
  about.title = title;
  about.desc = desc;
  about.message = message;
  about.photo = photo;

  about.save((err, result) => {
    if (err) {
      return res.status(400).json({ err});
    }
    res.send("Uploaded Successfulyy");
  });

  // let form =  new formidable.IncomingForm();
  // form.keepExtensions = true;

  // form.parse(req,(err,fields)=>{
  //     console.log(fields)
  //     if(err){
  //         return res.status(400).json({
  //             error:"Image couldn't Upload"
  //         })
  //     }

  //     const {title, desc, message,photo} =  fields;

  //     if(!title||!desc||!message||!photo) {
  //         return res.status(400).json({error:"Please input all values"})
  //     }

  //     let about =  new About();
  //     about.title =  title;
  //     about.desc =  desc;
  //     about.message =  message;
  //     about.photo =  photo;

  //     about.save((err,result)=>{
  //         if(err){
  //             return res.status(400).json({error:errorHandler(err)})
  //         }
  //         res.send("Uploaded Successfulyy");
  //     })

  // })
};

exports.getAbout = (req, res) => {
  About.findById("61d949183a88d4d6d5bb2fe3").then((data, err) => {
    if (err) res.status(400).send(err);
    res.status(200).send(data);
  });
};
exports.putAbout = (req, res) => {
  //   About.findById("61d949083a88d4d6d5bb2fe1").then((data, err) => {
  //     if (err) res.status(400).send(err);
  //     res.status(200).send(data);
  //   });
  const { title, desc, message } = req.body;
  About.findByIdAndUpdate(
    "61d949183a88d4d6d5bb2fe3",
    { title, desc, message },
    function (err, docs) {
      if (err) {
        res.json({ message: "error occured" });
      } else {
        res.send(docs);
      }
    }
  );
};
