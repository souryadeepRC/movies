import { useContext } from "react"

import Movies from "../components/Movies/Movies";
import MovieContext from "../store/MovieContext"

const MoviesPage = (props) => { 
    
  const ctx = useContext(MovieContext)
  console.log(ctx);
    return (
        <>
        <h6>Movies Page</h6>
        <Movies movies={ctx.movies}/>
        </>
    )
}
export default MoviesPage