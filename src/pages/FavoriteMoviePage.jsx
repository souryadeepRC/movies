import { useContext } from "react";
import Movies from "../components/Movies/Movies";
import MovieContext from "../store/MovieContext";

const FavoriteMoviePage = () => {
    const ctx = useContext(MovieContext)
    console.log(ctx);
    const favoriteMovies = ctx.movies.filter(movie => ctx.favoriteMovies.includes(movie.id))
    console.log(favoriteMovies);
      return (
          <>
          <h6>Movies Page</h6>
          <Movies movies={favoriteMovies}/>
          </>
      )
}

export default FavoriteMoviePage