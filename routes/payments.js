var express = require("express");
var router = express.Router();
var PaymentController = require("./../controllers/members");

router.get("/", PaymentController.getAll);

module.exports = router;
