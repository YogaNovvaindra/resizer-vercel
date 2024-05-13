const mongoose = require('mongoose');

const connect = mongoose.connect("mongodb+srv://resizer:resizer@cluster0.zqahjjk.mongodb.net/resizerdb");

connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

const ImageSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    originalSize: {
        type: Number,
        required: true
    },
    compressedSize: {
        type: Number,
        required: true
    },
    compressionType: {
        type: String,
        required: true
    },
    compressionQuality: {
        type: Number,
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

const AudioSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    originalSize: {
        type: Number,
        required: true
    },
    compressedSize: {
        type: Number,
        required: true
    },
    compressionType: {
        type: String,
        required: true
    },
    compressionQuality: {
        type: Number,
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

const ImageModel = mongoose.model("image", ImageSchema);
const AudioModel = mongoose.model("audio", AudioSchema);

module.exports = { ImageModel, AudioModel };
