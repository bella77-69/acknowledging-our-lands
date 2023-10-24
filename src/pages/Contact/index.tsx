import styles from './contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, please feel free to reach out to us:</p>

      <div className={styles.contactInfo}>
        <div>
          <h2>Email:</h2>
          <p><a href="mailto:acknowledgingourlands@gmail.com">email us</a></p>
        </div>
  
      </div>
      </div>
    </div>
  );
}

export default Contact;

