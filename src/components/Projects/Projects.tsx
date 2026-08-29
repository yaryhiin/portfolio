import styles from "./Projects.module.scss";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h1 className="title">Projects</h1>
      {projects &&
        projects.map((project) => (
          <div className={styles.projectCard} key={project.name}>
            <a href={project.liveUrl} target="_blank">
              <img src={project.image} className={styles.projectImage}></img>
            </a>
            <div className={styles.projectInfo}>
              <h2 className={styles.projectTitle}>{project.name}</h2>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.techContainer}>
                <h3 className={styles.techTitle}>Technologies used:</h3>
                <div className={styles.tech}>
                  {project.technologies && (
                    <p>{project.technologies.join(" • ")}</p>
                  )}
                </div>
              </div>
              <div className={styles.links}>
                <a href={project.githubUrl} target="_blank">
                  GitHub
                </a>
                <a href={project.liveUrl} target="_blank">
                  Website
                </a>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Projects;
