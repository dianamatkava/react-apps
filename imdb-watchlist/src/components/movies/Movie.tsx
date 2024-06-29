import React from "react";
import { MovieModel } from "../../interfaces/Movie";

interface MovieProps {
  movie: MovieModel;
  onSelectMovie: (id: string) => void;
}

const Movie: React.FC<MovieProps> = ({ movie, onSelectMovie }) => {
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
