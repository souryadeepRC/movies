import { useContext } from "react"
import MovieContext from "../store/MovieContext"

const MoviesPage = (props) => { 
    
  const ctx = useContext(MovieContext)
  console.log(ctx);
    return (
        <h6>Movies Page</h6>
    )
}
export default MoviesPage