export interface MovieModel {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

export interface WatchedMovieModel extends MovieModel {
  imdbRating: number;
  userRating: number | null;
  runtime: number;
  countRatings: number;
}

export interface MovieInfoModel extends MovieModel {
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Plot: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Ratings: string[];
  Released: string;
  Runtime: string;
  Writer: string;
  Website: string;
  imdbRating: number;
  imdbVotes: string;
}
