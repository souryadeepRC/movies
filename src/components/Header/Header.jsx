import NavigationLink from "../NavigationLink/NavigationLink";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header__section}>
      <h1 className={classes.header__text}>Watch Now</h1>
      <NavigationLink />
    </header>
  );
};
export default Header;
