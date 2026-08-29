import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <p>Tim Yaryhin &copy; 2026</p>
      <p>
        Icons by<a href="https://icons8.com/">Icons8</a>
      </p>
    </section>
  );
};

export default Footer;
