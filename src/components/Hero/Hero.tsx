import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <h3>Hello, I'm Tim.</h3>
      <h2>Frontend developer building practical, polished web applications.</h2>
      <h3>
        I work mainly with React and TypeScript, with a focus on clean
        interfaces and usability.
      </h3>
      <a href="#projects">View Projects</a>
    </section>
  );
};

export default Hero;
