import styles from "./Header.module.scss";

type HeaderProps = {
  activeSection: string;
};

const Header = ({ activeSection }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h2>TY</h2>
      <div className={styles.navButtons}>
        <a
          className={`${styles.navButton} ${activeSection === "home" ? styles.active : ""}`}
          href="#home"
        >
          Home
        </a>
        <a
          className={`${styles.navButton} ${activeSection === "about" ? styles.active : ""}`}
          href="#about"
        >
          About
        </a>
        <a
          className={`${styles.navButton} ${activeSection === "projects" ? styles.active : ""}`}
          href="#projects"
        >
          Projects
        </a>
        <a
          className={`${styles.navButton} ${activeSection === "contact" ? styles.active : ""}`}
          href="#contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
