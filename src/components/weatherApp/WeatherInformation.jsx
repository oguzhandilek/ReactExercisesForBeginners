import styles from "../../styles/weatherApp/weatherInformation.module.css";
export default function WeatherInformation({ currentJSONData, loading }) {
  return loading == true ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.containerMain}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>{currentJSONData.location.name}</span>
        </div>

        <div className={styles.temp}>
          <img
            className={styles.tempIcon}
            src={currentJSONData.current.condition.icon}
            alt={currentJSONData.current.condition.text}
          />
          <span className={styles.temp_c}>{Number(currentJSONData.current.temp_c).toFixed()} °C</span>
   
          <p className={styles.conditionText}>{currentJSONData.current.condition.text}</p>
        </div>
        <div className={styles.details}>
        <p>Rüzgar: {currentJSONData.current.wind_kph} km/h {currentJSONData.current.wind_dir}</p>
        <p>Nem: %{currentJSONData.current.humidity}</p>
        <p>Görüş Mesafesi: {currentJSONData.current.vis_km} km</p>
        <p>Hissedilen: {currentJSONData.current.feelslike_c}°C</p>
        </div>
      </div>
    </div>
  );
}
