import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  let weatherOption;
  if (weatherOptions[weatherData?.condition] === undefined) {
    weatherOption =
      defaultWeatherOptions[weatherData?.isDay ? "day" : "night"]?.url;
  } else {
    weatherOption =
      weatherOptions[weatherData?.condition]?.[
        weatherData?.isDay ? "day" : "night"
      ]?.url;
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData?.temp[currentTemperatureUnit]}
        &deg;{currentTemperatureUnit}
      </p>
      <img
        src={weatherOption}
        alt={
          weatherOption
            ? `Card is showing ${weatherData?.isDay ? "day" : "night"}time ${
                weatherData?.condition
              } weather`
            : ""
        }
        className="weather-card__img"
      />
    </section>
  );
}

export default WeatherCard;
