import React, { useEffect, useState } from "react";
import { MovieModel, MovieInfoModel } from "../../interfaces/Movie";
import StarRating from "../rating/StarRating";

interface MovieInfoProps {
  movieId: string;
  onCloseSelectedMovie: () => void;
}

const MovieInfo: React.FC<MovieInfoProps> = ({
  movieId,
  onCloseSelectedMovie,
}) => {
  const [movie, setMovie] = useState<MovieInfoModel | null>(null);

  useEffect(() => {
    async function getMovieInfo(movieId: string) {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=e6b9a25e&i=${movieId}`
      );
      if (!res.ok) {
        throw new Error("Fetching movie failed");
      }
      const data: MovieModel = await res.json();
      setMovie(data);
      console.log(data);
    }
    getMovieInfo(movieId);
  }, []);

  return (
    <div className="details">
      <header>
        <button></button>
        <img src={movie?.Poster} alt="Poster" />
        <div className="details-overview">
          <h2>{movie?.Title}</h2>
          <p>
            {movie?.released} &bull; {movie?.runtime}
          </p>
          <p>{movie?.genre}</p>
          <p>
            <span>⭐️</span> IMDB Rating: {movie?.imdbRating}
          </p>
        </div>
      </header>

      <section>
        <div className="rating">
          <StarRating
            setRating={() => 1}
            maxStarts={10}
            color="yellow"
            size={28}
          />
        </div>
        <p>
          <em>{movie?.plot}</em>
        </p>
        <p>Starring {movie?.actors}</p>
        <p>Director: {movie?.director}</p>
      </section>

      <button className="btn-back" onClick={onCloseSelectedMovie}>
        &larr;
      </button>
    </div>
  );
};

export default MovieInfo;
