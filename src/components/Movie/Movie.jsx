import { useContext } from "react";
import MovieContext from "../../store/MovieContext";
import classes from "./Movie.module.css";
const Movie = ({ data: movie }) => {
  const ctx = useContext(MovieContext);

  console.log(ctx);
  const isFavorite = ctx.favoriteMovies.find(id => id===movie.id)
  console.log(isFavorite);
  const addToFavoriteHandler = () => {
    ctx.addFavoriteMovies(movie.id)
  };
  const removeToFavoriteHandler = () => {
    ctx.removeFavorites(movie.id)
  }

  return (
    <article className={classes.container}>
      <section>
        <h2>{movie.name}</h2>
        <h6>{movie.description}</h6>
      </section>
      <section>
        <h2>{movie.genre}</h2>
        <h6>{movie.language}</h6>
      </section>
      <section>
        <h2>{movie.cast}</h2>
        <h6>{movie.similarMovies}</h6>
      </section>
      <div>
        {isFavorite && <button onClick={removeToFavoriteHandler}>Remove from Favorite</button>}
        {!isFavorite && <button onClick={addToFavoriteHandler}>Add to Favorite</button>}
      </div>
    </article>
  );
};

export default Movie;
