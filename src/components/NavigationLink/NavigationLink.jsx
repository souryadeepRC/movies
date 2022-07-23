import { NavLink } from "react-router-dom"
import classes from "./NavigationLink.module.css";

const NavigationLink = () => {
    return (
        <nav className={classes.header__navigation}>
            <ul>
                <li><NavLink activeClassName={classes.selected__link} exact to="/movies">Movies</NavLink></li>
                <li><NavLink activeClassName={classes.selected__link} to="/add-movie">Add Movie</NavLink></li>
                <li><NavLink activeClassName={classes.selected__link} to="/favorites">Favorites</NavLink></li>
            </ul>

        </nav>
    )
}
export default NavigationLink