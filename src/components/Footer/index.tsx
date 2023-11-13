import { useState, useEffect } from "react";
import styles from "./footer.module.css";

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

      {showBackToTop && (
        <button className={styles.backToTopButton} onClick={scrollToTop}>
          &#8593;
        </button>
      )}
    </footer>
  );
}

export default Footer;
