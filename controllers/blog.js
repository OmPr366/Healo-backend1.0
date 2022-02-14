const Blog = require("../models/blog");
const Category = require("../models/category");
const upload = require("../uploads/multer");
const cloudinary = require("../uploads/cloudinary");
// const  fs = require ('fs')
// const User = require("../models/user");
const formidable = require("formidable");
const slugify = require("slugify");
const stripHtml = require("string-strip-html");
const _ = require("lodash");
const { errorHandler } = require("../helpers/dbErrorHandler");
const fs = require("fs");
const { smartTrim } = require("../helpers/blog");

exports.create = (req, res) => {
  // let form = new formidable.IncomingForm();
  // form.keepExtensions = true;
  // form.parse(req, (err, fields, files) => {
  //   if (err) {
  //     return res.status(400).json({
  //       error: "Image could not upload",
  //     });
  //   }

    const { title, body, photo } = req.body;
    console.log(req.body)
    if (!title || !title.length) {
      return res.status(400).json({
        error: "title is required",
      });
    }

    if (!body || body.length < 200) {
      return res.status(400).json({
        error: "Content is too short",
      });
    }

    // if (!categories || categories.length === 0) {
    //   return res.status(400).json({
    //     error: "At least one category is required",
    //   });
    // }

    if (!photo || photo.length === 0) {
      return res.status(400).json({
        error: "At least photo is required",
      });
    }
    let blog = new Blog();
    blog.title = title;
    blog.body = body;
    blog.excerpt = smartTrim(body, 320, " ", " ...");
    blog.slug = slugify(title).toLowerCase();
    blog.mtitle = `${title} | "Healo"`;
    blog.mdesc = stripHtml(body.substring(0, 160));
    blog.postedBy = "op";
    blog.photo = photo;
    // categories and tags
    // let arrayOfCategories = categories && categories.split(",");

    // if (files.photo) {
    //     if (files.photo.size > 10000000) {
    //         return res.status(400).json({
    //             error: 'Image should be less then 1mb in size'
    //         });
    //     }
    //     upload.array(files.photo)

    //     const uploader =cloudinary.uploads(path, files.photo)
    //     const urls =[]
    //     // const files = files.photo
    //     for (const file of files.photo){
    //           const {path} = file
    //           const newPath = uploader(path)
    //           urls.push(newPath)
    //           fs.unlinkSync(path)
    //     }
    //    blog.photo = urls;

    blog.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.json(result);
      // Blog.findByIdAndUpdate(
      //   result._id,
      //   { $push: { categories: arrayOfCategories } },
      //   { new: true }
      // ).exec((err, result) => {
      //   if (err) {
      //     return res.status(400).json({
      //       error: errorHandler(err),
      //     });
      //   } else {
      //     res.json(result);
      //   }
      // });
    });
  // });
};
// list, listAllBlogsCategoriesTags, read, remove, update

exports.list = (req, res) => {
  Blog.find({})
    // .populate("categories", "_id name slug")
    // .populate("postedBy", "_id name username photo")
    .sort({ createdAt: -1 })
    .select("_id title body slug excerpt categories photo  createdAt updatedAt")
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};

exports.listAllBlogsCategories = (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 5;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;

  let blogs;
  let categories;

  Blog.find({})
    .populate("categories", "_id name slug")

    .populate("postedBy", "_id name username profile photo")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .select("_id title slug excerpt categories photo  createdAt updatedAt")
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      blogs = data; // blogs
      // get all categories
      Category.find({}).exec((err, c) => {
        if (err) {
          return res.json({
            error: errorHandler(err),
          });
        }
        categories = c; // categories
        // get all tags
        res.json({ blogs, categories, size: blogs.length });
      });
    });
};

exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  Blog.findOne({ slug })
    // .select("-photo")
    // .populate("categories", "_id name slug")

    // .populate("postedBy", "_id name username photo")
    .select(
      "_id title body slug mtitle mdesc photo categories  createdAt updatedAt"
    )
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  Blog.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      return res.json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Blog deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  const { body, title , photo } = req.body;

  Blog.findOne({ slug }).exec((err, oldBlog) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }


      if (body) {
        oldBlog.body=body;
        oldBlog.excerpt = smartTrim(body, 320, " ", " ...");
        oldBlog.mdesc = stripHtml(body.substring(0, 160));
      
      }
      if (title) {
        oldBlog.title = title
      }

      // if (categories) {
      //   oldBlog.categories = categories.split(",");
      // }

      if (photo) {
        oldBlog.photo = photo;
      }

      oldBlog.save((err, result) => {
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

exports.photo = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  Blog.findOne({ slug })
    .select("photo")
    .exec((err, blog) => {
      if (err || !blog) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.set("Content-Type", blog.photo.contentType);
      return res.send(blog.photo.data);
    });
};

exports.listRelated = (req, res) => {
  // console.log(req.body.blog);
  let limit = req.body.limit ? parseInt(req.body.limit) : 3;
  const { _id, categories } = req.body.blog;

  Blog.find({ _id: { $ne: _id }, categories: { $in: categories } })
    .limit(limit)
    .populate("postedBy", "_id name username profile photo")
    .select("title slug excerpt createdAt updatedAt")
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "Blogs not found",
        });
      }
      res.json(blogs);
    });
};

//
exports.listSearch = (req, res) => {
  // console.log(req.query);
  const { search } = req.query;
  if (search) {
    Blog.find(
      {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { body: { $regex: search, $options: "i" } },
        ],
      },
      (err, blogs) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        res.json(blogs);
      }
    ).select("-photo -body");
  }
};

exports.listByUser = (req, res) => {
  let userId = user._id;
  Blog.find({ postedBy: userId })
    .populate("categories", "_id name slug")

    .populate("postedBy", "_id name username photo")
    .select("_id title slug createdAt updatedAt")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};
