import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded mb-4"
      />
      <h2 className="text-lg font-bold">{movie.title}</h2>
      <p className="text-gray-400">{movie.release_date}</p>
      <Link
        to={`/movie/${movie.id}`}
        className="block mt-4 text-cyan-400 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
