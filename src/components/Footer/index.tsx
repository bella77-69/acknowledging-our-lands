import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerImage}></div>
        <p>
          &copy; {new Date().getFullYear()} Acknowledging Our Lands. All rights
          reserved.
        </p>
        <p className={styles.email}>
          If you have any questions or feedback, please email us at:
          <br />
          <a
            className={styles.emailLink}
            href="mailto:acknowledgingourlands@gmail.com"
          >
            acknowledgingourlands@gmail.com
          </a>
        </p>
        <p>Made with ❤️ by Chantelle</p>
      </div>
    </footer>
  );
}

export default Footer;
