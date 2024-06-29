import React from "react";
import { MovieModel } from "../../interfaces/Movie";
import Movie from "./Movie";

interface MovieListProps {
  movies: MovieModel[];
  onSelectMovie: (id: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list">
      {movies?.map((movie: MovieModel) => (
        <Movie movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
