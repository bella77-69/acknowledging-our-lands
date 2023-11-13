import styles from "./hero.module.css";
import { Button } from 'antd';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const btnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/land-acknowledgement";
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1>Welcome to Acknowledging Our Lands</h1>
        <p>
          <strong>Acknowledging Our Lands!</strong> This app will help you
          detect your location and guide you through the process of making a
          meaningful territory acknowledgment.
        </p>
        <p>
          Thanks to the valuable dataset provided by Native Land Digital, our
          project has been able to accurately map and acknowledge the Indigenous
          territories and traditional lands. Visit their website at{" "}
          <a
            className={styles.heroLink}
            href="https://native-land.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Native Land
          </a>{" "}
          to learn more about their important work.
        </p>
        {/* <button
          type="text"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => btnClick(e)}
          className={styles.heroBtn}
        >
          Get Started
        </button> */}
        <Button type='text'onClick={(e: React.MouseEvent<HTMLButtonElement>) => btnClick(e)} className={styles.heroBtn}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
