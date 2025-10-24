import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    try {
      const { year, page, genre } = request.body;
      const date = new Date();

      let url = `https://moviesdatabase.p.rapidapi.com/titles?year=${year || date.getFullYear()}&sort=year.decr&limit=12&page=${page}`;
      if (genre && genre !== "All") url += `&genre=${genre}`;

      const resp = await fetch(url, {
        headers: {
          "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
          "x-rapidapi-key": process.env.MOVIE_API_KEY!,
        },
      });

      if (!resp.ok) {
        console.error("RapidAPI fetch failed:", resp.status, await resp.text());
        throw new Error("Failed to fetch movies from API");
      }

      const moviesResponse = await resp.json();
      const movies: MoviesProps[] = moviesResponse.results || [];

      return response.status(200).json({ movies });
    } catch (err) {
      console.error("API Error:", err);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    response.setHeader("Allow", ["POST"]);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
