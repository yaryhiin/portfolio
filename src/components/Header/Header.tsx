import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={`header ${styles.header}`}>
      <div className={styles.navButtons}>
        <a className={styles.navButton} href="#home">
          Home
        </a>
        <a className={styles.navButton} href="#about">
          About
        </a>
        <a className={styles.navButton} href="#projects">
          Projects
        </a>
        <a className={styles.navButton} href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
