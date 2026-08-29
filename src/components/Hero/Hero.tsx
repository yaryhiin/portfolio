import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <h2>Hello, I'm Tim.</h2>
      <h3>I'm a front end web developer.</h3>
      <a href="#about">Learn More</a>
    </section>
  );
};

export default Hero;
