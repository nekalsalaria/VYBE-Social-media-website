import mongoose, { mongo } from "mongoose";

const storyschema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    mediatype: {
        type: String,
        enum: ["image", "video"],
        required: true
    },
    media: {
        type: String,
        required: true
    },
    viewers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:86400
    }
}, { timestamps: true })

const story= mongoose.model("story",storyschema)
export default story