import React, { useState } from "react";
import "./landAcknowledgement.css";

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
    <div className="land-acknowledgment">
      <h2 className="location-title">Land Acknowledgment</h2>
      <div className="content">
        {indigenousLands.length > 0 ? (
          <p className="land-paragraph">
            {indigenousLandVariations[currentAcknowledgmentIndex]}
            <span className="indigenous-names">
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
      <div className="cta">
        <button onClick={changeAcknowledgment} className="cta-button">
          Change Acknowledgment
        </button>
        <button onClick={(e) => btnLearn(e)} className="cta-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandAcknowledgment;