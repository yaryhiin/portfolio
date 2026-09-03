import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h1 className="title">Contact</h1>
      <h2>Have a question or want to get in touch? Feel free to message me.</h2>
      <div className={styles.methods}>
        <a
          href="mailto:tim@yaryhin.com"
          target="_blank"
          className={styles.method}
          aria-label="Email Tim"
        >
          <img src="/images/contact/mail.png"></img>
        </a>
        <a
          href="https://t.me/yaryhin"
          target="_blank"
          className={styles.method}
          aria-label="Message Tim on Telegram"
        >
          <img src="/images/contact/telegram.png"></img>
        </a>
      </div>
    </section>
  );
};

export default Contact;
