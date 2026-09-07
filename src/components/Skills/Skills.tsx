import styles from "./Skills.module.scss";
import { skills } from "../../data/skills.ts";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={`${styles.title} title`}>Core stack</h2>
      <div className={styles.skills}>
        {skills &&
          skills.map((skill) => (
            <div className={styles.icon} key={skill}>
              <img src={`/images/logos/${skill}.png`} alt={skill}></img>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
