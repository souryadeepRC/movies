import { useContext } from "react";
import Movies from "../components/Movies/Movies";
import MovieContext from "../store/MovieContext";

const FavoriteMoviePage = () => {
    const ctx = useContext(MovieContext)
    const favoriteMovies = ctx.movies.filter(movie => ctx.favoriteMovies.includes(movie.id))
      return (
          <>
          <h2 className='text-center'>Your Favorite movies</h2>
          <hr/>
          <Movies movies={favoriteMovies}/>
          </>
      )
}

export default FavoriteMoviePage