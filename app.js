var express = require("express");
var expressSession = require("express-session");

var app = express();

app.use(express.static(__dirname + "/public"));

//세션 설정
app.use(
  expressSession({
    secret: "my key",
    resave: true,
    saveUninitialized: true,
  })
);

var indexRouter = require("./routes");

app.use("/", indexRouter); // list

// app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/process/product", function (req, res) {
//   if (req.session.user) {
//     res.redirect("/product.html");
//   } else {
//     res.redirect("/login2.html");
//   }
// });

// app.post("/process/login", function (req, res) {
//   var paramId = req.body.id || req.query.id;
//   var paramPassword = req.body.password || req.query.password;

//   if (req.session.user) {
//     console.log("이미 로그인되어 상품 페이지로 이동합니다.");
//     res.redirect("/product.html");
//   } else {
//     // 세션 저장

//     req.session.user = {
//       id: paramId,
//       name: "sooa",
//       authorized: true,
//     };

//     res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
//     res.write("<h1>로그인 성공</h1>");
//     res.write("<h1>ID : " + paramId + "</h1>");
//     res.write("<h1>PASSWORD : " + paramPassword + "</h1><br>");
//     res.write("<a href='/process/product'>상품 페이지로 이동</a>");
//     res.end();
//   }
// });

// app.get("/process/logout", function (req, res) {
//   if (req.session.user) {
//     console.log("로그아웃합니다.");

//     req.session.destroy(function (err) {
//       if (err) {
//         console.log("error");
//       } else {
//         console.log("세션을 삭제하고 로그아웃되었습니다.");
//         res.redirect("/login2.html");
//       }
//     });
//   } else {
//     // 로그인 안된 상태
//     console.log("아직 로그인되어있지 않습니다.");
//     res.redirect("/login2.html");
//   }
// });

// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
