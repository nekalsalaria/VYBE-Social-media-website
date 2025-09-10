import mongoose from "mongoose";

const loopschema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    media: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }
    ]
}, { timestamps: true })

const Loop = mongoose.model("Loop",loopschema)
export default Loop