var Group = require("../models/group");

exports.getAll = function(req, res) {
  Group.find({}, (err, docs) => {
    if (err) {
      res.json(err);
    }
    res.json(docs);
  });
};

exports.get = function(req, res) {
  Group.find({ title: id }, (err, doc) => {
    if (!err) {
      return doc;
    } else {
      console.log("Group could not be found");
    }
  });
};
