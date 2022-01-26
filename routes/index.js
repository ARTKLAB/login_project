// 모듈과 변수 선언
var express = require("express");

var router = express.Router();

// 페이지 라우트
router.get("/", function (request, response) {
  req.session.user = {
    id: paramId,
    name: "sooa",
    authorized: true,
  };
  response.send("hello");
});

module.exports = router;
