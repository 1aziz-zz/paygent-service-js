var express = require("express");
var router = express.Router();
var MemberController = require("./../controllers/members");

router.get("/", MemberController.getAll);

module.exports = router;
