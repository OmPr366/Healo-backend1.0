const User = require("../models/user");
const GoogleUser2 = require("../models/userByGoogle");
const GoogleUser = require("../models/googleUser");

const Blog = require("../models/blog");
const _ = require("lodash");
const formidable = require("formidable");
const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");

const { result } = require("lodash");

exports.getAllUsers = (req, res) => {
  User.find({})
    .select("username name email photo role address")
    .exec((err, response) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(response);
      }
    });
};

exports.getAllStaff = (req, res) => {
  User.find({ role: 2 })
    .select("username name email photo role address")
    .exec((err, response) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(response);
      }
    });
};

exports.updateRoleStaff = (req, res) => {
  const { id } = req.body;
  User.findById(id).exec((err, oldUser) => {
    console.log(oldUser);
    oldUser.role = 2;
    oldUser.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      // result.photo = undefined;
      res.json(result);
    });
  });
};

exports.removeRoleStaff = (req, res) => {
  const { id } = req.body;
  User.findById(id).exec((err, oldUser) => {
    console.log(oldUser);
    oldUser.role = 0;
    oldUser.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      // result.photo = undefined;
      res.json(result);
    });
  });
};

exports.getAllGoogleUsers = (req, res) => {
  GoogleUser.find({})
    .select("username name email photo")
    .exec((err, response) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(response);
      }
    });
};

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  return res.json(req.profile);
};

exports.publicProfile = (req, res) => {
  let username = req.params.username;
  let user;

  User.findOne({ username }).exec((err, userFromDB) => {
    if (err || !userFromDB) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    user = userFromDB;
    let userId = user._id;
    Blog.find({ postedBy: userId })
      .populate("categories", "_id name slug")
      .populate("tags", "_id name slug")
      .populate("postedBy", "_id name photo")
      .limit(10)
      .select(
        "_id title slug excerpt categories tags postedBy createdAt updatedAt address"
      )
      .exec((err, data) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        user.photo = undefined;
        user.hashed_password = undefined;
        res.json({
          user,
          blogs: data,
        });
      });
  });
};

exports.updateprofile = (req, res) => {
  const { name, photo, id ,address } = req.body;
  if (!name && !photo) {
    res.status(422).json({ error: "Atleast one is required" });
  }

  if (name && photo && address) {
    User.findByIdAndUpdate(id, { name, photo , address}, (err, docs) => {
      if (err) res.json({ message: "Error Occured" });
      if (docs) res.send(docs);
    });
  } else if (photo ) {
    User.findByIdAndUpdate(id, { photo }, (err, docs) => {
      if (err) res.json({ message: "Error Occured" });
      if (docs) res.send(docs);
    });
  } else if(name && address) {
    User.findByIdAndUpdate(id, { name }, (err, docs) => {
      if (err) res.json({ message: "Error Occured" });
      if (docs) res.send(docs);
    });
  }else if( address) {
    User.findByIdAndUpdate(id, { address }, (err, docs) => {
      if (err) res.json({ message: "Error Occured" });
      if (docs) res.send(docs);
    });
  }
};

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtension = true;
  form.parse(req, (err, fields) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded",
      });
    }
    let user = req.profile;
    user = _.extend(user, fields);

    if (fields.password && fields.password.length < 6) {
      return res.status(400).json({
        error: "Password should be min 6 characters long",
      });
    }
    user.photo = fields.photo;

    user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: "All filds required",
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      user.photo = undefined;
      res.json(user);
    });
  });
};

exports.photo = (req, res) => {
  const username = req.params.username;
  User.findOne({ username }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    if (user.photo.data) {
      res.set("Content-Type", user.photo.contentType);
      return res.send(user.photo.data);
    }
  });
};

// Google USer Adder

