const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/Authentication");
const authcontrol = require("../controllers/userController");

router.post("/register", authcontrol.register);

router.post("/login", authcontrol.login);

router.get("/logout", (req, res) => {
  console.log("Logout");
  res.clearCookie("jwttoken", { path: "/" });
  res.send("Logout Successful");
});

module.exports = router;
