const Terms = require("../models/t&c");

const formidable = require("formidable");
const slugify = require("slugify");
const stripHtml = require("string-strip-html");

const { errorHandler } = require("../helpers/dbErrorHandler");
const fs = require("fs");
const { smartTrim } = require("../helpers/blog");

exports.create = (req, res) => {
  const { title, content } = req.body;
  console.log(content, title, req.body);
  // if (!content || content.length < 50) {
  //     return res.status(400).json({
  //         error: 'Content is too short'
  //     });
  // }
  if (!title) {
    return res.status(400).json({
      error: "plz enter title",
    });
  }

  let terms = new Terms();
  terms.content = content;
  terms.title = title;

  terms.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    {
      res.json(result);
    }
  });
};
// list, listAllBlogsCategoriesTags, read, remove, update

exports.read = (req, res) => {
  Terms.findById("620563d96d3a332b4187bdf2")
    .select("photo")

    .select("_id content title")
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};

exports.readprivatepolicies = (req, res) => {
  Terms.findById("620563f7da7a352d1e38b52f")
    .select("photo")

    .select("_id content title")
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};

exports.update = (req, res) => {
  Terms.findByIdAndUpdate("620563d96d3a332b4187bdf2", { new: true }).exec(
    (err, oldTerms) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      const { content, title } = req.body;

      oldTerms.content = content;
      oldTerms.title = title;
      oldTerms.save((err, result) => {
        if (err) {
          return res.status(400).json({
            err,
          });
        }

        res.json(result);
      });
    }
  );
};

exports.updateprivatepolicy = (req, res) => {
  Terms.findByIdAndUpdate("620563f7da7a352d1e38b52f", { new: true }).exec(
    (err, oldTerms) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      const { content, title } = req.body;

      oldTerms.content = content;
      oldTerms.title = title;
      oldTerms.save((err, result) => {
        if (err) {
          return res.status(400).json({
            err,
          });
        }

        res.json(result);
      });
    }
  );
};
