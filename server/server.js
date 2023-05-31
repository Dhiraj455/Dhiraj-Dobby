const express = require("express");
require("./config/db");
const app = express();
const cookieParser = require("cookie-parser");
const initRoute = require("./routers/initRoute");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // or specify a specific domain instead of '*'
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  // Intercepts OPTIONS method
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

const upload = multer({
  destination: "public/images",
});
app.use(express.static(path.join(__dirname, "public")));

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(express.json());

initRoute(app);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});

module.exports = app;
