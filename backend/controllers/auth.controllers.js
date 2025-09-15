import genToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { name, email, password, userName } = req.body;

    // check email exists
    const findBYEmail = await User.findOne({ email });
    if (findBYEmail) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // check username exists
    const findBYusername = await User.findOne({ userName });
    if (findBYusername) {
      return res.status(400).json({ message: "Username already exists!" });
    }

    // password validation
    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters!" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      name,
      userName,
      email,
      password: hashedPassword,
    });

    // generate token
    const token = await genToken(user._id);

    // send cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 10 * 365 * 24 * 60 * 60 * 1000, // 10 years
      secure: false, // in dev
      sameSite: "Strict",
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: `signup error: ${error.message}` });
  }
};

// SIGNIN
export const signIn = async (req, res) => {
  try {
    const { password, userName } = req.body;

    // check user exists
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    // generate token
    const token = await genToken(user._id);

    // send cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 10 * 365 * 24 * 60 * 60 * 1000,
      secure: false,
      sameSite: "Strict",
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `signIn error: ${error.message}` });
  }
};

// SIGNOUT
export const signOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Sign out successful" });
  } catch (error) {
    return res.status(500).json({ message: `signOut error: ${error.message}` });
  }
};
