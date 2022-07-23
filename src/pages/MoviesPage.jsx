import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

import Movies from "../components/Movies/Movies";
import MovieSearch from "../components/MovieSearch/MovieSearch";
import MovieContext from "../store/MovieContext";

const MoviesPage = (props) => {
  const ctx = useContext(MovieContext);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(ctx.movies);
  }, [ctx]);
  const searchMovieHandler = (value) => {
    console.log(value);
    const filteredMovies = ctx.movies.filter(
      (movie) =>
        movie.name === value ||
        movie.genre === value ||
        movie.language === value
    );
    setMovies(filteredMovies);
  };
  return (
    <>
      <MovieSearch onSearch={searchMovieHandler} />
      <Movies movies={movies} />
    </>
  );
};
export default MoviesPage;
