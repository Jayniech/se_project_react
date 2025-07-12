import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
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
      <p className="weather-card__temp">{weatherData?.temp?.F}&deg;F</p>
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
