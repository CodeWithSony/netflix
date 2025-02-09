<<<<<<< HEAD
import dbConnect from "../../../lib/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
=======
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/db";
import User from "@/models/User";

const saltRounds = 10;
>>>>>>> 99b99fdb8fd523b64e2f0bc875ca91ddc6359165

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // dbConnect to the database
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate JWT token
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      return res.status(500).json({
        message: "JWT secret is not defined in environment variables.",
      });
    }

    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: "1h",
    });

    return res.status(201).json({ message: "User created", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
=======
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, error: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create new user
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      // Create JWT token
      const token = jwt.sign(
        { id: newUser._id, email: newUser.email },
        process.env.JWT_SECRET as string,
        { expiresIn: "1hr" }
      );

      // Send response
      res.status(201).json({ success: true, token });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
>>>>>>> 99b99fdb8fd523b64e2f0bc875ca91ddc6359165
  }
}
