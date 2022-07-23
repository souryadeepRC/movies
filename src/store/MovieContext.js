import React,{ useReducer } from "react";
const initialState = {
    movies: [],
    favoriteMovies: []
}
const MovieContext = React.createContext({
    movies: [],
    addMovie: (movie) => { },
    favoriteMovies: [],
    addFavoriteMovies: (movie) => { }
})
const reducerFunction = (state,action) => {
    if(action.type === 'ADD'){
        const latestMovieData = state.movies
        latestMovieData.push({
            id: latestMovieData.length+1,
            ...action.val
        })
        return {
            movies : latestMovieData,
            favoriteMovies : state.favoriteMovies
        }
    }
    if(action.type === 'ADD_FAV'){
        const favoriteMovieIds = new Set(state.favoriteMovies)
        favoriteMovieIds.add(action.val)
        return {
            movies : state.movies,
            favoriteMovies : [...favoriteMovieIds]
        }
    }
    return initialState
}
export const MovieContextProvider = (props) => {
    const [contextState, dispatch] = useReducer(reducerFunction, initialState)
    const contextData = {
        movies: contextState.movies,
        favoriteMovies: contextState.favoriteMovies,
        addMovie: (movie) => { dispatch({ type: 'ADD', val: movie }) },
        addFavoriteMovies: (movieId) => { dispatch({ type: 'ADD_FAV', val: movieId }) }
    }
    return (
        <MovieContext.Provider value={contextData}>{props.children}</MovieContext.Provider>
    )
}

export default MovieContext