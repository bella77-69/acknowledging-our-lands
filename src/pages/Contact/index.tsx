import styles from './contact.module.css';
import { Card } from '@mui/material';

function Contact() {
  return (
    <Card className={styles.contact}>
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
    </Card>
  );
}

export default Contact;

