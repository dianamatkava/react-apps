import React from "react";
import { MovieModel } from "../../interfaces/Movie";
import Movie from "./Movie";

interface MovieListProps {
  movies: MovieModel[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie: MovieModel) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
