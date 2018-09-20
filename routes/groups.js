var express = require("express");
var router = express.Router();
var GroupController = require("./../controllers/groups");

router.get("/", GroupController.getAll);

module.exports = router;
