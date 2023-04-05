import classes from "./Banner.module.css";
import orcun from "../../assets/orcun.jpg";

const Banner = () => {
  return (
    <div id="home" className={classes.banner}>
      <div className={classes.greetings}>
        <h2>
          <span>Hi, I am </span>Orcun
        </h2>
        <h3>Software Engineer | Frontend Developer</h3>
      </div>
      <img src={orcun} className={classes.icon} alt="OG" />
    </div>
  );
};

export default Banner;
