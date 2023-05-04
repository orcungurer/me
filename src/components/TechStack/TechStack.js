import classes from "./TechStack.module.css";
import Card from "../UI/Card";
import { techStack } from "../data";

const TechStack = () => {
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
