var Member = require("../models/member");

exports.getAll = function(req, res) {
  Member.find({}, (err, docs) => {
    if (err) {
      res.json(err);
    }
    res.json(docs);
  });
};

exports.get = function(req, res) {
  Member.find({ title: id }, (err, doc) => {
    if (!err) {
      return doc;
    } else {
      console.log("Group could not be found");
    }
  });
};
