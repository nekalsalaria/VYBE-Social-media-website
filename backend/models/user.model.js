import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        }
    ],
    saved: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        }
    ],
    loops: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Loop",
        }
    ],
    story: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Loop",
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User