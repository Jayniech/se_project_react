import "./WeatherCard.css";
import Sunny from "../../assets/sunny_weather.svg";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75&deg;F</p>
      <img src={Sunny} alt="sunny" className="weather-card__img" />
    </section>
  );
}

export default WeatherCard;
