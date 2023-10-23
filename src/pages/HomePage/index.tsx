import Hero from "../../components/Hero";
import styles from "./HomePage.module.css";

type HomePageProps = {};

function HomePage( {} : HomePageProps) {

  const btnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/land-acknowledgement";
  };

  return (
    <div className={styles.home}>
      <Hero />
      <div className={styles.homeContainer}>
        <div className={`${styles.containerBox} ${styles.row}`}>
          <div className={styles.content}>
            <p>
              Territory acknowledgment is crucial to respecting Indigenous
              presence and land rights, highlighting the ongoing impacts of
              colonialism. It's vital during events to express solidarity,
              fostering reconciliation and promoting a deeper understanding of
              Indigenous history and culture.
            </p>
          </div>
          <div className={styles.content}>
            <p>
              However, we understand the significance of going beyond mere token
              gestures. Our app emphasizes meaningful actions, urging settlers
              to reflect on privileges shaped by historical colonial injustices.
              Recognize that these privileges result from Indigenous
              dispossession and marginalization.
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
      
        </div>
        <div className={`${styles.containerBox} ${styles.column}`}>
          <div className={styles.content}>
            <p>
              With "Acknowledging Our Lands," we aim to promote understanding
              and empathy. By helping you identify your location and providing
              information on the Indigenous territories you are on, our app
              encourages a deeper connection to the land and its history. We
              believe that this awareness can lead to more informed and
              respectful territory acknowledgments.
            </p>
          </div>
          <div className={`${styles.content} ${styles.buttonContainer}`}>
            
            <p>
              Let's take a step forward in supporting reconciliation efforts and
              working towards a society that acknowledges and honors Indigenous
              rights and sovereignty. Download our app today and join us in
              making a positive impact through meaningful territory
              acknowledgments.
            </p>
            <button
              onClick={(e) => btnClick(e)}
              className={styles.getAcknowledgmentButton}
            >
              Get Your Land Acknowledgment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
