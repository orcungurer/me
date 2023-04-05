import Card from "../UI/Card";
import classes from "./About.module.css";
import { about } from "../data";

const About = () => {
  return (
    <div id="about" className={classes.about}>
      <h3>About</h3>
      <ul className={classes.list}>
        {about.map((aboutItem) => (
          <Card key={aboutItem.id} className={classes.card}>
            <h4 className={classes.type}>{aboutItem.type}</h4>
            <li className={classes["career-items"]}>
              {aboutItem.career.map((careerItem) => (
                <div key={careerItem.id} className={classes["career-item"]}>
                  <span className={classes.icon}>{aboutItem.icon}</span>
                  <div className={classes["career-details"]}>
                    <p className={classes.title}>{careerItem.title}</p>
                    <p className={classes.company}>{careerItem.company}</p>
                    <p className={classes.date}>
                      {careerItem.startDate} - {careerItem.endDate}
                    </p>
                  </div>
                </div>
              ))}
            </li>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default About;
