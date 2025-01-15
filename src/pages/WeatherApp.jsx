import { useState } from "react";
import SearchByCity from "../components/weatherApp/SearchByCity";
import WeatherInformation from "../components/weatherApp/WeatherInformation";

export default function WeatherApp() {
    const [currentJSONData,setCurrentJSONData]=useState([])
    const [loading,setLoading]=useState(true)
    return <div>
        <SearchByCity setCurrentJSONData={setCurrentJSONData} setLoading={setLoading} />
        <WeatherInformation currentJSONData={currentJSONData} loading={loading}/>
    </div>
}