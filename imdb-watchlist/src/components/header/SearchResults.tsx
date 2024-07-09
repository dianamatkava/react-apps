import React from "react";
import { MovieModel } from "../../interfaces/Movie";

interface SearchResultsProds {
  movies: MovieModel[];
}

const SearchResults: React.FC<SearchResultsProds> = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{`${movies?.length > 0 ? movies.length : '0'}`}</strong> results
    </p>
  );
};

export default SearchResults;
