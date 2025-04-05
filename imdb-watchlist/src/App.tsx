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
import { WatchedMovieModel } from "./interfaces/Movie";
import Loader from "./components/utils/Loader";
import ErrorMessage from "./components/utils/ErrorMessage";
import MovieInfo from "./components/movies/MovieInfo";
import useMovies from "./hook/useMovies";
import useLocalStorageState from "./hook/useLocalStorageState";

export default function App() {
  const [watched, setWatched] = useLocalStorageState<WatchedMovieModel[]>({
    key: "watchedMovies",
    initial: [],
  });

  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const { error, isLoading, movies } = useMovies({ search: search });

  function handleAddWatchedMovie(movie: WatchedMovieModel) {
    setWatched((watchedMovies) => watchedMovies.concat(movie));
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleRemoveWatchedMovie(movieId: string) {
    setWatched((watchedMovies) =>
      watchedMovies.filter((movie) => movie.imdbID !== movieId),
    );
  }

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
          <Search setSearch={setSearch} search={search} />
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
                <WatchedMoviesList
                  watched={watched}
                  onRemoveWatched={handleRemoveWatchedMovie}
                ></WatchedMoviesList>
              </>
            )}
          </BoxContainer>
        </>
      </Main>
    </>
  );
}
