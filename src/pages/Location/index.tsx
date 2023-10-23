import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./location.module.css";
import LandAcknowledgement from "../LandAcknowledgementPage";
import apiKey from "../../config";

const Location: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [indigenousLands, setIndigenousLands] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchIndigenousLands = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://native-land.ca/api/index.php?maps=territories&position=${latitude},${longitude}`
      );
      console.log("Indigenous Land data:", response);
      setIndigenousLands(response.data);
    } catch (error) {
      console.error("Error fetching Indigenous Land data:", error);
    }
  };

  const fetchCityData = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
      );
      console.log("City data:", response);
      if (response.data.results.length > 0) {
        const city = response.data.results[0].components.city;
        setCity(city);
      } else {
        setCity("City data not found");
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          fetchCityData(position.coords.latitude, position.coords.longitude);
          fetchIndigenousLands(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
    }
  }, []);

  return (
    <section className={styles.land}>
      <div className={styles.location}>
        {latitude && longitude ? (
          <div className={styles.content}>
            <p className={styles.locationHeading}>
              This page detects your current location and displays the
              coordinates. Additionally, the land acknowledgment section below
              helps you identify the traditional lands you are on, fostering
              awareness and respect.
            </p>

            <div className={styles.box}>
              <h2 className={styles.locationTitle}>Your Current Location:</h2>
              <div className={styles.locationInfo}>
                <p>
                  <strong>Latitude:</strong> {latitude}
                </p>
                <p>
                  <strong>Longitude:</strong> {longitude}
                </p>
                <p>
                  <strong>City:</strong> {city}
                </p>
              </div>
              <div className={styles.landAcknowledgmentContainer}>
                <LandAcknowledgement indigenousLands={indigenousLands} />
              </div>
            </div>
          </div>
        ) : error ? (
          <p className={`${styles.alert} ${styles.alertDanger}`}>Error: {error}</p>
        ) : (
          <p>Loading location...</p>
        )}
      </div>
    </section>
  );
};

export default Location;
