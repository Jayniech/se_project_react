import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { defaultCoordinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCloseClick = () => {
    setActiveModal("");
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseClick();
    }
  };

  useEffect(() => {
    getWeather(defaultCoordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);

    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseClick();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <Footer />
        </div>
        <ModalWithForm
          buttonText="Add garment"
          title="New garment"
          isOpen={activeModal === "add-garment"}
          handleCloseClick={handleCloseClick}
          handleOverlayClick={handleOverlayClick}
        >
          <label htmlFor="garment-name-input" className="modal__label">
            Name
            <input
              id="garment-name-input"
              type="text"
              className="modal__input"
              name="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageURL" className="modal__label">
            Image
            <input
              id="imageURL"
              type="url"
              className="modal__input"
              name="link"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-btns">
            <legend className="modal__radio-title">Select weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__radio-label modal__radio-label_active"
            >
              <input
                type="radio"
                id="hot"
                name="weather"
                value="hot"
                defaultChecked
                className="modal__radio-input"
              />
              Hot
            </label>
            <label htmlFor="warm" className="modal__radio-label">
              <input
                type="radio"
                id="warm"
                name="weather"
                value="warm"
                className="modal__radio-input"
              />
              Warm
            </label>
            <label htmlFor="cold" className="modal__radio-label">
              <input
                type="radio"
                id="cold"
                name="weather"
                value="cold"
                className="modal__radio-input"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          handleCloseClick={handleCloseClick}
          handleOverlayClick={handleOverlayClick}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
