import styles from "./Skills.module.scss";
import { skills } from "../../data/skills.ts";

const Skills = () => {
  return (
    <section id="skills">
      <div className={styles.skills}>
        {skills &&
          skills.map((skill) => (
            <div className={styles.icon} key={skill}>
              <img src={`/images/logos/${skill}.png`}></img>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
