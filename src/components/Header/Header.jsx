import NavigationLink from "../NavigationLink/NavigationLink";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header__section}>
      <p className={classes.header__icon}>Icon</p>
      <h1 className={classes.header__text}>Watch Now</h1>

      <NavigationLink />
    </header>
  );
};
export default Header;
