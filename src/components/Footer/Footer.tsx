import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <p>Tim Yaryhin &copy; {new Date().getFullYear()}</p>
      <p>
        Icons by
        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          Icons8
        </a>
      </p>
    </section>
  );
};

export default Footer;
