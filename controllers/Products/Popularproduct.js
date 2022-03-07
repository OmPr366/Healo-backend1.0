const HomeList = require("../../models/homelist");

const { errorHandler } = require("../../helpers/dbErrorHandler");

exports.read = async(req, res) => {
  // const response = await HomeList.findById("6225acc76122d7d1d23b8d1a");
  // // const parsedData = await response.json();
  // if(response)
  // res.send(response)



  HomeList.findById("6225acc76122d7d1d23b8d1a")
    //6211e7bcf8abd30b5806ab07
    .populate("items", " name prices photo desc")
    .select("_id  title items   ")

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
  HomeList.findByIdAndUpdate("6225acc76122d7d1d23b8d1a", { new: true }).exec(
    (err, oldTerms) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      const { items, title } = req.body;

      oldTerms.items = items;
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
