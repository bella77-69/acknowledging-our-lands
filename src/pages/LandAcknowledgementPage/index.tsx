import React, { useState } from "react";
import styles from "./landAcknowledgement.module.css";
import { Button } from "antd";

interface LandAcknowledgmentProps {
  indigenousLands: any[];
}

const LandAcknowledgment: React.FC<LandAcknowledgmentProps> = ({
  indigenousLands,
}) => {
  const [currentAcknowledgmentIndex, setCurrentAcknowledgmentIndex] =
    useState<number>(0);

  const btnLearn = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/learn-more";
  };

  const indigenousLandVariations: string[] = [
    "I am honored to be a guest on the traditional and unceded territories of the ",
    "I acknowledge that I am on the traditional and unceded territories of the ",
    "Today, we gather on the ancestral lands of the  ",
    "We are grateful to gather on the traditional and unceded territories of the ",
    "We are gathered on the traditional and unceded territories of the ",
    "We are meeting on the traditional and unceded territories of the ",
    "We respectfully acknowledge and extend our gratitude for their stewardship of this land, and respect to the Elders, past, present and future, of the ",
  ];

  const changeAcknowledgment = () => {
    // Increment the current acknowledgment index and loop back to the first one if needed
    setCurrentAcknowledgmentIndex((prevIndex) =>
      prevIndex === indigenousLandVariations.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.landAcknowledgment}>
      <h2 className={styles.locationTitle}>Your Land Acknowledgment based on your current location</h2>
      <div className={styles.content}>
        {indigenousLands.length > 0 ? (
          <p className={styles.landParagraph}>
            {indigenousLandVariations[currentAcknowledgmentIndex]}
            <span className={styles.indigenousNames}>
              {indigenousLands.map((land, index) => (
                <React.Fragment key={land.properties.Name}>
                  {index > 0 && ", "}
                  {land.properties.Name}
                </React.Fragment>
              ))}
            </span>
            {` First Nations.`}
          </p>
        ) : (
          <p>Loading Indigenous Lands information...</p>
        )}
      </div>
      <div className={styles.cta}>
        <Button onClick={changeAcknowledgment} className={styles.ctaButton}>
          Change Acknowledgment
        </Button>
        <Button onClick={(e) => btnLearn(e)} className={styles.ctaButton}>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default LandAcknowledgment;
