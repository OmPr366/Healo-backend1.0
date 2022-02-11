const GoogleUser2 =  require('../models/userByGoogle')

exports.addGoogleUser = (req, res) => {
    const {name,email} = req.body;
    // res.send(user)
    let googleuser = new GoogleUser2();
    googleuser.name = name;
    googleuser.email = email;

    googleuser.save((err,data)=>{
      if (data) {
       
        res.send(data);
      }
      if (err) {
        res.send(err);
      }
    })
  
    // GoogleUser2.findOne({ email: user.email }).then((foundUser) => {
    //   console.log(foundUser);
    //   if (foundUser) {
    //     res.status(422).send("Already Found");
    //   } else {
    //     // res.send("Have to add");
    //     let googleUser = new GoogleUser2();
    //     googleUser.name = user.name;
    //     googleUser.email = user.email;
    //     googleUser.username = user.email;
  
    //     googleUser.save((err,data)=>{
    //       if (data) {
    //         console.log(data);
    //         res.send(data);
    //       }
    //       if (err) {
    //         res.send(err);
    //       }
    //     })
    //   }
    // });
    // console.log(foundUser);
    // res.json(foundUser);
  };