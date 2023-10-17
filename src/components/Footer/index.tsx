import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-image"></div>
        <p>
          &copy; {new Date().getFullYear()} Acknowledging Our Lands. All rights
          reserved.
        </p>
        <p className="email">
          If you have any questions or feedback, please email us at:
          <br />
          <a
            className="email-link"
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
