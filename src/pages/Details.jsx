import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: "YOUR_API_KEY", // Replace with your TMDB API key
              language: "en-US",
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded"
        />
        <div>
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-gray-400">{movie.release_date}</p>
          <p className="mt-4">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
