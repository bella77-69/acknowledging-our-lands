import "./hero.css";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
    const btnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      window.location.href = '/land-acknowledgement';
    };
    
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
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
            className="hero-link"
            href="https://native-land.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Native Land
          </a>{" "}
          to learn more about their important work.
        </p>
        <button onClick={btnClick} className="hero-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;