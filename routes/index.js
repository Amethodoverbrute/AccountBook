var express = require("express");
var router = express.Router();

/* GET home page. */
// 记账本列表
router.get("/account", function (req, res, next) {
  res.render("list");
});

// 添加记录
router.get("/account/create", function (req, res, next) {
  res.render("create");
});

module.exports = router;
