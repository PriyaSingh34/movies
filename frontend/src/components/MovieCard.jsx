import React, {useState} from "react";
import axios from "axios"

import { FaHeart } from "react-icons/fa";

const MovieCard = ({ movie }) => {

  const [isFavorite, setIsFavorite] = useState(false);

// console.log(movie)
  const onclickaddToFavorites = (movie) => {
    axios
      .post("http://localhost:5000/api/favorite", movie)
      .then((response) => {
        const newFavorite = response;
        setIsFavorite(true); 
        console.log(newFavorite);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
      <img
        src={movie.Poster}
        alt={movie?.title}
        className="w-full h-80 object-cover"
      />
      <button
      onClick={() => {
        onclickaddToFavorites(movie);
      }}
      className="absolute top-0 right-0 p-4 bg-[#080A1A] border rounded-md border-gray-200 text-white hover:text-red-500">
        <FaHeart size={25} className={isFavorite ? "text-red-500" : ""} />
      </button>
      <div className="absolute flex justify-between items-center gap-2 bottom-0 right-0 left-0 bg-[#080A1A] bg-opacity-60 px-4 py-3 text-white">
        <h3 className="font-semibold">{movie?.Title}</h3>

        <p className="mt-3">Year: {movie?.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
