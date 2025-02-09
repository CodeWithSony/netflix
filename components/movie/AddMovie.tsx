"use client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AdminPage() {
  const [form, setForm] = useState({
    name: "",
    singer: "",
    cast: "",
    releaseDate: "",
    budget: "",
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          singer: form.singer,
          cast: form.cast.split(","),
          releaseDate: form.releaseDate,
          budget: Number(form.budget),
        }),
      });

      if (res.ok) {
        setMessage("Movie added successfully!");
        router.push("/");
      } else {
        setMessage("Failed to add movie.");
      }
    } catch (error) {
      setMessage("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-black justify-center items-center flex">
      <br />
      <div className="p-4 max-w-lg  bg-white ">
        <h1 className="text-2xl font-bold mb-4">Add Movie</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Movie Name"
            className="border p-2 w-full"
            required
          />
          <input
            name="cast"
            value={form.cast}
            onChange={handleChange}
            placeholder="Cast"
            className="border p-2 w-full"
            required
          />
          <input
            name="singer"
            value={form.singer}
            onChange={handleChange}
            placeholder="singer"
            className="border p-2 w-full"
            required
          />
          <input
            name="releaseDate"
            type="date"
            value={form.releaseDate}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
          <input
            name="budget"
            type="number"
            value={form.budget}
            onChange={handleChange}
            placeholder="Budget"
            className="border p-2 w-full"
            required
          />
          <button
            type="submit"
            className="bg-red-600 py-3 hover:bg-green-700 text-white focus:bg-grenn-700  p-2 w-full"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Movie"}
          </button>
        </form>
        {message && (
          <p className="mt-3 text-center text-green-500">{message}</p>
        )}
      </div>
    </div>
  );
}
