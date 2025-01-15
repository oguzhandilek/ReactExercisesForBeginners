import { useEffect, useState } from "react";
import styles from "../../styles/weatherApp/searchByCity.module.css";
export default function SearchByCity({ setCurrentJSONData,setLoading }) {
  const [city, setCity] = useState("Ankara");
  
  function handleChangeInput(e) {
    setCity(e.target.value);
  }
  useEffect(() => {
    const URL = "http://api.weatherapi.com/v1/";
    const API_KEY = "fe76c4c54a664449a8573313251401";

    const currentJSON = async () => {
      try {
        const response = await fetch(
          `${URL}current.json?key=${API_KEY}&q=${city}`
        );
        if (!response.ok) throw new Error("API çağrısı başarısız oldu");
        const data = await response.json();
        setCurrentJSONData(data);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };
    currentJSON();
  }, [city]);

  return (
    <div>
      <div className={styles.searchContainer}>
        <h1>🌦 Weather App</h1>
        <hr />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Serach by City..."
          value={city}
          onChange={(e) => handleChangeInput(e)}
        />
        <hr />
      </div>
    </div>
  );
}
