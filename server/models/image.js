const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
        unique: true,
    },
});

const Image = mongoose.model("Image", ImageSchema);
module.exports = Image;