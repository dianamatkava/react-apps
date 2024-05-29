import React from "react";
import WatchedMovie from "./WatchedMovie";
import { Watched } from "../../interfaces/Movie";

interface MovieListProps {
  watched: Watched[];
}

const WatchedMoviesList: React.FC<MovieListProps> = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
