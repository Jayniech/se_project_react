export const APIkey = "cb6beda06d42050ba5e2ee36a20566c8";

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

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];
