import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/Main";
import WatchedMoviesList from "./components/movies/WatchedMoviesList";
import MovieList from "./components/movies/MoviesList";
import Logo from "./components/utils/Logo";
import Search from "./components/utils/Search";
import BoxContainer from "./components/utils/BoxContainer";
import SearchResults from "./components/header/SearchResults";
import WatchedSummary from "./components/movies/WatchedSummary";
import {MovieModel, WatchedMovieModel} from "./interfaces/Movie";
import Loader from "./components/utils/Loader";
import ErrorMessage from "./components/utils/ErrorMessage";
import MovieInfo from "./components/movies/MovieInfo";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData: WatchedMovieModel[] = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];


interface IMDBSearchResult {
  Search: MovieModel[];
}


export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

  function handleAddWatchedMovie(movie: WatchedMovieModel) {
    setWatched((watchedMovies) => watchedMovies.concat(movie));
  }

  function handleRemoveWatchedMovie(movieId: string) {
    setWatched((watchedMovies) => watchedMovies.filter((movie) => movie.imdbID !== movieId));
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "http://www.omdbapi.com/?apikey=e6b9a25e&s=Interstellar"
        );
        if (!res.ok) {
          throw new Error("Fetching movies failed");
        }
        const data: IMDBSearchResult = await res.json();
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  function onSelectMovie(id: string) {
    setSelectedMovie((val) => (id === val ? null : id));
  }

  function onCloseSelectedMovie() {
    setSelectedMovie(null);
  }

  return (
    <>
      <Header>
        <>
          <Logo />
          <Search />
          <SearchResults movies={movies} />
        </>
      </Header>
      <Main>
        <>
          <BoxContainer>
            <>
              {isLoading && <Loader />}
              {!isLoading && !error && (
                <MovieList movies={movies} onSelectMovie={onSelectMovie} />
              )}
              {error && <ErrorMessage message={error} />}
            </>
          </BoxContainer>

          <BoxContainer>
            {selectedMovie ? (
              <MovieInfo
                movieId={selectedMovie}
                onCloseSelectedMovie={onCloseSelectedMovie}
                onAddWatched={handleAddWatchedMovie}
                onRemoveWatched={handleRemoveWatchedMovie}
                watchedMovies={watched}
              />
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList watched={watched} onRemoveWatched={handleRemoveWatchedMovie}></WatchedMoviesList>
              </>
            )}
          </BoxContainer>
        </>
      </Main>
    </>
  );
}
