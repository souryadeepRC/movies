
import Movie from '../Movie/Movie';
import classes from './Movies.module.css'

const Movies = ({movies}) => {
  if(movies.length===0){
    return <p className={classes.empty__list}>No movie present.</p>
  }
  return (
    <article className={classes.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} data={movie} />
      ))}
    </article>
  );
};
export default Movies;
