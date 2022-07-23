
import Movie from '../Movie/Movie';
import classes from './Movies.module.css'

const Movies = ({movies}) => {
  return (
    <article className={classes.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} data={movie} />
      ))}
    </article>
  );
};
export default Movies;
