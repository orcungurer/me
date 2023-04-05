import classes from "./MainNavigation.module.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import og from "../../assets/ogwhite.svg";
import { useNavigate } from "react-router-dom";
import { navigationLinks } from "../data";

const MainNavigation = () => {
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate("/");
    scroll.scrollToTop();
  };

  return (
    <header className={classes.header}>
      <h1 onClick={homeHandler} className={classes.logo}>
        <img src={og} alt="logo" />
      </h1>
      <nav>
        <ul className={classes.list}>
          {navigationLinks.map((navigationLink) => (
            <li key={navigationLink.to}>
              <ScrollLink to={navigationLink.to} smooth>
                {navigationLink.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
