import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";

const ProjectItem = (props) => {
  const { title, image, description, techs, link } = props;

  return (
    <Card>
      <li className={classes["project-item"]}>
        <img src={image} alt={title} />
        <div className={classes["project-info"]}>
          <h4 className={classes.title}>{title}</h4>
          <p className={classes.description}>{description}</p>
          <div className={classes["project-details"]}>
            <div className={classes["tech-stack"]}>
              <p>Technologies:</p>
              <div className={classes["stack-item"]}>
                {techs.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
            {link && (
              <a href={link} className={classes.demo}>
                Demo
              </a>
            )}
          </div>
        </div>
      </li>
    </Card>
  );
};

export default ProjectItem;
