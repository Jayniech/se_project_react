export const apiKey = "cb6beda06d42050ba5e2ee36a20566c8";

export const defaultCoordinates = {
  latitude: 41.8781,
  longitude: -87.6298,
};

export const weatherOptions = {
  clear: {
    day: {
      url: new URL("../assets/day_clear.svg", import.meta.url).href,
    },
    night: {
      url: new URL("../assets/night_clear.svg", import.meta.url).href,
    },
  },
  clouds: {
    day: {
      url: new URL("../assets/day_cloudy.svg", import.meta.url).href,
    },
    night: {
      url: new URL("../assets/night_cloudy.svg", import.meta.url).href,
    },
  },
  rain: {
    day: {
      url: new URL("../assets/day_rain.svg", import.meta.url).href,
    },
    night: {
      url: new URL("../assets/night_rain.svg", import.meta.url).href,
    },
  },
  thunderstorm: {
    day: {
      url: new URL("../assets/day_thunderstorm.svg", import.meta.url).href,
    },
    night: {
      url: new URL("../assets/night_thunderstorm.svg", import.meta.url).href,
    },
  },
  snow: {
    day: {
      url: new URL("../assets/day_snow.svg", import.meta.url).href,
    },
    night: {
      url: new URL("../assets/night_snow.svg", import.meta.url).href,
    },
  },
  fog: {
    day: {
      url: new URL("../assets/day_fog.svg", import.meta.url).href,
    },
    night: {
      url: new URL("../assets/night_fog.svg", import.meta.url).href,
    },
  },
};

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day_default.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night_default.svg", import.meta.url).href,
  },
};
