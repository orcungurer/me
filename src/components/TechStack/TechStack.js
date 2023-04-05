import BootstrapIcon from "../Icons/BootstrapIcon";
import CssIcon from "../Icons/CssIcon";
import FirebaseIcon from "../Icons/FirebaseIcon";
import HtmlIcon from "../Icons/HtmlIcon";
import JavascriptIcon from "../Icons/JavascriptIcon";
import ReactIcon from "../Icons/ReactIcon";
import ReactRouterIcon from "../Icons/ReactRouterIcon";
import ReduxIcon from "../Icons/ReduxIcon";
import ScssIcon from "../Icons/ScssIcon";
import Card from "../UI/Card";
import classes from "./TechStack.module.css";

const TechStack = () => {
  const techStack = [
    {
      id: "html",
      icon: <HtmlIcon />,
    },
    {
      id: "css",
      icon: <CssIcon />,
    },
    {
      id: "javascript",
      icon: <JavascriptIcon />,
    },
    {
      id: "bootstrap",
      icon: <BootstrapIcon />,
    },
    {
      id: "scss",
      icon: <ScssIcon />,
    },
    {
      id: "react",
      icon: <ReactIcon />,
    },
    {
      id: "redux",
      icon: <ReduxIcon />,
    },
    {
      id: "reactrouter",
      icon: <ReactRouterIcon />,
    },
    {
      id: "firebase",
      icon: <FirebaseIcon />,
    },
  ];

  return (
    <div id="tech-stack" className={classes["tech-stack"]}>
      <h3>Tech Stack</h3>
      <ul className={classes.list}>
        {techStack.map((tech) => (
          <Card key={tech.id} className={classes.card}>
            <li>{tech.icon}</li>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
