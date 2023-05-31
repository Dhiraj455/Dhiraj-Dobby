const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/Authentication");
const { upload, setDestination } = require("../middlewares/Image");
const postController = require("../controllers/imageController");

router.post(
  "/postImage",
  authentication,
  setDestination("./public/images/"),
  upload.single("post"),
  postController.postImage
);

module.exports = router;