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


interface IMDBSearchResult {
  Search: MovieModel[];
}


export default function App() {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [watched, setWatched] = useState<WatchedMovieModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  function handleAddWatchedMovie(movie: WatchedMovieModel) {
    setWatched((watchedMovies) => watchedMovies.concat(movie));
  }

  function handleRemoveWatchedMovie(movieId: string) {
    setWatched((watchedMovies) => watchedMovies.filter((movie) => movie.imdbID !== movieId));
  }

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("")

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=e6b9a25e&s=${search}`, {signal: controller.signal}
        );
        if (!res.ok) {
          throw new Error("Fetching movies failed");
        }
        const data: IMDBSearchResult = await res.json();

        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

    return () => {
        controller.abort();
      }
  }, [search]);

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
          <Search setSearch={setSearch} search={search}/>
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
