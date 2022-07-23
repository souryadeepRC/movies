import classes from './Movie.module.css'
const Movie = ({data:movie}) => {
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
        <button>Add to Favorite</button>
      </div>
    </article>
  );
};

export default Movie;
