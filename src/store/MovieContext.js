import React, { useReducer } from "react";
const initialState = {
    movies: [],
    favoriteMovies: []
}
const MovieContext = React.createContext({
    movies: [],
    addMovie: (movie) => { },
    favoriteMovies: [],
    addFavorites: (movieId) => { },
    removeFavorites: (movieId) => { }
})
const reducerFunction = (state, action) => {
    if (action.type === 'ADD') {
        const latestMovieData = state.movies
        latestMovieData.push({
            id: latestMovieData.length + 1,
            ...action.val
        })
        return {
            movies: latestMovieData,
            favoriteMovies: state.favoriteMovies
        }
    }
    if (action.type === 'ADD_FAV') {
        const favoriteMovieIds = new Set(state.favoriteMovies)
        favoriteMovieIds.add(action.val)
        return {
            movies: state.movies,
            favoriteMovies: [...favoriteMovieIds]
        }
    }
    if (action.type === 'REM_FAV') {
        const favoriteMovieIds = state.favoriteMovies
        console.log(favoriteMovieIds);
        const removedIds = favoriteMovieIds.filter(movieId => movieId !== action.val)
        console.log(removedIds);
        return {
            movies: state.movies,
            favoriteMovies: removedIds
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
        addFavoriteMovies: (movieId) => { dispatch({ type: 'ADD_FAV', val: movieId }) },
        removeFavorites: (movieId) => { dispatch({ type: 'REM_FAV', val: movieId }) }
    }
    return (
        <MovieContext.Provider value={contextData}>{props.children}</MovieContext.Provider>
    )
}

export default MovieContext