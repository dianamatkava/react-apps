import { useEffect, useState } from "react";
import { MovieModel } from "../interfaces/Movie";
interface IMDBSearchResult {
  Search: MovieModel[];
}

const apiKey = process.env.REACT_APP_IMDB_API_KEY;

export default function useMovies({ search }: { search: string }) {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<MovieModel[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`,
          {
            signal: controller.signal,
          },
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
    };
  }, [search]);

  return { error, isLoading, movies };
}
