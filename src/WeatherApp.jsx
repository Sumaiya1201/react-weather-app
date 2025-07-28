import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 24.84,
    temp: 25.05,
    temp_min: 25.05,
    temp_max: 25.05,
    humidity: 47,
    weather: "haze"
  });

  return (
    <div>
      <h3>WEATHER APP</h3>
      <SearchBox updateInfo={setWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
