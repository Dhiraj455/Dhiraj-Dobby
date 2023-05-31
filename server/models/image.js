const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
        unique: true,
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Image = mongoose.model("Image", ImageSchema);
module.exports = Image;