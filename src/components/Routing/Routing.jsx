
import { Redirect, Route, Switch } from 'react-router-dom'

import MoviesPage from '../../pages/MoviesPage';
import AddMoviePage from '../../pages/AddMoviePage';
const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/movies"></Redirect>
      </Route>
      <Route path="/movies">
        <MoviesPage />
      </Route>
      <Route path="/add-movie">
        <AddMoviePage />
      </Route>
      <Route path="/favorites" exact>
        {<p>Favorites</p>}
      </Route>
      <Route path="/movies/:movieId">{<p>Movie ID</p>}</Route>
      <Route path="*">{<p>ERROR</p>}</Route>
    </Switch>
  );
};

export default Routing;
