const Image = require("../models/image");
const fs = require("fs");
const path = require("path");

module.exports.postImage = async (req, res) => {
  let response = {
    success: true,
    message: "",
    errMessage: "",
  };
  console.log("Hello");
  const { title } = req.body;
  const userId = req.user._id;
  let post;
  console.log(req.file);
  console.log(title);
  if (req.file) {
    post = process.env.URL + "/images/" + req.file.filename;
  } else {
    response.message = "Set Post Image";
    return res.status(200).json(response);
  }
  console.log(post);
  try {
    const postArt = new Image({
      title,
      createdBy: userId,
      path: post,
    });
    await postArt
      .save()
      .then((data) => {
        response.success = true;
        response.message = "Posted successfully";
        res.status(200).json(response);
      })
      .catch((err) => {
        console.log(err);
        fs.unlinkSync(req.file.path);
      });
  } catch (err) {
    fs.unlinkSync(req.file.path);
    console.log("Error", err);
    response.message = "Something went wrong!";
    response.errMessage = err.message;
    res.status(400).json(response);
  }
};

module.exports.getUserImages = async (req, res) => {
  let response = {
    success: false,
    message: "",
    errMessage: "",
    data: [],
  };
  try {
    const userId = req.user._id;
    let search = req.query.search;
    let images;
    if (search) {
      images = await Image.find({
        createdBy: userId,
        title: { $regex: search, $options: "i" },
      });
    } else {
      images = await Image.find({ createdBy: userId });
    }
    // const images = await Image.find({ createdBy: userId });
    response.success = true;
    response.message = "Images fetched successfully";
    response.data = images;
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    response.message = "Something went wrong!";
    response.errMessage = err.message;
    res.status(400).json(response);
  }
};
