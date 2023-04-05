import classes from "./Footer.module.css";
import og from "../../assets/ogwhite.svg";
import { socials } from "../data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={classes.footer}>
      <div className={classes.brand}>
        <img src={og} alt="logo" />
        <span>©{year}</span>
      </div>
      <div className={classes.links}>
        {socials.map((social) => (
          <a key={social.id} href={social.link}>{social.icon}</a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;