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

export interface MovieInfoModel extends MovieModel {
  released: string;
  runtime: string;
  genre: string;
  imdbRating: string;
  plot: string;
  actors: string[];
  director: string;
}
