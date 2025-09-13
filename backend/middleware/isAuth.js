import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(400).json({ message: "token is not found" })
        }

        const verifiedToken= jwt.verify(token, process.env.JWT_SECRET)
        if (!verifiedToken) {
            return res.status(400).json({ message: "token is not verified" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}