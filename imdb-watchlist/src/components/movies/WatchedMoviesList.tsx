import React from "react";
import WatchedMovie from "./WatchedMovie";
import { WatchedMovieModel } from "../../interfaces/Movie";

interface MovieListProps {
  watched: WatchedMovieModel[];
  onRemoveWatched: (movieId: string) => void;
}

const WatchedMoviesList: React.FC<MovieListProps> = ({ watched, onRemoveWatched}) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} onRemoveWatched={onRemoveWatched}/>
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
