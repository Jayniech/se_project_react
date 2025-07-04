import { API_KEY, DEFAULT_COORDINATES } from "./constants";

function weatherApi() {
  console.log("Starting weather API call...");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${DEFAULT_COORDINATES.latitude}&lon=${DEFAULT_COORDINATES.longitude}&units=imperial&appid=${API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

weatherApi();
