import { useEffect, useState } from "react";
import moment from "moment";

interface Movie {
  _id: string;
  name: string;
  singer: string;
  cast: string[];
  releaseDate: string;
  budget: number;
}

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    try {
      const res = await fetch("/api/movies");
      if (res.ok) {
        const data = await res.json();
        setMovies(data);
      } else {
        setError("Failed to load movies.");
      }
    } catch (error) {
      setError("Error fetching movies.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movie List</h1>
      <ul className="space-y-3">
        {movies.map((movie) => (
          <li key={movie._id} className="border p-4">
            <h3 className="text-xl font-semibold">{movie.name}</h3>
            <p>
              <strong>Cast:</strong> {movie.cast.join(", ")}
            </p>
            <p>
              <strong>Singer:</strong> {movie.singer || "N/A"}
            </p>
            <p>
              <strong>Release Date:</strong>
              {moment(movie.releaseDate).format("MMMM DD, YYYY")}
            </p>
            <p>
              <strong>Budget:</strong> {movie.budget}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
