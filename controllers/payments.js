var Payment = require("../models/payment");

exports.getAll = function(req, res) {
  Payment.find({}, (err, docs) => {
    if (err) {
      res.json(err);
    }
    res.json(docs);
  });
};

exports.get = function(req, res) {
  Payment.find({ title: id }, (err, doc) => {
    if (!err) {
      return doc;
    } else {
      console.log("Group could not be found");
    }
  });
};
