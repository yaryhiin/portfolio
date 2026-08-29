import styles from "./About.module.scss";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutInfo}>
        <h1 className="title">About</h1>
        <p className={styles.desc}>
          I’m a frontend developer focused on building practical, polished web
          applications with React and TypeScript. I enjoy turning ideas into
          complete products, from structure and UI to state management,
          authentication, responsive design, and deployment. I care a lot about
          clean interfaces, usability, and making things feel finished rather
          than just technically functional.
        </p>
      </div>
      <Skills />
    </section>
  );
};

export default About;
