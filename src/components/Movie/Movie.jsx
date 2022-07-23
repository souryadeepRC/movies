import { useContext } from "react";
import MovieContext from "../../store/MovieContext";
import classes from "./Movie.module.css";
const Movie = ({ data: movie }) => {
  const ctx = useContext(MovieContext);
  const isFavorite = ctx.favoriteMovies.find(id => id===movie.id)
  const addToFavoriteHandler = () => {
    ctx.addFavoriteMovies(movie.id)
  };
  const removeToFavoriteHandler = () => {
    ctx.removeFavorites(movie.id)
  }

  return (
    <article className={classes.container}>
      <section className={classes.movie__title}>
        <h2>{movie.name}</h2>
        <h6>{movie.description}</h6>
      </section>
      <section>
        <p>{movie.genre}</p>
        <p>{movie.language}</p>
      </section>
      <section>
        <p>{movie.cast}</p>
        {movie.similarMovies!=='' && <p><strong>similar Movies : </strong>{movie.similarMovies}</p>}
      </section>
      <div>
        {isFavorite && <button onClick={removeToFavoriteHandler}>Remove from Favorite</button>}
        {!isFavorite && <button onClick={addToFavoriteHandler}>Add to Favorite</button>}
      </div>
    </article>
  );
};

export default Movie;
