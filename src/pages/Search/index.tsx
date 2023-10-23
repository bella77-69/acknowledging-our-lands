import { useState, ChangeEvent } from 'react';
import styles from './search.module.css'
import apiKey from '../../config'


const index = () => {
    const [inputCity, setInputCity] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [indigenousLands, setIndigenousLands] = useState<any[]>([])

    const handleCityInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputCity(event.target.value);
      };

const handleSearch = async () => {
    try {
        const cityResponse = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${inputCity}&key=${apiKey}`
        );
        const cityData = await cityResponse.json();

        if (cityData.results.length > 0) {
            const { lat, lng } = cityData.results[0].geometry;
            const indigenousLandResponse = await fetch(
                `https://native-land.ca/api/index.php?maps=territories&position=${lat},${lng}`
            );
            const indigenousLandData = await indigenousLandResponse.json();
            setError(null);
            setIndigenousLands(indigenousLandData);
    } else {
        setError("City data not found");
        setIndigenousLands([]);
    }
} catch (error) {
    console.error("Error fetching city data:", error);
    setError('An error occured. Please try again.')
    setIndigenousLands([]);
}
}
    return (
        <div className={styles.search}>
            <div className={styles.searchPage}>
                <h1 className={styles.pageTitle}>Search for Indigenous Lands</h1>
                <div className={styles.citySearch}>
                    <input
                        type="text"
                        placeholder="Enter a city"
                        value={inputCity}
                        onChange={handleCityInputChange}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                {error && <p className={styles.error}>{error}</p>}
                {indigenousLands.length > 0 && (
                    <div className={styles.indigenousLands}>
                    <h2>Indigenous Lands of {inputCity}</h2>
                    <ul>
                      {indigenousLands.map((land) => (
                        <li key={land.properties.Name}>{land.properties.Name}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
        </div>
    );
};

export default index;