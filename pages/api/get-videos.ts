import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/db";
import { Video } from "../../models/Video";

const getVideos = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const videos = await Video.find(); // Make sure this returns an array
    res.status(200).json(videos); // Correct: Sending an array
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export default getVideos;
