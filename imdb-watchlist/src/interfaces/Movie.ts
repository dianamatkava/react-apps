export interface MovieModel {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

export interface Watched extends MovieModel {
  imdbRating: number;
  userRating: number;
  runtime: number;
}
