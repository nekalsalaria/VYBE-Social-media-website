import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(400).json({ message: "token is not found" })
        }

        const verifiedToken=
    } catch (error) {

    }
}