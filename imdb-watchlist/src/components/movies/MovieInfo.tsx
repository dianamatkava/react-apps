import React, { useEffect, useRef, useState } from "react";
import { MovieInfoModel, WatchedMovieModel } from "../../interfaces/Movie";
import StarRating from "../rating/StarRating";
import Loader from "../utils/Loader";
import useKey from "../../hook/useKey";

interface MovieInfoProps {
  movieId: string;
  watchedMovies: WatchedMovieModel[];
  onCloseSelectedMovie: () => void;
  onAddWatched: (movie: WatchedMovieModel) => void;
  onRemoveWatched: (movieId: string) => void;
}

const MovieInfo: React.FC<MovieInfoProps> = ({
  movieId,
  onCloseSelectedMovie,
  onAddWatched,
  onRemoveWatched,
  watchedMovies,
}) => {
  const [movie, setMovie] = useState<MovieInfoModel | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) {
      // to avoid setting count on first render
      countRef.current++;
    }
  }, [userRating]);

  const isWatched = watchedMovies
    .map((movie) => movie.imdbID)
    .includes(movieId);

  useEffect(() => {
    async function getMovieInfo(movieId: string) {
      setIsLoading(true);

      const res = await fetch(
        `http://www.omdbapi.com/?apikey=e6b9a25e&i=${movieId}`,
      );
      if (!res.ok) {
        throw new Error("Fetching movie failed");
      }
      const data: MovieInfoModel = await res.json();
      setMovie(data);

      const watchedMovie = watchedMovies
        .filter((movie) => movie.imdbID === movieId)
        .at(0);
      setUserRating(watchedMovie?.userRating || null);

      setIsLoading(false);
    }
    getMovieInfo(movieId);
  }, [movieId]);

  useEffect(() => {
    if (!movie?.Title) return;
    document.title = `Movie | ${movie.Title}`;
    return function () {
      document.title = `imdbWatchList`;
    };
  }, [movie]);

  useKey({ key: "Escape", callback: onCloseSelectedMovie });

  function onAddMovie() {
    if (!movie) {
      return;
    }
    const newWatchedMovie: WatchedMovieModel = {
      imdbID: movieId,
      Poster: movie.Poster,
      Title: movie.Title,
      Year: movie.Year,
      imdbRating: Number(movie.imdbRating),
      userRating: userRating,
      runtime: Number(movie.Runtime.split(" ").at(0)),
      countRatings: countRef.current,
    };

    onAddWatched(newWatchedMovie);
    onCloseSelectedMovie();
  }

  function onRemoveMovie() {
    onRemoveWatched(movieId);
    onCloseSelectedMovie();
  }

  if (!movie) {
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="details">
      <header>
        <button></button>
        <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
        <div className="details-overview">
          <h2>{movie.Title}</h2>
          <p>
            {movie.Released} &bull; {movie.Runtime}
          </p>
          <p>{movie.Genre}</p>
          <p>
            <span>⭐️</span> IMDB Rating: {movie.imdbRating}
          </p>
        </div>
      </header>

      <section>
        <div className="rating">
          <StarRating
            setRating={setUserRating}
            maxStarts={10}
            color="yellow"
            size={28}
            userRating={userRating}
          />
          {isWatched ? (
            <button className="btn-remove" onClick={onRemoveMovie}>
              - Remove from Watchlist
            </button>
          ) : (
            <button className="btn-add" onClick={onAddMovie}>
              + Add to Watchlist
            </button>
          )}
        </div>
        <p>
          <em>{movie.Plot}</em>
        </p>
        <p>Starring: {movie.Actors}</p>
        <p>Directed by: {movie.Director}</p>
      </section>

      <button className="btn-back" onClick={onCloseSelectedMovie}>
        &larr;
      </button>
    </div>
  );
};

export default MovieInfo;
