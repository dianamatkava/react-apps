import React from "react";
import { MovieModel } from "../../interfaces/Movie";

interface SearchResultsProds {
  movies: MovieModel[];
}

const SearchResults: React.FC<SearchResultsProds> = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default SearchResults;
