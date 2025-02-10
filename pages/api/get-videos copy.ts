import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/db";
import { Video } from "../../models/Video";

const getVideos = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Connect to database
    await dbConnect();

    // Fetch all videos
    const videos = await Video.find();

    // Return videos
    return res.status(200).json({ videos });
  } catch (error) {
    console.error("Error fetching videos:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getVideos;
