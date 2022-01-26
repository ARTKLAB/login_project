//모듈 추출 및 서버 생성
var express = require("express");
var app = express();

app.use(function (request, response) {
  response.end("<h1>Hello Forever..!</h1>");
});

// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
