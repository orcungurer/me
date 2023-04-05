import classes from "./Projects.module.css";
import ProjectItem from "./ProjectItem";
import { projects } from "../data";

const Projects = () => {
  return (
    <div id="projects" className={classes.projects}>
      <h3>Projects</h3>
      <ul className={classes.list}>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            techs={project.techs}
            link={project.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
