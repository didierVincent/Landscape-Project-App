var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/item-list", function (req, res, next) {
  res.render("itemList", { title: "Create your Item List here:" });
});

module.exports = router;
