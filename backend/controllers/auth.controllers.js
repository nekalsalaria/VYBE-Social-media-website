import genToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const { name, email, password, userName } = req.body
        const findBYEmail = await User.findOne({ email })
        if (findBYEmail) {
            return res.status(400).json({ message: "email already exist !" })
        }
        const findBYusername = await User.findOne({ userName })
        if (findBYusername) {
            return res.status(400).json({ message: "username already exist !" })
        }

        if (password < length < 6) {
            return res.status(400).json({ message: "Password Must be atleast 6 characters!" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            userName,
            email,
            password: hashedPassword
        })
        const token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 10 * 365 * 24 * 60 * 60 * 1000,
            secure: "false",
            sameSite: "Strict"
        })

        return res.status(201).json(user)

    } catch (error) {
        return res.status(500).json({ message: `signup error ${error}` })
    }
}



export const signIn = async (req, res) => {
    try {
        const { password, userName } = req.body
        const user = await User.findOne({ userName })
        if (!user) {
            return res.status(400).json({ message: "user not found !" })
        }

        const isMatch = bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: "incorrect Password!" })
        }

        const token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 10 * 365 * 24 * 60 * 60 * 1000,
            secure: "false",
            sameSite: "Strict"
        })

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({ message: `signIn error ${error}` })
    }
}


export const signOut = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"sign out Successfullt"})
    } catch (error) {
        return res.status(500).json({message:`signout error ${error}`})
    }
}    