import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/db";
import { Movie } from "../../models/Movie";

// API route handler to fetch the movies, create a movie, update a movie, and delete a movie
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect(); // Connect to the database

  if (req.method === "GET") {
    // Fetch all movies from the database
    try {
      const movies = await Movie.find();
      return res.status(200).json(movies);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch movies." });
    }
  } else if (req.method === "POST") {
    // Create a new movie
    const { name, singer, cast, releaseDate, budget } = req.body;

    // Input validation
    if (!name || !cast || !releaseDate || !budget) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const newMovie = new Movie({
        name,
        singer,
        cast,
        releaseDate,
        budget,
      });

      // Save the new movie to the database
      await newMovie.save();
      return res.status(201).json(newMovie);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create the movie" });
    }
  } else if (req.method === "PUT") {
    // Extract movie ID from query params and other data from body
    const { id } = req.query;
    const { name, singer, cast, releaseDate, budget } = req.body;

    // Input validation
    if (!id || !name || !cast || !releaseDate || !budget) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Find and update the movie
      const updatedMovie = await Movie.findByIdAndUpdate(
        id,
        { name, singer, cast, releaseDate, budget },
        { new: true } // Return the updated movie
      );

      if (!updatedMovie) {
        return res.status(404).json({ error: "Movie not found" });
      }

      return res.status(200).json(updatedMovie);
    } catch (error) {
      // Log the error for better debugging
      console.error(error);
      return res.status(500).json({ error: "Failed to update the movie" });
    }
  } else if (req.method === "DELETE") {
    // Delete a movie by ID
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Movie ID is required" });
    }

    try {
      const deletedMovie = await Movie.findByIdAndDelete(id);

      if (!deletedMovie) {
        return res.status(404).json({ error: "Movie not found" });
      }

      return res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete the movie" });
    }
  }

  // If the HTTP method isn't one of the supported methods
  return res.status(405).json({ error: "Method Not Allowed" });
}
